const anemos = require('@ohayocorp/anemos');
const helloWorld = require("http://localhost:3000/examples/hello-world.js");
const simplePackage = require("http://localhost:3000/examples/simple-package.js");

const builder = new anemos.Builder("1.31", anemos.KubernetesDistribution.Minikube, anemos.EnvironmentType.Development);

helloWorld.add(builder);
simplePackage.add(builder);

builder.build();