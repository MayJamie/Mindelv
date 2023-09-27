/** @format */

import Image from 'next/image';
import type { ComponentPropsWithRef } from 'react';
import { HEIGHT_HEADER } from 'shared-lib/constants/styles';
import {
    AppBar,
    IconButton,
    ListItem,
    Menu,
    MenuItem,
    Stack,
    Toolbar,
    Typography,
} from '..';
import { MenuIcon } from '../icons';
import { AppLink } from '../ui';
import BodyContainer from './BodyContainer';

type TAppLink = ComponentPropsWithRef<typeof AppLink>;
interface IHeaderProps {
    isTransparent?: boolean;
    links: TAppLink[];
}
type TLinkProps = Pick<IHeaderProps, 'links'>;

const HeaderLink = ({ children, href, ...other }: TAppLink) => {
    return (
        <Typography
            component={ListItem}
            sx={{
                '&:hover, &:focus': {
                    fontWeight: 800,
                    transition: 'all 0.3s ease-in-out',
                },
            }}
        >
            <AppLink href={href} {...other}>
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
                    <HeaderLink
                        href={href}
                        key={key}
                        sx={{ color: 'white' }}
                        {...restProps}
                    >
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
                <MenuItem onClick={() => null} sx={{ flexDirection: 'column' }}>
                    <HeaderLinks links={links} />
                </MenuItem>
            </Menu>
        </Toolbar>
    );
};

const DefaultHeader = ({ isTransparent, links }: IHeaderProps) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                transition: 'all 0.3s ease-in-out',
                backgroundColor: isTransparent ? 'none' : 'initial',
                height: HEIGHT_HEADER,
            }}
        >
            <BodyContainer>
                <Toolbar
                    component='nav'
                    disableGutters
                    sx={{ px: { xs: 0 }, justifyContent: 'flex-start' }}
                >
                    <div>
                        <AppLink
                            href='/'
                            sx={{
                                display: 'block',
                                position: 'relative',
                            }}
                        >
                            <Image
                                alt='logo'
                                objectFit='contain'
                                objectPosition='center'
                                src=''
                            />
                        </AppLink>
                    </div>
                    <Nav links={links} />
                    <MobileNav links={links} />
                </Toolbar>
            </BodyContainer>
        </AppBar>
    );
};

export default DefaultHeader;
