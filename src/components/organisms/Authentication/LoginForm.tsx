import { ReactElement, useContext } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { Alert, Button, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

// molecules
import { InputField } from '@molecules';

// graphql
import { useLoginMutation } from '@graphql/gen/graphql';

// contexts
import { AuthContext } from 'contexts/AuthContext';

// validators
import { LoginFormSchema } from 'validators/Login.validator';

// types
import { LoginFormInputs } from './Authentication.types';

export const LoginForm = (): ReactElement => {
    // hooks
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    // hook form
    const {
        register,
        formState: {
            errors: { email, password },
        },
        handleSubmit,
    } = useForm<LoginFormInputs>({
        resolver: joiResolver(LoginFormSchema),
    });

    // graphql hook
    const [loginMutation, { error }] = useLoginMutation({
        onCompleted: ({ login: loginData }) => {
            if (loginData?.token) {
                login(loginData.token);
                navigate('/');
            }
        },
        onError: (err) => console.error(err),
    });

    // handlers
    const handleLogin = (formData: LoginFormInputs) => {
        loginMutation({ variables: { ...formData } });
    };

    return (
        <form
            className="flex flex-col items-center justify-center w-full max-w-3xl py-8 bg-gray-100 rounded px-14"
            onSubmit={handleSubmit(handleLogin)}
        >
            {error && <Alert severity="error">TSomething went wrong! Try again!</Alert>}
            <InputField {...register('email')} label="Email" fieldError={email} />
            <InputField
                {...register('password')}
                type="password"
                label="Password"
                fieldError={password}
            />

            <div className="flex flex-col justify-center w-full pt-3 my-3">
                <Button variant="contained" type="submit">
                    Login
                </Button>
                <Divider sx={{ my: 3 }}>Or</Divider>
                <Button to="/auth/register" component={RouterLink} variant="contained">
                    Register
                </Button>
            </div>
        </form>
    );
};
