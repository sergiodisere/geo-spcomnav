const { Client } = require('ssh2');
const fs = require('fs');
const conn = new Client();
//
let Client2 = require('ssh2-sftp-client');
let sftpList = new Client2();



//Credentials to access the NAS via Protocol SFTP
const sftpConfig = {
  host: '158.109.73.27',
  port: '55028',
  username: 'sdiazserena',
  password: 'sDiaz.!2021'
}

const getList = async (body) =>{
  return await sftpList.connect(sftpConfig).then(async ()=>{
    const result = await sftpList.list(body.path);
    var arrayFiles=[]
    result.map((i)=>{
      if(i.name.includes(body.file) && i.name.includes(body.intent)){
       if(body.point1.split(':')[0]===i.name.split('.')[1]){
        var hh= i.name.split('.')[1]
        var mm = i.name.split('.')[2] 
        arrayFiles.push({file:i.name, hh:hh, mm:mm, mmIni: body.point1.split(':')[1], mmFi: body.point2.split(':')[1], ssIni:body.point1.split(':')[2], ssFi:body.point2.split(':')[2]  })
       }
        
      }
    })
    return arrayFiles
  })
}

const selectFile = (posiblesFiles, body)=>{
  const file = []
  posiblesFiles.map((i)=>{
    if(Number(i.mm)<=Number(body.point1.split(':')[1])){
      if(Number(body.point1.split(':')[1])-Number(i.mm)<10){
        file.push(i);
      }
    }
  })
  return file
  //var num = posiblesFiles.sort( (a, b) => Math.abs(Number(body.point1.split(':')[1]) - Number(a.mm)) - Math.abs(Number(body.point1.split(':')[1]) - Number(b.mm)) )[0];
 
}
/*
const createFile = async (file, path, sftp)=>{
  const fm=10.28e6
  const fetchData=[]

  const {startByte, endByte} = selectInterval(file);
  console.log(startByte)
  console.log(endByte)
  console.log(path+file.file)
  var rstream = await sftp.createReadStream(path+file.file, { start: startByte, end: endByte});
  //const file = fs.createWriteStream('file.A1');
  //rstream.pipe(file)
  rstream.on("error", err => reject(err));
  rstream.on('data', (row) => {
    fetchData.push(row);
    //console.log(row);
    })
  rstream.on("end", () => res.send(Buffer.concat(fetchData)));
}*/

const selectInterval = (file)=>{
  var fm=10.28e6 // GPS 
  //Si los minutos seleccionados son iguales
  if(file.mmIni === file.mmFi){
    var dif = Number(file.ssFi)- Number(file.ssIni)
    console.log(dif)
    //Punto de inicio y final del fichero. 1 seg equivale a 10.28e6 bytes
    var start = (Number(file.mmIni) - Number(file.mm))*60 + Number(file.ssIni)
    start = (start*fm)

    var end = (start+dif*fm)-1
    return {startByte: start, endByte: end}
  }
}


export default async (req,res) =>{
  conn.on('ready', () => {
    console.log('Client :: ready');
    conn.sftp(async (err, sftp) => {

      console.log(req.body)
      const posiblesFiles = await getList(req.body)
      console.log(posiblesFiles)
      const file = await selectFile(posiblesFiles, req.body)[0]
      console.log(file)
      if(typeof file === 'undefined'){
        res.status(404).json({name:'Sample not available'})
      }else{
        const fetchData=[]
        const {startByte, endByte} = await selectInterval(file);
        console.log(startByte)
        console.log(endByte)
        console.log(req.body.path+'/'+file.file)
        var rstream = await sftp.createReadStream(req.body.path+'/'+file.file, { start: startByte, end: endByte});
        rstream.on("error", err => reject(err));
        rstream.on('data', (row) => {
          fetchData.push(row);
          })
        rstream.on("end", () => res.send(Buffer.concat(fetchData)));
      
      }
      /*
      const fm=10.28e6
      const fetchData=[]
      var rstream = await sftp.createReadStream('/IGNSSRX/GNSS_SAMPLES/Vehicular Data Store/2014/apr/11/STEREO/STEREO_GPS_11Apr2014.08.51.A0', { start: 0, end: fm-1});
      //const file = fs.createWriteStream('file.A1');
      //rstream.pipe(file)
      rstream.on("error", err => reject(err));
      rstream.on('data', (row) => {
        fetchData.push(row);
        //console.log(row);
        })
      rstream.on("end", () => res.send(Buffer.concat(fetchData)));
      */
     //res.status(200).json({ name: 'John Doe' })
    });
  }).connect(sftpConfig);
}

