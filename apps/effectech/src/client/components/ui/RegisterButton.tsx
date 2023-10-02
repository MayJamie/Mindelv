/** @format */

import type { ComponentProps } from 'react';
import { components, ui } from 'shared-client';

const { Button } = components;
const { AppLink } = ui;

interface IProps extends ComponentProps<typeof Button> {
    link: string;
}

const RegisterButton = ({ link, sx, ...restProps }: IProps) => {
    return (
        <Button
            LinkComponent={AppLink}
            href={link}
            variant='contained'
            {...restProps}
            sx={{ mx: 'auto', my: '50px', display: 'flex', width: 'max-content', ...sx }}
        >
            Register Now
        </Button>
    );
};

export default RegisterButton;
