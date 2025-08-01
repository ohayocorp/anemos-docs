# Class: Sequence

Defined in: sequence.d.ts:9

Represents a YAML sequence, which is an ordered collection of items.
A sequence can contain mappings, other sequences, or scalars.
It provides methods to add, set, insert, get, and manipulate its items.

## Constructors

### Constructor

```ts
new Sequence(): Sequence;
```

Defined in: sequence.d.ts:10

#### Returns

`Sequence`

### Constructor

```ts
new Sequence(items): Sequence;
```

Defined in: sequence.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | `any`[] |

#### Returns

`Sequence`

## Methods

### add()

#### Call Signature

```ts
add(mapping): void;
```

Defined in: sequence.d.ts:14

Appends the given [Mapping](Mapping.md) to the sequence.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `mapping` | `Object` \| [`Mapping`](Mapping.md) |

##### Returns

`void`

#### Call Signature

```ts
add(mappings): void;
```

Defined in: sequence.d.ts:17

Appends the given [Mapping](Mapping.md) array to the sequence.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `mappings` | [`Mapping`](Mapping.md)[] \| `Object`[] |

##### Returns

`void`

#### Call Signature

```ts
add(sequence): void;
```

Defined in: sequence.d.ts:20

Appends the given Sequence to the sequence.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `sequence` | `any`[] \| `Sequence` |

##### Returns

`void`

#### Call Signature

```ts
add(sequences): void;
```

Defined in: sequence.d.ts:23

Appends the given Sequence array to the sequence.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `sequences` | `any`[] \| `Sequence`[] |

##### Returns

`void`

#### Call Signature

```ts
add(scalar): void;
```

Defined in: sequence.d.ts:26

Appends the given [Scalar](Scalar.md) to the sequence.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `scalar` | [`Scalar`](Scalar.md) |

##### Returns

`void`

#### Call Signature

```ts
add(scalars): void;
```

Defined in: sequence.d.ts:29

Appends the given [Scalar](Scalar.md) array to the sequence.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `scalars` | [`Scalar`](Scalar.md)[] |

##### Returns

`void`

#### Call Signature

```ts
add(value): Scalar;
```

Defined in: sequence.d.ts:32

Appends the given value to the sequence as a [Scalar](Scalar.md) and returns the created scalar.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

##### Returns

[`Scalar`](Scalar.md)

#### Call Signature

```ts
add(values): void;
```

Defined in: sequence.d.ts:35

Appends the given values to the sequence as [Scalar](Scalar.md)s.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `values` | `string`[] |

##### Returns

`void`

***

### clear()

```ts
clear(): void;
```

Defined in: sequence.d.ts:89

Removes all elements.

#### Returns

`void`

***

### clone()

```ts
clone(): Sequence;
```

Defined in: sequence.d.ts:92

Returns a deep clone of the sequence.

#### Returns

`Sequence`

***

### getMapping()

#### Call Signature

```ts
getMapping(index): Mapping;
```

Defined in: sequence.d.ts:62

Returns the child at given index as [Mapping](Mapping.md). Throws if the child is not a [Mapping](Mapping.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

##### Returns

[`Mapping`](Mapping.md)

#### Call Signature

```ts
getMapping(filter): Mapping;
```

Defined in: sequence.d.ts:65

Returns the first child that returns true for the filter function. Returns null if the node is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | (`mapping`) => `boolean` |

##### Returns

[`Mapping`](Mapping.md)

***

### getScalar()

#### Call Signature

```ts
getScalar(index): Scalar;
```

Defined in: sequence.d.ts:74

Returns the child at given index as [Scalar](Scalar.md). Throws if the child is not a [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

##### Returns

[`Scalar`](Scalar.md)

#### Call Signature

```ts
getScalar(filter): Scalar;
```

Defined in: sequence.d.ts:77

Returns the first child that returns true for the filter function. Returns null if the node is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | (`scalar`) => `boolean` |

##### Returns

[`Scalar`](Scalar.md)

***

### getSequence()

#### Call Signature

```ts
getSequence(index): Sequence;
```

Defined in: sequence.d.ts:68

Returns the child at given index as Sequence. Throws if the child is not a Sequence.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

##### Returns

`Sequence`

#### Call Signature

```ts
getSequence(filter): Sequence;
```

Defined in: sequence.d.ts:71

Returns the first child that returns true for the filter function. Returns null if the node is not found.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `filter` | (`sequence`) => `boolean` |

##### Returns

`Sequence`

***

### getValue()

```ts
getValue(index): string;
```

Defined in: sequence.d.ts:80

Returns the value at given index. Throws if the child is not a [Scalar](Scalar.md).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`string`

***

### insert()

#### Call Signature

```ts
insert(index, mapping): void;
```

Defined in: sequence.d.ts:50

Inserts the given [Mapping](Mapping.md) at given index.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `mapping` | [`Mapping`](Mapping.md) |

##### Returns

`void`

#### Call Signature

```ts
insert(index, sequence): void;
```

Defined in: sequence.d.ts:53

Inserts the given Sequence at given index.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `sequence` | `Sequence` |

##### Returns

`void`

#### Call Signature

```ts
insert(index, scalar): void;
```

Defined in: sequence.d.ts:56

Inserts the given [Scalar](Scalar.md) at given index.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `scalar` | [`Scalar`](Scalar.md) |

##### Returns

`void`

#### Call Signature

```ts
insert(index, value): Scalar;
```

Defined in: sequence.d.ts:59

Inserts the value as a [Scalar](Scalar.md) at given index and returns the created scalar.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value` | `string` |

##### Returns

[`Scalar`](Scalar.md)

***

### length()

```ts
length(): number;
```

Defined in: sequence.d.ts:83

Returns the number of elements.

#### Returns

`number`

***

### remove()

```ts
remove(index): void;
```

Defined in: sequence.d.ts:86

Removes the node at the given index.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`void`

***

### set()

#### Call Signature

```ts
set(index, mapping): void;
```

Defined in: sequence.d.ts:38

Sets the child at given index to the given [Mapping](Mapping.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `mapping` | [`Mapping`](Mapping.md) |

##### Returns

`void`

#### Call Signature

```ts
set(index, sequence): void;
```

Defined in: sequence.d.ts:41

Sets the child at given index to the given Sequence.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `sequence` | `Sequence` |

##### Returns

`void`

#### Call Signature

```ts
set(index, scalar): void;
```

Defined in: sequence.d.ts:44

Sets the child at given index to the given [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `scalar` | [`Scalar`](Scalar.md) |

##### Returns

`void`

#### Call Signature

```ts
set(index, value): Scalar;
```

Defined in: sequence.d.ts:47

Sets the value at given index as a [Scalar](Scalar.md) and returns the created scalar.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `value` | `string` |

##### Returns

[`Scalar`](Scalar.md)
