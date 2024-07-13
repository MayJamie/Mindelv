/** @format */

import hero from 'public/images/hero.png';
import { components, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';

const { Box, Container, Typography, Button } = components;
const { Image, AppLink } = ui;

const { STYLE_HEIGHT_HEADER, CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const HeroSection = () => {
    return (
        <Box
            className={CLASS_SECTION_ANIMATED_BG}
            component='section'
            sx={{
                display: 'flex',
                height: 450,
                marginTop: `-${STYLE_HEIGHT_HEADER}`,
                paddingBottom: 2,
                position: 'relative',
            }}
        >
            <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Box sx={{ paddingLeft: { md: 8 }, paddingBottom: 10 }}>
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
                        }}
                        variant='h1'
                    >
                        Welcome to I&apos;deffect Academy
                    </Typography>
                    <Typography
                        color='black.main'
                        gutterBottom
                        maxWidth='clamp(10ch, 100%, 60ch)'
                        variant='body1'
                    >
                        Working to help you Unleash Your Potential
                    </Typography>
                    <Button
                        LinkComponent={AppLink}
                        href='/'
                        sx={{ mt: '16px' }}
                        variant='contained'
                    >
                        Classroom Login
                    </Button>
                </Box>
                <Box>
                    <Image
                        alt=''
                        src={hero}
                        sx={{ borderRadius: '4px', width: '100%', height: 'auto' }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
