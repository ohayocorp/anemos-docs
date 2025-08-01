# Class: Scalar

Defined in: scalar.d.ts:42

Represents a YAML scalar value. A scalar has a string value and an optional style.

## Constructors

### Constructor

```ts
new Scalar(value?, style?): Scalar;
```

Defined in: scalar.d.ts:50

Creates a scalar with the given value and style.
If no value is provided, it defaults to an empty string.
If no style is provided, it defaults to plain style.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value?` | `string` \| `number` \| `boolean` | The scalar value (string, number, or boolean). |
| `style?` | [`YamlStyle`](../enums/YamlStyle.md) | The style of the scalar (YamlStyle). |

#### Returns

`Scalar`

## Methods

### clone()

```ts
clone(): Scalar;
```

Defined in: scalar.d.ts:62

Returns a deep clone of the scalar.

#### Returns

`Scalar`

***

### getValue()

```ts
getValue(): string;
```

Defined in: scalar.d.ts:53

Returns the value of the scalar.

#### Returns

`string`

***

### setStyle()

```ts
setStyle(style): void;
```

Defined in: scalar.d.ts:59

Sets the style of the scalar.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | [`YamlStyle`](../enums/YamlStyle.md) |

#### Returns

`void`

***

### setValue()

```ts
setValue(value): void;
```

Defined in: scalar.d.ts:56

Sets the value of the scalar.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` \| `number` \| `boolean` |

#### Returns

`void`
