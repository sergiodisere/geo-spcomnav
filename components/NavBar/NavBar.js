import React, { useState, useEffect} from 'react';
import Link from 'next/link'

import Login from '../Login/Login'
import Avatar from '../Avatar/Avatar'
import { onAuthStateChanged } from '../../firebase/client';

const navBar = () => {
  const [show, setShow] = useState (false);
  const [user, setUser] = useState(undefined);

  useEffect(()=>{
    onAuthStateChanged(setUser)
  }, []);
  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-light bg-light sticky-top font-weight-bold shadow p-3 mb-5 rounded">
        <div className="container">
        <a className="navbar-brand" href="/"><img src="/logo.png"/></a>
        <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbar" onClick = {() => setShow (! show)}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div style={show?{display:"block"}:{display:'none'}} className="collapse navbar-collapse " id="navbar">
           <ul className="navbar-nav ml-auto  ">
             <li className="nav-item">
              <Link href="/"><a className="nav-link text-dark">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/map"><a className="nav-link text-dark">Map</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/contact"><a className="nav-link text-dark">Contact</a></Link>
            </li>
            </ul>
            {user === null && <Login setUser={setUser}/>}
            {user && user.avatar && <Avatar src={user.avatar} username={user.username}/> }
         </div>
        </div>        
        </nav>
        
    </>
  )
}
export default navBar;