# Class: Builder

Defined in: builder.d.ts:9

## Constructors

### Constructor

```ts
new Builder(options): Builder;
```

Defined in: builder.d.ts:10

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

Defined in: builder.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `version` | `string` \| [`Version`](Version.md) |
| `distribution` | [`KubernetesDistribution`](../enums/KubernetesDistribution.md) |
| `environmentType` | [`EnvironmentType`](../enums/EnvironmentType.md) |

#### Returns

`Builder`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="components"></a> `components` | readonly [`Component`](Component.md)[] | All components that will be run by this builder. Don't modify this array directly, use [Builder.addComponent](#addcomponent) or [Builder.removeComponent](#removecomponent) instead. | builder.d.ts:17 |
| <a id="options"></a> `options` | [`BuilderOptions`](BuilderOptions.md) | Common options that are used by the builder components. | builder.d.ts:20 |

## Methods

### addAdditionalFile()

#### Call Signature

```ts
addAdditionalFile(additionalFile): void;
```

Defined in: builder.d.ts:86

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
addAdditionalFile(documentGroupName, additionalFile): void;
```

Defined in: builder.d.ts:94

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

### addComponent()

```ts
addComponent(component): void;
```

Defined in: builder.d.ts:23

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

Defined in: builder.d.ts:34

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
addDocument(documentGroupName, document): void;
```

Defined in: builder.d.ts:42

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

Defined in: builder.d.ts:51

Adds a new document to a [DocumentGroup](DocumentGroup.md) named "" during the [steps.generateResources](../variables/steps.generateResources.md)
step by parsing given YAML string as a [Document](Document.md).

Checks for an existing [DocumentGroup](DocumentGroup.md) with the name "" and adds the document to it if it exists.
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

Defined in: builder.d.ts:60

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

Defined in: builder.d.ts:69

Adds a new document to a [DocumentGroup](DocumentGroup.md) named "" during the [steps.generateResources](../variables/steps.generateResources.md)
step by converting given object to a [Document](Document.md).

Checks for an existing [DocumentGroup](DocumentGroup.md) with the name "" and adds the document to it if it exists.
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

Defined in: builder.d.ts:78

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

### apply()

```ts
apply(options?): Component;
```

Defined in: apply.d.ts:12

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

Defined in: builder.d.ts:118

Runs all the components that were added to the builder.

#### Returns

`void`

***

### collectCRDs()

```ts
collectCRDs(options?): Component;
```

Defined in: collectCRDs.d.ts:11

Adds a [Component](Component.md) that collects Custom Resource Definitions (CRDs) from all
the document groups and moves them into a new document group after the [steps.modify](../variables/steps.modify.md) step.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`Options`](collectCRDs.Options.md) | Options for collecting CRDs. |

#### Returns

[`Component`](Component.md)

***

### collectNamespaces()

```ts
collectNamespaces(options?): Component;
```

Defined in: collectNamespaces.d.ts:11

Adds a [Component](Component.md) that collects namespace definitions from all
the document groups and moves them into a new document group after the [steps.modify](../variables/steps.modify.md) step.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | [`Options`](collectNamespaces.Options.md) | Options for collecting namespaces. |

#### Returns

[`Component`](Component.md)

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

Defined in: builder.d.ts:109

Creates a new component with the given action that will be run during [steps.generateResources](../variables/steps.generateResources.md)
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

Defined in: builder.d.ts:115

Creates a new component with the given action that will be run during [steps.modify](../variables/steps.modify.md)
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

Defined in: builder.d.ts:103

Creates a new component with the given action that will be run during [steps.sanitize](../variables/steps.sanitize.md)
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

Defined in: builder.d.ts:97

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

Defined in: builder.d.ts:26

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
