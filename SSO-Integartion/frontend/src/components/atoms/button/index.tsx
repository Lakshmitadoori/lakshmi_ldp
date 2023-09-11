import React from 'react';
import { Button as MuiButton, Typography } from '@mui/material';
import { ButtonProps } from '../../../utils/interfaces/ButtonInterface';
import { styleButton } from './index.styles';
export const Button = ({ variant, children, ...props }: ButtonProps) => {
    const muiBtnVariant =
        variant === 'primary' || variant === 'teritary'
            ? 'contained'
            : 'outlined';
    return (
        <MuiButton
            variant={variant === 'text' ? variant : muiBtnVariant}
            {...props}
            sx={styleButton}
            data-testid="button"
        >
            <Typography variant="button1">{children}</Typography>
        </MuiButton>
    );
};
