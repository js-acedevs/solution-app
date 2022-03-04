export type RegisterFormInputs = {
    email: string;
    password: string;
    fullName: string;
    companyName: string;
};

export type LoginFormInputs = Pick<RegisterFormInputs, 'email' | 'password'>;
