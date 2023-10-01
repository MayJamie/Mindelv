/** @format */

import Head from 'next/head';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import IntroSection from '../client/pages/about/IntroSection';
import TeamSection from '../client/pages/about/TeamSection';

const AboutPage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Careersight | I&apos;d Effect | About Us Page</title>
                <meta
                    content='Find out more about the team behind Careersight'
                    name='description'
                />
            </Head>
            <IntroSection />
            <TeamSection />
        </>
    );
};

export default AboutPage;
