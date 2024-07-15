/** @format */

import hero from 'public/images/hero.png';
import { components, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';

const { Box, Container, Typography, Button } = components;
const { Image, AppLink } = ui;

const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const HeroSection = () => {
    return (
        <Box
            className={CLASS_SECTION_ANIMATED_BG}
            component='section'
            sx={{
                display: 'flex',
                minHeight: 450,
                pt: { xs: 4, md: 2 },
                pb: 2,
            }}
        >
            <Container
                maxWidth='xl'
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    columnGap: 1,
                    rowGap: 8,
                }}
            >
                <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                    <Typography
                        gutterBottom
                        maxWidth='clamp(5ch, 100%, 20ch)'
                        sx={{
                            fontSize: {
                                xs: '3rem',
                                sm: '4rem',
                                md: '5rem',
                            },
                            color: 'black.main',
                            mx:{sm: 'auto', lg: 'initial'},
                        }}
                        variant='h1'
                    >
                        Welcome to I&apos;deffect Academy
                    </Typography>
                    <Typography
                        color='black.main'
                        gutterBottom
                        maxWidth='clamp(10ch, 100%, 60ch)'
                        sx={{ mx:{sm: 'auto', lg: 'initial'} }}
                        variant='body1'
                    >
                        Working to help you Unleash Your Potential
                    </Typography>
                    <Button
                        LinkComponent={AppLink}
                        href='https://classroom.google.com'
                        sx={{ mt: '16px' }}
                        variant='contained'
                    >
                        Classroom Login
                    </Button>
                </Box>
                <Box>
                    <Image alt='' src={hero} sx={{ width: '100%', height: 'auto' }} />
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
