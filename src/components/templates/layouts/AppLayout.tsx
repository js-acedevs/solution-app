// react
import { FC, ReactElement } from 'react';

// antd
import { Layout } from 'antd';

// molecules
import { PageTemplate, PageTemplateProps } from '@molecules';

// organisms
import { Header } from '@organisms';

export const AppLayout: FC<PageTemplateProps> = ({ title, children }): ReactElement => (
    <Layout>
        <Header />
        <PageTemplate title={title} className="container mx-auto">
            {children}
        </PageTemplate>
    </Layout>
);
