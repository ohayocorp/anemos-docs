function add(builder, options) {
  options ??= {};

  const name = options.name ?? "my-package";
  const namespace = options.namespace ?? "default";
  const image = options.image ?? "nginx";

  builder.addDocument({
    documentGroup: name,
    path: `pod.yaml`,
    content: `
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
      `
  });
}

module.exports = {
  add
}