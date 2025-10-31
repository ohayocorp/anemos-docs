# Class: Provisioner

Defined in: provisioner.d.ts:9

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="documentgroup"></a> `documentGroup` | [`DocumentGroup`](DocumentGroup.md) | provisioner.d.ts:13 |
| <a id="type"></a> `type` | [`ProvisionerType`](../enums/ProvisionerType.md) | provisioner.d.ts:12 |

## Methods

### runAfter()

```ts
runAfter(provisioner): void;
```

Defined in: provisioner.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `provisioner` | `Provisioner` |

#### Returns

`void`

***

### runBefore()

```ts
runBefore(provisioner): void;
```

Defined in: provisioner.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `provisioner` | `Provisioner` |

#### Returns

`void`
