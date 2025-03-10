/** @format */

import createCache from '@emotion/cache';
import createEmotionServerInstance from '@emotion/server/create-instance';

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
const createEmotionCache = () => {
    return createCache({ key: 'css', prepend: true });
};

export const createEmotionServer = createEmotionServerInstance;

export default createEmotionCache;
