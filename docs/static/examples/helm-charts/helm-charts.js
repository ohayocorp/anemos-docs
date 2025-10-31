const anemos = require('@ohayocorp/anemos');

const builder = new anemos.Builder();

// Use YAML strings for Helm values.
builder.addHelmChart(
  "https://github.com/crowdsecurity/helm-charts/releases/download/helloworld-0.2.1/helloworld-0.2.1.tgz",
  "helloworld",
  `
  image:
    tag: "1.0"
  replicaCount: 2
  `);

// Use objects for Helm values.
builder.addHelmChart(
  "https://charts.softonic.io/charts/hello-world-app-1.2.2.tgz",
  "another-helloworld",
  {
    image: {
      tag: "1.0"
    },
    replicaCount: 2
  });

builder.build();