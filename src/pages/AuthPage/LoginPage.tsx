// react
import { ReactElement } from 'react';

// organisms
import { LoginForm } from '@organisms';

// templates
import { AuthLayout } from '@templates';

const LoginPage = (): ReactElement => (
    <AuthLayout title="Login" heading="Sign in to your account">
        <LoginForm />
    </AuthLayout>
);

export default LoginPage;
