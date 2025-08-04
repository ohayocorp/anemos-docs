const anemos = require("@ohayocorp/anemos");

/**
 * Options for mounting data to the main container in a Kubernetes workload.
 */
class MainContainerOptions {
    /**
     * The name of the main container to which the sidecar data will be mounted. If not provided,
     * defaults to the first container in the workload.
     * @type {string}
     */
    name;

    /**
     * The path where the sidecar data will be mounted in the main container. This property is required.
     * @type {string}
     */
    mountPath;

    /**
     * Command to run in the main container after the sidecar data is mounted.
     * This property is required.
     * @type {string}
     */
    command;
}

/**
 * Options for configuring a sidecar for mounting data to another container in a Kubernetes workload.
 */
class SidecarOptions {
    /**
     * The image that contains the sidecar data. This property is required.
     * @type {string}
     */
    image;

    /**
     * The path to the sidecar data that will be mounted to the main container. This property is required.
     * @type {string}
     */
    dataPath;
}

/**
 * Options for mounting sidecar data in a Kubernetes workload.
 * This class defines the properties required to configure the sidecar data mount.
 */
class Options {
    /**
     * The name of the workload to which the sidecar data will be mounted. This property is required.
     * @type {string}
     */
    documentName;

    /**
     * Options for the main container where the sidecar data will be mounted. This property is required.
     * @type {MainContainerOptions}
     */
    mainContainer;

    /**
     * Options for the sidecar container. This property is required.
     * @type {SidecarOptions}
     */
    sidecar;
}

/**
 * Modifies a workload by mounting sidecar data into the specified main container during the
 * modify step. It expects that the main container is already defined in the workload.
 * @param {anemos.Builder} builder
 * @param {Options} options
 * @returns {void}
 */
function apply(builder, options) {
    builder.onModify((context) => {
        const workload = context.getDocument(options.documentName);

        workload.getWorkloadSpec().set("shareProcessNamespace", true);

        const mainContainer = getMainContainer(workload, options);
        const dataContainer = getDataContainer(options);

        ensureCapabilities(mainContainer);
        setCommand(mainContainer, options);

        // Ensure that the data container is defined before the main container.
        workload.getContainers().insert(0, dataContainer);
    });
}

/**
 * Retrieves the main container from the workload based on the provided options.
 * @param {anemos.Document} workload - The workload document.
 * @param {Options} options - The options for mounting sidecar data.
 * @returns {anemos.Mapping} - The main container.
 */
function getMainContainer(workload, options) {
    let mainContainer = workload.getContainer(0);

    if (options.mainContainer.name) {
        mainContainer = workload.getContainer(options.mainContainer.name);
    }

    if (!mainContainer) {
        throw new Error(`Main container not found in the workload.`);
    }

    return mainContainer;
}

/**
 * Ensures that the container has the necessary capabilities to access data under /proc.
 * @param {anemos.Mapping} container - The container to check.
 */
function ensureCapabilities(container) {
    const add = container.ensureSequence(["securityContext", "capabilities", "add"]);
    if (add.contains("SYS_PTRACE")) {
        return;
    }

    add.add("SYS_PTRACE");
}

/**
 * Creates a data container mapping that will be used to mount sidecar data.
 * @param {Options} options Options for the sidecar data container.
 * @returns {anemos.Mapping} - A mapping representing the data container.
 */
function getDataContainer(options) {
    return anemos.parseMapping(`
        name: data-container
        image: ${options.sidecar.image}
        command:
          - sleep
          - infinity
        env:
          - name: IS_DATA_CONTAINER
            value: "true"
        lifecycle:
          postStart:
            exec:
              command:
                - "echo"
    `);
}

/**
 * Sets the command for the main container.
 * @param {anemos.Mapping} mainContainer - The main container to set the command for.
 * @param {Options} options - The options containing the command to set.
 */
function setCommand(mainContainer, options) {
    const command = mainContainer.ensureSequence("command");

    let script = anemos.dedent(`
      dataContainerPid=$(grep -a -l IS_DATA_CONTAINER=true /proc/*/environ 2>/dev/null | awk -F/ '{print $3}')

      echo "Data Container PID: $dataContainerPid"

      source="/proc/$dataContainerPid/root/${options.sidecar.dataPath.replace(/^\//g, '')}"
      target="${options.mainContainer.mountPath}"

      mkdir -p $(dirname "$target")
      ln -s "$source" "$target"

      echo "Linked $source to $target"
      `);

    script += anemos.dedent(options.mainContainer.command);

    // Clear the existing command if any.
    command.clear();
    command.add(["sh", "-c", script]);
}

module.exports = {
    Options,
    apply
}