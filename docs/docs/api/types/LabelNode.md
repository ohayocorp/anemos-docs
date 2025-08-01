# Type Alias: LabelNode()

```ts
type LabelNode = (document) => Mapping | null;
```

Defined in: documentExtensions.d.ts:273

LabelNode is a function that takes a Document and ensures a Mapping for labels in the document.
It returns null if the labels are not available for the document. This is used to retrieve the
labels from different parts of a Kubernetes document.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `document` | [`Document`](../classes/Document.md) |

## Returns

[`Mapping`](../classes/Mapping.md) \| `null`
