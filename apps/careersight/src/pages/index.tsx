/** @format */

import Head from 'next/head';
import type { ReactElement } from 'react';
import { ui } from 'shared-client';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import AppLayout from '../client/components/layout/AppLayout';
import DiscoverSection from '../client/pages/home/DiscoverSection';
import EventsSection from '../client/pages/home/EventsSection';
import MarqueeSection from '../client/pages/home/MarqueeSection';
import TargetUsersSection from '../client/pages/home/TargetUsersSection';

const { HeroWithVideo } = ui;

const HomePage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Careersight | I&apos;d Effect | Home Page</title>
                <meta
                    content='Find out more about our E-Learning services'
                    name='description'
                />
            </Head>
            <HeroWithVideo />
            <MarqueeSection />
            <DiscoverSection />
            <TargetUsersSection />
            <EventsSection />
        </>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout hasTransparentHeader>{page}</AppLayout>;
};

export default HomePage;
