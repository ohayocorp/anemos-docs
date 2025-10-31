const anemos = require("@ohayocorp/anemos");

const builder = new anemos.Builder();

builder.addDocument(`
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

// highlight-start
builder.onModify((context) => {
  // Add a label to the Pod.
  context
    .getDocument("pod-example-app.yaml")
    .setLabel("app", "example-app");
});
// highlight-end

builder.build();