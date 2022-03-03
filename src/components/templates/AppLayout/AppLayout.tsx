// react
import { FC, ReactElement } from 'react';

// organisms
import { Header } from '@organisms';

export const AppLayout: FC = ({ children }): ReactElement => (
    <>
        <Header />
        <main role="main">{children}</main>
    </>
);
