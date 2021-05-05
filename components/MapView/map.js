import React, { useState, useEffect} from 'react';

import { MapContainer, TileLayer,Marker,Popup,useMapEvents, GeoJSON } from 'react-leaflet'
import ReactLeafletKml from 'react-leaflet-kml';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import 'react-leaflet-markercluster/dist/styles.min.css';

import {getKML} from '../../services/kml/getKML';

import SelectList from '../SelectList/SelectList'

const Map = () => {
  
  const [kml, setKml] = React.useState(null);
  const [url, setUrl] = React.useState("/IGNSSRX/SCENARIOS/VIPER/TRUTH/Apr/20140424/A1/20140424_A1.GE.kml");
  const [map, setMap] = React.useState(null);

  useEffect(() => {
    getKML(url).then((kml)=>{
      setKml(kml)
    })
  }, [url]);

  return (
    <div>  
      <div className="row m-3">
        <SelectList kml={kml} setKml={setKml} setUrl={setUrl}></SelectList>            
        <div className="col-sm-8 col-sm-offset-4 col-md-10 col-md-offset-3">
         
          {!kml && 
            <div id="overlay">
              <div className="spinner"/>
            </div>
          } 
        
          <MapContainer whenCreated={setMap} minZoom={5} animate={false} updateWhenZooming={false} center={[51.505, -0.09]} zoom={7} style={{height: "60vh"}}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {kml && <MarkerClusterGroup disableClusteringAtZoom={18} maxClusterRadius={60} chunkedLoading={true}>
                <ReactLeafletKml kml={kml} />
            </MarkerClusterGroup>}      
          </MapContainer>

        </div>
      </div>

      <div className="row m-3">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Name 1</td>
                <td>Size 1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Name 2</td>
                <td>Size 2</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Map
