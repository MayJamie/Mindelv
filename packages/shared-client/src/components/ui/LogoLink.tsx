/** @format */

import type { ComponentProps } from 'react';
import AppLink from './AppLink';
import Image from './Image';

const LogoLink = (props: Partial<ComponentProps<typeof Image>>) => {
    return (
        <AppLink
            href='/'
            sx={{
                display: 'block',
                position: 'relative',
            }}
        >
            <Image
                alt='logo-link'
                height={64}
                objectFit='contain'
                objectPosition='center'
                src='/images/logos/logo.png'
                width={64}
                {...props}
            />
        </AppLink>
    );
};

export default LogoLink;
