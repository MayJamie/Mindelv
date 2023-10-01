/** @format */

import Head from 'next/head';
import { useRouter } from 'next/router';
import type { TNextPageWithLayout } from 'shared-client/src/components/context/NextAppRootProvider';
import JobRoleInfoSection from '../../client/pages/careersight/JobRoleInfoSection';
import JobRoleIntroSection from '../../client/pages/careersight/JobRoleIntroSection';

const CareersightJobRolePage: TNextPageWithLayout = () => {
    const router = useRouter();
    const { jobRole } = router.query;
    const jobRoleString = Array.isArray(jobRole) ? jobRole.join(', ') : jobRole;

    return (
        <>
            <Head>
                <title>Careersight | I&apos;d Effect | {jobRoleString} Page</title>
                <meta
                    content={`See career information for ${jobRoleString}`}
                    name='description'
                />
            </Head>
            <JobRoleIntroSection />
            <JobRoleInfoSection />
        </>
    );
};

export default CareersightJobRolePage;
