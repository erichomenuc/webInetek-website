const form = document.querySelector('form')

console.log(form)
//const url = 'http://localhost:3001/development';
const url = 'https://web-inetek-api.herokuapp.com/development';

form.addEventListener('submit', (info)=>{
    info.preventDefault()
   // console.log('Estoy funcionando')

    const formData = new FormData(form)
    const formDataJSON = Object.fromEntries(formData)
    console.log(formDataJSON)

     fetch(url,{
         method: 'POST',
         body: JSON.stringify(formDataJSON),
         headers: {
             'Content-Type': 'application/json'
         }
        
     })
     .then((res) => {
         console.log(res);
         
         if (!res.ok) throw Error(res.status);
         alert("Desarrollo cargado exitosamente");
         location.reload();
    })
     .catch((err) => alert(err + " Algunos datos son obligatorios.\nNo se cargó el desarollo a la base de datos.") )
})