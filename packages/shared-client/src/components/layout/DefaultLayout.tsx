/** @format */

import type { ElementType } from 'react';
import { HEIGHT_HEADER } from 'shared-lib/constants/styles';
import type { TPropsWithChildrenDefault } from 'shared-types';
import { Box } from '..';
import ScrollTopButton from './ScrollTopButton';

interface IProps {
    HeaderComponent: ElementType<{ isTransparent?: boolean }>;
    FooterComponent: ElementType;
    hasTransparentHeader?: boolean;
}

const DefaultLayout = ({
    children,
    FooterComponent,
    HeaderComponent,
    hasTransparentHeader,
}: TPropsWithChildrenDefault<IProps>) => {
    return (
        <>
            <HeaderComponent isTransparent={hasTransparentHeader} />
            <ScrollTopButton />
            <Box
                component='main'
                sx={{
                    mt: HEIGHT_HEADER,
                }}
            >
                {children}
            </Box>
            <FooterComponent />
        </>
    );
};

export default DefaultLayout;
