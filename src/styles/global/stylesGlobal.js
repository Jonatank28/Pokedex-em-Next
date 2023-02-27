import { globalCss } from './stitches.config'

export const global = globalCss({
    '*': {
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        textDecoration: 'none',
        listStyle: 'none',
    },
    'body': {
        backgroundColor: '$bg_primary',
        color: '$text_color'
    },
    'h1, h2, h3, h4, h5, h6, a': {
        color: '$text_color'
    },

}); 