# Class: Options

Defined in: components/overrideEnvironmentVariables.d.ts:8

## Constructors

### Constructor

```ts
new Options(environmentVariables, predicate?): Options;
```

Defined in: components/overrideEnvironmentVariables.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `environmentVariables` | `Record`\<`string`, `string`\> |
| `predicate?` | [`Predicate`](../types/overrideEnvironmentVariables.Predicate.md) |

#### Returns

`Options`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="environmentvariables"></a> `environmentVariables` | `Record`\<`string`, `string`\> | Environment variables to override in workloads. | components/overrideEnvironmentVariables.d.ts:10 |
| <a id="predicate"></a> `predicate?` | [`Predicate`](../types/overrideEnvironmentVariables.Predicate.md) | Predicate to filter which documents and containers to modify. All containers of all workload documents will be modified if not specified. | components/overrideEnvironmentVariables.d.ts:15 |
