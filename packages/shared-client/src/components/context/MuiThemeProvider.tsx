/** @format */

import { useMemo } from 'react';
import type { TPropsWithChildrenDefault } from 'shared-types';
import { ThemeProvider, common, createTheme, deepOrange, grey, red } from '..';

interface IProps {
    resolvedTheme: 'light' | 'dark';
}

const sectionAnimatedBg = 'section__animated-bg';
const customBlue = '#344B9C';
const customRed = '#B42B44';
const customWhite = common.white;
const customBlack = common.black;
// For use in style override for section background class
const bgSelectorNum = Math.floor(Math.random() * 3) + 1;
const backgroundSvg = `
    height: max-content;
    background-color: #ffffff;
    background-image: linear-gradient(rgba(255,255,255, 0.6),rgba(255,255,255, 0.6)),url('/images/background/scattered-forcefields-animated-${bgSelectorNum}.svg');
    background-attachment: fixed;
    background-size: cover;`;

const paletteLight = {
    primary: {
        main: customBlue,
    },
    secondary: {
        main: customRed,
    },
    white: {
        main: customWhite,
    },
    black: {
        main: customBlack,
    },
    error: {
        main: red.A400,
    },
    divider: common.black,
    background: {
        default: common.white,
        paper: common.white,
    },
    text: {
        primary: grey[900],
        secondary: common.white,
    },
};
const paletteDark = {
    primary: {
        main: customBlue,
    },
    secondary: {
        main: customRed,
    },
    white: {
        main: customWhite,
    },
    black: {
        main: customBlack,
    },
    error: {
        main: red.A400,
    },
    divider: deepOrange[700],
    background: {
        default: grey[900],
        paper: grey[900],
    },
    text: {
        primary: common.white,
        secondary: grey[500],
    },
};

const MuiThemeProvider = ({
    children,
    resolvedTheme,
}: TPropsWithChildrenDefault<IProps>) => {
    const muiTheme = useMemo(
        () =>
            createTheme({
                spacing: 10,
                typography: {
                    // Change html font-size to 62.5%
                    htmlFontSize: 10,
                    fontFamily: ['Roboto', 'sans-serif'].join(','),
                    h1: {
                        fontWeight: 400,
                        fontSize: '4.5rem',
                    },
                    h2: {
                        fontWeight: 500,
                        fontSize: '3.4rem',
                    },
                    h3: {
                        fontWeight: 700,
                        fontSize: '2.2rem',
                    },
                    h4: {
                        fontWeight: 700,
                        fontSize: '1.75rem',
                    },
                    h5: {
                        fontWeight: 500,
                    },
                    h6: {
                        fontWeight: 500,
                    },
                },
                components: {
                    MuiCssBaseline: {
                        styleOverrides: `
                            .${sectionAnimatedBg} {
                              ${backgroundSvg}
                            }
                        `,
                    },
                },
                palette: {
                    mode: resolvedTheme,
                    ...(resolvedTheme === 'light' ? paletteLight : paletteDark),
                },
            }),
        [resolvedTheme],
    );

    return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
