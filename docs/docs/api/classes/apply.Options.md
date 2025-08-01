# Class: Options

Defined in: apply.d.ts:17

## Constructors

### Constructor

```ts
new Options(): Options;
```

Defined in: apply.d.ts:18

#### Returns

`Options`

### Constructor

```ts
new Options(documents): Options;
```

Defined in: apply.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documents` | [`DocumentGroup`](DocumentGroup.md) |

#### Returns

`Options`

### Constructor

```ts
new Options(documents, namespace): Options;
```

Defined in: apply.d.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documents` | [`DocumentGroup`](DocumentGroup.md) |
| `namespace` | `string` |

#### Returns

`Options`

### Constructor

```ts
new Options(documents, name): Options;
```

Defined in: apply.d.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documents` | [`Document`](Document.md)[] |
| `name` | `string` |

#### Returns

`Options`

### Constructor

```ts
new Options(
   documents, 
   name, 
   namespace): Options;
```

Defined in: apply.d.ts:22

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `documents` | [`Document`](Document.md)[] |
| `name` | `string` |
| `namespace` | `string` |

#### Returns

`Options`

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="applysetparentname"></a> `applySetParentName?` | `string` | apply.d.ts:25 |
| <a id="applysetparentnamespace"></a> `applySetParentNamespace?` | `string` | apply.d.ts:26 |
| <a id="documents"></a> `documents?` | [`Document`](Document.md)[] | apply.d.ts:24 |
| <a id="skipconfirmation"></a> `skipConfirmation?` | `boolean` | apply.d.ts:27 |
