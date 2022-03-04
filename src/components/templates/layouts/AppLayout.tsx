// react
import { FC, ReactElement } from 'react';

// molecules
import { PageTemplate, PageTemplateProps } from '@molecules';

// organisms
import { Header } from '@organisms';

export const AppLayout: FC<PageTemplateProps> = ({ title, children }): ReactElement => (
    <section>
        <Header />
        <PageTemplate title={title} className="ml-3 overflow-auto">
            {children}
        </PageTemplate>
    </section>
);
