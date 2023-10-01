/** @format */

import imgEventFlyer from 'public/images/summary-flyer.jpg';
import { components, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';

const { Box, Container, Grid, Typography, Button } = components;
const { Image } = ui;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const EventsSection = () => {
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
                    <Grid item md={4} xs={12}>
                        <Typography gutterBottom variant='h2'>
                            Upcoming Event:
                            <br /> Edulabs Webinar
                        </Typography>
                        <Typography gutterBottom variant='body1'>
                            This webinar intends to provide participants with an overview
                            of the different blended learning models and the benefits of
                            each. The discussion will also incorporate practical examples
                            of how these models can be applied in local school settings.
                        </Typography>
                        <Button disabled variant='contained'>
                            Book Your Spot!
                        </Button>
                    </Grid>
                    <Grid item md={6} sx={{ position: 'relative' }} xs={12}>
                        <Image
                            alt=''
                            src={imgEventFlyer}
                            sx={{ borderRadius: '16px', height: 'auto', width: '100%' }}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default EventsSection;
