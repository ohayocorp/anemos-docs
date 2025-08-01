# Enumeration: YamlStyle

Defined in: scalar.d.ts:6

Represents a YAML scalar value with a specific style.
The scalar can be a string, number, or boolean and can have different styles such as
plain, single-quoted, double-quoted, literal, or folded.

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="doublequoted"></a> `DoubleQuoted` | `number` | Content is wrapped in double quotes. | scalar.d.ts:14 |
| <a id="folded"></a> `Folded` | `number` | Content is represented as a folded block (folding newlines). E.g.: `folded: > This is a folded block. It folds newlines.` | scalar.d.ts:36 |
| <a id="literal"></a> `Literal` | `number` | Content is represented as a literal block (preserving newlines). E.g.: `literal: | This is a literal block. It preserves newlines.` | scalar.d.ts:25 |
| <a id="plain"></a> `Plain` | `number` | No quotes or special formatting. | scalar.d.ts:8 |
| <a id="singlequoted"></a> `SingleQuoted` | `number` | Content is wrapped in single quotes. | scalar.d.ts:11 |
