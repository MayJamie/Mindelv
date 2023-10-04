/** @format */

import { CONSTANT } from 'shared-lib';

const { CAREERSIGHT_URL_MAP } = CONSTANT;

export const REGISTRATION_URL_MAP = {
    '27-Oct-2023':
        'https://brushfire.com/ideffectprovisorylimited/effectechconference/562072',
} as const;

// eslint-disable-next-line turbo/no-undeclared-env-vars -- x
const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV;

export const CAREERSIGHT_URL = (CAREERSIGHT_URL_MAP[ENV] ||
    'https://careersight.vercel.app/') as string;
