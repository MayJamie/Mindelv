/** @format */

import imgEventFlyer1 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_1.jpg';
import imgEventFlyer2 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_2.jpg';
import imgEventFlyer3 from 'public/images/events/27-Oct-2023/ai_friend_of_foe_3.jpg';
import type { ComponentProps } from 'react';
import { components } from 'shared-client';
import { CONSTANT } from 'shared-lib';
import Events from '../../features/Events';

const { Box } = components;
const { CLASS_SECTION_ANIMATED_BG } = CONSTANT;

const eventItemData: ComponentProps<typeof Events>['items'] = [
    {
        startTime: '9:00 a.m.',
        endTime: '9:15 a.m.',
        info: 'Introduction and welcome address',
        panelists: [{ name: 'Mr. Shiva Ramsingh (moderator)' }],
    },
    {
        startTime: '9:15 a.m.',
        endTime: '10:00 a.m.',
        info: 'Keynote speaker',
        panelists: [
            {
                name: 'Dr. Aleksandra Przegalinska',
                link: 'https://www.linkedin.com/in/aleksandra-przegalinska-5b17125/',
            },
        ],
    },
    {
        startTime: '10:00 a.m.',
        endTime: '10:15 a.m.',
        info: 'Questions and Answers (keynote address)',
        panelists: [],
    },
    {
        startTime: '10:15 a.m.',
        endTime: '11:15 a.m.',
        info: 'Panel discussion',
        panelists: [
            {
                name: 'Ms. Urvashi Tiwari-Roopnarine (moderator)',
                link: 'https://www.linkedin.com/in/aleksandra-przegalinska-5b17125/',
            },
            {
                name: 'Dr. Aleksandra Przegalinska (panelist)',
                link: 'https://www.linkedin.com/in/aleksandra-przegalinska-5b17125/',
            },
            {
                name: 'Dr. Phaedra Mohammed (panelist)',
                link: 'https://sta.uwi.edu/fst/dcit/staff-profiles/Phaedra-Mohammed',
            },
            {
                name: 'Dr. Zameer Mohammed (panelist)',
                link: 'https://www.linkedin.com/in/dr-zameer-mohammed-3399b017/',
            },
            {
                name: 'Mr. Roger St. Hilaire (panelist)',
            },
        ],
    },
    {
        startTime: '11:20 a.m.',
        endTime: '11:45 a.m.',
        info: 'Questions and answers (panel discussion)',
        panelists: [],
    },
    {
        startTime: '12:00 p.m.',
        endTime: '1:00 p.m.',
        info: 'Learning track facilitation',
        panelists: [
            {
                name: 'Mr. Roger St. Hilaire',
            },
            {
                name: 'Dr. Zameer Mohammed',
                link: 'https://www.linkedin.com/in/dr-zameer-mohammed-3399b017/',
            },
        ],
    },
    {
        startTime: '1:00 p.m.',
        endTime: '1:30 p.m.',
        info: 'Close and virtual networking',
        panelists: [],
    },
];

const UpcomingEventsSection = () => {
    return (
        <Box className={CLASS_SECTION_ANIMATED_BG} component='section'>
            <Events
                images={[imgEventFlyer1, imgEventFlyer2, imgEventFlyer3]}
                items={eventItemData}
                name='Artificial Intelligence & Analytics in Education: Friend or Foe?'
                registrationLink='https://brushfire.com/ideffectprovisorylimited/effectechconference/562072'
            />
        </Box>
    );
};

export default UpcomingEventsSection;
