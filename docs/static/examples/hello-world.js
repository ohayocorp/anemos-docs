function add(builder, options) {
  options = options ?? {};

  const name = options.name ?? "anemos-hello-world";
  const namespace = options.namespace ?? "default";
  const image = options.image ?? "hashicorp/http-echo:1.0";
  const replicaCount = options.replicaCount ?? 1;
  const containerPort = options.containerPort ?? 5678;

  const service = options.service ?? {};
  service.type ??= "ClusterIP";
  service.port ??= 80;

  const ingress = options.ingress;

  if (ingress) {
    if (!ingress.host) {
      throw new Error("Ingress host is required");
    }

    ingress.path ??= "/";
    ingress.pathType ??= "Prefix";
  }

  builder.addDocument({
    documentGroup: name,
    path: `deployment.yaml`,
    content: `
      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: ${name}
        namespace: ${namespace}
      spec:
        replicas: ${replicaCount}
        selector:
          matchLabels:
            app: ${name}
        template:
          metadata:
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
                    containerPort: ${containerPort}
                    protocol: "TCP"
                livenessProbe:
                  httpGet:
                    path: /
                    port: ${containerPort}
                readinessProbe:
                  httpGet:
                    path: /
                    port: ${containerPort}
      `
  });

  builder.addDocument({
    documentGroup: name,
    path: `service.yaml`,
    content: `
      apiVersion: v1
      kind: Service
      metadata:
        name: ${name}
        namespace: ${namespace}
      spec:
        type: ${service.type}
        ports:
          - name: http
            port: ${service.port}
            targetPort: "http"
            protocol: TCP
      `
  });

  if (ingress) {
    builder.addDocument({
      documentGroup: name,
      path: `ingress.yaml`,
      content: `
        apiVersion: networking.k8s.io/v1
        kind: Ingress
        metadata:
          name: ${name}
          namespace: ${namespace}
        spec:
          rules:
            - host: ${ingress.host}
              http:
                paths:
                  - path: ${ingress.path}
                    pathType: ${ingress.pathType}
                    backend:
                      service:
                        name: ${name}
                        port:
                          number: ${service.port}
        `
    });
  }
}

module.exports = {
  add
}