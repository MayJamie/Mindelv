/** @format */

import type { ElementType } from 'react';
import { HEIGHT_HEADER } from 'shared-lib/constants/styles';
import type { TPropsWithChildrenDefault } from 'shared-types';
import { Box } from '..';
import ScrollTopButton from './ScrollTopButton';
import type { IHeaderProps } from './layout.types';

interface IProps {
    HeaderComponent: ElementType;
    FooterComponent: ElementType;
    headerProps?: Partial<IHeaderProps>;
}

const DefaultLayout = ({
    children,
    FooterComponent,
    HeaderComponent,
    headerProps,
}: TPropsWithChildrenDefault<IProps>) => {
    return (
        <>
            <HeaderComponent {...headerProps} />
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
