import { ForwardedRef, forwardRef, ReactElement } from 'react';

// mui
import { Input } from '@mui/material';
import Typography from '@mui/material/Typography';

// types
import { InputFieldProps } from './InputField.props';

export const InputField = forwardRef(
    (
        { fieldError, label, id, ...rest }: InputFieldProps,
        ref: ForwardedRef<HTMLInputElement>
    ): ReactElement => (
        <div className="flex flex-col items-start justify-start w-full my-3">
            <label htmlFor={id}>{label}</label>
            <Input sx={{ width: '100%', my: 1 }} ref={ref} error={!!fieldError} {...rest} />

            {fieldError && (
                <Typography sx={{ color: 'red' }} variant="caption" display="block">
                    {fieldError?.message}
                </Typography>
            )}
        </div>
    )
);

InputField.displayName = 'InputField';
