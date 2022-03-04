// react
import { FC, ReactElement } from 'react';

// antd
import { Layout } from 'antd';

// helmet
import { Helmet } from 'react-helmet';

// types
import { PageTemplateProps } from './PageTemplate.types';

export const PageTemplate: FC<PageTemplateProps> = ({
    title,
    className,
    children,
}): ReactElement => (
    <>
        <Helmet>
            <title>{`APP - ${title}`}</title>
        </Helmet>
        <Layout.Content role="main" className={className}>
            {children}
        </Layout.Content>
    </>
);
