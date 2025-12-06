# Class: Builder

Defined in: builder.d.ts:11

## Constructors

### Constructor

```ts
new Builder(): Builder;
```

Defined in: builder.d.ts:12

#### Returns

`Builder`

### Constructor

```ts
new Builder(options): Builder;
```

Defined in: builder.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`BuilderOptions`](BuilderOptions.md) |

#### Returns

`Builder`

### Constructor

```ts
new Builder(
   version, 
   distribution, 
   environmentType): Builder;
```

Defined in: builder.d.ts:14

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | `string` \| [`Version`](Version.md) |
| `distribution` | `string` |
| `environmentType` | `string` |

#### Returns

`Builder`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="components"></a> `components` | [`Component`](Component.md)[] | All components that will be run by this builder. Don't add to this array directly, use [Builder.addComponent](#addcomponent) instead. | builder.d.ts:19 |
| <a id="options"></a> `options` | [`BuilderOptions`](BuilderOptions.md) | Common options that are used by the builder components. | builder.d.ts:22 |

## Methods

### addAdditionalFile()

#### Call Signature

```ts
addAdditionalFile(additionalFile): void;
```

Defined in: builder.d.ts:76

Adds the given additional file to a [DocumentGroup](DocumentGroup.md) named "" during the [steps.generateResources](../variables/steps.generateResources.md) step.

Checks for an existing [DocumentGroup](DocumentGroup.md) with the name "" and adds the document to it if it exists.
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

Defined in: builder.d.ts:84

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

### addComponent()

```ts
addComponent(component): void;
```

Defined in: builder.d.ts:28

Adds given component to the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`Component`](Component.md) |

#### Returns

`void`

***

### addDocument()

#### Call Signature

```ts
addDocument(document): void;
```

Defined in: builder.d.ts:47

Parses the given YAML string as a [Document](Document.md) and adds it to a [DocumentGroup](DocumentGroup.md) named ""
during the [steps.generateResources](../variables/steps.generateResources.md) step.

Checks for an existing [DocumentGroup](DocumentGroup.md) with the name "" and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `document` | `string` |

##### Returns

`void`

#### Call Signature

```ts
addDocument(document): void;
```

Defined in: builder.d.ts:55

Adds the given document to a [DocumentGroup](DocumentGroup.md) named "" during the [steps.generateResources](../variables/steps.generateResources.md) step.

Checks for an existing [DocumentGroup](DocumentGroup.md) with the name "" and adds the document to it if it exists.
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

Defined in: builder.d.ts:63

Adds a new document using the provided options during the [steps.generateResources](../variables/steps.generateResources.md) step.

Checks for an existing [DocumentGroup](DocumentGroup.md) with the same name as `options.documentGroup` and adds the document to it if it exists.
Creates a new [DocumentGroup](DocumentGroup.md) if it doesn't exist.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`NewDocumentOptions`](NewDocumentOptions.md) |

##### Returns

`void`

***

### addDocumentGroup()

```ts
addDocumentGroup(documentGroup): void;
```

Defined in: builder.d.ts:68

Adds the given [DocumentGroup](DocumentGroup.md) during the [steps.generateResources](../variables/steps.generateResources.md) step.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documentGroup` | [`DocumentGroup`](DocumentGroup.md) |

#### Returns

`void`

***

### addHelmChart()

```ts
addHelmChart(
   chartIdentifier, 
   releaseName, 
   values?): void;
```

Defined in: helm.d.ts:11

Creates a document group from the Helm chart using the given values on
[steps.generateResources](../variables/steps.generateResources.md) step. Chart identifier can be a local path or a URL.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chartIdentifier` | `string` |
| `releaseName` | `string` |
| `values?` | `string` |

#### Returns

`void`

***

### addProvisionCheckpoint()

```ts
addProvisionCheckpoint(name): Component;
```

Defined in: builder.d.ts:38

Adds a component that creates a document group with the given name during [steps.generateResources](../variables/steps.generateResources.md).
Document group doesn't contain any documents, it serves as a placeholder for provision dependencies.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` |  |

#### Returns

[`Component`](Component.md)

***

### apply()

```ts
apply(options?): Component;
```

Defined in: apply.d.ts:10

Applies the generated manifests to the Kubernetes cluster at the steps.apply step.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`Options`](apply.Options.md) | Options for applying manifests. |

#### Returns

[`Component`](Component.md)

***

### build()

```ts
build(): void;
```

Defined in: builder.d.ts:25

Runs all the components that were added to the builder.

#### Returns

`void`

***

### deleteOutputDirectory()

```ts
deleteOutputDirectory(options?): Component;
```

Defined in: deleteOutputDirectory.d.ts:12

Adds a [Component](Component.md) that deletes the output directory.
This component is used to clean up the output directory before generating new content.
It is executed before the [steps.output](../variables/steps.output.md) step.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`Options`](deleteOutputDirectory.Options.md) | Options for deleting the output directory. |

#### Returns

[`Component`](Component.md)

***

### onGenerateResources()

```ts
onGenerateResources(callback): Component;
```

Defined in: builder.d.ts:105

Creates a new component with the given action that will be run during [steps.generateResources](../variables/steps.generateResources.md)
and adds it to the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`context`) => `void` |

#### Returns

[`Component`](Component.md)

***

### onGenerateResourcesBasedOnOtherResources()

```ts
onGenerateResourcesBasedOnOtherResources(callback): Component;
```

Defined in: builder.d.ts:111

Creates a new component with the given action that will be run during [steps.generateResourcesBasedOnOtherResources](../variables/steps.generateResourcesBasedOnOtherResources.md)
and adds it to the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`context`) => `void` |

#### Returns

[`Component`](Component.md)

***

### onModify()

```ts
onModify(callback): Component;
```

Defined in: builder.d.ts:117

Creates a new component with the given action that will be run during [steps.modify](../variables/steps.modify.md)
and adds it to the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`context`) => `void` |

#### Returns

[`Component`](Component.md)

***

### onPopulateKubernetesResources()

```ts
onPopulateKubernetesResources(callback): Component;
```

Defined in: builder.d.ts:93

Creates a new component with the given action that will be run during [steps.populateKubernetesResources](../variables/steps.populateKubernetesResources.md)
and adds it to the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`context`) => `void` |

#### Returns

[`Component`](Component.md)

***

### onSanitize()

```ts
onSanitize(callback): Component;
```

Defined in: builder.d.ts:99

Creates a new component with the given action that will be run during [steps.sanitize](../variables/steps.sanitize.md)
and adds it to the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`context`) => `void` |

#### Returns

[`Component`](Component.md)

***

### onSpecifyProvisionerDependencies()

```ts
onSpecifyProvisionerDependencies(callback): Component;
```

Defined in: builder.d.ts:123

Creates a new component with the given action that will be run during [steps.specifyProvisionerDependencies](../variables/steps.specifyProvisionerDependencies.md)
and adds it to the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`context`) => `void` |

#### Returns

[`Component`](Component.md)

***

### onStep()

```ts
onStep(step, callback): Component;
```

Defined in: builder.d.ts:87

Creates a new component with the given action and adds it to the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `step` | [`Step`](Step.md) |
| `callback` | (`context`) => `void` |

#### Returns

[`Component`](Component.md)

***

### removeComponent()

```ts
removeComponent(component): void;
```

Defined in: builder.d.ts:31

Removes given component from the list of components.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `component` | [`Component`](Component.md) |

#### Returns

`void`

***

### writeDocuments()

```ts
writeDocuments(options?): Component;
```

Defined in: writeDocuments.d.ts:11

Adds a [Component](Component.md) that writes the documents from all document groups to the output directory
as YAML files during the [steps.output](../variables/steps.output.md) step.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`Options`](writeDocuments.Options.md) | Options for writing documents. |

#### Returns

[`Component`](Component.md)
