# Class: Options

Defined in: components/addWorkloadImagePullSecretNames.d.ts:8

## Constructors

### Constructor

```ts
new Options(imagePullSecretNames, predicate?): Options;
```

Defined in: components/addWorkloadImagePullSecretNames.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `imagePullSecretNames` | `string`[] |
| `predicate?` | [`Predicate`](../types/addWorkloadImagePullSecretNames.Predicate.md) |

#### Returns

`Options`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="imagepullsecretnames"></a> `imagePullSecretNames` | `string`[] | Name of the image pull secret to add to workloads. | components/addWorkloadImagePullSecretNames.d.ts:10 |
| <a id="predicate"></a> `predicate?` | [`Predicate`](../types/addWorkloadImagePullSecretNames.Predicate.md) | Predicate to filter which documents to modify. All workload documents will be modified if not specified. | components/addWorkloadImagePullSecretNames.d.ts:12 |
