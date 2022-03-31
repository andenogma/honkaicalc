import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <>
            <Head><title>Honkai Calc</title></Head>
            <Navbar />
            <main>{children}</main>
            {/*<Footer />*/}
            
        </>
    )
}
