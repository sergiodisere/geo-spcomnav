import React, { useState, useEffect} from 'react';

import {data} from '../SelectList/data'
import {getSamples} from '../../services/samples/getSamples';

const SelectList = ({kml, setKml, setUrl, url}) => {
  const mystyle = {
    height: "230px",
    overflow: "auto",
  };

  return (
    <div className="col-sm-4 col-md-2">    
    <h5  className="title-select">Files KML</h5>
    <select className="form-control" id="eFormControlSelect1" disabled={kml ? false : true} onChange={(e)=>{console.log(e.target.value);setKml(null);setUrl(e.target.value)}}>
      
      {data.map((i)=>{
        return (
          <optgroup key={i.month} label={i.month}>
          {i.days.map((i)=>{
            return <option key={i.name} value={i.path}>{i.name}</option>
          })}
          </optgroup>
        )
      })}

    </select>

    <button type="button" className="btn btn-primary" disabled={kml ? false : true} onClick={()=>{getSamples(url)}}>Get Samples</button>

  </div>
  )
}

export default SelectList
