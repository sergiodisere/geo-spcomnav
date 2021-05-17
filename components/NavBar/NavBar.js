import React, { useState, useEffect} from 'react';

import Link from 'next/link'
const navBar = () => {
  const [show, setShow] = React.useState (false);
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
              <Link href="/about"><a className="nav-link text-dark">About</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/contact"><a className="nav-link text-dark">Contact</a></Link>
            </li>
            </ul>
         </div>
        </div>        
        </nav>
        
    </>
  )
}
export default navBar;