import React, { useState, useEffect} from 'react';

import { MapContainer, TileLayer,Marker,Popup,useMapEvents, GeoJSON } from 'react-leaflet'
import ReactLeafletKml from 'react-leaflet-kml';
import MarkerClusterGroup from 'react-leaflet-markercluster';



import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import 'react-leaflet-markercluster/dist/styles.min.css';
import {getKML} from '../services/kml/getKML'

const Map = () => {
  
  const [kml, setKml] = React.useState(null);
  const [url, setUrl] = React.useState('20140604_A0.GE.kml');
  const [map, setMap] = React.useState(null);

  useEffect(() => {
    getKML(url).then((kml)=>{
      setKml(kml)
    })
  }, [url]);

  return (
    <div >  
      {!kml && <div id="overlay">
        <div className="spinner" ></div>
      </div>} 
      <MapContainer whenCreated={setMap} minZoom={5} animate={false} updateWhenZooming={false} center={[51.505, -0.09]} zoom={7} style={{height: "60vh", width: "90vw"}}>
     
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
  
      {kml && <MarkerClusterGroup disableClusteringAtZoom={18} maxClusterRadius={60} chunkedLoading={true}>
          <ReactLeafletKml kml={kml} />
      </MarkerClusterGroup>}      
    </MapContainer>
    <button onClick={()=>{setKml(null); url=="20140409_A1_truth.kml" ? setUrl('20140604_A0.GE.kml'):setUrl("20140409_A1_truth.kml")}}>hii</button>
    <select>
      <option>holaa</option>
    </select>
  </div>
  )
}

export default Map