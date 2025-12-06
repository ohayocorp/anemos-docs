# Class: Workload

Defined in: documentExtensions/workload.d.ts:7

## Implements

- `ExcludeAsIsExcept`\<`Document`, `WorkloadRelatedAsIs`\>

## Constructors

### Constructor

```ts
new Workload(): Workload;
```

#### Returns

`Workload`

## Methods

### ensureWorkloadAnnotations()

```ts
ensureWorkloadAnnotations(): Record<string, string>;
```

Defined in: documentExtensions/workload.d.ts:15

#### Returns

`Record`\<`string`, `string`\>

***

### ensureWorkloadLabels()

```ts
ensureWorkloadLabels(): Record<string, string>;
```

Defined in: documentExtensions/workload.d.ts:13

#### Returns

`Record`\<`string`, `string`\>

***

### ensureWorkloadMetadata()

```ts
ensureWorkloadMetadata(): ObjectMeta;
```

Defined in: documentExtensions/workload.d.ts:11

#### Returns

`ObjectMeta`

***

### ensureWorkloadSpec()

```ts
ensureWorkloadSpec(): PodSpec;
```

Defined in: documentExtensions/workload.d.ts:9

#### Returns

`PodSpec`

***

### getContainer()

```ts
getContainer(indexOrName): any;
```

Defined in: documentExtensions/workload.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `indexOrName` | `string` \| `number` |

#### Returns

`any`

***

### getContainers()

```ts
getContainers(): Container[];
```

Defined in: documentExtensions/workload.d.ts:16

#### Returns

`Container`[]

***

### getInitContainer()

```ts
getInitContainer(indexOrName): any;
```

Defined in: documentExtensions/workload.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `indexOrName` | `string` \| `number` |

#### Returns

`any`

***

### getInitContainers()

```ts
getInitContainers(): Container[];
```

Defined in: documentExtensions/workload.d.ts:18

#### Returns

`Container`[]

***

### getWorkloadAnnotations()

```ts
getWorkloadAnnotations(): Record<string, string>;
```

Defined in: documentExtensions/workload.d.ts:14

#### Returns

`Record`\<`string`, `string`\>

***

### getWorkloadLabels()

```ts
getWorkloadLabels(): Record<string, string>;
```

Defined in: documentExtensions/workload.d.ts:12

#### Returns

`Record`\<`string`, `string`\>

***

### getWorkloadMetadata()

```ts
getWorkloadMetadata(): any;
```

Defined in: documentExtensions/workload.d.ts:10

#### Returns

`any`

***

### getWorkloadSpec()

```ts
getWorkloadSpec(): any;
```

Defined in: documentExtensions/workload.d.ts:8

#### Returns

`any`
