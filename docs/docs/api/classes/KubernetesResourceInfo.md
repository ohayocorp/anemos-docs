# Class: KubernetesResourceInfo

Defined in: kubernetesResourceInfo.d.ts:22

Contains all the API resources defined in the target cluster and enables listing them
and querying their existence.

## Methods

### addResource()

```ts
addResource(resource): void;
```

Defined in: kubernetesResourceInfo.d.ts:26

Adds the given API resource to the available resources list.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resource` | [`KubernetesResource`](KubernetesResource.md) |

#### Returns

`void`

***

### contains()

```ts
contains(apiVersion, kind): boolean;
```

Defined in: kubernetesResourceInfo.d.ts:29

Returns true if the given API resource exists in the target cluster.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiVersion` | `string` |
| `kind` | `string` |

#### Returns

`boolean`

***

### containsKind()

```ts
containsKind(kind): boolean;
```

Defined in: kubernetesResourceInfo.d.ts:32

Returns true if the given kind exists in the target cluster. This ignores the apiVersion field.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `kind` | `string` |

#### Returns

`boolean`

***

### isNamespaced()

```ts
isNamespaced(apiVersion, kind): boolean;
```

Defined in: kubernetesResourceInfo.d.ts:38

Returns true if the given API resource is namespaced. E.g. returns true for v1/Pod,
false for rbac.authorization.k8s.io/v1/ClusterRole.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `apiVersion` | `string` |
| `kind` | `string` |

#### Returns

`boolean`
