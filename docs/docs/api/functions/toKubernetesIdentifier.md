# Function: toKubernetesIdentifier()

```ts
function toKubernetesIdentifier(text): string;
```

Defined in: stringExtensions.d.ts:11

Converts a string to a valid Kubernetes identifier by replacing invalid characters with a dash.
Truncates the string to 63 characters if it exceeds that length.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

## Returns

`string`
