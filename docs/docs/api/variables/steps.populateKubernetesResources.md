# Variable: populateKubernetesResources

```ts
const populateKubernetesResources: Step;
```

Defined in: step.d.ts:20

Use this step to populate [KubernetesResource](../classes/KubernetesResource.md) resources so that other components can rely on this
information to modify existing resources or generate extra resources.
E.g. when ServiceMonitor is added via this func, other components can generate ServiceMonitor resources
to monitor the services.
