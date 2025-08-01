# Class: HelmOptions

Defined in: helm.d.ts:21

Options for generating Helm charts.

## Param

The name of the Helm release.

## Param

The namespace to use for the Helm release.

## Param

Optional values file to use for the Helm chart.

## Constructors

### Constructor

```ts
new HelmOptions(
   releaseName, 
   namespace, 
   values?): HelmOptions;
```

Defined in: helm.d.ts:22

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `releaseName` | `string` |
| `namespace` | `string` |
| `values?` | `string` |

#### Returns

`HelmOptions`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="namespace"></a> `namespace` | `string` | The namespace to use for the Helm release. | helm.d.ts:28 |
| <a id="releasename"></a> `releaseName` | `string` | The name of the Helm release. | helm.d.ts:25 |
| <a id="values"></a> `values?` | `string` | Optional values file to use for the Helm chart. | helm.d.ts:31 |
