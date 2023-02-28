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
            bg_primary: '#fafafa',
            bg_primary_secundary: '#6b7280',
            bg_secundary: '#1a1b1c',
            text_color: '#171717',
            text_white: '#fff',
            color_pokeball: '#D80807',
        },
    },
});