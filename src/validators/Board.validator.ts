import Joi from 'joi';

export const BoardFormSchema = Joi.object({
    name: Joi.string().trim().required().label('Name'),
});
