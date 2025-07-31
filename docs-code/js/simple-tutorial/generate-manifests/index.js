const anemos = require("@ohayocorp/anemos");

const builder = new anemos.Builder("1.31", anemos.KubernetesDistribution.Minikube, anemos.EnvironmentType.Development);

builder.addDocument(
  `pod.yaml`,
  `
  apiVersion: v1
  kind: Pod
  metadata:
    name: example-app
    namespace: default
  spec:
    containers:
      - name: app
        image: nginx
        ports:
          - containerPort: 80
  `);

builder.build();