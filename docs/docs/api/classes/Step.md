# Class: Step

Defined in: step.d.ts:58

A class that can be used to specify order of things in a flexible manner. This object consists of a
list of numbers. When two steps are compared, each number in their lists are compared according to their indexes.
If one of the lists do not have a number at an index, it is assumed to have 0.

For example, if (1, 2) is compared to (1), first the numbers at index 0 are compared. Since they are equal then the numbers
at index 1 are compared. The second step does not have a number at that index, so it is assumed that it has 0 and the first step
is determined to be greater than the second one.

This makes it possible to create a step between any two steps. For example, given two steps (1, 1), (1, 2),
the step (1, 1, 1) is between them.

## Constructors

### Constructor

```ts
new Step(description, numbers): Step;
```

Defined in: step.d.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `description` | `string` |
| `numbers` | `number`[] |

#### Returns

`Step`

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="description"></a> `description` | `string` | A description of the step, useful for debugging and logging. | step.d.ts:62 |
| <a id="numbers"></a> `numbers` | `number`[] | The list of numbers that define the step. | step.d.ts:65 |

## Methods

### compareTo()

```ts
compareTo(other): number;
```

Defined in: step.d.ts:71

Compares this step to another step.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Step` |

#### Returns

`number`

***

### equals()

```ts
equals(other): boolean;
```

Defined in: step.d.ts:68

Returns true if the two steps are equal.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | `Step` |

#### Returns

`boolean`
