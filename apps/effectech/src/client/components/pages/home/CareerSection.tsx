/** @format */

import { components, icons, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';

const { Box, Container, Grid, Typography, Button } = components;
const { AppLink } = ui;
const { LaunchIcon } = icons;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const CareerSection = () => {
    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} component='section'>
            <Container maxWidth='xl'>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}
                >
                    <Grid item md={4} sx={{ textAlign: 'center' }} xs={12}>
                        <Typography gutterBottom variant='h2'>
                            Career Advice
                        </Typography>
                        <Typography gutterBottom variant='body1'>
                            Visit our{' '}
                            <AppLink href='https://careersight.vercel.app/'>
                                Careersight website
                            </AppLink>{' '}
                            for more details!
                        </Typography>
                        <Button
                            href='https://careersight.vercel.app/'
                            startIcon={<LaunchIcon fontSize='inherit' />}
                            sx={{ mt: '16px' }}
                            variant='contained'
                        >
                            Visit Careersight
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CareerSection;
