import React, { useState, useEffect} from 'react';

import { MapContainer, TileLayer,Marker,Popup,useMapEvents, GeoJSON } from 'react-leaflet'
import ReactLeafletKml from 'react-leaflet-kml';
import MarkerClusterGroup from 'react-leaflet-markercluster';



import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import 'react-leaflet-markercluster/dist/styles.min.css';


const Map = () => {
  
  const [kml, setKml] = React.useState(null);
  const [url, setUrl] = React.useState('20140604_A0.GE.kml');
  const [map, setMap] = React.useState(null);
  
  useEffect(() => {
    console.log(kml)
    console.log(kml!=null)
    fetch(
      url
      //'20140604_A0.GE.kml'
      //"/20140409_A1_truth.kml"
    )
      .then((res) => res.text())
        .then((kmlText) => {
          const parser = new DOMParser();
          const kml = parser.parseFromString(kmlText, "text/xml");
          setKml(kml);
          console.log(kml)
        }); 
  }, [url]);

  return (
    <div>
      <MapContainer whenCreated={setMap} minZoom={5} animate={false} updateWhenZooming={false}
      center={[51.505, -0.09]} zoom={7} style={{height: "60vh", width: "90vw"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {kml &&<MarkerClusterGroup disableClusteringAtZoom={18} maxClusterRadius={60} chunkedLoading={true}>
          {kml && <ReactLeafletKml kml={kml} />}
      </MarkerClusterGroup>}
      {/*<GeoJSON data={kml} />*/}
      
    </MapContainer>
  </div>
  )
}

export default Map