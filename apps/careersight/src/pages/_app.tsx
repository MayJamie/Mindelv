/** @format */

import type { AppProps } from 'next/app';
import { context } from 'shared-client';
import 'shared-client/src/types/mui.types';
import AppLayout from '../client/components/layout/AppLayout';
import '../styles/globals.css';

const { NextAppRootProvider } = context;

/* eslint-disable no-console -- log initiation of app */
console.log('Careersight app loaded!');

export default function App({ Component, pageProps, ...rest }: AppProps) {
    return (
        <NextAppRootProvider
            Component={Component}
            LayoutComponent={AppLayout}
            description='Find out more about our E-Learning and Career Advisor services'
            title="Careersight | I'd Effect"
            {...rest}
            /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
             -- allow any for Next.js pageProps */
            pageProps={pageProps}
        />
    );
}
