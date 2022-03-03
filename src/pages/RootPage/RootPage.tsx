// react
import { ReactElement } from 'react';

// antd
import Title from 'antd/lib/typography/Title';

// templates
import { PageTemplate } from '@templates';

const RootPage = (): ReactElement => (
    <PageTemplate title="Root">
        <div className="container mx-auto text-center">
            <Title>RootPage</Title>
        </div>
    </PageTemplate>
);

export default RootPage;
