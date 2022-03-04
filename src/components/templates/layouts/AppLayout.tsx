// react
import { FC, ReactElement } from 'react';

// molecules
import { PageTemplate, PageTemplateProps } from '@molecules';

// organisms
import { Header } from '@organisms';

export const AppLayout: FC<PageTemplateProps> = ({ title, children }): ReactElement => (
    <section>
        <Header />
        <PageTemplate title={title} className="container mx-auto">
            {children}
        </PageTemplate>
    </section>
);
