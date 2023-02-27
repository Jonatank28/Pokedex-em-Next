import Head from 'next/head'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/favicon.ico" />
                <title>Pokedex</title>
            </Head>
            <NavBar />
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout
