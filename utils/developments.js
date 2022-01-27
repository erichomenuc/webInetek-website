 const request = require('postman-request');
const APIBASEURL = 'https://web-inetek-api.herokuapp.com' ;//'http://localhost:3001'; 


// const developments = [
//   {
//     id: 'dev1',
//     title: 'Sismógrafo de 16 canales para esayos sísmicos',
//     description: 'Descripcion del item 1'
//   },
//   {
//     id: 'dev2',
//     title: 'Sistema Automático de Tomografía Geoeléctrica',
//     description: 'Descripcion del item 2'
//   },
//   {
//     id:'dev3',
//     title: 'Sistema Automático de Tomografía Geoeléctrica 4',
//     description: 'Descripcion del item 3'
//   },
//   {
//     id:'dev4',
//     title: 'Telemetria de cisternas',
//     description: 'Descripcion del item 3'
//   },
//   {
//     id:'dev5',
//     title: 'Controladores de temperatura industriales',
//     description: 'Descripcion del item 3'
//   }
// ];






const getAllDevelopments = (callback) => {
  request(`${APIBASEURL}/developments`, (err, res) => {
    if(err) return callback(err, undefined);
    
    const parsedDev = JSON.parse(res.body);
    callback(undefined, parsedDev);
  })
}

const getSingleDevelopments = (id, callback) => {
  request(`${APIBASEURL}/development/${id}`, (err, res) => {
    if(err) return callback(err, undefined);
     const parsedDev = JSON.parse(res.body);
   callback(undefined, parsedDev);
  })
} 



module.exports = { getAllDevelopments, getSingleDevelopments }