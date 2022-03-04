import { InputProps } from '@mui/material';
import { FieldError } from 'react-hook-form';

export interface InputFieldProps extends InputProps {
    fieldError: FieldError | undefined;
    label: string;
}
