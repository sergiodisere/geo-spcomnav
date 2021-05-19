import React from 'react';

import {data} from '../SelectList/data'

const SelectList = ({kml, setKml, setUrl, url}) => {
  return (
    <>
      <div className="selectList col-sm-4 col-md-2 pt-3 ">    
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
      </div>
    </>
  )
}

export default SelectList
