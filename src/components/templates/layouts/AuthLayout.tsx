// react
import { FC, ReactElement } from 'react';

// antd
import Title from 'antd/lib/typography/Title';

// molecules
import { PageTemplate } from '@molecules';

// types
import { AuthLayoutProps } from './Layouts.props';

export const AuthLayout: FC<AuthLayoutProps> = ({ title, heading, children }): ReactElement => (
    <PageTemplate title={title} className="h-screen mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center w-full max-w-md">
                <Title>{heading}</Title>
                {children}
            </div>
        </div>
    </PageTemplate>
);
