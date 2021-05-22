import React, { useState, useEffect} from 'react';
import { onAuthStateChanged, getFiles } from '../../firebase/client';
import Navbar from '../NavBar/NavBar'

const Profile = () => {

  const [user, setUser] = useState(undefined);
  const [table, setTable] = useState(undefined)
  useEffect(async ()=>{
    await onAuthStateChanged(setUser)
    getFiles().then((e)=>{setTable(e); console.log(e)})
    
  }, []);
  return (
    <>
    {user && user.avatar && 
      <div className="card shadow-lg p-3 mt-5 bg-white rounded text-center">
        <div className="d-flex justify-content-center">
          <img src={user.avatar} alt="Avatar" className="avatar avatarProfile"/>        
        </div> 
        <div className="mt-2">
          <h2>{user.username}</h2>
          <h5>Log of downloaded files</h5>
        </div>
        { table && table.length!==0 ? 
        <div className="mt-2">
          <div className="table-responsive">
            <div className="table-wrapper d-flex justify-content-center">  
              <table className="table table-striped mx-5" >
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th className="text-center">Point 1</th>
                    <th className="text-center">Point 2</th>
                    <th className="text-center">GNSS Type</th>
                    <th className="text-center">Download Date</th>  
                  </tr>
                </thead>
                <tbody>
                  {table.map((i)=>{
                    return (
                      <tr>
                        <td> <div className="card-body text-center mt-2 font-weight-bold" >{i.fileKML}</div></td>
                        <td>
                          <div className="card-body d-flex  align-items-center text-center">
                            <p className="text-center mx-auto my-auto ">{i.point1} </p>                    
                          </div>
                        </td>
                        <td>
                          <div className="card-body d-flex justify-content-between align-items-center">
                            <p className="text-center  mx-auto my-auto ">{i.point2}</p> 
                          </div>
                        </td>
                        <td>
                          <div className="card-body d-flex justify-content-between align-items-center">
                            <p className="text-center  mx-auto my-auto ">{i.typeGNSS}</p> 
                          </div>
                        </td>
                        <td>
                          <div className="card-body d-flex justify-content-between align-items-center">
                            <p className="text-center  mx-auto my-auto ">{i.date}</p> 
                          </div>
                        </td>
                      </tr>
                    ) 
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        :<span>Nothing</span>}
      </div>
     }
    </>
  )
}
export default Profile;