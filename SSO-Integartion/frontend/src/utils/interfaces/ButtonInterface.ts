export interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    color?: 'inherit' | 'primary';
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'teritary' | 'text';
    size?: 'small' | 'medium' | 'large';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    fullWidth?: boolean;
    active?: boolean;
}
