const anemos = require("@ohayocorp/anemos");

const builder = new anemos.Builder("1.31", anemos.KubernetesDistribution.Minikube, anemos.EnvironmentType.Development);

// highlight-start
const name = "example-app";
const namespace = "default";
const image = "nginx";
// highlight-end

builder.addDocument(
  `pod.yaml`,
  `
  apiVersion: v1
  kind: Pod
  metadata:
// highlight-next-line
    name: ${name}
// highlight-next-line
    namespace: ${namespace}
  spec:
    containers:
      - name: app
// highlight-next-line
        image: ${image}
        ports:
          - containerPort: 80
  `);

builder.build();