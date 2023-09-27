/** @format */

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import type { TPropsWithChildrenDefault } from 'shared-types';

interface IProps {
    resolvedTheme: 'light' | 'dark';
}

const MuiThemeProvider = ({
    children,
    resolvedTheme,
}: TPropsWithChildrenDefault<IProps>) => {
    const muiTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: resolvedTheme,
                },
            }),
        [resolvedTheme],
    );

    return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
