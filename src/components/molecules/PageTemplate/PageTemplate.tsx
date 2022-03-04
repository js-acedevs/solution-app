// react
import { FC, ReactElement } from 'react';

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
        <main role="main" className={className}>
            {children}
        </main>
    </>
);
