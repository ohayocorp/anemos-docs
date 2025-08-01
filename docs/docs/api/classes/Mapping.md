# Class: Mapping

Defined in: mapping.d.ts:4

## Constructors

### Constructor

```ts
new Mapping(): Mapping;
```

Defined in: mapping.d.ts:8

Creates an empty mapping.

#### Returns

`Mapping`

### Constructor

```ts
new Mapping(record): Mapping;
```

Defined in: mapping.d.ts:14

Creates a mapping with the given key and value pairs. If a value contains a newline character,
its style will be set to literal. Otherwise, the style will be set to double quoted.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `record` | `Record`\<`string`, `string`\> |

#### Returns

`Mapping`

### Constructor

```ts
new Mapping(object): Mapping;
```

Defined in: mapping.d.ts:20

Creates a mapping with the given object. Object keys will be converted to scalars and object
values will be converted to scalars, sequences or mappings.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `object` | `Object` |

#### Returns

`Mapping`

## Methods

### clear()

```ts
clear(): void;
```

Defined in: mapping.d.ts:144

Clears all the contents of the mapping.

#### Returns

`void`

***

### clone()

```ts
clone(): Mapping;
```

Defined in: mapping.d.ts:150

Returns a deep clone of the mapping.

#### Returns

`Mapping`

***

### containsKey()

```ts
containsKey(key): boolean;
```

Defined in: mapping.d.ts:95

Returns true if the key exists in the keys list.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`boolean`

***

### ensureMapping()

#### Call Signature

```ts
ensureMapping(key): Mapping;
```

Defined in: mapping.d.ts:102

Ensures that the given key corresponds to a Mapping and returns it. Creates an empty Mapping
if the key doesn't exist or it exists but correspond to an empty [Scalar](Scalar.md). Throws if the key exists but
corresponds to a [Sequence](Sequence.md) or a non-empty [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`Mapping`

#### Call Signature

```ts
ensureMapping(keys): Mapping;
```

Defined in: mapping.d.ts:109

Ensures that the last key corresponds to a Mapping and returns it. Expects that each intermediate node
is a Mapping. Creates an empty Mapping if the key doesn't exist or it exists but correspond
to an empty [Scalar](Scalar.md). Throws if the last node exists but corresponds to a [Sequence](Sequence.md) or a non-empty [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `keys` | `string`[] |

##### Returns

`Mapping`

***

### ensureSequence()

#### Call Signature

```ts
ensureSequence(key): Sequence;
```

Defined in: mapping.d.ts:116

Ensures that the given key corresponds to a [Sequence](Sequence.md) and returns it. Creates an empty [Sequence](Sequence.md)
if the key doesn't exist or it exists but correspond to an empty [Scalar](Scalar.md). Throws if the key exists but
corresponds to a Mapping or a non-empty [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

[`Sequence`](Sequence.md)

#### Call Signature

```ts
ensureSequence(keys): Sequence;
```

Defined in: mapping.d.ts:123

Ensures that the last key corresponds to a [Sequence](Sequence.md) and returns it. Expects that each intermediate node
is a Mapping. Creates an empty [Sequence](Sequence.md) if the key doesn't exist or it exists but correspond
to an empty [Scalar](Scalar.md). Throws if the last node exists but corresponds to a Mapping or a non-empty [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `keys` | `string`[] |

##### Returns

[`Sequence`](Sequence.md)

***

### getMapping()

#### Call Signature

```ts
getMapping(key): Mapping;
```

Defined in: mapping.d.ts:26

Returns the Mapping corresponding to the given key. Returns null if the key doesn't
exist or it doesn't correspond to a Mapping.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`Mapping`

#### Call Signature

```ts
getMapping(keys): Mapping;
```

Defined in: mapping.d.ts:32

Returns a Mapping by following each one of the keys. Expects that each intermediate node is a Mapping,
and last node is a Mapping, otherwise returns null. Returns null if a key doesn't exist at any point in the chain.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `keys` | `string`[] |

##### Returns

`Mapping`

***

### getScalar()

#### Call Signature

```ts
getScalar(key): Scalar;
```

Defined in: mapping.d.ts:50

Returns the [Scalar](Scalar.md) corresponding to the given key. Returns null if the key doesn't
exist or it doesn't correspond to a [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

[`Scalar`](Scalar.md)

#### Call Signature

```ts
getScalar(keys): Scalar;
```

Defined in: mapping.d.ts:56

Returns a [Scalar](Scalar.md) by following each one of the keys. Expects that each intermediate node is a Mapping,
and last node is a [Scalar](Scalar.md), otherwise returns null. Returns null if a key doesn't exist at any point in the chain.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `keys` | `string`[] |

##### Returns

[`Scalar`](Scalar.md)

***

### getSequence()

#### Call Signature

```ts
getSequence(key): Sequence;
```

Defined in: mapping.d.ts:38

Returns the [Sequence](Sequence.md) corresponding to the given key. Returns null if the key doesn't
exist or it doesn't correspond to a [Sequence](Sequence.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

[`Sequence`](Sequence.md)

#### Call Signature

```ts
getSequence(keys): Sequence;
```

Defined in: mapping.d.ts:44

Returns a [Sequence](Sequence.md) by following each one of the keys. Expects that each intermediate node is a Mapping,
and last node is a [Sequence](Sequence.md), otherwise returns null. Returns null if a key doesn't exist at any point in the chain.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `keys` | `string`[] |

##### Returns

[`Sequence`](Sequence.md)

***

### getValue()

#### Call Signature

```ts
getValue(key): string;
```

Defined in: mapping.d.ts:62

Returns the value of the given key as a string. Returns null if the key doesn't exist
or it doesn't correspond to a [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`string`

#### Call Signature

```ts
getValue(keys): string;
```

Defined in: mapping.d.ts:68

Returns the value as a string by following each one of the keys. Expects that each intermediate node is a Mapping,
and last node is a [Scalar](Scalar.md), otherwise returns null. Returns null if a key doesn't exist at any point in the chain.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `keys` | `string`[] |

##### Returns

`string`

***

### indexOfKey()

```ts
indexOfKey(key): number;
```

Defined in: mapping.d.ts:126

Returns the index of the key, or -1 if it doesn't exist.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`number`

***

### insert()

#### Call Signature

```ts
insert(
   index, 
   key, 
   value): void;
```

Defined in: mapping.d.ts:83

Inserts the given key value pair at the given index.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `key` | `string` |
| `value` | `Mapping` |

##### Returns

`void`

#### Call Signature

```ts
insert(
   index, 
   key, 
   value): void;
```

Defined in: mapping.d.ts:86

Inserts the given key value pair at the given index.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `key` | `string` |
| `value` | [`Scalar`](Scalar.md) |

##### Returns

`void`

#### Call Signature

```ts
insert(
   index, 
   key, 
   value): void;
```

Defined in: mapping.d.ts:89

Inserts the given key value pair at the given index.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `key` | `string` |
| `value` | [`Sequence`](Sequence.md) |

##### Returns

`void`

#### Call Signature

```ts
insert(
   index, 
   key, 
   value): Scalar;
```

Defined in: mapping.d.ts:92

Inserts the given key value pair at the given index and returns the created [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |
| `key` | `string` |
| `value` | `string` |

##### Returns

[`Scalar`](Scalar.md)

***

### keyAt()

```ts
keyAt(index): Scalar;
```

Defined in: mapping.d.ts:129

Returns the key at given index as a [Scalar](Scalar.md).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

[`Scalar`](Scalar.md)

***

### keys()

```ts
keys(): Scalar[];
```

Defined in: mapping.d.ts:132

Returns the keys as an array of [Scalar](Scalar.md).

#### Returns

[`Scalar`](Scalar.md)[]

***

### length()

```ts
length(): number;
```

Defined in: mapping.d.ts:135

Returns the number of children.

#### Returns

`number`

***

### move()

```ts
move(key, index): void;
```

Defined in: mapping.d.ts:138

Moves the key and corresponding value to the given index.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `index` | `number` |

#### Returns

`void`

***

### remove()

```ts
remove(key): void;
```

Defined in: mapping.d.ts:141

Removes the key and corresponding value.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`void`

***

### set()

#### Call Signature

```ts
set(key, value): void;
```

Defined in: mapping.d.ts:71

Sets the given key to the given Mapping or Object.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `Object` \| `Mapping` |

##### Returns

`void`

#### Call Signature

```ts
set(key, value): void;
```

Defined in: mapping.d.ts:74

Sets the given key to the given [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | [`Scalar`](Scalar.md) |

##### Returns

`void`

#### Call Signature

```ts
set(key, value): void;
```

Defined in: mapping.d.ts:77

Sets the given key to the given [Sequence](Sequence.md) or array.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `any`[] \| [`Sequence`](Sequence.md) |

##### Returns

`void`

#### Call Signature

```ts
set(key, value): Scalar;
```

Defined in: mapping.d.ts:80

Sets the given key to the given string as a [Scalar](Scalar.md) and returns the created [Scalar](Scalar.md).

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `string` |

##### Returns

[`Scalar`](Scalar.md)

***

### sortByKey()

```ts
sortByKey(): void;
```

Defined in: mapping.d.ts:147

Sorts the child nodes by their keys.

#### Returns

`void`
