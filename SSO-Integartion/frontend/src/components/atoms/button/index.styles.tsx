import { SxProps, Theme } from '@mui/material';
import { theme } from '../../../theme/theme';

export const styleButton: SxProps<Theme> = {
    minWidth: 0,
    padding: 0,
    borderRadius: theme.spacing(3),
    textTransform: 'none',
    boxShadow: 'none',
    color: 'background.paper',
    '& .MuiButton-startIcon': {
        margin: 0,
        paddingRight: theme.spacing(2)
    },
    '& .MuiButton-endIcon': {
        margin: 0,
        paddingLeft: theme.spacing(2)
    },
    '&.MuiButton-contained': {
        '&:hover': {
            backgroundColor: 'primary.purple600'
        },
        '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.purple500,
            opacity: 0.5600000023841858,
            color: 'white'
        }
    },
    '&.MuiButton-sizeSmall': {
        padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`
    },
    '&.MuiButton-sizeMedium': {
        padding: `${theme.spacing(3)} ${theme.spacing(6)}`
    },
    '&.MuiButton-sizeLarge': {
        padding: `${theme.spacing(5)} ${theme.spacing(10)}`
    },
    '&.MuiButton-outlined': {
        border: `1px solid ${theme.palette.primary.white500}`,
        '&:hover': {
            backgroundColor: theme.palette.backgroundColors.elevation1
        }
    },
    '&.MuiButton-containedInherit': {
        backgroundColor: theme.palette.backgroundColors.elevation2,
        color: theme.palette.textColor.mediumEmphasis,
        '&.Mui-disabled': {
            backgroundColor: theme.palette.backgroundColors.elevation2,
            color: theme.palette.borders.highEmphasis
        },
        '&:hover': {
            backgroundColor: theme.palette.backgroundColors.elevation2
        }
    },
    '&.MuiButton-text': {
        padding: 0,
        color: theme.palette.primary.purple400,
        '& path': {
            fill: `${theme.palette.primary.purple400} !important`
        }
    }
};
