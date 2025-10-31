// @ts-check
/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const typedocSidebar = {
  items: [
    {
      type: "category",
      label: "Namespaces",
      items: [
        {
          type: "category",
          label: "apply",
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "doc",
                  id: "api/classes/apply.Options",
                  label: "Options"
                }
              ]
            }
          ],
          link: {
            type: "doc",
            id: "api/modules/apply"
          }
        },
        {
          type: "category",
          label: "collectCRDs",
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "doc",
                  id: "api/classes/collectCRDs.Options",
                  label: "Options"
                }
              ]
            },
            {
              type: "category",
              label: "Variables",
              items: [
                {
                  type: "doc",
                  id: "api/variables/collectCRDs.componentType",
                  label: "componentType"
                }
              ]
            }
          ],
          link: {
            type: "doc",
            id: "api/modules/collectCRDs"
          }
        },
        {
          type: "category",
          label: "collectNamespaces",
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "doc",
                  id: "api/classes/collectNamespaces.Options",
                  label: "Options"
                }
              ]
            },
            {
              type: "category",
              label: "Variables",
              items: [
                {
                  type: "doc",
                  id: "api/variables/collectNamespaces.componentType",
                  label: "componentType"
                }
              ]
            }
          ],
          link: {
            type: "doc",
            id: "api/modules/collectNamespaces"
          }
        },
        {
          type: "category",
          label: "createReferencedNamespaces",
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "doc",
                  id: "api/classes/createReferencedNamespaces.Options",
                  label: "Options"
                }
              ]
            },
            {
              type: "category",
              label: "Variables",
              items: [
                {
                  type: "doc",
                  id: "api/variables/createReferencedNamespaces.componentType",
                  label: "componentType"
                }
              ]
            }
          ],
          link: {
            type: "doc",
            id: "api/modules/createReferencedNamespaces"
          }
        },
        {
          type: "category",
          label: "deleteOutputDirectory",
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "doc",
                  id: "api/classes/deleteOutputDirectory.Options",
                  label: "Options"
                }
              ]
            }
          ],
          link: {
            type: "doc",
            id: "api/modules/deleteOutputDirectory"
          }
        },
        {
          type: "category",
          label: "file",
          items: [
            {
              type: "category",
              label: "Functions",
              items: [
                {
                  type: "doc",
                  id: "api/functions/file.currentScriptDirectory",
                  label: "currentScriptDirectory"
                },
                {
                  type: "doc",
                  id: "api/functions/file.currentScriptPath",
                  label: "currentScriptPath"
                },
                {
                  type: "doc",
                  id: "api/functions/file.mainScriptDirectory",
                  label: "mainScriptDirectory"
                },
                {
                  type: "doc",
                  id: "api/functions/file.mainScriptPath",
                  label: "mainScriptPath"
                },
                {
                  type: "doc",
                  id: "api/functions/file.readAllBytes",
                  label: "readAllBytes"
                },
                {
                  type: "doc",
                  id: "api/functions/file.readAllText",
                  label: "readAllText"
                },
                {
                  type: "doc",
                  id: "api/functions/file.writeAllBytes",
                  label: "writeAllBytes"
                },
                {
                  type: "doc",
                  id: "api/functions/file.writeAllText",
                  label: "writeAllText"
                }
              ]
            }
          ],
          link: {
            type: "doc",
            id: "api/modules/file"
          }
        },
        {
          type: "category",
          label: "steps",
          items: [
            {
              type: "category",
              label: "Variables",
              items: [
                {
                  type: "doc",
                  id: "api/variables/steps.generateResources",
                  label: "generateResources"
                },
                {
                  type: "doc",
                  id: "api/variables/steps.generateResourcesBasedOnOtherResources",
                  label: "generateResourcesBasedOnOtherResources"
                },
                {
                  type: "doc",
                  id: "api/variables/steps.modify",
                  label: "modify"
                },
                {
                  type: "doc",
                  id: "api/variables/steps.output",
                  label: "output"
                },
                {
                  type: "doc",
                  id: "api/variables/steps.populateKubernetesResources",
                  label: "populateKubernetesResources"
                },
                {
                  type: "doc",
                  id: "api/variables/steps.sanitize",
                  label: "sanitize"
                },
                {
                  type: "doc",
                  id: "api/variables/steps.specifyProvisionerDependencies",
                  label: "specifyProvisionerDependencies"
                }
              ]
            }
          ],
          link: {
            type: "doc",
            id: "api/modules/steps"
          }
        },
        {
          type: "category",
          label: "writeDocuments",
          items: [
            {
              type: "category",
              label: "Classes",
              items: [
                {
                  type: "doc",
                  id: "api/classes/writeDocuments.Options",
                  label: "Options"
                }
              ]
            }
          ],
          link: {
            type: "doc",
            id: "api/modules/writeDocuments"
          }
        }
      ]
    },
    {
      type: "category",
      label: "Enumerations",
      items: [
        {
          type: "doc",
          id: "api/enums/EnvironmentType",
          label: "EnvironmentType"
        },
        {
          type: "doc",
          id: "api/enums/KubernetesDistribution",
          label: "KubernetesDistribution"
        },
        {
          type: "doc",
          id: "api/enums/ProvisionerType",
          label: "ProvisionerType"
        },
        {
          type: "doc",
          id: "api/enums/YamlStyle",
          label: "YamlStyle"
        }
      ]
    },
    {
      type: "category",
      label: "Classes",
      items: [
        {
          type: "doc",
          id: "api/classes/Action",
          label: "Action"
        },
        {
          type: "doc",
          id: "api/classes/AddDocumentOptions",
          label: "AddDocumentOptions"
        },
        {
          type: "doc",
          id: "api/classes/AdditionalFile",
          label: "AdditionalFile"
        },
        {
          type: "doc",
          id: "api/classes/BuildContext",
          label: "BuildContext"
        },
        {
          type: "doc",
          id: "api/classes/Builder",
          label: "Builder"
        },
        {
          type: "doc",
          id: "api/classes/BuilderOptions",
          label: "BuilderOptions"
        },
        {
          type: "doc",
          id: "api/classes/Component",
          label: "Component"
        },
        {
          type: "doc",
          id: "api/classes/Document",
          label: "Document"
        },
        {
          type: "doc",
          id: "api/classes/DocumentGroup",
          label: "DocumentGroup"
        },
        {
          type: "doc",
          id: "api/classes/Environment",
          label: "Environment"
        },
        {
          type: "doc",
          id: "api/classes/HelmChart",
          label: "HelmChart"
        },
        {
          type: "doc",
          id: "api/classes/HelmOptions",
          label: "HelmOptions"
        },
        {
          type: "doc",
          id: "api/classes/KubernetesCluster",
          label: "KubernetesCluster"
        },
        {
          type: "doc",
          id: "api/classes/KubernetesResource",
          label: "KubernetesResource"
        },
        {
          type: "doc",
          id: "api/classes/KubernetesResourceInfo",
          label: "KubernetesResourceInfo"
        },
        {
          type: "doc",
          id: "api/classes/LabelNodes",
          label: "LabelNodes"
        },
        {
          type: "doc",
          id: "api/classes/Mapping",
          label: "Mapping"
        },
        {
          type: "doc",
          id: "api/classes/OutputConfiguration",
          label: "OutputConfiguration"
        },
        {
          type: "doc",
          id: "api/classes/Provisioner",
          label: "Provisioner"
        },
        {
          type: "doc",
          id: "api/classes/Scalar",
          label: "Scalar"
        },
        {
          type: "doc",
          id: "api/classes/Sequence",
          label: "Sequence"
        },
        {
          type: "doc",
          id: "api/classes/Step",
          label: "Step"
        },
        {
          type: "doc",
          id: "api/classes/Version",
          label: "Version"
        }
      ]
    },
    {
      type: "category",
      label: "Type Aliases",
      items: [
        {
          type: "doc",
          id: "api/types/LabelNode",
          label: "LabelNode"
        }
      ]
    },
    {
      type: "category",
      label: "Functions",
      items: [
        {
          type: "doc",
          id: "api/functions/dedent",
          label: "dedent"
        },
        {
          type: "doc",
          id: "api/functions/indent",
          label: "indent"
        },
        {
          type: "doc",
          id: "api/functions/parseDocument",
          label: "parseDocument"
        },
        {
          type: "doc",
          id: "api/functions/parseMapping",
          label: "parseMapping"
        },
        {
          type: "doc",
          id: "api/functions/parseSequence",
          label: "parseSequence"
        },
        {
          type: "doc",
          id: "api/functions/serializeToYaml",
          label: "serializeToYaml"
        },
        {
          type: "doc",
          id: "api/functions/toKubernetesIdentifier",
          label: "toKubernetesIdentifier"
        }
      ]
    }
  ]
};
module.exports = typedocSidebar.items;