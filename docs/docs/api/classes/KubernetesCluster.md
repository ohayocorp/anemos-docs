# Class: KubernetesCluster

Defined in: builderOptions.d.ts:29

Contains information about the target Kubernetes cluster.

## Constructors

### Constructor

```ts
new KubernetesCluster(
   version, 
   distribution, 
   additionalResources?): KubernetesCluster;
```

Defined in: builderOptions.d.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | [`Version`](Version.md) |
| `distribution` | `string` |
| `additionalResources?` | [`KubernetesResource`](KubernetesResource.md)[] |

#### Returns

`KubernetesCluster`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="additionalresources"></a> `additionalResources?` | [`KubernetesResource`](KubernetesResource.md)[] | builderOptions.d.ts:34 |
| <a id="distribution"></a> `distribution` | `string` | builderOptions.d.ts:32 |
| <a id="version"></a> `version` | [`Version`](Version.md) | builderOptions.d.ts:33 |
