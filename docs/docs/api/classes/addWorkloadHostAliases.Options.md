# Class: Options

Defined in: components/addWorkloadHostAliases.d.ts:9

## Constructors

### Constructor

```ts
new Options(entries, predicate?): Options;
```

Defined in: components/addWorkloadHostAliases.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entries` | `HostAlias`[] |
| `predicate?` | [`Predicate`](../types/addWorkloadHostAliases.Predicate.md) |

#### Returns

`Options`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="entries"></a> `entries` | `HostAlias`[] | List of host aliases to be added to the pod spec of workload resources. | components/addWorkloadHostAliases.d.ts:11 |
| <a id="predicate"></a> `predicate?` | [`Predicate`](../types/addWorkloadHostAliases.Predicate.md) | Predicate to filter which documents to modify. All workload documents will be modified if not specified. | components/addWorkloadHostAliases.d.ts:13 |
