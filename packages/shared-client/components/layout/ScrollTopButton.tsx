/** @format */

import Box from '@mui/material/Box';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { APP_ANCHOR_TAG } from 'shared-constants';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    //window?: () => Window;
    children: React.ReactElement;
}

export const ScrollTop = (props: Props) => {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        //target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector(`#${APP_ANCHOR_TAG.TOP}`);

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role='presentation'
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 100 }}
            >
                {children}
            </Box>
        </Zoom>
    );
};

const ScrollTopButton = (props: Partial<Props>) => {
    return (
        <ScrollTop {...props}>
            <Fab color='secondary' size='small' aria-label='scroll back to top'>
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>
    );
};

export default ScrollTopButton;
