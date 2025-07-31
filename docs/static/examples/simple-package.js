function add(builder, options) {
  options = options ?? {};

  const name = options.name ?? "simple-package";
  const namespace = options.namespace ?? "default";
  const image = options.image ?? "hashicorp/http-echo:1.0";

  // Use template literals for better readability.
  builder.addDocument(
    name,
    `pod.yaml`,
    `
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

  // Use object-oriented approach for better development experience.
  builder.addDocument(
    name,
    `service.yaml`,
    {
      apiVersion: "v1",
      kind: "Service",
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
    });
}

module.exports = {
  add
}