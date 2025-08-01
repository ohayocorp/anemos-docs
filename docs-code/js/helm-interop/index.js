const anemos = require("@ohayocorp/anemos");

const builder = new anemos.Builder("1.31", anemos.KubernetesDistribution.Minikube, anemos.EnvironmentType.Development);

// You can also use a local file path instead of a URL such as: ./path/to/helloworld-0.2.1.tgz
builder.addHelmChart(
  "https://github.com/crowdsecurity/helm-charts/releases/download/helloworld-0.2.1/helloworld-0.2.1.tgz",
  "hello-world",
  `
  replicaCount: 2
  image:
    repository: hashicorp/http-echo
    tag: 1.0.0
  `);

builder.onModify(context => {
  for (const document of context.getDocumentGroup("hello-world").documents) {
    document.getLabels().remove("helm.sh/chart");
    document.setLabel("example", "value");
  }
});

builder.build();