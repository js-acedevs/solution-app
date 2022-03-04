// react
import { FC, ReactElement } from 'react';

// mui
import { Typography } from '@mui/material';

// molecules
import { PageTemplate } from '@molecules';

// types
import { AuthLayoutProps } from './Layouts.props';

export const AuthLayout: FC<AuthLayoutProps> = ({ title, heading, children }): ReactElement => (
    <PageTemplate title={title} className="h-screen mx-auto">
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col items-center justify-center w-full max-w-md text-center">
                {heading && (
                    <Typography sx={{ my: 3 }} variant="h4">
                        {heading}
                    </Typography>
                )}
                {children}
            </div>
        </div>
    </PageTemplate>
);
