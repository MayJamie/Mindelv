/** @format */

import Head from 'next/head';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import IntroSection from '../../client/components/pages/events/IntroSection';
import UpcomingEventsSection from '../../client/components/pages/events/UpcomingEventsSection';

const EventsPage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Effectech | I&apos;d Effect | Events Page</title>
                <meta
                    content='Find out more about our upcoming E-Learning and career advice events and webinars'
                    name='description'
                />
            </Head>
            <IntroSection />
            <UpcomingEventsSection />
        </>
    );
};

export default EventsPage;
