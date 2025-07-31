import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Home from '@site/src/components/home';

export default function Index(): ReactNode {
  return (
    <Layout
      title="Anemos: Kubernetes Package Manager"
      description="The easiest and most flexible way to manage your Kubernetes applications">

      <Home />
    </Layout>
  );
}
