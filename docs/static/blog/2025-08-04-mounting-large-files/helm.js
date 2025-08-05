const anemos = require("@ohayocorp/anemos");
const mountSidecarData = require("http://localhost:3000/blog/2025-08-04-mounting-large-files/mountSidecarData.js");

const builder = new anemos.Builder("1.31", anemos.KubernetesDistribution.Minikube, anemos.EnvironmentType.Development);

builder.addHelmChart(
  "https://charts.kubesphere.io/main/nginx-1.3.5.tgz",
  "example");

mountSidecarData.apply(builder, {
  documentName: "example/deployment.yaml",
  mainContainer: {
    mountPath: "/mnt/models",
    command: `
      echo "Listing files in /mnt/models/"
      ls -alh /mnt/models/

      nginx -g 'daemon off;'
      `
  },
  sidecar: {
    image: "redhat/granite-3-1b-a400m-instruct:1.0",
    dataPath: "/models"
  }
});

builder.build();