const anemos = require("@ohayocorp/anemos");

const builder = new anemos.Builder();

const certManagerChartUrl = "https://charts.jetstack.io/charts/cert-manager-v1.19.1.tgz";
const certManagerReleaseName = "cert-manager";
const certManagerValues = `
  replicaCount: 2
  crds:
    enabled: true
  `;

builder.addHelmChart(certManagerChartUrl, certManagerReleaseName, certManagerValues);

builder.build();