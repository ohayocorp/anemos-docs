const anemos = require("@ohayocorp/anemos");

/**
 * Generates Pod and Service manifests for a simple application.
 * @param {anemos.Builder} builder - The Anemos builder instance.
 * @param {Object} options - The options for the package.
 */
function add(builder, options) {
  options ??= {};

  options.name ??= "simple-package";
  options.namespace ??= "default";
  options.image ??= "hashicorp/http-echo:1.0";

  // Use template literals for better readability. Anemos allows manifest generation via both
  // YAML strings and object literals.
  builder.addDocument({
    documentGroup: options.name,
    content: `
      apiVersion: "v1"
      kind: "Pod"
      metadata:
        name: ${options.name}
        namespace: ${options.namespace}
        labels:
          app: ${options.name}
      spec:
        containers:
          - name: "echo"
            image: "${options.image}"
            args:
              - "-text=Hello, Anemos!"
            ports:
              - name: "http"
                containerPort: 5678
                protocol: "TCP"
      `
  });

  // Use object-oriented approach for better development experience. Anemos provides
  // type-safe abstractions for Kubernetes resources.
  builder.addDocument({
    documentGroup: options.name,
    content: new anemos.k8s.Service({
      metadata: {
        name: options.name,
        namespace: options.namespace
      },
      spec: {
        type: "ClusterIP",
        ports: [
          {
            name: "http",
            port: 80,
            targetPort: "http",
            protocol: "TCP"
          }
        ]
      }
    })
  });
}

module.exports = {
  add
}