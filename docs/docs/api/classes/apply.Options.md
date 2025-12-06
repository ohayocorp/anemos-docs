# Class: Options

Defined in: apply.d.ts:15

## Constructors

### Constructor

```ts
new Options(): Options;
```

Defined in: apply.d.ts:16

#### Returns

`Options`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="documentgroups"></a> `documentGroups?` | `string`[] | Regex patterns of document group paths to include. If not set, all groups will be included. | apply.d.ts:19 |
| <a id="forceconflicts"></a> `forceConflicts?` | `boolean` | Forcefully apply changes even if there are conflicts on server side apply. | apply.d.ts:25 |
| <a id="skipconfirmation"></a> `skipConfirmation?` | `boolean` | Skip confirmation prompt and apply changes directly. | apply.d.ts:22 |
