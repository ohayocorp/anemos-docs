# Class: DocumentGroup

Defined in: documentGroup.d.ts:10

Container for multiple [Document](Document.md) instances. It can also contain multiple
[AdditionalFile](AdditionalFile.md) objects that generates additional files beside the documents.

## Constructors

### Constructor

```ts
new DocumentGroup(path): DocumentGroup;
```

Defined in: documentGroup.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`DocumentGroup`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="additionalfiles"></a> `additionalFiles` | [`AdditionalFile`](AdditionalFile.md)[] | Additional files in this group. Don't modify this array directly. Use [DocumentGroup.addAdditionalFile](#addadditionalfile) instead. | documentGroup.d.ts:23 |
| <a id="applyprovisioner"></a> `applyProvisioner?` | [`Provisioner`](Provisioner.md) | The provisioner that applies the documents in this group. | documentGroup.d.ts:26 |
| <a id="documents"></a> `documents` | [`Document`](Document.md)[] | Documents in this group. Don't modify this array directly. Use [DocumentGroup.addDocument](#adddocument) and [DocumentGroup.removeDocument](#removedocument) instead. | documentGroup.d.ts:20 |
| <a id="path"></a> `path` | `string` | The path of the document group. | documentGroup.d.ts:14 |
| <a id="waitprovisioner"></a> `waitProvisioner?` | [`Provisioner`](Provisioner.md) | The provisioner that waits for the documents in this group to be ready. | documentGroup.d.ts:29 |

## Methods

### addAdditionalFile()

```ts
addAdditionalFile(additionalFile): void;
```

Defined in: documentGroup.d.ts:38

Adds the given additional file to this group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `additionalFile` | [`AdditionalFile`](AdditionalFile.md) |

#### Returns

`void`

***

### addDocument()

```ts
addDocument(document): void;
```

Defined in: documentGroup.d.ts:32

Adds the given document to this group and sets its group field to this group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `document` | [`Document`](Document.md) |

#### Returns

`void`

***

### addDocuments()

```ts
addDocuments(documents): void;
```

Defined in: documentGroup.d.ts:35

Adds the given documents to this group and sets their group field to this group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documents` | [`Document`](Document.md)[] |

#### Returns

`void`

***

### getComponent()

```ts
getComponent(): Component;
```

Defined in: documentGroup.d.ts:44

Returns the component that created this document group. Component is set when
the document group is added to the builder context.

#### Returns

[`Component`](Component.md)

***

### getDocument()

#### Call Signature

```ts
getDocument(path): Document;
```

Defined in: documentGroup.d.ts:47

Returns the first document that has the given path.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

[`Document`](Document.md)

#### Call Signature

```ts
getDocument(filter): Document;
```

Defined in: documentGroup.d.ts:50

Returns the first document that satisfies the given predicate.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | (`document`) => `boolean` |

##### Returns

[`Document`](Document.md)

***

### moveTo()

```ts
moveTo(group): void;
```

Defined in: documentGroup.d.ts:56

Removes all documents and additional files from this group and adds them to the given group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `group` | `DocumentGroup` |

#### Returns

`void`

***

### provisionAfter()

```ts
provisionAfter(other): void;
```

Defined in: documentGroup.d.ts:65

Provisions the documents in this group after the documents in the given group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `DocumentGroup` |

#### Returns

`void`

***

### provisionBefore()

```ts
provisionBefore(other): void;
```

Defined in: documentGroup.d.ts:68

Provisions the documents in this group before the documents in the given group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `DocumentGroup` |

#### Returns

`void`

***

### removeAdditionalFile()

```ts
removeAdditionalFile(additionalFile): void;
```

Defined in: documentGroup.d.ts:62

Removes the given additional file from this group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `additionalFile` | [`AdditionalFile`](AdditionalFile.md) |

#### Returns

`void`

***

### removeDocument()

```ts
removeDocument(document): void;
```

Defined in: documentGroup.d.ts:59

Removes the given document from this group and sets its group field to null.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `document` | [`Document`](Document.md) |

#### Returns

`void`

***

### sortedDocuments()

```ts
sortedDocuments(): Document[];
```

Defined in: documentGroup.d.ts:53

Returns the documents in this group sorted by their path.

#### Returns

[`Document`](Document.md)[]
