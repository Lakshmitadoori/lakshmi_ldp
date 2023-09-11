import { TextFieldProps } from '@mui/material';

export type InputFieldProps = {
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    width?: string;
    type: 'text' | 'password' | 'confirmPassword';
} & Omit<TextFieldProps, 'startAdornment' | 'endAdornment'>;
