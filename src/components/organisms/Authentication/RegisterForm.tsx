import { ReactElement, useContext } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { Alert, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

// molecules
import { InputField } from '@molecules';

// graphql
import { useRegisterMutation } from '@graphql/gen/graphql';

// contexts
import { AuthContext } from 'contexts/AuthContext';

// validators
import { RegisterFormSchema } from 'validators/Register.validator';

// types
import { RegisterFormInputs } from './Authentication.types';

export const RegisterForm = (): ReactElement => {
    // hooks
    const { login } = useContext(AuthContext);

    // hook form
    const {
        register,
        formState: {
            errors: { name, email, password },
        },
        handleSubmit,
    } = useForm<RegisterFormInputs>({
        resolver: joiResolver(RegisterFormSchema),
    });

    // graphql hook
    const [registerMutation, { error }] = useRegisterMutation({
        onCompleted: ({ register: reg }) => {
            if (reg?.token) login(reg.token);
        },
        onError: (err) => console.error(err),
    });

    // handlers
    const handleRegister = async (formData: RegisterFormInputs) => {
        await registerMutation({ variables: { data: { ...formData } } });
    };

    return (
        <form
            className="flex flex-col items-center justify-center w-full max-w-3xl py-8 bg-gray-100 rounded px-14"
            onSubmit={handleSubmit(handleRegister)}
        >
            {error && <Alert severity="error">TSomething went wrong! Try again!</Alert>}
            <InputField {...register('name')} label="Full name" fieldError={name} />
            <InputField {...register('email')} label="Email" fieldError={email} />
            <InputField
                {...register('password')}
                type="password"
                label="Password"
                fieldError={password}
            />

            <div className="flex flex-col justify-center w-full pt-3 my-3">
                <Button variant="contained" type="submit">
                    Register
                </Button>
            </div>
        </form>
    );
};
