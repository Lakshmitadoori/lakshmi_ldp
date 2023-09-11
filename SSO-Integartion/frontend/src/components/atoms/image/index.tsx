import React from 'react';
import { ImageProps } from '../../../utils/interfaces/ImageInterface';
import { Box, styled } from '@mui/material';
const StyledBox = styled(Box)(() => ({
    display: 'inline-block',
    height: 'fit-content',
    width: 'fit-content',
    '& img': {
        display: 'block',
        height: 'auto'
    }
}));
export const Image = ({ sx, className,onClick, ...props }: ImageProps) => {
    return (
        <StyledBox data-testid="image" sx={sx} className={className} onClick={onClick}>
            <img {...props} />
        </StyledBox>
    );
};
