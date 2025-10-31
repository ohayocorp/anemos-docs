# Class: Options

Defined in: createReferencedNamespaces.d.ts:16

## Constructors

### Constructor

```ts
new Options(): Options;
```

#### Returns

`Options`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="predicate"></a> `predicate` | (`namespace`) => `boolean` | A predicate function to filter namespaces. Returns true if the namespace should be included. If not specified, all namespaces except the default Kubernetes namespaces will be included. | createReferencedNamespaces.d.ts:21 |
