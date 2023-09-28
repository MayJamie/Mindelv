/** @format */

import type { AppProps } from 'next/app';
import { context } from 'shared-client';
import AppLayout from '../client/components/layout/AppLayout';
import '../styles/globals.css';

const { AppRootProvider } = context;

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
