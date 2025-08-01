# Class: BuildContext

Defined in: buildContext.d.ts:8

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="builderoptions"></a> `builderOptions` | [`BuilderOptions`](BuilderOptions.md) | Common options that are used by the builder components. | buildContext.d.ts:12 |
| <a id="customdata"></a> `customData` | `Record`\<`string`, `any`\> | Custom data that can be used by the builder components. | buildContext.d.ts:18 |
| <a id="kubernetesresourceınfo"></a> `kubernetesResourceInfo` | [`KubernetesResourceInfo`](KubernetesResourceInfo.md) | Contains information about the API resources defined in the target cluster. | buildContext.d.ts:15 |

## Methods

### addAdditionalFile()

#### Call Signature

```ts
addAdditionalFile(additionalFile): void;
```

Defined in: buildContext.d.ts:79

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
addAdditionalFile(documentGroupName, additionalFile): void;
```

Defined in: buildContext.d.ts:87

Adds the given additional file to a [DocumentGroup](DocumentGroup.md) with the given name during the [steps.generateResources](../variables/steps.generateResources.md) step.

Checks for an existing [DocumentGroup](DocumentGroup.md) with the same name and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroupName` | `string` |
| `additionalFile` | [`AdditionalFile`](AdditionalFile.md) |

##### Returns

`void`

***

### addDocument()

#### Call Signature

```ts
addDocument(document): void;
```

Defined in: buildContext.d.ts:26

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
addDocument(documentGroupName, document): void;
```

Defined in: buildContext.d.ts:34

Adds the given document to a [DocumentGroup](DocumentGroup.md) with the given name during the [steps.generateResources](../variables/steps.generateResources.md) step.

Checks for an existing [DocumentGroup](DocumentGroup.md) with the same name and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroupName` | `string` |
| `document` | [`Document`](Document.md) |

##### Returns

`void`

#### Call Signature

```ts
addDocument(path, yamlContent): void;
```

Defined in: buildContext.d.ts:42

Adds a new document to a [DocumentGroup](DocumentGroup.md) named "" by parsing given YAML string as a [Document](Document.md).

Checks for an existing [DocumentGroup](DocumentGroup.md) with name "" and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `yamlContent` | `string` |

##### Returns

`void`

#### Call Signature

```ts
addDocument(
   documentGroupName, 
   path, 
   yamlContent): void;
```

Defined in: buildContext.d.ts:51

Adds a new document to a [DocumentGroup](DocumentGroup.md) with the given name during the [steps.generateResources](../variables/steps.generateResources.md)
step by parsing given YAML string as a [Document](Document.md).

Checks for an existing [DocumentGroup](DocumentGroup.md) with the same name and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroupName` | `string` |
| `path` | `string` |
| `yamlContent` | `string` |

##### Returns

`void`

#### Call Signature

```ts
addDocument(path, root): void;
```

Defined in: buildContext.d.ts:59

Adds a new document to a [DocumentGroup](DocumentGroup.md) named "" by converting given object to a [Document](Document.md).

Checks for an existing [DocumentGroup](DocumentGroup.md) with name "" and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `root` | `object` \| [`Mapping`](Mapping.md) |

##### Returns

`void`

#### Call Signature

```ts
addDocument(
   documentGroupName, 
   path, 
   root): void;
```

Defined in: buildContext.d.ts:68

Adds a new document to a [DocumentGroup](DocumentGroup.md) with the given name during the [steps.generateResources](../variables/steps.generateResources.md)
step by converting given object to a [Document](Document.md).

Checks for an existing [DocumentGroup](DocumentGroup.md) with the same name and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroupName` | `string` |
| `path` | `string` |
| `root` | `object` \| [`Mapping`](Mapping.md) |

##### Returns

`void`

***

### addDocumentGroup()

```ts
addDocumentGroup(documentGroup): void;
```

Defined in: buildContext.d.ts:71

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

Defined in: buildContext.d.ts:99

Returns all documents inside all document groups.

#### Returns

[`Document`](Document.md)[]

***

### getAllDocumentsSorted()

```ts
getAllDocumentsSorted(): Document[];
```

Defined in: buildContext.d.ts:102

Returns all documents inside all document groups sorted by their file path.

#### Returns

[`Document`](Document.md)[]

***

### getDocument()

#### Call Signature

```ts
getDocument(predicate): Document;
```

Defined in: buildContext.d.ts:105

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

Defined in: buildContext.d.ts:108

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

Defined in: buildContext.d.ts:93

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

Defined in: buildContext.d.ts:96

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

Defined in: buildContext.d.ts:90

Removes given group from the document groups list.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroup` | [`DocumentGroup`](DocumentGroup.md) |

#### Returns

`void`
