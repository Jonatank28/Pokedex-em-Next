// eslint-disable-next-line import/no-extraneous-dependencies
import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    getCssText,
} = createStitches({
    theme: {
        colors: {
            gray400: 'gainsboro',
            gray500: 'lightgray',
        },
    },
});