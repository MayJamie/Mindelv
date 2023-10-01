/** @format */

import { CONSTANT } from 'shared-lib';
import { Box, Container, Typography } from '..';

const { STYLE_HEIGHT_HEADER } = CONSTANT;

const HeroWithVideo = () => {
    return (
        <Box
            component='section'
            sx={{
                display: 'flex',
                height: 650,
                marginTop: `-${STYLE_HEIGHT_HEADER}`,
                paddingBottom: 2,
                position: 'relative',
            }}
        >
            <Box
                autoPlay
                component='video'
                id='intro-vid'
                loop
                muted
                sx={{
                    position: 'absolute',
                    zIndex: -100,
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    minWidth: '100%',
                    minHeight: '100%',
                    objectPosition: 'center center',
                    objectFit: 'cover',
                    filter: 'brightness(60%)',
                }}
            >
                <source src='/videos/intro.mp4' type='video/mp4' />
            </Box>
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
                            color: 'white.main',
                        }}
                        variant='h1'
                    >
                        YOUR CAREER DEVELOPMENT PARTNER
                    </Typography>
                    <Typography
                        color='white.main'
                        gutterBottom
                        maxWidth='clamp(10ch, 100%, 60ch)'
                        variant='body1'
                    >
                        <strong>I&apos;d Effect Edulabs</strong> is an online learning and
                        development environment, focused on assisting users to achieve
                        their academic and career goals.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroWithVideo;
