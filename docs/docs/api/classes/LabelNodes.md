# Class: LabelNodes

Defined in: documentExtensions.d.ts:275

## Constructors

### Constructor

```ts
new LabelNodes(): LabelNodes;
```

#### Returns

`LabelNodes`

## Properties

| Property | Modifier | Type | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="metadatalabels"></a> `metadataLabels` | `readonly` | [`LabelNode`](../types/LabelNode.md) | .metadata.labels | documentExtensions.d.ts:277 |
| <a id="servicemonitorselector"></a> `serviceMonitorSelector` | `readonly` | [`LabelNode`](../types/LabelNode.md) | .spec.selector for monitoring.coreos.com/v1 ServiceMonitors. | documentExtensions.d.ts:289 |
| <a id="serviceselector"></a> `serviceSelector` | `readonly` | [`LabelNode`](../types/LabelNode.md) | .spec.selector for Services. | documentExtensions.d.ts:286 |
| <a id="workloadlabels"></a> `workloadLabels` | `readonly` | [`LabelNode`](../types/LabelNode.md) | .metadata.labels for Pods, .spec.template.metadata.labels for other workloads. | documentExtensions.d.ts:280 |
| <a id="workloadselector"></a> `workloadSelector` | `readonly` | [`LabelNode`](../types/LabelNode.md) | .spec.selector.matchLabels for workloads other than Pods. | documentExtensions.d.ts:283 |
