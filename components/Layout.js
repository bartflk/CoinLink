import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container'


{/* Hier pak ik de layout van de app */}
const Layout = ({children, title = "CoinLink"}) => {
    return (
        <div className="layout">
             <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                    {/* Logo hier */}
                <Link href="/" passHref>
                     {/* logo had ik gemaakt op een random website */}
                    <img src="https://i.imgur.com/ls6PFt4.png"></img>
                </Link>
            </header>
            <main>
                <Container>
                {children}
                </Container>
            </main>
        </div>
    )
}

export default Layout;