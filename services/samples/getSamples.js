import moment from 'moment'; 

const path = '/IGNSSRX/GNSS_SAMPLES/Vehicular Data Store/2014'
//Format URL: /IGNSSRX/SCENARIOS/VIPER/TRUTH/Apr/20140604/A0/20140604_A0.GE.kml
const getPathSample = (url, point1, point2) =>{
  var urlArray = url.split('/')
  //Get Month 
  var month = urlArray[5].toLowerCase() 
  console.log(path+'/'+month)

  //Get Day
  var day = Number(urlArray[6].slice(-2))
  console.log(path+'/'+month+'/'+day)

  //Stereo o Triton
  var typeRFfe= 'STEREO'
  console.log(path+'/'+month+'/'+day+'/'+typeRFfe)
  //Get GPS o GLN 
  var typeGNSS = 'GPS'

  //Get Intent AX
  var intent =urlArray[7]
  console.log(intent)
  console.log(path+'/'+month+'/'+day+'/'+typeRFfe+'/'+typeRFfe+'_'+typeGNSS+'_'+day+(month.charAt(0).toUpperCase() + month.slice(1))+'2014'+'.' +'.'+intent)
 
  return {path: path+'/'+month+'/'+day+'/'+typeRFfe, file: typeRFfe+'_'+typeGNSS+'_'+day+(month.charAt(0).toUpperCase() + month.slice(1)), intent: intent, point1: point1, point2: point2}

}


export const getSamples = (url, point1, point2) => {
  
  var a = moment(point1, 'hh:mm:ss')
  var b = moment(point2, 'hh:mm:ss')
  var seconds = b.diff(a)/1000
  console.log(seconds)
  var path = getPathSample(url, point1, point2)
  console.log(path)
  
  return fetch("./api/fileSamples",  {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(path)
 }).then((res) => res.ok ? res.blob():alert('Sample not aviable')).then((data)=>{
   if(typeof data !== 'undefined'){
    console.log(data)
    //Force Download
    var url = window.URL.createObjectURL(data);
    var a = document.createElement('a');
    a.href = url;
    a.download = "filename.A0";
    document.body.appendChild(a); 
    a.click();    
    a.remove();  
   }

});
  /*return fetch("./api/fileSamples", 
  {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: { url: '/IGNSSRX/GNSS_SAMPLES/Vehicular Data Store/2014/apr/11/STEREO/STEREO_GPS_11Apr2014.08.51.A0', seconds: seconds}
 }).then((res) => res.blob()).then((data)=>{
   console.log(data)
   //Force Download
   var url = window.URL.createObjectURL(data);
   var a = document.createElement('a');
   a.href = url;
   a.download = "filename.A0";
   document.body.appendChild(a); 
   a.click();    
   a.remove();  
 }); */
}
