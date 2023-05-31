import Navbar from './Navbar'
import Footer from './Footer'


import Head from 'next/head'


export default function Layout({children}) {
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="/images/pokeball.svg" />
            <title>PokeNext</title>
        </Head>
            <Navbar />
            {children}
            <Footer />
        </>

    )
}