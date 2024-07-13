/** @format */

import { components, icons, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';

const { Box, Container, Grid, Typography, Button } = components;
const { AppLink } = ui;
const { LaunchIcon } = icons;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const REGISTRATION_URL = 'https://forms.gle/yYRxbKxyWBvBTCS79';

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
                        <Typography gutterBottom variant='body1'>
                            Please select the link below to gain access to the I&apos;deffect
                            Academy Summer Classes Registration Form
                        </Typography>
                        <Button
                            LinkComponent={AppLink}
                            href={REGISTRATION_URL}
                            startIcon={<LaunchIcon fontSize='inherit' />}
                            sx={{ mt: '16px' }}
                            variant='outlined'
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default LessonsRegisterSection;
