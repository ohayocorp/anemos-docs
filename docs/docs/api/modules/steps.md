# steps

Built-in steps in execution order:
- [populateKubernetesResources](../variables/steps.populateKubernetesResources.md)            -> 1
- [sanitize](../variables/steps.sanitize.md)                               -> 2
- [generateResources](../variables/steps.generateResources.md)                      -> 5
- [generateResourcesBasedOnOtherResources](../variables/steps.generateResourcesBasedOnOtherResources.md) -> 5,1
- [modify](../variables/steps.modify.md)                                 -> 6
- [output](../variables/steps.output.md)                                 -> 99

## Variables

- [generateResources](../variables/steps.generateResources.md)
- [generateResourcesBasedOnOtherResources](../variables/steps.generateResourcesBasedOnOtherResources.md)
- [modify](../variables/steps.modify.md)
- [output](../variables/steps.output.md)
- [populateKubernetesResources](../variables/steps.populateKubernetesResources.md)
- [sanitize](../variables/steps.sanitize.md)
