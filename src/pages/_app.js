import { global } from '../styles/global/stylesGlobal'

global()

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
