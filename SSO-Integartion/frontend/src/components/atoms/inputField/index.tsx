import { InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import { InputFieldProps } from '../../../utils/interfaces/InputFieldInterface';
import { TextFieldStyled } from './index.styles';
import { Button } from '../button';
import { Image } from '../image';
import visibility from '../../../../public/assets/images/eye.svg';
import visibilityOff from '../../../../public/assets/images/eye-slash.svg';

export const InputField = ({
    startAdornment,
    width,
    type,
    ...props
}: InputFieldProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const toggleShowPassword = (): void => {
        setShowPassword(!showPassword);
    };

    const handleInputType = (): 'text' | 'password' => {
        if (type === 'password' || type === 'confirmPassword') {
            return showPassword ? 'text' : 'password';
        }
        return 'text';
    };
    const endIcon = handleInputType() === 'text' ? visibilityOff : visibility;
    return (
        <TextFieldStyled
            data-testid="input-field"
            {...props}
            type={handleInputType()}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        {startAdornment}
                    </InputAdornment>
                ),
                endAdornment: type === 'password' && (
                    <Button
                        variant="text"
                        data-testid="passwordIcon"
                        onClick={toggleShowPassword}
                    >
                        <Image src={endIcon} alt="end-icon" />
                    </Button>
                )
            }}
            style={{ width: width }}
            autoComplete="off"
        />
    );
};
