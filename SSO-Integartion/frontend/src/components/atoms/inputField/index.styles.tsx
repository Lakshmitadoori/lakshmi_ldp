import { TextField, styled } from '@mui/material';
import { theme } from '../../../theme/theme';

export const TextFieldStyled = styled(TextField)(`
  & .MuiOutlinedInput-root {
    color:${theme.palette.textColor.mediumEmphasis} !important;
    font-weight:${theme.typography.body1.fontWeight};
    background:${theme.palette.backgroundColors.grey100};
    & fieldset{
        border:1px solid ${theme.palette.borders.highEmphasis};
    }
    &:hover fieldset {
      border:1px solid ${theme.palette.primary.purple400};
    }
    &.Mui-focused fieldset {
        border:1px solid ${theme.palette.primary.purple400};
    }
    border-radius:12px;  
  },
`);
