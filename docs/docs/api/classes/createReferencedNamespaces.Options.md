# Class: Options

Defined in: components/createReferencedNamespaces.d.ts:5

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
| <a id="documentgroup"></a> `documentGroup?` | `string` | Path of the document group in which created namespaces will belong. Default value is 'namespaces'. | components/createReferencedNamespaces.d.ts:7 |
| <a id="predicate"></a> `predicate?` | (`namespace`) => `boolean` | A predicate function to filter namespaces. Returns true if the namespace should be included. If not specified, all namespaces except the default Kubernetes namespaces will be included. | components/createReferencedNamespaces.d.ts:12 |
