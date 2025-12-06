# Class: Options

Defined in: components/setLabels.d.ts:7

## Constructors

### Constructor

```ts
new Options(labels, predicate?): Options;
```

Defined in: components/setLabels.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `labels` | `Record`\<`string`, `string`\> |
| `predicate?` | [`Predicate`](../types/setLabels.Predicate.md) |

#### Returns

`Options`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="labels"></a> `labels` | `Record`\<`string`, `string`\> | Labels to set in documents. | components/setLabels.d.ts:9 |
| <a id="predicate"></a> `predicate?` | [`Predicate`](../types/setLabels.Predicate.md) | Predicate to filter which documents to modify. All documents will be modified if not specified. | components/setLabels.d.ts:13 |
