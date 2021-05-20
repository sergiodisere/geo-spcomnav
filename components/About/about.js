import React, { useState, useEffect} from 'react';
import Card from "react-bootstrap/Card";

const About = () => {
 
  return (
    <>
      <div className="container mb-5">
        <div className="ml-5 mt-1 row align-items-center"> 
          <div className="col-lg-6">
            <img className="rounded img-thumbnail" src='https://www.uab.cat/Imatge/550/758/escolaenginyeria,3.jpg'/>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <span className=" text-primary text-center">About</span>
              <h2 className="font-weight-bold">Project iGNSSrx</h2>
              <p className=""> 
                During the years 2012 and 2015 the research group Signal Processing for Communications and Navigation (SPCOMNAV) that belongs to the Department 
                of Telecommunications and Systems Engineering of the Autonomous University of Barcelona (UAB), together with other partners such as NSL and TRN
                located in the UK, were involved in a project funded by the European Commission for the realization of a project called iGNSSrx. The objective 
                of the project was to contribute to the development of signal processing algorithms in order to improve integrity in GNSS receivers, against different
                threats, such as the presence of multiple paths, an absence of line of sight or interference.
              </p>
              <p>
                In 2014, during the experimentation process, a campaign was carried out where a large amount of data was collected, which was stored in a network 
                connected storage (NAS) with a very specific distribution.    
              </p>
            </div>
          </div>
        </div>
      </div>

      <Card className="container mb-5">
      <div className="container mb-5">
        <Card.Text>
        <div className="section-title text-center">
          <spam>Team</spam>
          <h2 className="font-weight-bold">Meet Team UAB</h2>
        </div>
        </Card.Text>
     
        <div className="row text-center">
          <div className="col-sm-6">
            <a href="https://portalrecerca.uab.cat/en/persons/gonzalo-seco-granados-9" target="_blank" className="text-decoration-none">
              <h3>Gonzalo Seco Granados</h3>
              <img src="http://spcomnav.uab.es/img/members/gonzalo2019.jpg" className="w-25 rounded-circle border border-primary"/>
            </a>
            
          </div>
          <div className="col-sm-6">
            <a href="https://portalrecerca.uab.cat/en/persons/jose-antonio-lopez-salcedo-3" target="_blank" className="text-decoration-none">
              <h3>Jose A. Lopez Salcedo</h3>
              <img src="https://portalrecerca.uab.cat/assets/no-portrait-473c6d005990baa1f418d9c668dcd4ec.png" className="w-25 rounded-circle border border-primary"/>
            </a>
            
          </div>
        </div>

      </div>
      </Card>
    </>
  )
}
export default About;