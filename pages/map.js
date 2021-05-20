import Head from 'next/head'
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/NavBar/NavBar'
import About from '../components/About/about'
import Footer from '../components/Footer/footer'
import styles from '../styles/Home.module.css'

export default function Map() {
  const MapWithNoSSR = dynamic(() => import("../components/MapView/map"), {
    ssr: false
  });


  return (
    <>
      <Head>
        <title>Geo-SCPOMNAV - Map</title> 
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Sans" />
      </Head>
    <Navbar/>
  
    <div className="mb-2">
        <h1 className={styles.title}>
            Welcome to <a>Geo-SCPOMNAV!</a>
        </h1>
    </div>
  
    <div className={styles.container}>
      <div className="container-fluid">
        <MapWithNoSSR></MapWithNoSSR>
      </div>
      <main className={styles.main}>
        <p className={styles.description}>
          {/*Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code> */}
        </p>
        <div className={styles.grid}>
          <a></a>
        </div>
      </main>

    </div>
    <Footer/>
    </>
  )
}
