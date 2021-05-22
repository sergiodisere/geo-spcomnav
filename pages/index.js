import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/NavBar/NavBar'
import Carousel from '../components/Carousel/Carousel'
import About from '../components/About/about'
import Footer from '../components/Footer/footer'
import styles from '../styles/Home.module.css'

export default function Home() {

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
            Welcome to <a>SCPOMNAV!</a>
        </h1>
    </div>
  
    <div className={styles.container}>
    <Carousel/>
      
      <About/>
    </div>
    <Footer/>
    </>
  )
}
