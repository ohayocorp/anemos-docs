# Class: Options

Defined in: components/setAnnotations.d.ts:7

## Constructors

### Constructor

```ts
new Options(annotations, predicate?): Options;
```

Defined in: components/setAnnotations.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `annotations` | `Record`\<`string`, `string`\> |
| `predicate?` | [`Predicate`](../types/setAnnotations.Predicate.md) |

#### Returns

`Options`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="annotations"></a> `annotations` | `Record`\<`string`, `string`\> | Annotations to set in documents. | components/setAnnotations.d.ts:9 |
| <a id="predicate"></a> `predicate?` | [`Predicate`](../types/setAnnotations.Predicate.md) | Predicate to filter which documents to modify. All documents will be modified if not specified. | components/setAnnotations.d.ts:13 |
