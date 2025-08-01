# Class: Component

Defined in: component.d.ts:20

Component consists of a series of actions. The action are sorted by their
step and then executed by builder.

## Constructors

### Constructor

```ts
new Component(): Component;
```

#### Returns

`Component`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="actions"></a> `actions` | readonly [`Action`](Action.md)[] | Actions of this component. Don't modify this array directly, use [Component.addAction](#addaction). | component.d.ts:24 |

## Methods

### addAction()

```ts
addAction(step, callback): void;
```

Defined in: component.d.ts:31

Adds a new action to the component.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `step` | [`Step`](Step.md) | The step during which this action will be executed. |
| `callback` | (`context`) => `void` | The callback function to be executed for this action. |

#### Returns

`void`

***

### getComponentType()

```ts
getComponentType(): string;
```

Defined in: component.d.ts:91

Gets the type of the component.

#### Returns

`string`

The type of the component, or null if not set.

#### Description

The component type is a string that can be used to identify the type of component
that this component belongs to. It is not used by the builder, but can be used by other components.

***

### getCustomData()

```ts
getCustomData(key): any;
```

Defined in: component.d.ts:40

Gets the custom data associated with the given key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the custom data. |

#### Returns

`any`

The custom data associated with the given key, or null if not found.

#### Description

Custom data is a key-value pair that can be used to store additional information
about the component. It is not used by the builder, but can be used by other components.

***

### getIdentifier()

```ts
getIdentifier(): string;
```

Defined in: component.d.ts:75

Gets the identifier of the component.

#### Returns

`string`

The identifier of the component, or null if not set.

#### Description

The identifier is a unique string that can be used to identify the component.
It is not used by the builder, but can be used by other components to identify the component.

***

### getMetadata()

```ts
getMetadata(key): string;
```

Defined in: component.d.ts:58

Gets the metadata associated with the given key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the metadata. |

#### Returns

`string`

The metadata associated with the given key, or null if not found.

#### Description

Metadata is a string key-value pair that can be used to store additional information
about the component. It is not used by the builder, but can be used by other components.

***

### setComponentType()

```ts
setComponentType(componentType): void;
```

Defined in: component.d.ts:99

Sets the component type of the component.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `componentType` | `string` | The component type to set for the component. |

#### Returns

`void`

#### Description

The component type is a string that can be used to identify the type of component
that this component belongs to. It is not used by the builder, but can be used by other components.

***

### setCustomData()

```ts
setCustomData(key, value): void;
```

Defined in: component.d.ts:49

Sets the custom data associated with the given key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the custom data. |
| `value` | `any` | The value to set for the custom data. |

#### Returns

`void`

#### Description

Custom data is a key-value pair that can be used to store additional information
about the component. It is not used by the builder, but can be used by other components.

***

### setIdentifier()

```ts
setIdentifier(identifier): void;
```

Defined in: component.d.ts:83

Sets the identifier of the component.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `identifier` | `string` | The identifier to set for the component. |

#### Returns

`void`

#### Description

The identifier is a unique string that can be used to identify the component.
It is not used by the builder, but can be used by other components to identify the component.

***

### setMetadata()

```ts
setMetadata(key, value): void;
```

Defined in: component.d.ts:67

Sets the metadata associated with the given key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | The key of the metadata. |
| `value` | `string` | The value to set for the metadata. |

#### Returns

`void`

#### Description

Metadata is a string key-value pair that can be used to store additional information
about the component. It is not used by the builder, but can be used by other components.
