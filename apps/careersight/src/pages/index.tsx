/** @format */

import type { TNextPageWithLayout } from 'shared-client/src/components/context/AppRootProvider';
import AppLayout from '../client/components/layout/AppLayout';

const HomePage: TNextPageWithLayout = () => {
    return <div>Home Page</div>;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
    return <AppLayout hasTransparentHeader>{page}</AppLayout>;
};

export default HomePage;
