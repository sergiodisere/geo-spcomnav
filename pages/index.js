import Head from 'next/head'
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/NavBar/NavBar'

import styles from '../styles/Home.module.css'

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/MapView/map"), {
    ssr: false
  });
  return (
    <>
      <Head>
        <title>Geo-SCPOMNAV</title> 
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
    <footer className={styles.footer}>
        <text>
          <a
            href="https://www.uab.cat/enginyeria/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2021 Universitat Autònoma de Barcelona - Escola d'Enginyeria
          </a>
          <a
            href="https://www.linkedin.com/in/sergio-díaz98"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            &copy; Create by Sergio Díaz Serena 
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
          </a>
          <a
            href="http://spcomnav.uab.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            For SCPOMNAV UAB 
            {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
          </a>       
        </text>        
      </footer>
    </>
  )
}
