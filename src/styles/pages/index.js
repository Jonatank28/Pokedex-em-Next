import { styled } from "@/styles/global/stitches.config";

export const Container = styled('main', {
    minHeight: 'calc(100vh - 152px)',

})

export const Titulo = styled('main', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    marginTop: '2rem',

    'h1': {
        fontSize: '3rem',
        fontWeight: 'bold',

        'span:first-child': {
            color: '$color_pokeball',
        }
    }

})

export const Cards = styled('main', {
    width: 'min(1500px, 97vw)',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '2rem',
    flexWrap: 'wrap',
})

