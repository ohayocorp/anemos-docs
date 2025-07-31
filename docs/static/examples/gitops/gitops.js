// Build with: `anemos build index.js`
const anemos = require('@ohayocorp/anemos');
const helloWorld = require("http://localhost:3000/examples/hello-world.js");

const builder = new anemos.Builder("1.31", anemos.KubernetesDistribution.Minikube, anemos.EnvironmentType.Development);

helloWorld.add(builder, {
  ingress: {
    host: "anemos-hello-world.local",
  }
});

builder.build();