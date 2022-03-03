// react
import { FC, ReactElement } from 'react';

// helmet
import { Helmet } from 'react-helmet';

// types
import { PageTemplateProps } from './PageTemplate.types';

export const PageTemplate: FC<PageTemplateProps> = ({
    title,
    children,
    className,
}): ReactElement => (
    <>
        <Helmet>
            <title>{`APP - ${title}`}</title>
        </Helmet>
        <main>{children}</main>
    </>
);
