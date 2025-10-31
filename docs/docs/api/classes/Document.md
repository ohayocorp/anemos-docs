# Class: Document

Defined in: document.d.ts:10

Document corresponds to a single YAML document. Note that even though a YAML file can contain multiple documents,
each one of these documents is represented by a separate Document object.

Although the root of the document can be any kind of node, only [Mapping](Mapping.md) is supported.

## Constructors

### Constructor

```ts
new Document(path): Document;
```

Defined in: document.d.ts:12

Creates a new empty document with the given path.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

#### Returns

`Document`

### Constructor

```ts
new Document(path, yamlContent): Document;
```

Defined in: document.d.ts:15

Creates a new document with the given path and YAML content. The YAML content must be a valid YAML mapping.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `yamlContent` | `string` |

#### Returns

`Document`

### Constructor

```ts
new Document(path, root): Document;
```

Defined in: document.d.ts:18

Creates a new document with the given path and root. The root must be a [Mapping](Mapping.md) or an Object.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `root` | `Object` \| [`Mapping`](Mapping.md) |

#### Returns

`Document`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="group"></a> `group?` | [`DocumentGroup`](DocumentGroup.md) | The document group this document belongs to. | document.d.ts:24 |
| <a id="path"></a> `path` | `string` | The file path to the document. May contain multiple segments separated by slashes. | document.d.ts:21 |

## Methods

### clone()

```ts
clone(): Document;
```

Defined in: document.d.ts:33

Returns a deep clone of the document.

#### Returns

`Document`

***

### ensureAnnotations()

```ts
ensureAnnotations(): Mapping;
```

Defined in: documentExtensions.d.ts:14

Ensures a [Mapping](Mapping.md) for ".metadata.annotations".

#### Returns

[`Mapping`](Mapping.md)

***

### ensureContainers()

```ts
ensureContainers(): Sequence;
```

Defined in: documentExtensions.d.ts:26

Ensures a [Sequence](Sequence.md) for ".spec.containers" if the document specifies a Pod or ".spec.template.spec.containers" if the document
specifies another type of workload.

#### Returns

[`Sequence`](Sequence.md)

***

### ensureInitContainers()

```ts
ensureInitContainers(): Sequence;
```

Defined in: documentExtensions.d.ts:32

Ensures a [Sequence](Sequence.md) for ".spec.initContainers" if the document specifies a Pod or ".spec.template.spec.initContainers" if the document
specifies another type of workload.

#### Returns

[`Sequence`](Sequence.md)

***

### ensureLabels()

```ts
ensureLabels(): Mapping;
```

Defined in: documentExtensions.d.ts:11

Ensures a [Mapping](Mapping.md) for ".metadata.labels".

#### Returns

[`Mapping`](Mapping.md)

***

### ensureMetadata()

```ts
ensureMetadata(): Mapping;
```

Defined in: documentExtensions.d.ts:8

Ensures a [Mapping](Mapping.md) for ".metadata".

#### Returns

[`Mapping`](Mapping.md)

***

### ensureVolumes()

```ts
ensureVolumes(): Sequence;
```

Defined in: documentExtensions.d.ts:38

Ensures a [Sequence](Sequence.md) for ".spec.volumes" if the document specifies a Pod or ".spec.template.spec.volumes" if the document
specifies another type of workload.

#### Returns

[`Sequence`](Sequence.md)

***

### ensureWorkloadAnnotations()

```ts
ensureWorkloadAnnotations(): Mapping;
```

Defined in: documentExtensions.d.ts:56

Ensures a [Mapping](Mapping.md) for ".metadata.annotations" if the document specifies a Pod or ".spec.template.metadata.annotations" if the document
specifies another type of workload.

#### Returns

[`Mapping`](Mapping.md)

***

### ensureWorkloadLabels()

```ts
ensureWorkloadLabels(): Mapping;
```

Defined in: documentExtensions.d.ts:50

Ensures a [Mapping](Mapping.md) for ".metadata.labels" if the document specifies a Pod or ".spec.template.metadata.labels" if the document
specifies another type of workload.

#### Returns

[`Mapping`](Mapping.md)

***

### ensureWorkloadMetadata()

```ts
ensureWorkloadMetadata(): Mapping;
```

Defined in: documentExtensions.d.ts:44

Ensures a [Mapping](Mapping.md) for ".metadata" if the document specifies a Pod or ".spec.template.metadata" if the document
specifies another type of workload.

#### Returns

[`Mapping`](Mapping.md)

***

### ensureWorkloadSpec()

```ts
ensureWorkloadSpec(): Mapping;
```

Defined in: documentExtensions.d.ts:20

Ensures a [Mapping](Mapping.md) for ".spec" if the document specifies a Pod or ".spec.template.spec" if the document
specifies another type of workload.

#### Returns

[`Mapping`](Mapping.md)

***

### fullPath()

```ts
fullPath(): string;
```

Defined in: document.d.ts:27

Returns the file path to write the document into. Adds group name as base directory if it is not null.

#### Returns

`string`

***

### getAnnotation()

```ts
getAnnotation(annotation): string;
```

Defined in: documentExtensions.d.ts:80

Returns the value of ".metadata.annotations.$annotation". Returns null if the value is not found.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `annotation` | `string` |

#### Returns

`string`

***

### getAnnotations()

```ts
getAnnotations(): Mapping;
```

Defined in: documentExtensions.d.ts:83

Returns the [Mapping](Mapping.md) for ".metadata.annotations". Returns null if the [Mapping](Mapping.md) is not found.

#### Returns

[`Mapping`](Mapping.md)

***

### getApiVersion()

```ts
getApiVersion(): string;
```

Defined in: documentExtensions.d.ts:59

Returns the value of ".apiVersion". Returns null if the value is not found.

#### Returns

`string`

***

### getContainer()

#### Call Signature

```ts
getContainer(index): Mapping;
```

Defined in: documentExtensions.d.ts:98

Returns the ContainerMapping for ".spec.containers[i]" if the document specifies a Pod or ".spec.template.spec.containers[i]" if the document
specifies another type of workload. Returns null if the [Mapping](Mapping.md) is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

##### Returns

[`Mapping`](Mapping.md)

#### Call Signature

```ts
getContainer(name): Mapping;
```

Defined in: documentExtensions.d.ts:104

Returns the first [Mapping](Mapping.md) under ".spec.containers" if the document specifies a Pod or ".spec.template.spec.containers" if the document
specifies another type of workload that the name equals to the given parameter. Returns null if the [Mapping](Mapping.md) is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

[`Mapping`](Mapping.md)

#### Call Signature

```ts
getContainer(filter): Mapping;
```

Defined in: documentExtensions.d.ts:110

Returns the first [Mapping](Mapping.md) under ".spec.containers" if the document specifies a Pod or ".spec.template.spec.containers" if the document
specifies another type of workload that the filter function returns true for. Returns null if the [Mapping](Mapping.md) is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | (`container`) => `boolean` |

##### Returns

[`Mapping`](Mapping.md)

***

### getContainers()

```ts
getContainers(): Sequence;
```

Defined in: documentExtensions.d.ts:116

Returns the [Sequence](Sequence.md) for ".spec.containers" if the document specifies a Pod or ".spec.template.spec.containers" if the document
specifies another type of workload. Returns null if the [Sequence](Sequence.md) is not found.

#### Returns

[`Sequence`](Sequence.md)

***

### getInitContainer()

#### Call Signature

```ts
getInitContainer(index): Mapping;
```

Defined in: documentExtensions.d.ts:122

Returns the ContainerMapping for ".spec.initContainers[i]" if the document specifies a Pod or ".spec.template.spec.initContainers[i]" if the document
specifies another type of workload. Returns null if the [Mapping](Mapping.md) is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

##### Returns

[`Mapping`](Mapping.md)

#### Call Signature

```ts
getInitContainer(name): Mapping;
```

Defined in: documentExtensions.d.ts:128

Returns the first [Mapping](Mapping.md) under ".spec.initContainers" if the document specifies a Pod or ".spec.template.spec.initContainers" if the document
specifies another type of workload that the name equals to the given parameter. Returns null if the [Mapping](Mapping.md) is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

##### Returns

[`Mapping`](Mapping.md)

#### Call Signature

```ts
getInitContainer(filter): Mapping;
```

Defined in: documentExtensions.d.ts:134

Returns the first [Mapping](Mapping.md) under ".spec.initContainers" if the document specifies a Pod or ".spec.template.spec.initContainers" if the document
specifies another type of workload that the filter function returns true for. Returns null if the [Mapping](Mapping.md) is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | (`container`) => `boolean` |

##### Returns

[`Mapping`](Mapping.md)

***

### getInitContainers()

```ts
getInitContainers(): Sequence;
```

Defined in: documentExtensions.d.ts:140

Returns the [Sequence](Sequence.md) for ".spec.initContainers" if the document specifies a Pod or ".spec.template.spec.initContainers" if the document
specifies another type of workload. Returns null if the [Sequence](Sequence.md) is not found.

#### Returns

[`Sequence`](Sequence.md)

***

### getKind()

```ts
getKind(): string;
```

Defined in: documentExtensions.d.ts:62

Returns value of ".kind". Returns null if the value is not found.

#### Returns

`string`

***

### getLabel()

```ts
getLabel(label): string;
```

Defined in: documentExtensions.d.ts:74

Returns the value of ".metadata.labels.$label". Returns null if the value is not found.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `label` | `string` |

#### Returns

`string`

***

### getLabels()

```ts
getLabels(): Mapping;
```

Defined in: documentExtensions.d.ts:77

Returns the [Mapping](Mapping.md) for ".metadata.labels". Returns null if the [Mapping](Mapping.md) is not found.

#### Returns

[`Mapping`](Mapping.md)

***

### getMetadata()

```ts
getMetadata(): Mapping;
```

Defined in: documentExtensions.d.ts:65

Returns the [Mapping](Mapping.md) for ".metadata". Returns null if the [Mapping](Mapping.md) is not found.

#### Returns

[`Mapping`](Mapping.md)

***

### getName()

```ts
getName(): string;
```

Defined in: documentExtensions.d.ts:68

Returns value of ".metadata.name". Returns null if the value is not found.

#### Returns

`string`

***

### getNamespace()

```ts
getNamespace(): string;
```

Defined in: documentExtensions.d.ts:71

Returns value of ".metadata.namespace". Returns null if the value is not found.

#### Returns

`string`

***

### getRoot()

```ts
getRoot(): Mapping;
```

Defined in: document.d.ts:30

Return the root of the document as a [Mapping](Mapping.md).

#### Returns

[`Mapping`](Mapping.md)

***

### getSpec()

```ts
getSpec(): Mapping;
```

Defined in: documentExtensions.d.ts:86

Returns the [Mapping](Mapping.md) for ".spec". Returns null if the value is not found.

#### Returns

[`Mapping`](Mapping.md)

***

### getVolume()

#### Call Signature

```ts
getVolume(index): Mapping;
```

Defined in: documentExtensions.d.ts:146

Returns the [Mapping](Mapping.md) for ".spec.volumes[i]" if the document specifies a Pod or ".spec.template.spec.volumes[i]"
if the document specifies another type of workload. Returns null if the [Mapping](Mapping.md) is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

##### Returns

[`Mapping`](Mapping.md)

#### Call Signature

```ts
getVolume(filter): Mapping;
```

Defined in: documentExtensions.d.ts:153

Returns the first [Mapping](Mapping.md) under ".spec.volumes" if the document specifies a Pod or ".spec.template.spec.volumes"
if the document specifies another type of workload that the filter function returns true for.
Returns null if the [Mapping](Mapping.md) is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | (`volume`) => `boolean` |

##### Returns

[`Mapping`](Mapping.md)

***

### getVolumes()

```ts
getVolumes(): Sequence;
```

Defined in: documentExtensions.d.ts:159

Returns the [Sequence](Sequence.md) for ".spec.volumes" if the document specifies a Pod or ".spec.template.spec.volumes"
if the document specifies another type of workload. Returns null if the [Sequence](Sequence.md) is not found.

#### Returns

[`Sequence`](Sequence.md)

***

### getWorkloadAnnotations()

```ts
getWorkloadAnnotations(): Mapping;
```

Defined in: documentExtensions.d.ts:177

Returns the [Mapping](Mapping.md) for ".metadata.annotations" if the document specifies a Pod or ".spec.template.metadata.annotations"
if the document specifies another type of workload. Returns null if the [Mapping](Mapping.md) is not found.

#### Returns

[`Mapping`](Mapping.md)

***

### getWorkloadLabels()

```ts
getWorkloadLabels(): Mapping;
```

Defined in: documentExtensions.d.ts:171

Returns the [Mapping](Mapping.md) for ".metadata.labels" if the document specifies a Pod or ".spec.template.metadata.labels"
if the document specifies another type of workload. Returns null if the [Mapping](Mapping.md) is not found.

#### Returns

[`Mapping`](Mapping.md)

***

### getWorkloadMetadata()

```ts
getWorkloadMetadata(): Mapping;
```

Defined in: documentExtensions.d.ts:165

Returns the [Mapping](Mapping.md) for ".metadata" if the document specifies a Pod or ".spec.template.metadata" if the document
specifies another type of workload. Returns null if the [Mapping](Mapping.md) is not found.

#### Returns

[`Mapping`](Mapping.md)

***

### getWorkloadSpec()

```ts
getWorkloadSpec(): Mapping;
```

Defined in: documentExtensions.d.ts:92

Returns the [Mapping](Mapping.md) for ".spec" if the document specifies a Pod or ".spec.template.spec" if the document
specifies another type of workload. Returns null if the [Mapping](Mapping.md) is not found.

#### Returns

[`Mapping`](Mapping.md)

***

### isClusterRole()

```ts
isClusterRole(): boolean;
```

Defined in: documentExtensions.d.ts:183

Returns true if the document is a ClusterRole.

#### Returns

`boolean`

***

### isClusterRoleBinding()

```ts
isClusterRoleBinding(): boolean;
```

Defined in: documentExtensions.d.ts:186

Returns true if the document is a ClusterRoleBinding.

#### Returns

`boolean`

***

### isConfigMap()

```ts
isConfigMap(): boolean;
```

Defined in: documentExtensions.d.ts:189

Returns true if the document is a ConfigMap.

#### Returns

`boolean`

***

### isCronJob()

```ts
isCronJob(): boolean;
```

Defined in: documentExtensions.d.ts:192

Returns true if the document is a CronJob.

#### Returns

`boolean`

***

### isCustomResourceDefinition()

```ts
isCustomResourceDefinition(): boolean;
```

Defined in: documentExtensions.d.ts:195

Returns true if the document is a CustomResourceDefinition.

#### Returns

`boolean`

***

### isDaemonSet()

```ts
isDaemonSet(): boolean;
```

Defined in: documentExtensions.d.ts:198

Returns true if the document is a DaemonSet.

#### Returns

`boolean`

***

### isDeployment()

```ts
isDeployment(): boolean;
```

Defined in: documentExtensions.d.ts:201

Returns true if the document is a Deployment.

#### Returns

`boolean`

***

### isHorizontalPodAutoscaler()

```ts
isHorizontalPodAutoscaler(): boolean;
```

Defined in: documentExtensions.d.ts:204

Returns true if the document is a HorizontalPodAutoscaler.

#### Returns

`boolean`

***

### isIngress()

```ts
isIngress(): boolean;
```

Defined in: documentExtensions.d.ts:207

Returns true if the document is an Ingress.

#### Returns

`boolean`

***

### isJob()

```ts
isJob(): boolean;
```

Defined in: documentExtensions.d.ts:210

Returns true if the document is a Job.

#### Returns

`boolean`

***

### isNamespace()

```ts
isNamespace(): boolean;
```

Defined in: documentExtensions.d.ts:213

Returns true if the document is a Namespace.

#### Returns

`boolean`

***

### isOfKind()

```ts
isOfKind(apiVersion, kind): boolean;
```

Defined in: documentExtensions.d.ts:180

Returns true if the document has the given apiVersion and kind.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiVersion` | `string` |
| `kind` | `string` |

#### Returns

`boolean`

***

### isPersistentVolume()

```ts
isPersistentVolume(): boolean;
```

Defined in: documentExtensions.d.ts:216

Returns true if the document is a PersistentVolume.

#### Returns

`boolean`

***

### isPersistentVolumeClaim()

```ts
isPersistentVolumeClaim(): boolean;
```

Defined in: documentExtensions.d.ts:219

Returns true if the document is a PersistentVolumeClaim.

#### Returns

`boolean`

***

### isPod()

```ts
isPod(): boolean;
```

Defined in: documentExtensions.d.ts:222

Returns true if the document is a Pod.

#### Returns

`boolean`

***

### isReplicaSet()

```ts
isReplicaSet(): boolean;
```

Defined in: documentExtensions.d.ts:225

Returns true if the document is a ReplicaSet.

#### Returns

`boolean`

***

### isRole()

```ts
isRole(): boolean;
```

Defined in: documentExtensions.d.ts:228

Returns true if the document is a Role.

#### Returns

`boolean`

***

### isRoleBinding()

```ts
isRoleBinding(): boolean;
```

Defined in: documentExtensions.d.ts:231

Returns true if the document is a RoleBinding.

#### Returns

`boolean`

***

### isSecret()

```ts
isSecret(): boolean;
```

Defined in: documentExtensions.d.ts:234

Returns true if the document is a Secret.

#### Returns

`boolean`

***

### isService()

```ts
isService(): boolean;
```

Defined in: documentExtensions.d.ts:237

Returns true if the document is a Service.

#### Returns

`boolean`

***

### isServiceAccount()

```ts
isServiceAccount(): boolean;
```

Defined in: documentExtensions.d.ts:240

Returns true if the document is a ServiceAccount.

#### Returns

`boolean`

***

### isStatefulSet()

```ts
isStatefulSet(): boolean;
```

Defined in: documentExtensions.d.ts:243

Returns true if the document is a StatefulSet.

#### Returns

`boolean`

***

### isWorkload()

```ts
isWorkload(): boolean;
```

Defined in: documentExtensions.d.ts:246

Returns true if the document is one of these: CronJob, DaemonSet, Deployment, Job, Pod, ReplicaSet, StatefulSet.

#### Returns

`boolean`

***

### provisionAfter()

```ts
provisionAfter(other): void;
```

Defined in: document.d.ts:36

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

Defined in: document.d.ts:39

Apply and wait for this document before the given document. Documents must be in the same group.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Document` |

#### Returns

`void`

***

### setAnnotation()

```ts
setAnnotation(key, value): void;
```

Defined in: documentExtensions.d.ts:264

Sets the given key value pair to ".metadata.annotations".

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

***

### setAnnotations()

```ts
setAnnotations(annotations): void;
```

Defined in: documentExtensions.d.ts:267

Sets the given key value pairs to ".metadata.annotations". Keys are sorted alphabetically.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `annotations` | `Record`\<`string`, `string`\> |

#### Returns

`void`

***

### setLabel()

```ts
setLabel(key, value): void;
```

Defined in: documentExtensions.d.ts:255

Sets the given key value pair to ".metadata.labels".

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

***

### setLabels()

#### Call Signature

```ts
setLabels(labels): void;
```

Defined in: documentExtensions.d.ts:258

Sets the given key value pairs to ".metadata.labels". Keys are sorted alphabetically.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `labels` | `Record`\<`string`, `string`\> |

##### Returns

`void`

#### Call Signature

```ts
setLabels(labels, labelNodes): void;
```

Defined in: documentExtensions.d.ts:261

Sets the given key value pairs to the specified nodes on the document. Keys are sorted alphabetically.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `labels` | `Record`\<`string`, `string`\> |
| `labelNodes` | [`LabelNode`](../types/LabelNode.md)[] |

##### Returns

`void`

***

### setName()

```ts
setName(value): void;
```

Defined in: documentExtensions.d.ts:249

Sets the given value to ".metadata.name".

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`void`

***

### setNamespace()

```ts
setNamespace(value): void;
```

Defined in: documentExtensions.d.ts:252

Sets the given value to ".metadata.namespace".

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`void`
