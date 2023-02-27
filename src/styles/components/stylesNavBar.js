import { styled } from "../global/stitches.config";

export const Container = styled('header', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$bg_secundary',
    color: '$text_white',
    padding: '.5rem',
    height: '60px',
})

export const Logo = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    'h1': {
        color: '$text_white',
        fontSize: '2rem',
        fontWeight: 'bold',
    }
})

export const Links = styled('div', {
    'ul': {
        display: 'flex',
        gap: '1rem',

        'li a': {
            color: '$text_white',
            fontSize: '1.5rem',
        }
    }
})