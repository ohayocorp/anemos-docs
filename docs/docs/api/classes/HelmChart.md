# Class: HelmChart

Defined in: helm.d.ts:40

Represents a Helm chart that can be used to generate Kubernetes documents.
It can be initialized with a file path or a byte array containing the chart data.
The [HelmChart.generate](#generate) method creates documents from the Helm chart using
the provided context and options.

## Constructors

### Constructor

```ts
new HelmChart(path): HelmChart;
```

Defined in: helm.d.ts:41

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`HelmChart`

### Constructor

```ts
new HelmChart(data): HelmChart;
```

Defined in: helm.d.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data` | `Uint8Array` |

#### Returns

`HelmChart`

## Methods

### generate()

```ts
generate(context, options): DocumentGroup;
```

Defined in: helm.d.ts:45

Creates a document group from the Helm chart using the provided options.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`BuildContext`](BuildContext.md) |
| `options` | [`HelmOptions`](HelmOptions.md) |

#### Returns

[`DocumentGroup`](DocumentGroup.md)
