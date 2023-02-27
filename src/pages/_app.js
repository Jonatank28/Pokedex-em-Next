import Layout from '@/components/Layout'
import { global } from '../styles/global/stylesGlobal'

global()

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
