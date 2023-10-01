/** @format */

import Head from 'next/head';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import CareersSection from '../../client/pages/careersight/CareersSection';
import IntroSection from '../../client/pages/careersight/IntroSection';

const CareersightPage: TNextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Careersight | I&apos;d Effect | Careersight Jobs Page</title>
                <meta content='See career information' name='description' />
            </Head>
            <IntroSection />
            <CareersSection />
        </>
    );
};

export default CareersightPage;
