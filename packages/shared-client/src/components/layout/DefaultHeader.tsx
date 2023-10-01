/** @format */

import { useEffect, useState } from 'react';
import { CONSTANT } from 'shared-lib';
import {
    AppBar,
    Box,
    IconButton,
    ListItem,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography,
} from '..';
import useScrollTrigger from '../../hooks/useScrollTrigger';
import { MenuIcon } from '../icons';
import { AppLink } from '../ui';
import LogoLink from '../ui/LogoLink';
import BodyContainer from './BodyContainer';
import type { IHeaderProps, TAppLink } from './layout.types';

const { STYLE_HEIGHT_HEADER } = CONSTANT;

type TLinkProps = Pick<IHeaderProps, 'links'>;

const HeaderLink = ({ children, href, ...other }: TAppLink) => {
    return (
        <Typography component={ListItem}>
            <AppLink
                href={href}
                sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover, &:focus': {
                        textDecoration: 'underline',
                    },
                }}
                {...other}
            >
                {children}
            </AppLink>
        </Typography>
    );
};

const HeaderLinks = ({ links = [] }: TLinkProps) => {
    return (
        <>
            {links.map((link) => {
                const { children, href, ...restProps } = link;
                const key = typeof href === 'string' ? href : href.pathname;

                return (
                    <HeaderLink href={href} key={key} {...restProps}>
                        {children}
                    </HeaderLink>
                );
            })}
        </>
    );
};

const Nav = ({ links }: TLinkProps) => {
    return (
        <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Stack component='ul' direction='row' sx={{ my: { md: 0 } }}>
                <HeaderLinks links={links} />
            </Stack>
        </Toolbar>
    );
};

const MobileNav = ({ links }: TLinkProps) => {
    const ID = 'menu-app-bar';

    return (
        <Toolbar
            sx={{
                display: { xs: 'flex', md: 'none' },
            }}
        >
            <IconButton
                aria-controls={ID}
                aria-haspopup='true'
                aria-label='account of current user'
                color='inherit'
                onClick={() => null}
                size='large'
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                id={ID}
                keepMounted
                onClose={() => null}
                open={Boolean(null)}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem
                    component='ul'
                    onClick={() => null}
                    sx={{ flexDirection: 'column' }}
                >
                    <HeaderLinks links={links} />
                </MenuItem>
            </Menu>
        </Toolbar>
    );
};

const DefaultHeader = ({ isTransparentAtTop, links }: IHeaderProps) => {
    const trigger = useScrollTrigger();
    const [headerBgColor, setHeaderBgColor] = useState('');
    const [headerBoxShadow, setHeaderBoxShadow] = useState('');
    const [linkColor, setLinkColor] = useState('');

    useEffect(() => {
        if (trigger) {
            setHeaderBgColor('background.default');
            setHeaderBoxShadow(
                '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
            );
            setLinkColor('black.main');
        } else if (isTransparentAtTop) {
            setHeaderBgColor('transparent');
            setHeaderBoxShadow('none');
            setLinkColor('white.main');
        } else {
            setHeaderBgColor('background.default');
            setHeaderBoxShadow('none');
            setLinkColor('black.main');
        }
    }, [trigger, isTransparentAtTop]);

    return (
        <AppBar
            position='fixed'
            sx={{
                transition: 'none',
                height: STYLE_HEIGHT_HEADER,
                backgroundColor: headerBgColor,
                boxShadow: headerBoxShadow,
                color: linkColor,
            }}
        >
            <BodyContainer>
                <Toolbar
                    component='nav'
                    disableGutters
                    sx={{ px: { xs: 0 }, justifyContent: 'flex-start', color: 'inherit' }}
                >
                    <Box
                        sx={{
                            ...(isTransparentAtTop && !trigger
                                ? {}
                                : { filter: 'invert(1)' }),
                        }}
                    >
                        <LogoLink imageProps={{ src: '/images/logos/logo-white.png' }} />
                    </Box>
                    <Nav links={links} />
                    <MobileNav links={links} />
                </Toolbar>
            </BodyContainer>
        </AppBar>
    );
};

export default DefaultHeader;
