import { styled } from "@/styles/global/stitches.config";

export const Container = styled('div', {
    minHeight: 'calc(100vh - 120px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',

    '> div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2.5rem',

        'h1': {
            fontSize: '2.5rem',
        },

        'p': {
            width: '30%',
            textAlign: 'center',
            marginTop: '1.5rem',
        }
    }
})