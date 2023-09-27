/** @format */

import type { AppProps } from 'next/app';
import { context, layout } from 'shared-client';
import type { TPropsWithChildrenDefault } from 'shared-types';

const { AppRootProvider } = context;
const { DefaultHeader, DefaultFooter, DefaultLayout } = layout;

const links = [
    { href: '/', children: 'Home' },
    { href: '/about', children: 'About' },
    { href: '/careersight', children: 'Careersight' },
];

const AppHeader = (props) => {
    return <DefaultHeader links={links} {...props} />;
};

const AppFooter = () => {
    return <DefaultFooter links={links} />;
};

const AppLayout = ({ children }: TPropsWithChildrenDefault) => {
    return (
        <DefaultLayout
            FooterComponent={AppFooter}
            HeaderComponent={AppHeader}
            hasTransparentHeader
        >
            {children}
        </DefaultLayout>
    );
};

/* eslint-disable no-console -- log initiation of app */
console.log('Careersight app loaded!');

export default function App({ Component, pageProps, ...rest }: AppProps) {
    return (
        <AppRootProvider
            Component={Component}
            LayoutComponent={AppLayout}
            description=''
            title=''
            {...rest}
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
             -- allow any for Next.js pageProps */
            pageProps={pageProps}
        />
    );
}
