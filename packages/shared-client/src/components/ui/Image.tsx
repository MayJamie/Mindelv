/** @format */

import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';

type TProps = NextImageProps & { fallbackSrc?: NextImageProps['src'] };

const Image = (props: TProps) => {
    const { src, fallbackSrc, ...restProps } = props;
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <NextImage
            onError={() => {
                fallbackSrc && setImgSrc(fallbackSrc);
            }}
            src={imgSrc}
            {...restProps}
        />
    );
};

export default Image;
