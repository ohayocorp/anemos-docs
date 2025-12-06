const anemos = require("@ohayocorp/anemos");
const thisScriptDirectory = anemos.file.currentScriptDirectory();

function runCase(path) {
  console.log(`Running test case: ${path}\n`);

  // Set the base output path to the test case directory so that
  // the output files are created in the correct place.
  process.env.ANEMOS_OUTPUT_PATH = `${thisScriptDirectory}/${path}/output`;
  require(`./${path}`);
}

runCase("execution-order");
runCase("helm-interop");

runCase("simple-tutorial/generate-manifests");
runCase("simple-tutorial/generate-manifests/on-modify");
runCase("simple-tutorial/generate-manifests/helm-chart");
runCase("simple-tutorial/generate-packages");

runCase("tutorial/generating-kubernetes-manifests");
runCase("tutorial/components-and-actions");
runCase("tutorial/components-and-actions/componentEmpty");
runCase("tutorial/component-options");
runCase("tutorial/source-control");
runCase("tutorial/generating-package");
runCase("tutorial/package-management");