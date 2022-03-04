// react
import { ReactElement } from 'react';

// templates
import { AuthLayout } from '@templates';
import { LoginForm } from 'components/organisms/Authentication/LoginForm';

const RootPage = (): ReactElement => (
    <AuthLayout title="Login" heading="Sign in to your account">
        <LoginForm />
    </AuthLayout>
);

export default RootPage;
