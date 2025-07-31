function add(builder, options) {
  options = options ?? {};

  const name = options.name ?? "package";
  const namespace = options.namespace ?? "default";
  const image = options.image ?? "nginx";

  builder.addDocument(
    name,
    `pod.yaml`,
    `
    apiVersion: "v1"
    kind: "Pod"
    metadata:
      name: ${name}
      namespace: ${namespace}
    spec:
      containers:
        - name: "echo"
          image: "${image}"
          ports:
            - name: "http"
              containerPort: 80
              protocol: "TCP"
    `);

  // Use an object to define Service.
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
        ports: [
          {
            name: "http",
            port: 80,
            targetPort: "http"
          }
        ]
      }
    });
}

module.exports = {
  add
}