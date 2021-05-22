import React, { useState, useEffect} from 'react';
import Spinner from 'react-bootstrap/Spinner'

import {getSamples} from '../../services/samples/getSamples';

const Table = ({url, point1, point2, setPoint1, setPoint2}) => {

  const [nameFile, setNameFile] = React.useState(null);
  const [downloadFile, setDownloadFile] = React.useState(false);
  const [typeSPS, setTypeSPS] = React.useState('GPS')

  useEffect(() => {
    setPoint1(null)
    setPoint2(null)
    const fileName = url.split("/", -1)
    setNameFile(fileName[fileName.length-1])
    
  }, [url]);
  
  const clickButtonDownload = ()=>{
    setDownloadFile(true);
    if(point1<point2){
      getSamples(url,  point1, point2, typeSPS).then(()=>{setDownloadFile(false)}).catch(()=>setDownloadFile(false))
    }else{
      alert('Start Point must be less than End Point') 
      setDownloadFile(false)
    }

    
  }
  return (
    <>  
      <div className="table-responsive">
        <div className="table-wrapper d-flex justify-content-center">  
          <table className="table table-striped w-50" >
            <thead>
              <tr>
                <th  >File Name</th>
                <th className="text-center " >Point 1</th>
                <th className="text-center " >Point 2</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td > <div className="card-body text-center mt-2 font-weight-bold" >{nameFile}</div></td>
                <td >
                   <div className="card-body d-flex  align-items-center text-center">
                    <p className="text-center mx-auto my-auto ">{point1} </p>
                    <button type="button" className=" mx-start justify-content-end btn btn-secondary" onClick={()=>{setPoint1(null)}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button> 
                    
                  </div>
                </td>
                <td  >
                 <div className="card-body d-flex justify-content-between align-items-center">
                  <p className="text-center  mx-auto my-auto ">{point2}</p> 
                  <button type="button" className="mx-start justify-content-end btn btn-secondary" onClick={()=>{setPoint2(null)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg>
                  </button>
                  </div> </td>
                  <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>



      <div className="col text-center">
        <div className="pb-3">
          <p  className="title-select font-weight-bold mb-1">Type of Satellite Positioning System</p>
            <select className="input-small" id="eFormControlSelect1" onChange={(e)=>{setTypeSPS(e.target.value)}}>  
              <option key='1' value='GPS'>GPS</option>
              <option key='2' value='GLO'>GLONASS</option>
            </select>
        </div>

        <button type='button' onClick={clickButtonDownload} className='btn btn-primary mb-5' disabled={downloadFile==false ? false : true}>
          {downloadFile==true && <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />  }
          
          {downloadFile==true ? ' Downloading...' : 'Download Sample'}
        </button>
      </div>
      
    </>
  )
}

export default Table
