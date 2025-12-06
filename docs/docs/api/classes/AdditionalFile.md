# Class: AdditionalFile

Defined in: documentGroup.d.ts:76

Represents a file that is not a document but should be included in the output.
It has a path and content, and is typically used for configuration files or other auxiliary files
that need to be written alongside the documents.

## Constructors

### Constructor

```ts
new AdditionalFile(path, content): AdditionalFile;
```

Defined in: documentGroup.d.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `content` | `string` |

#### Returns

`AdditionalFile`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="content"></a> `content` | `string` | The content of the additional file. | documentGroup.d.ts:83 |
| <a id="path"></a> `path` | `string` | The file path to write the additional file into. | documentGroup.d.ts:80 |
