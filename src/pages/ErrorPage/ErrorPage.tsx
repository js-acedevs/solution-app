// react
import { ReactElement } from 'react';

// templates
import { AuthLayout } from '@templates';

const ErrorPage = (): ReactElement => (
    <AuthLayout title="Error">
        <div className="flex flex-col items-center text-2xl">
            <h1>Error Page</h1>
        </div>
    </AuthLayout>
);

export default ErrorPage;
