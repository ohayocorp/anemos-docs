const anemos = require('@ohayocorp/anemos');
const helloWorld = require("http://localhost:3000/examples/hello-world.js");

const builder = new anemos.Builder();

helloWorld.add(builder);

builder.onModify(context => {
  context
    .getDocument("anemos-hello-world/deployment.yaml")
    .setLabel("deployment-specific-label", "example-deployment");

  for (const document of context.getAllDocuments()) {
    document.setLabel("label-for-all-documents", "example");
  }
});

builder.build();