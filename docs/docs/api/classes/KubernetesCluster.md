# Class: KubernetesCluster

Defined in: builderOptions.d.ts:37

Contains information about the target Kubernetes cluster.

## Constructors

### Constructor

```ts
new KubernetesCluster(
   version, 
   distribution, 
   additionalResources?): KubernetesCluster;
```

Defined in: builderOptions.d.ts:38

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
| <a id="additionalresources"></a> `additionalResources?` | [`KubernetesResource`](KubernetesResource.md)[] | builderOptions.d.ts:42 |
| <a id="distribution"></a> `distribution` | [`KubernetesDistribution`](../enums/KubernetesDistribution.md) | builderOptions.d.ts:40 |
| <a id="version"></a> `version` | [`Version`](Version.md) | builderOptions.d.ts:41 |
