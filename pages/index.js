import Head from 'next/head'
import dynamic from "next/dynamic";
import styles from '../styles/Home.module.css'

export default function Home() {
  const MapWithNoSSR = dynamic(() => import("../components/map"), {
    ssr: false
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Geo-SCPOMNAV</title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Geo-SCPOMNAV!</a>
        </h1>
        <MapWithNoSSR></MapWithNoSSR>
        <p className={styles.description}>
          {/*Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code> */}
        </p>
        <div className={styles.grid}>
          <a></a>
        </div>
      </main>
      <footer className={styles.footer}>
        
        <a
          href="https://www.linkedin.com/in/sergio-díaz98"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create by Sergio Díaz Serena -
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
        &nbsp;
        <a
          href="http://spcomnav.uab.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          For SCPOMNAV UAB 
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
