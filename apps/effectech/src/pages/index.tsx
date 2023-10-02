/** @format */

import Head from 'next/head';
import type { ReactElement } from 'react';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import AppLayout from '../client/components/layout/AppLayout';
import IntroSection from '../client/components/pages/home/IntroSection';

const HomePage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Effectech | I&apos;d Effect | Home Page</title>
                <meta
                    content='Find out more about our upcoming E-Learning and career advice events and webinars'
                    name='description'
                />
            </Head>
            <IntroSection />
        </>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout hasTransparentHeader>{page}</AppLayout>;
};

export default HomePage;
