/** @format */

import { ui } from 'shared-client';

const { HeroWithVideo } = ui;

const IntroSection = () => {
    return (
        <HeroWithVideo
            boldText="I'd Effect Effectech"
            description={
                'is an online hub ' +
                'focused on teaching ' +
                'through our events and webinars.'
            }
            title='YOUR CAREER DEVELOPMENT PARTNER'
            videoStyles={{ objectPosition: 'center 32%' }}
        />
    );
};

export default IntroSection;
