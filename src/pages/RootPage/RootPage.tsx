// react
import { ReactElement } from 'react';

// antd
import Title from 'antd/lib/typography/Title';

// templates
import { AppLayout } from '@templates';

const RootPage = (): ReactElement => (
    <AppLayout title="Root">
        <Title>RootPage</Title>
    </AppLayout>
);

export default RootPage;
