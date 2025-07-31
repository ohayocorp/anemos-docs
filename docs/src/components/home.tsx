import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import { Spotlight } from '@site/src/components/ui/spotlight';
import { Button, PrimaryButton } from '@site/src/components/ui/button';
import { ExpandableCodeBlock, CodeBlockExpander, ExpandableCodeBlockProvider } from '@site/src/components/ui/expandableCodeBlock';
import GitOpsJs from '!!raw-loader!@site/static/examples/gitops/gitops.js';
import DeploymentYaml from '!!raw-loader!@site/static/examples/gitops/output/manifests/anemos-hello-world/deployment.yaml';
import ServiceYaml from '!!raw-loader!@site/static/examples/gitops/output/manifests/anemos-hello-world/service.yaml';
import IngressYaml from '!!raw-loader!@site/static/examples/gitops/output/manifests/anemos-hello-world/ingress.yaml';
import SimplePackageJs from '!!raw-loader!@site/static/examples/simple-package.js';
import ModifyJs from '!!raw-loader!@site/static/examples/modify/modify.js';
import ModifyDeploymentYaml from '!!raw-loader!@site/static/examples/modify/output/manifests/anemos-hello-world/deployment.yaml';
import ModifyServiceYaml from '!!raw-loader!@site/static/examples/modify/output/manifests/anemos-hello-world/service.yaml';
import HelmChartsJs from '!!raw-loader!@site/static/examples/helm-charts/helm-charts.js';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function Header(): ReactNode {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className="snap-start">
      <Spotlight className="absolute -top-10 left-0 md:-top-50 md:left-40 z-[-10]" fill="white" />
      <div className="flex flex-col items-center rounded-md p-10 pb-0">
        <div className="text-center font-[Sora] text-black dark:text-white">
          <p className="text-center text-4xl font-bold bg-gradient-to-tl p-2 from-neutral-900 to-neutral-600 md:text-6xl dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent">
            Easy and Flexible Kubernetes Package Management
          </p>
          <p className="text-base md:text-2xl">
            Using GitOps or applying manifests via CLI? Anemos has you covered.
          </p>
        </div>
        <div className="flex my-12 gap-8">
          <Button href={withBaseUrl('docs/')}>Learn more</Button>
          <PrimaryButton href={withBaseUrl('docs/installation/')}>
            Get started
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export const Feature = ({ title = '', description = '', children = null, className = '', ...props }) => {
  return (
    <>
      <div className="py-8 overflow-hidden snap-start">
        <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="max-w-screen-xl mx-auto mb-4 px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {title && (
                <p className="text-3xl text-black dark:text-white font-bold leading-9 font-[Sora] md:text-4xl md:leading-10">
                  {title}
                </p>
              )}
              {description && (
                <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              )}
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

function Features() {
  const siteConfig = useDocusaurusContext().siteConfig;

  return (
    <>
      <Feature
        title="Define packages easily"
        description={'Define all your manifests for a package in a single file for easy sharing. Use power of NPM ecosystem for more flexibility.'}>

        <ExpandableCodeBlockProvider forceShowExpander={true}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CodeBlockExpander />
          </div>
          <ExpandableCodeBlock title="package.js" language="javascript" showLineNumbers={true}>
            {SimplePackageJs}
          </ExpandableCodeBlock>
        </ExpandableCodeBlockProvider>
      </Feature>

      <Feature
        title="Apply with confidence"
        description={'Apply manifests to your cluster or delete them, seeing the diffs before each operation.'}>

        <ExpandableCodeBlockProvider forceShowExpander={true}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CodeBlockExpander />
          </div>
          <Tabs>
            <TabItem value="Apply">
              <ExpandableCodeBlock title="shell" showLineNumbers={true}>
                <Comment newLine={true}># Apply manifests from URL or local file</Comment>
                <Command newLine={true}>anemos apply -y {siteConfig.url}/examples/hello-world.js</Command>
                <ApplyOutput />
              </ExpandableCodeBlock>
            </TabItem>

            <TabItem value="Apply Values & Diff">
              <ExpandableCodeBlock title="shell" showLineNumbers={true}>
                <Comment newLine={true}># Pass YAML or JSON options</Comment>
                <Command newLine={true}>anemos apply -y {siteConfig.url}/examples/hello-world.js -f - &lt;&lt;EOF</Command>
                <Command newLine={true}>replicaCount: 3</Command>
                <Command newLine={true}>EOF</Command>
                <ApplyValuesOutput />
              </ExpandableCodeBlock>
            </TabItem>

            <TabItem value="List Apply Sets">
              <ExpandableCodeBlock title="shell" showLineNumbers={true}>
                <Command newLine={true}>anemos list</Command>
                <ListOutput />
              </ExpandableCodeBlock>
            </TabItem>

            <TabItem value="Delete & Confirmation">
              <ExpandableCodeBlock title="shell" showLineNumbers={true}>
                <Comment newLine={true}># Omit -y to confirm apply/delete operations</Comment>
                <Command newLine={true}>anemos delete anemos-hello-world</Command>
                <DeleteOutput />
              </ExpandableCodeBlock>
            </TabItem>
          </Tabs>
        </ExpandableCodeBlockProvider>
      </Feature>

      <Feature
        title="Using GitOps?"
        description="Use power of JavaScript to generate and edit manifests for all your applications in a single place.">

        <ExpandableCodeBlockProvider forceShowExpander={true}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CodeBlockExpander />
          </div>
          <Tabs>
            <TabItem value="index.js">
              <ExpandableCodeBlock language="javascript" showLineNumbers={true}>
                {GitOpsJs.replace('http://localhost:3000/', `${siteConfig.url}/`)}
              </ExpandableCodeBlock>
            </TabItem>
            <TabItem value="deployment.yaml">
              <ExpandableCodeBlock language="javascript" showLineNumbers={true}>
                {DeploymentYaml}
              </ExpandableCodeBlock>
            </TabItem>
            <TabItem value="service.yaml">
              <ExpandableCodeBlock language="javascript" showLineNumbers={true}>
                {ServiceYaml}
              </ExpandableCodeBlock>
            </TabItem>
            <TabItem value="ingress.yaml">
              <ExpandableCodeBlock language="javascript" showLineNumbers={true}>
                {IngressYaml}
              </ExpandableCodeBlock>
            </TabItem>
          </Tabs>
        </ExpandableCodeBlockProvider>
      </Feature>

      <Feature
        title="Modify manifests in any way you want"
        description={"Modify generated manifests using JavaScript. Useful when you need quick changes or don't want to wait for new features/bug fixes."}>

        <ExpandableCodeBlockProvider forceShowExpander={true}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CodeBlockExpander />
          </div>
          <Tabs>
            <TabItem value="index.js">
              <ExpandableCodeBlock language="javascript" showLineNumbers={true}>
                {ModifyJs.replace('http://localhost:3000/', `${siteConfig.url}/`)}
              </ExpandableCodeBlock>
            </TabItem>
            <TabItem value="deployment.yaml">
              <ExpandableCodeBlock language="javascript" showLineNumbers={true}>
                {ModifyDeploymentYaml.replace('  labels:', '// highlight-start\n  labels:').replace('all-documents: example', 'all-documents: example\n// highlight-end')}
              </ExpandableCodeBlock>
            </TabItem>
            <TabItem value="service.yaml">
              <ExpandableCodeBlock language="javascript" showLineNumbers={true}>
                {ModifyServiceYaml.replace('  labels:', '// highlight-start\n  labels:').replace('all-documents: example', 'all-documents: example\n// highlight-end')}
              </ExpandableCodeBlock>
            </TabItem>
          </Tabs>
        </ExpandableCodeBlockProvider>
      </Feature>

      <Feature
        title="Can't give up Helm?"
        description={'Embed Helm charts in your workflows easily and benefit from Anemos\' features.'}>

        <ExpandableCodeBlockProvider forceShowExpander={true}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CodeBlockExpander />
          </div>
          <ExpandableCodeBlock title="helm.js" language="javascript" showLineNumbers={true}>
            {HelmChartsJs}
          </ExpandableCodeBlock>
        </ExpandableCodeBlockProvider>
      </Feature>

      <Feature>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
          <PrimaryButton key="apply" href={'/docs/installation/'}>
            Get started
          </PrimaryButton>
        </div>
      </Feature>
    </>
  );
}

export function ApplyOutput(): ReactNode {
  return (
    <>
      <LogInfo time='09:44:11.880'>Starting to build documents</LogInfo>
      <LogInfo time='09:44:11.881'>Applying actions for step: '<Green>2</Green>' - <Green>Sanitize</Green></LogInfo>
      <LogInfo time='09:44:11.881'>Applying actions for step: '<Green>5</Green>' - <Green>Generate resources</Green></LogInfo>
      <LogInfo time='09:44:11.883'>Applying actions for step: '<Green>100</Green>' - <Green>Apply</Green></LogInfo>
      <br />
      <ShellLine>Summary of changes:</ShellLine>
      <br />
      <ShellLine>OP  NAMESPACE  RESOURCE</ShellLine>
      <Green newLine={true}>A   default    deployments/anemos-hello-world</Green>
      <Green newLine={true}>A   default    services/anemos-hello-world</Green>
      <br />
      <LogInfo time='09:44:11.948'>Successfully applied Kubernetes manifests</LogInfo>
    </>
  );
}

export function ApplyValuesOutput(): ReactNode {
  return (
    <>
      <LogInfo time='09:45:12.724'>Starting to build documents</LogInfo>
      <LogInfo time='09:45:12.724'>Applying actions for step: '<Green>2</Green>' - <Green>Sanitize</Green></LogInfo>
      <LogInfo time='09:45:12.724'>Applying actions for step: '<Green>5</Green>' - <Green>Generate resources</Green></LogInfo>
      <LogInfo time='09:45:12.724'>Applying actions for step: '<Green>100</Green>' - <Green>Apply</Green></LogInfo>
      <br />
      <ShellLine>No changes for <Yellow>services/anemos-hello-world</Yellow></ShellLine>
      <br />
      <ShellLine>Changes to be applied:</ShellLine>
      <br />
      <ShellLine><Yellow>deployments/anemos-hello-world</Yellow>:</ShellLine>
      <ShellLine>  ...</ShellLine>
      <ShellLine>  uid: b28aff42-7cc6-418b-9137-a98eb0502da1</ShellLine>
      <ShellLine>  spec:</ShellLine>
      <ShellLine>    progressDeadlineSeconds: 600</ShellLine>
      <ShellLine>    <Red>replicas: 1</Red></ShellLine>
      <ShellLine>    <Green>replicas: 3</Green></ShellLine>
      <ShellLine>  ...</ShellLine>
      <ShellLine>    readyReplicas: 1</ShellLine>
      <ShellLine>    replicas: 1</ShellLine>
      <ShellLine>    updatedReplicas: 1</ShellLine>
      <br />
      <ShellLine>OP  NAMESPACE  RESOURCE</ShellLine>
      <Yellow newLine={true}>M   default    deployments/anemos-hello-world</Yellow>
      <br />
      <LogInfo time='09:45:12.787'>Successfully applied Kubernetes manifests</LogInfo>
    </>
  );
}

function ListOutput(): ReactNode {
  return (
    <>
      <ShellLine>NAME                CREATED AT</ShellLine>
      <ShellLine>----                ----------</ShellLine>
      <ShellLine>anemos-hello-world  2025-07-30 09:44:12</ShellLine>
    </>
  );
}

function DeleteOutput(): ReactNode {
  return (
    <>
      <ShellLine>Deleting objects for apply set anemos-hello-world:</ShellLine>
      <br />
      <ShellLine>NAMESPACE  RESOURCE     NAME</ShellLine>
      <ShellLine><Red>default    deployments  anemos-hello-world</Red></ShellLine>
      <ShellLine><Red>default    services     anemos-hello-world</Red></ShellLine>
      <br />
      <ShellLine>Apply these changes? [y/N]: y</ShellLine>
      <ShellLine>Successfully deleted object <Yellow>deployments/anemos-hello-world</Yellow>, namespace: <Yellow>default</Yellow></ShellLine>
      <ShellLine>Successfully deleted object <Yellow>services/anemos-hello-world</Yellow>, namespace: <Yellow>default</Yellow></ShellLine>
    </>
  );
}

export function BuildApplyOutput(): ReactNode {
  return (
    <>
      <LogInfo time='11:38:20.582'>Starting to build documents</LogInfo>
      <LogInfo time='11:38:20.582'>Applying actions for step: '<Green>2</Green>' - <Green>Sanitize</Green></LogInfo>
      <LogInfo time='11:38:20.583'>Applying actions for step: '<Green>5</Green>' - <Green>Generate resources</Green></LogInfo>
      <LogInfo time='11:38:20.583'>Applying actions for step: '<Green>99,-1</Green>' - <Green>Delete outputs</Green></LogInfo>
      <LogInfo time='11:38:20.584'>Applying actions for step: '<Green>99</Green>' - <Green>Output</Green></LogInfo>
      <LogInfo time='11:38:20.584'>Writing documents to <Green>/home/ohayocorp/anemos-project/output/manifests</Green></LogInfo>
      <LogInfo time='11:38:20.587'>Applying actions for step: '<Green>100</Green>' - <Green>Apply</Green></LogInfo>
      <LogInfo time='11:38:20.588'>Applying document group: <Green>anemos-hello-world</Green></LogInfo>
      <ShellLine>Summary of changes:</ShellLine>
      <br />

      <ShellLine>OP  NAMESPACE  RESOURCE</ShellLine>
      <Green newLine={true}>A   default    deployments/anemos-hello-world</Green>
      <Green newLine={true}>A   default    services/anemos-hello-world</Green>
      <br />
      <ShellLine>Apply these changes? [y/N]: y</ShellLine>
      <LogInfo time='11:38:23.053'>Applying document group: <Green>simple-package</Green></LogInfo>
      <ShellLine>Summary of changes:</ShellLine>
      <br />

      <ShellLine>OP  NAMESPACE  RESOURCE</ShellLine>
      <Green newLine={true}>A   default    pods/simple-package</Green>
      <Green newLine={true}>A   default    services/simple-package</Green>
      <br />
      <ShellLine>Apply these changes? [y/N]: y</ShellLine>
      <br />
      <LogInfo time='11:38:24.249'>Successfully applied Kubernetes manifests</LogInfo>
    </>
  );
}

function LogInfo({ children, time }: { children: ReactNode, time: string }): ReactNode {
  return (
    <>
      <ShellLine newLine={false}>[{time}] </ShellLine>
      <ShellLine newLine={false} color='DodgerBlue'>INFO: </ShellLine>
      <ShellLine newLine={true}>{children}</ShellLine>
    </>
  );
}

function Comment({ children, newLine = false }: { children: ReactNode, newLine?: boolean }): ReactNode {
  return ShellLine({ children, newLine });
}

function Command({ children, newLine = false }: { children: ReactNode, newLine?: boolean }): ReactNode {
  return ShellLine({ children, newLine, color: 'LightSkyBlue' });
}

function Green({ children, newLine = false }: { children: ReactNode, newLine?: boolean }): ReactNode {
  return ShellLine({ children, newLine, color: 'LawnGreen' });
}

function Yellow({ children, newLine = false }: { children: ReactNode, newLine?: boolean }): ReactNode {
  return ShellLine({ children, newLine, color: 'GoldenRod' });
}

function Red({ children, newLine = false }: { children: ReactNode, newLine?: boolean }): ReactNode {
  return ShellLine({ children, newLine, color: 'Red' });
}

function ShellLine({ children, newLine = true, color = null }: { children: ReactNode, newLine?: boolean, color?: string }): ReactNode {
  return (
    <span style={{ color: color || '' }}>
      {children}
      {newLine && <br />}
    </span>
  );
}

export default function Home(): ReactNode {
  return (
    <>
      <div className="container snap-y z-[10] snap-proximity">
        <Header />
        <Features />
      </div>
    </>
  );
}
