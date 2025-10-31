# Class: KubernetesCluster

Defined in: builderOptions.d.ts:38

Contains information about the target Kubernetes cluster.

## Constructors

### Constructor

```ts
new KubernetesCluster(
   version, 
   distribution, 
   additionalResources?): KubernetesCluster;
```

Defined in: builderOptions.d.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | [`Version`](Version.md) |
| `distribution` | [`KubernetesDistribution`](../enums/KubernetesDistribution.md) |
| `additionalResources?` | [`KubernetesResource`](KubernetesResource.md)[] |

#### Returns

`KubernetesCluster`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="additionalresources"></a> `additionalResources?` | [`KubernetesResource`](KubernetesResource.md)[] | builderOptions.d.ts:43 |
| <a id="distribution"></a> `distribution` | [`KubernetesDistribution`](../enums/KubernetesDistribution.md) | builderOptions.d.ts:41 |
| <a id="version"></a> `version` | [`Version`](Version.md) | builderOptions.d.ts:42 |
