/** @format */

import { REGISTRATION_URL } from '@@components/layout/AppLayout';
import { components, icons, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';

const { Box, Container, Grid, Typography, Button } = components;
const { AppLink } = ui;
const { LaunchIcon } = icons;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const LessonsRegisterSection = () => {
    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} component='section'>
            <Container maxWidth='xl'>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        justifyContent: 'center',
                        paddingTop: 6,
                        alignItems: 'flex-start',
                    }}
                >
                    <Grid
                        item
                        md={4}
                        sx={{ textAlign: { xs: 'left', sm: 'center' } }}
                        xs={12}
                    >
                        <Typography gutterBottom variant='h2'>
                            Registration
                        </Typography>
                        <Typography
                            gutterBottom
                            maxWidth='clamp(10ch, 100%, 60ch)'
                            sx={{ mx: 'auto' }}
                            variant='body1'
                        >
                            Please click the link below to gain access to the
                            I&apos;deffect Academy Summer Classes Registration Form
                        </Typography>
                        <Button
                            LinkComponent={AppLink}
                            href={`${REGISTRATION_URL}`}
                            startIcon={<LaunchIcon fontSize='inherit' />}
                            sx={{ mt: '16px' }}
                            variant='outlined'
                        >
                            Register Now
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LessonsRegisterSection;
