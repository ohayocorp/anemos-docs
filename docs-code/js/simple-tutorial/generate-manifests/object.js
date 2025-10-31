const anemos = require("@ohayocorp/anemos");

const builder = new anemos.Builder();

builder.addDocument(new anemos.k8s.Service({
  metadata: {
    name: "example-app",
    namespace: "default"
  },
  spec: {
    ports: [
      {
        port: 80,
        targetPort: 80
      }
    ]
  }
}));

builder.build();