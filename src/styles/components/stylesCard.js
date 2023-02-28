import { styled } from "../global/stitches.config";

export const Container = styled('div', {
    padding: '.5rem',
    boxShadow: '-1px 6px 15px -3px #000000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$bg_secundary',
    border: '1px solid $color_pokeball',
    borderRadius: '.3rem',

    'p': {
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '$text_white',
        backgroundColor: '$color_pokeball',
        padding: '.1rem .4rem',
        borderRadius: '.3rem',
    },

    'h3': {
        marginTop: '.6rem',
        color: '$text_white',
    },

    'button': {
        marginTop: '.6rem',
        color: '$bg_secundary',
        backgroundColor: '$text_white',
        padding: '.3rem .7rem',
        borderRadius: '.3rem',
    }
})