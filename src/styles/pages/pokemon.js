import { styled } from "@/styles/global/stitches.config";

export const Container = styled('main', {
    minHeight: 'calc(100vh - 152px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    '> h1': {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '$text_white',
        backgroundColor: '$bg_secundary',
        marginTop: '2rem',
        textAlign: 'center',
        padding: '.5rem 3rem',

        '&:first-letter': {
            textTransform: 'capitalize',
        }
    },
})

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '.4rem',
})


export const Tipos = styled('div', {
    display: 'flex',
    gap: '.4rem',

    'button': {
        padding: '.3rem .6rem',
        borderRadius: '5px',
        border: 'none',
        color: '$text_white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }
})

export const AlturaPeso = styled('div', {
    marginTop: '.4rem',
    display: 'flex',
    gap: '1rem',

    'div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
    },

    'div:nth-child(2)': {
        width: '1px',
        backgroundColor: 'gray',
        opacity: '.3',
    },
})