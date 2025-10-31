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
          <p className="text-sm md:text-lg mt-2 max-w-3xl mx-auto text-neutral-700 dark:text-neutral-300">
            Generate, and modify Kubernetes manifests with the flexibility of JavaScript and deploy with confidence through a streamlined workflow.
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-8 gap-4 md:gap-8 md:justify-center w-full mx-auto">
          <Button href={withBaseUrl('docs/')} className="w-full md:w-[200px] text-center">View Documentation</Button>
          <PrimaryButton href={withBaseUrl('docs/installation/')} className="w-full md:w-[200px] text-center">
            Install Now
          </PrimaryButton>
          <Button href="https://github.com/ohayocorp/anemos" className="w-full md:w-[200px] text-center">
            <div className="flex items-center justify-center">
              <svg
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>Contribute</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

function WhyAnemos(): ReactNode {
  return (
    <div className="py-12 overflow-hidden snap-start">
      <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="max-w-screen-xl mx-auto mb-4 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl text-black dark:text-white font-bold leading-9 font-[Sora] md:text-4xl md:leading-10">
              Why Anemos?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <FeatureCard
            icon="✨"
            title="Easy to Use"
            description="Single binary tool with simple JavaScript API and rich features"
          />
          <FeatureCard
            icon="🛠️"
            title="Highly Flexible"
            description="Modify any part of your Kubernetes manifests programmatically"
          />
          <FeatureCard
            icon="🔄"
            title="GitOps Ready"
            description="Integrates with your existing CI/CD pipelines"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }): ReactNode {
  return (
    <div className="p-6 bg-white/70 dark:bg-neutral-800/40 backdrop-blur-sm rounded-lg shadow-sm border card-border">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  );
}

function GettingStarted(): ReactNode {
  const { withBaseUrl } = useBaseUrlUtils();

  return (
    <div className="py-12 overflow-hidden snap-start">
      <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="max-w-screen-xl mx-auto mb-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-3xl text-black dark:text-white font-bold leading-9 font-[Sora] md:text-4xl md:leading-10">
              Get Started in Minutes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/70 dark:bg-neutral-800/40 backdrop-blur-sm rounded-lg shadow-sm border-l-4 border-blue-500">
            <div className="text-3xl mb-3">1️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Install Anemos</h3>
            <p className="text-secondary mb-4">Download and install the Anemos CLI on your system.</p>
            <Button href={withBaseUrl('/docs/installation/')}>Installation Guide</Button>
          </div>

          <div className="p-6 bg-white/70 dark:bg-neutral-800/40 backdrop-blur-sm rounded-lg shadow-sm border-l-4 border-green-500">
            <div className="text-3xl mb-3">2️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Create Your Package</h3>
            <p className="text-secondary mb-4">Define your Kubernetes resources using JavaScript.</p>
            <Button href={withBaseUrl('/docs/simple-tutorial/generate-manifests/')}>Basic Tutorial</Button>
          </div>

          <div className="p-6 bg-white/70 dark:bg-neutral-800/40 backdrop-blur-sm rounded-lg shadow-sm border-l-4 border-purple-500">
            <div className="text-3xl mb-3">3️⃣</div>
            <h3 className="text-xl font-semibold mb-2">Deploy to Kubernetes</h3>
            <p className="text-secondary mb-4">Apply your package to your cluster with a single command.</p>
            <Button href={withBaseUrl('docs/simple-tutorial/applying-manifests/')}>Deployment Guide</Button>
          </div>
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
    </>
  );
}

export function ApplyOutput(): ReactNode {
  return (
    <>
      <LogInfo time='16:47:31.358'>Starting to build documents</LogInfo>
      <LogInfo time='09:44:11.881'>Applying actions for step: '<Green>2</Green>' - <Green>Sanitize</Green></LogInfo>
      <LogInfo time='09:44:11.881'>Applying actions for step: '<Green>5</Green>' - <Green>Generate resources</Green></LogInfo>
      <LogInfo time='09:44:11.883'>Applying actions for step: '<Green>100</Green>' - <Green>Apply</Green></LogInfo>
      <LogInfo time='16:47:31.360'>Provision plan:</LogInfo>
      <LogInfo time='16:47:31.360'>  <Green>APPLY</Green> -&gt; <Green>anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:47:31.360'>  <Green>WAIT</Green>  -&gt; <Green>anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:47:31.360'> </LogInfo>
      <LogInfo time='16:47:31.360'>Applying document group: <Green>anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:47:31.389'>Summary of changes:</LogInfo>
      <LogInfo time='16:47:31.390'>OP  NAMESPACE  RESOURCE</LogInfo>
      <LogInfo time='16:47:31.390'><Green>A   default    deployments/anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:47:31.390'><Green>A   default    services/anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:47:31.407'>Successfully applied document group: <Green>anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:47:31.418'>Resource <Green>Service/anemos-hello-world</Green> is in desired state: Service is ready</LogInfo>
      <LogInfo time='16:47:31.418'>Waiting for resource <Green>Deployment/anemos-hello-world</Green>, expected=<Green>Current</Green>, actual=<Green>InProgress</Green>: Replicas: 0/1</LogInfo>
      <LogInfo time='16:47:33.419'>Waiting for resource <Green>Deployment/anemos-hello-world</Green>, expected=<Green>Current</Green>, actual=<Green>InProgress</Green>: Available: 0/1</LogInfo>
      <LogInfo time='16:47:37.420'>Resource <Green>Deployment/anemos-hello-world</Green> is in desired state: <Green>Deployment is available. Replicas: 1</Green></LogInfo>
      <LogInfo time='16:47:37.421'>Successfully applied Kubernetes manifests</LogInfo>
    </>
  );
}

export function ApplyValuesOutput(): ReactNode {
  return (
    <>
      <LogInfo time='16:56:29.134'>Starting to build documents</LogInfo>
      <LogInfo time='09:45:12.724'>Applying actions for step: '<Green>2</Green>' - <Green>Sanitize</Green></LogInfo>
      <LogInfo time='09:45:12.724'>Applying actions for step: '<Green>5</Green>' - <Green>Generate resources</Green></LogInfo>
      <LogInfo time='09:45:12.724'>Applying actions for step: '<Green>100</Green>' - <Green>Apply</Green></LogInfo>
      <LogInfo time='16:56:29.137'>Provision plan:</LogInfo>
      <LogInfo time='16:56:29.137'>  <Green>APPLY</Green> -&gt; <Green>anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:56:29.137'>  <Green>WAIT</Green>  -&gt; <Green>anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:56:29.137'> </LogInfo>
      <LogInfo time='16:56:29.137'>Applying document group: <Green>anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:56:29.145'>No changes for <Green>services/anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:56:29.157'>Changes to be applied:</LogInfo>
      <LogInfo time='16:56:29.157'><Yellow>deployments/anemos-hello-world:</Yellow></LogInfo>
      <ShellLine>  ...</ShellLine>
      <ShellLine>    uid: d79bf80e-2432-4d29-96e2-7ee4183d2ba1</ShellLine>
      <ShellLine>  spec:</ShellLine>
      <ShellLine>    progressDeadlineSeconds: 600</ShellLine>
      <ShellLine>    <Green>replicas: 1</Green></ShellLine>
      <ShellLine>    <Red>replicas: 3</Red></ShellLine>
      <ShellLine>  ...</ShellLine>
      <ShellLine>    readyReplicas: 1</ShellLine>
      <ShellLine>    replicas: 1</ShellLine>
      <ShellLine>    updatedReplicas: 1</ShellLine>
      <br />
      <LogInfo time='16:56:29.157'>Summary of changes:</LogInfo>
      <LogInfo time='16:56:29.157'>OP  NAMESPACE  RESOURCE</LogInfo>
      <LogInfo time='16:56:29.157'><Yellow>M   default    deployments/anemos-hello-world</Yellow></LogInfo>
      <LogInfo time='16:56:29.188'>Successfully applied document group: <Green>anemos-hello-world</Green></LogInfo>
      <LogInfo time='16:56:29.222'>Resource <Green>Service/anemos-hello-world</Green> is in desired state: <Green>Service is ready</Green></LogInfo>
      <LogInfo time='16:56:29.223'>Waiting for resource <Green>Deployment/anemos-hello-world</Green>, expected=<Green>Current</Green>, actual=<Green>InProgress</Green>: <Green>Replicas: 1/3</Green></LogInfo>
      <LogInfo time='16:56:31.203'>Resource <Green>Deployment/anemos-hello-world</Green> is in desired state: <Green>Deployment is available. Replicas: 3</Green></LogInfo>
      <LogInfo time='16:56:31.203'>Successfully applied Kubernetes manifests</LogInfo>
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
      <LogInfo time='17:02:41.156'>Deleting objects for apply set anemos-hello-world:</LogInfo>
      <LogInfo time='17:02:41.157'>NAMESPACE  RESOURCE     NAME</LogInfo>
      <LogInfo time='17:02:41.157'><Red>default    deployments  anemos-hello-world</Red></LogInfo>
      <LogInfo time='17:02:41.157'><Red>default    services     anemos-hello-world</Red></LogInfo>
      <LogInfo time='17:02:41.157'>Apply these changes? [y/N]: y</LogInfo>
      <LogInfo time='17:02:46.346'>Successfully deleted object <Red>deployments/anemos-hello-world</Red>, namespace: <Red>default</Red></LogInfo>
      <LogInfo time='17:02:46.349'>Successfully deleted object <Red>services/anemos-hello-world</Red>, namespace: <Red>default</Red></LogInfo>
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
        <WhyAnemos />
        <Features />
        <GettingStarted />
      </div>

      <div className="fixed bottom-4 right-4 z-20 md:bottom-8 md:right-8 hidden md:block">
        <PrimaryButton href="/docs/installation/">
          Get Started →
        </PrimaryButton>
      </div>
    </>
  );
}
