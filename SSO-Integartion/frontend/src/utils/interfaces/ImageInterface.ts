import { SxProps, Theme } from '@mui/material';

export interface ImageProps {
    sx?: SxProps<Theme>;
    className?: string;
    alt: string;
    src: string;
    onClick?: () => void;
}
