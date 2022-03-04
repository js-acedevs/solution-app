import Joi from 'joi';

export const RegisterFormSchema = Joi.object({
    name: Joi.string().trim().required().label('Full name'),
    email: Joi.string()
        .email({
            tlds: { allow: false },
        })
        .required()
        .trim()
        .label('Email'),
    password: Joi.string().required().min(8).label('Password'),
});
