# Class: Document

Defined in: document.d.ts:8

Document corresponds to a single YAML document. Note that even though a YAML file can contain multiple documents,
each one of these documents is represented by a separate Document object.

## Indexable

```ts
[customProperties: string]: any
```

This declaration allows setting and getting custom properties on the document without TypeScript
compiler errors.

## Constructors

### Constructor

```ts
new Document(): Document;
```

Defined in: document.d.ts:10

Creates a new empty document.

#### Returns

`Document`

### Constructor

```ts
new Document(content): Document;
```

Defined in: document.d.ts:13

Creates a new document with the given content. Content must be a valid YAML string or a JavaScript object.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `content` | `string` \| `Object` |

#### Returns

`Document`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="apiversion"></a> `apiVersion?` | `string` | The API version of the document. | document.d.ts:42 |
| <a id="group"></a> `group?` | [`DocumentGroup`](DocumentGroup.md) | The document group this document belongs to. | document.d.ts:22 |
| <a id="kind"></a> `kind?` | `string` | The kind of the document. | document.d.ts:47 |
| <a id="metadata"></a> `metadata?` | `ObjectMeta` | The metadata of the document. | document.d.ts:52 |

## Methods

### fullPath()

```ts
fullPath(): string;
```

Defined in: document.d.ts:31

Returns the file path to write the document into. Adds group name as base directory if it is not null.

#### Returns

`string`

***

### getPath()

```ts
getPath(): string;
```

Defined in: document.d.ts:25

Returns the file path to the document. May contain multiple segments separated by slashes.

#### Returns

`string`

***

### provisionAfter()

```ts
provisionAfter(other): void;
```

Defined in: document.d.ts:34

Apply and wait for this document after the given document. Documents must be in the same group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Document` |

#### Returns

`void`

***

### provisionBefore()

```ts
provisionBefore(other): void;
```

Defined in: document.d.ts:37

Apply and wait for this document before the given document. Documents must be in the same group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Document` |

#### Returns

`void`

***

### setPath()

```ts
setPath(path): void;
```

Defined in: document.d.ts:28

Sets the file path to the document. May contain multiple segments separated by slashes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`void`
