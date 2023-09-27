/** @format */

import { List, Stack } from '..';
import { FacebookIcon, LinkedInIcon } from '../icons';
import AppLink from './AppLink';

const SocialMediaList = () => {
    return (
        <List component={Stack} direction='row' gap={1}>
            <li>
                <AppLink
                    href='https://www.facebook.com/ideffect?mibextid=ZbWKwL'
                    rel='noreferrer'
                    style={{ color: 'black' }}
                >
                    <FacebookIcon color='inherit' fontSize='large' />
                </AppLink>
            </li>
            <li>
                <AppLink
                    href='https://www.linkedin.com/company/ideffect/'
                    rel='noreferrer'
                    style={{ color: 'black' }}
                    target='_blank'
                >
                    <LinkedInIcon color='inherit' fontSize='large' />
                </AppLink>
            </li>
        </List>
    );
};

export default SocialMediaList;
