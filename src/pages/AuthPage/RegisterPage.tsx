// react
import { ReactElement } from 'react';

// organisms
import { RegisterForm } from '@organisms';

// templates
import { AuthLayout } from '@templates';

const RegisterPage = (): ReactElement => (
    <AuthLayout title="Register" heading="Create a new account">
        <RegisterForm />
    </AuthLayout>
);

export default RegisterPage;
