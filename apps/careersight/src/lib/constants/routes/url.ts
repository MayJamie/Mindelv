/** @format */

import { CONSTANT } from 'shared-lib';

const { EFFECTECH_URL_MAP } = CONSTANT;

// eslint-disable-next-line turbo/no-undeclared-env-vars -- x
const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV;

export const EFFECTECH_URL = (EFFECTECH_URL_MAP[ENV] ||
    'https://effectechconference.vercel.app/') as string;

console.log('APP ENV:', ENV, 'EFFECTECH_URL:', EFFECTECH_URL);
