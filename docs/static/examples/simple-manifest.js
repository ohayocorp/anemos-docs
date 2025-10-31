const anemos = require("@ohayocorp/anemos");

const builder = new anemos.Builder();

const name = "app";
const namespace = "default";
const image = "hashicorp/http-echo:1.0";

// Use template literals for better readability. Anemos allows manifest generation via both
// YAML strings and object literals.
builder.addDocument(`
  apiVersion: "v1"
  kind: "Pod"
  metadata:
    name: ${name}
    namespace: ${namespace}
    labels:
      app: ${name}
  spec:
    containers:
      - name: "echo"
        image: "${image}"
        args:
          - "-text=Hello, Anemos!"
        ports:
          - name: "http"
            containerPort: 5678
            protocol: "TCP"
  `);

// Use object-oriented approach for better development experience. Anemos provides
// type-safe abstractions for Kubernetes resources.
builder.addDocument(new anemos.k8s.Service({
  metadata: {
    name: name,
    namespace: namespace
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
}));

builder.build();