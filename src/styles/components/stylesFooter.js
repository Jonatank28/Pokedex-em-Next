import { styled } from "../global/stitches.config";

export const Container = styled('footer', {
    backgroundColor: '$bg_secundary',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '.4rem',

    'p': {
        color: '$text_white',
    },

    'span': {
        color: '$text_white',
    },
})