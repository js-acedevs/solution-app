export type RegisterFormInputs = {
    email: string;
    password: string;
    name: string;
};

export type LoginFormInputs = Pick<RegisterFormInputs, 'email' | 'password'>;
