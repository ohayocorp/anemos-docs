# Class: BuildContext

Defined in: buildContext.d.ts:14

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="builderoptions"></a> `builderOptions` | [`BuilderOptions`](BuilderOptions.md) | Common options that are used by the builder components. | buildContext.d.ts:18 |
| <a id="customdata"></a> `customData` | `Record`\<`string`, `any`\> | Custom data that can be used by the builder components. | buildContext.d.ts:24 |
| <a id="kubernetesresourceinfo"></a> `kubernetesResourceInfo` | [`KubernetesResourceInfo`](KubernetesResourceInfo.md) | Contains information about the API resources defined in the target cluster. | buildContext.d.ts:21 |

## Methods

### addAdditionalFile()

#### Call Signature

```ts
addAdditionalFile(additionalFile): void;
```

Defined in: buildContext.d.ts:51

Adds given additional file to a [DocumentGroup](DocumentGroup.md) named "".

Checks for an existing [DocumentGroup](DocumentGroup.md) with name "" and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `additionalFile` | [`AdditionalFile`](AdditionalFile.md) |

##### Returns

`void`

#### Call Signature

```ts
addAdditionalFile(documentGroupPath, additionalFile): void;
```

Defined in: buildContext.d.ts:59

Adds the given additional file to a [DocumentGroup](DocumentGroup.md) with the given name during the [steps.generateResources](../variables/steps.generateResources.md) step.

Checks for an existing [DocumentGroup](DocumentGroup.md) with the same name and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroupPath` | `string` |
| `additionalFile` | [`AdditionalFile`](AdditionalFile.md) |

##### Returns

`void`

***

### addDocument()

#### Call Signature

```ts
addDocument(document): void;
```

Defined in: buildContext.d.ts:32

Adds the given document to a [DocumentGroup](DocumentGroup.md) named "".

Checks for an existing [DocumentGroup](DocumentGroup.md) with name "" and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `document` | [`Document`](Document.md) |

##### Returns

`void`

#### Call Signature

```ts
addDocument(options): void;
```

Defined in: buildContext.d.ts:40

Adds a new document using the provided options during the [steps.generateResources](../variables/steps.generateResources.md) step.

Checks for an existing [DocumentGroup](DocumentGroup.md) with the same name as `options.documentGroup` and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AddDocumentOptions`](AddDocumentOptions.md) |

##### Returns

`void`

***

### addDocumentGroup()

```ts
addDocumentGroup(documentGroup): void;
```

Defined in: buildContext.d.ts:43

Adds given group to the document groups list.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroup` | [`DocumentGroup`](DocumentGroup.md) |

#### Returns

`void`

***

### getAllDocuments()

```ts
getAllDocuments(): Document[];
```

Defined in: buildContext.d.ts:71

Returns all documents inside all document groups.

#### Returns

[`Document`](Document.md)[]

***

### getAllDocumentsSorted()

```ts
getAllDocumentsSorted(): Document[];
```

Defined in: buildContext.d.ts:74

Returns all documents inside all document groups sorted by their file path.

#### Returns

[`Document`](Document.md)[]

***

### getDocument()

#### Call Signature

```ts
getDocument(predicate): Document;
```

Defined in: buildContext.d.ts:77

Returns the first document that satisfies the given predicate. Returns null if no document is found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `predicate` | (`document`) => `boolean` |

##### Returns

[`Document`](Document.md)

#### Call Signature

```ts
getDocument(path): Document;
```

Defined in: buildContext.d.ts:80

Returns the first document that has the given path. Returns null if no document is found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

##### Returns

[`Document`](Document.md)

***

### getDocumentGroup()

```ts
getDocumentGroup(name): DocumentGroup;
```

Defined in: buildContext.d.ts:65

Returns the document group that matches the specified name.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`DocumentGroup`](DocumentGroup.md)

***

### getDocumentGroups()

```ts
getDocumentGroups(component?): DocumentGroup[];
```

Defined in: buildContext.d.ts:68

Returns all document groups. If component is provided, only returns groups added by that component.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component?` | [`Component`](Component.md) |

#### Returns

[`DocumentGroup`](DocumentGroup.md)[]

***

### removeDocumentGroup()

```ts
removeDocumentGroup(documentGroup): void;
```

Defined in: buildContext.d.ts:62

Removes given group from the document groups list.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroup` | [`DocumentGroup`](DocumentGroup.md) |

#### Returns

`void`
