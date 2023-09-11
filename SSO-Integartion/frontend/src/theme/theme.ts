import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        title: React.CSSProperties;
        h1: React.CSSProperties;
        h2: React.CSSProperties;
        h3: React.CSSProperties;
        body1: React.CSSProperties;
        body2: React.CSSProperties;
        caption: React.CSSProperties;
        button1: React.CSSProperties;
        button2: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        title: React.CSSProperties;
        h1: React.CSSProperties;
        h2: React.CSSProperties;
        h3: React.CSSProperties;
        body1: React.CSSProperties;
        body2: React.CSSProperties;
        caption: React.CSSProperties;
        button1: React.CSSProperties;
        button2: React.CSSProperties;
    }
    interface AccentColors {
        pink: string;
        aquaBlue: string;
        redOrange: string;
    }
    interface Palette {
        backgroundColors: Palette['primary'];
        iconColors: Palette['primary'];
        textColor: Palette['primary'];
        borders: Palette['primary'];
        accent: AccentColors;
    }
    interface PaletteOptions {
        backgroundColors?: PaletteOptions['primary'];
        iconColors?: PaletteOptions['primary'];
        textColor?: PaletteOptions['primary'];
        borders?: PaletteOptions['primary'];
        accent?: AccentColors;
    }

    interface PaletteColor {
        white500?: string;
        purple500?: string;
        purple600?: string;
        purple400?: string;
        lowEmphasis?: string;
        mediumEmphasis?: string;
        highEmphasis?: string;
        elevation0?: string;
        elevation1?: string;
        elevation2?: string;
        grey100?: string;
    }

    interface SimplePaletteColorOptions {
        white500?: string;
        purple500?: string;
        purple600?: string;
        purple400?: string;
        lowEmphasis?: string;
        mediumEmphasis?: string;
        highEmphasis?: string;
        elevation0?: string;
        elevation1?: string;
        elevation2?: string;
        grey100?: string;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        title: true;
        h1: true;
        h2: true;
        h3: true;
        body1: true;
        caption: true;
        body2: true;
        button1: true;
        button2: true;
    }
}

export const theme = createTheme({
    spacing: 4,

    typography: {
        title: {
            fontFamily: 'Gilroy',
            fontSize: '36px',
            lineHeight: '42px',
            fontWeight: 700,
            letterSpacing: '-0.54px'
        },
        h1: {
            fontFamily: 'Gilroy',
            fontSize: '28px',
            fontWeight: 600,
            lineHeight: '34.3px'
        },
        h2: {
            fontFamily: 'Gilroy',
            fontSize: '24px',
            lineHeight: '29.4px',
            fontWeight: '600',
            letterSpacing: '-0.12px'
        },
        h3: {
            fontFamily: 'Gilroy',
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: 500
        },
        body1: {
            fontFamily: 'Gilroy',
            fontSize: '16px',
            lineHeight: '22.4px',
            fontWeight: '500'
        },
        body2: {
            fontFamily: 'Gilroy',
            fontSize: '14px',
            lineHeight: '17.15px',
            fontWeight: 600,
            letterSpacing: '0.14px'
        },
        caption: {
            fontFamily: 'Gilroy',
            fontSize: '12px',
            lineHeight: '14.56px',
            fontWeight: '500',
            letterSpacing: '0.24px'
        },
        button1: {
            fontFamily: 'Gilroy',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '19px'
        },
        button2: {
            fontFamily: 'Gilroy',
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '14px',
            letterSpacing: '1%'
        }
    },
    palette: {
        primary: {
            main: '#7633FF',
            white500: '#E8E8E9',
            purple400: '#B4A9FF',
            purple500: '#6C5DD3',
            purple600: '#393552'
        },
        textColor: {
            main: '#FFFFFF',
            lowEmphasis: '#A5A5A6',
            mediumEmphasis: '#C9C8CC',
            highEmphasis: '#E8E7F0'
        },
        backgroundColors: {
            main: '#FFFFFF',
            elevation0: '#19181C',
            elevation1: '#201F24',
            elevation2: '#2D2D30',
            grey100: '#262529'
        },
        borders: {
            main: '#FFFFFF',
            highEmphasis: '#413F4D',
            lowEmphasis: '#28272B'
        },
        iconColors: {
            main: '#FFFFFF',
            highEmphasis: '#D4D2DE',
            lowEmphasis: '#727080'
        },
        accent: {
            pink: '#E39AB2',
            aquaBlue: '#A0D7E7',
            redOrange: '#EC977D'
        }
    }
});
