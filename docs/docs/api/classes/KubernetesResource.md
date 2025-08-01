# Class: KubernetesResource

Defined in: kubernetesResourceInfo.d.ts:5

Represents a Kubernetes API resource, such as Pod, Deployment, Service, etc.
It contains the API version, kind, and whether the resource is namespaced.

## Constructors

### Constructor

```ts
new KubernetesResource(
   apiVersion, 
   kind, 
   isNamespaced): KubernetesResource;
```

Defined in: kubernetesResourceInfo.d.ts:6

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiVersion` | `string` |
| `kind` | `string` |
| `isNamespaced` | `boolean` |

#### Returns

`KubernetesResource`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="apiversion"></a> `apiVersion` | `string` | The API version of the resource, e.g. "v1", "apps/v1". | kubernetesResourceInfo.d.ts:9 |
| <a id="isnamespaced"></a> `isNamespaced` | `boolean` | Indicates whether the resource is namespaced (true) or cluster-scoped (false). | kubernetesResourceInfo.d.ts:15 |
| <a id="kind"></a> `kind` | `string` | The kind of the resource, e.g. "Pod", "Deployment". | kubernetesResourceInfo.d.ts:12 |
