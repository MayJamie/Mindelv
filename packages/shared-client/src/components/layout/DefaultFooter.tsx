/** @format */

import Image from 'next/image';
import type { ComponentPropsWithRef } from 'react';
import type { TPropsWithChildrenDefault } from 'shared-types';
import { Box, Divider, Grid, List, ListItem, ListSubheader, Stack, Typography } from '..';
import { AppLink } from '../ui';
import SocialMediaList from '../ui/SocialMediaList';
import BodyContainer from './BodyContainer';

type TAppLink = ComponentPropsWithRef<typeof AppLink>;
interface IFooterProps {
    links: TAppLink[];
}
type TLinkProps = Pick<IFooterProps, 'links'>;

const FooterLink = ({ children, href, ...other }: TAppLink) => {
    return (
        <Typography
            component={ListItem}
            sx={{
                willChange: 'font',
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

const FooterLinks = ({ links = [] }: TLinkProps) => {
    return (
        <>
            {links.map((link) => {
                const { children, href } = link;
                const key = typeof href === 'string' ? href : href.pathname;

                return (
                    <FooterLink href={href} key={key}>
                        {children}
                    </FooterLink>
                );
            })}
        </>
    );
};

const StackList = ({ children }: TPropsWithChildrenDefault) => {
    return (
        <Stack component='ul' direction='column'>
            {children}
        </Stack>
    );
};

const DefaultFooter = ({ links }: IFooterProps) => {
    return (
        <Box component='footer'>
            <Box
                sx={{
                    background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)), url('/images/background/scattered-forcefields-animated-footer-2.svg')`,
                    py: 10,
                }}
            >
                <BodyContainer>
                    <Box sx={{ paddingLeft: { md: 8 } }}>
                        <Typography
                            color='common.white'
                            fontSize='4rem'
                            gutterBottom
                            maxWidth='clamp(5ch, 100%, 20ch)'
                            variant='h2'
                        >
                            Ready to get started?
                        </Typography>
                        <Typography
                            color='common.white'
                            gutterBottom
                            maxWidth='clamp(10ch, 100%, 60ch)'
                            variant='subtitle1'
                        >
                            Access to our <strong>Edulabs beta</strong> coming soon!
                        </Typography>
                    </Box>
                </BodyContainer>
            </Box>
            <Box>
                <BodyContainer>
                    <Grid
                        container
                        justifyContent='center'
                        justifyItems='center'
                        spacing={0}
                        sx={{ py: 3 }}
                    >
                        <Grid item sm={4} xs={12}>
                            <List component={StackList}>
                                <ListSubheader>
                                    <Typography
                                        color='primary.main'
                                        gutterBottom
                                        variant='h3'
                                    >
                                        I&apos;d Effect Edulabs
                                        <Divider light />
                                    </Typography>
                                </ListSubheader>
                                <FooterLinks links={links} />
                            </List>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <List component={StackList}>
                                <ListSubheader>
                                    <Typography
                                        color='primary.main'
                                        gutterBottom
                                        variant='h3'
                                    >
                                        Social Media
                                        <Divider light />
                                    </Typography>
                                </ListSubheader>
                                <FooterLink href='https://www.facebook.com/ideffect?mibextid=ZbWKwL'>
                                    Facebook
                                </FooterLink>
                                <FooterLink href='https://www.linkedin.com/company/ideffect/'>
                                    LinkedIn
                                </FooterLink>
                            </List>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                            <List component={StackList}>
                                <ListSubheader>
                                    <Typography
                                        color='primary.main'
                                        gutterBottom
                                        variant='h3'
                                    >
                                        Contact Us
                                        <Divider light />
                                    </Typography>
                                </ListSubheader>
                                <FooterLink href='tel:+1-868-762-2782'>Phone</FooterLink>
                                <FooterLink href='mailto:shiva.ramsingh@ideffect.com?Subject=Hello'>
                                    Email
                                </FooterLink>
                            </List>
                        </Grid>
                    </Grid>
                    <Divider light variant='fullWidth' />
                    <Grid
                        container
                        justifyContent='center'
                        sx={{ py: 3, textAlign: 'center' }}
                    >
                        <Grid
                            item
                            sm={4}
                            sx={{
                                height: 'max-content',
                            }}
                            xs={12}
                        >
                            <AppLink href='/'>
                                <Image
                                    alt=''
                                    objectFit='contain'
                                    objectPosition='center'
                                    src=''
                                />
                            </AppLink>
                        </Grid>
                        <Divider flexItem light orientation='vertical' />
                        <Grid item sm={4} xs={12}>
                            <SocialMediaList />
                        </Grid>
                    </Grid>
                    <Typography paddingBottom={3} textAlign='center'>
                        Copyright © 2022 I&apos;d Effect Limited. All rights reserved.
                    </Typography>
                </BodyContainer>
            </Box>
        </Box>
    );
};

export default DefaultFooter;
