/** @format */

import Head from 'next/head';
import type { ReactElement } from 'react';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import AppLayout from '@@components/layout/AppLayout';
import LessonsRegisterSection from '@@components/LessonsRegisterSection';
import HeroSection from '@@components/HeroSection';

const HomePage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Academy | I&apos;deffect | Home Page</title>
                <meta
                    content='Find out more about online lessons platform'
                    name='description'
                />
            </Head>
            <HeroSection />
            <LessonsRegisterSection/>
        </>
    );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
    return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
