/** @format */

import imgEventFlyer1 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_1.jpg';
import { ReactNode } from 'react';
import { components, ui } from 'shared-client';
import { CONSTANT } from 'shared-lib';
import RegisterButton from '../../ui/RegisterButton';

const { Box, Container, Grid, Typography } = components;
const { Image, AppLink } = ui;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

interface IInfo {
    heading: string | ReactNode;
    body: string;
}

const statements: IInfo[] = [
    {
        heading: 'Uncover the Future of Learning',
        body:
            "Effectech is not just a conference, it's an experience that will redefine the way we think about education. " +
            'With a focus on cutting-edge analytics and artificial intelligence, this event promises to equip you with the ' +
            'insights, tools, and strategies to stay at the forefront of educational innovation.',
    },
    {
        heading: ' Interactive Workshops & Expert Insights',
        body:
            'Engage with industry leaders, visionaries, and experts who are shaping the landscape of education. ' +
            'Our carefully curated workshops and sessions will provide hands-on experiences and deep dives into the latest technologies, ' +
            'ensuring you leave with practical knowledge that can be immediately applied in your educational endeavors.',
    },
    {
        heading: 'Network & Collaborate',
        body:
            'Connect with like-minded educators, technologists, and innovators from around the globe. ' +
            'Effectech provides a dynamic platform for forging meaningful relationships, exploring collaborative ' +
            'opportunities, and staying in the loop with the latest trends and breakthroughs in the field.',
    },
    {
        heading: 'Shape the Future of Education',
        body:
            'Effectech offers a unique opportunity to be at the forefront of designing the digital future of education. ' +
            'Discover how analytics and AI can be harnessed to create intuitive, personalized learning ' +
            'platforms that cater to the needs of diverse learners.',
    },
    {
        heading: 'Secure Your Spot',
        body:
            "Don't miss out on this game-changing event! Register now for Effectech 2023 and be part of a " +
            'transformative journey that will shape the future of education. Grab your tickets ' +
            'today and join us in unlocking the potential of Analytics and AI in education!',
    },
    {
        heading: (
            <AppLink href='https://brushfire.com/ideffectprovisorylimited/effectechconference/562072'>
                Register Now
            </AppLink>
        ),
        body:
            "Seize this opportunity to be a part of the educational revolution. Together, we'll answer " +
            'the crucial question: Are A.I. and Analytics in education friends or foes? ' +
            'Join us at Effectech and be the driving force behind the future of learning!',
    },
];

const EventsSection = () => {
    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} component='section'>
            <Container maxWidth='xl'>
                <Grid
                    container
                    spacing={4}
                    sx={{ justifyContent: 'center', alignItems: 'flex-start' }}
                >
                    <Grid item md={6} sx={{ position: 'relative' }} xs={12}>
                        <Image
                            alt=''
                            src={imgEventFlyer1}
                            sx={{ borderRadius: '16px', width: '100%', height: 'auto' }}
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography gutterBottom variant='h2'>
                            Elevate Your Educational Experience at Effectech 2023!
                        </Typography>
                        <Typography variant='body1'>
                            Are you ready to embark on a journey into the future of
                            education? Effectech, the most anticipated edtech conference
                            of the year, invites you to dive into the intriguing theme of
                            &quot;A.I. and Analytics in Education: Friend or Foe?&quot; on
                            the 27th of October 2023!
                        </Typography>
                        <RegisterButton
                            link='https://brushfire.com/ideffectprovisorylimited/effectechconference/562072'
                            sx={{ mt: '20px' }}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ pt: '50px', mx: 'auto', width: 'max-content' }}>
                    {statements.map((statement) => {
                        return (
                            <Box key={statement.heading} sx={{ pb: '32px' }}>
                                <Typography gutterBottom variant='h3'>
                                    {statement.heading}
                                </Typography>
                                <Typography sx={{ maxWidth: '75ch' }} variant='body1'>
                                    {statement.body}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default EventsSection;
