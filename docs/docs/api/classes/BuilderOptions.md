# Class: BuilderOptions

Defined in: builderOptions.d.ts:6

Contains common options that are used by all components.

## Constructors

### Constructor

```ts
new BuilderOptions(
   kubernetesCluster, 
   environment, 
   outputConfiguration?): BuilderOptions;
```

Defined in: builderOptions.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `kubernetesCluster` | [`KubernetesCluster`](KubernetesCluster.md) |
| `environment` | [`Environment`](Environment.md) |
| `outputConfiguration?` | [`OutputConfiguration`](OutputConfiguration.md) |

#### Returns

`BuilderOptions`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="environment"></a> `environment` | [`Environment`](Environment.md) | builderOptions.d.ts:9 |
| <a id="kubernetescluster"></a> `kubernetesCluster` | [`KubernetesCluster`](KubernetesCluster.md) | builderOptions.d.ts:10 |
| <a id="outputconfiguration"></a> `outputConfiguration?` | [`OutputConfiguration`](OutputConfiguration.md) | builderOptions.d.ts:11 |
