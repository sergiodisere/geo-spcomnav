import Head from 'next/head'
import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../components/NavBar/NavBar'
import About from '../components/About/about'
import Footer from '../components/Footer/footer'
import ProfileC from '../components/Profile/Profile'
import styles from '../styles/Home.module.css'

import { Row, Col, Card, Button } from 'reactstrap';
import { useRouter } from 'next/router'
import { onAuthStateChanged } from '../firebase/client';

export default function Profile() {

  useEffect(()=>{
   
  }, []);

  return (
    <>
      <Head>
        <title>Geo-SCPOMNAV - Map</title> 
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Josefin+Sans" />
      </Head>
      
      <Navbar/>

      <div className="justify-content-center mb-5 px-5 pt-5 contentProfile">
        <ProfileC/>
      </div>
      <div className="">
       <Footer/>
      </div>
    </>
  )
}
