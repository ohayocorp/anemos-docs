# Class: Options

Defined in: components/setIngressClassName.d.ts:7

## Constructors

### Constructor

```ts
new Options(ingressClassName, predicate?): Options;
```

Defined in: components/setIngressClassName.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ingressClassName` | `string` |
| `predicate?` | [`Predicate`](../types/setIngressClassName.Predicate.md) |

#### Returns

`Options`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="ingressclassname"></a> `ingressClassName` | `string` | Name of the Ingress class to be set on Ingress resources. | components/setIngressClassName.d.ts:9 |
| <a id="predicate"></a> `predicate?` | [`Predicate`](../types/setIngressClassName.Predicate.md) | Predicate to filter which documents to modify. All ingress documents will be modified if not specified. | components/setIngressClassName.d.ts:11 |
