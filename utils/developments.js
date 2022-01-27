 const request = require('postman-request');
const APIBASEURL = 'http://localhost:3001'; //'https://new-ecomerce-api-v1.herokuapp.com';


const developments = [
  {
    id: 'dev1',
    title: 'Sismógrafo de 16 canales para esayos sísmicos',
    description: 'Descripcion del item 1'
  },
  {
    id: 'dev2',
    title: 'Sistema Automático de Tomografía Geoeléctrica',
    description: 'Descripcion del item 2'
  },
  {
    id:'dev3',
    title: 'Sistema Automático de Tomografía Geoeléctrica 4',
    description: 'Descripcion del item 3'
  },
  {
    id:'dev4',
    title: 'Telemetria de cisternas',
    description: 'Descripcion del item 3'
  },
  {
    id:'dev5',
    title: 'Controladores de temperatura industriales',
    description: 'Descripcion del item 3'
  }
];






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




  
  

// function getAllDevelopments(callback){  

//   callback(undefined,developments);


// };

// function getSingleDevelopments(id,callback){
//   console.log("el id es: " +id);
  
//   const singleDevelopments = developments.filter(dev=> dev.id === id );
//   console.log(singleDevelopments[0].title);
//   callback(undefined,singleDevelopments[0]);

// }


module.exports = { getAllDevelopments, getSingleDevelopments }