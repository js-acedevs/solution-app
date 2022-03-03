// react
import { ReactElement } from 'react';

// templates
import { PageTemplate } from '@templates';

const ErrorPage = (): ReactElement => (
    <PageTemplate title="Error">
        <div className="flex flex-col items-center text-2xl">
            <h1>Error Page</h1>
        </div>
    </PageTemplate>
);

export default ErrorPage;
