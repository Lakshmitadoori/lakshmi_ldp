import { Box } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import { Image } from '../../atoms/image';
import { theme } from '../../../theme/theme';
import { SignInCardProps } from '../../../utils/interfaces/SignInCardInterface';

export const SignInCard = (props: SignInCardProps) => {
    return (
        <Box
            bgcolor={theme.palette.backgroundColors.elevation1}
            width="129px"
            height="96px"
            display="flex"
            flexDirection={'column'}
            gap="8px"
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius="12px"
            onClick={props.handleClick}
            sx={{
                cursor: 'pointer'
            }}
        >
            <Image
                src={props.iconSrc}
                alt={props.iconAlt}
                sx={{ width: '20px' }}
            />
            <TypographyComponent
                variant="button1"
                color={theme.palette.textColor.mediumEmphasis}
                sx={{ textTransform: 'none' }}
            >
                {props.title}
            </TypographyComponent>
        </Box>
    );
};
