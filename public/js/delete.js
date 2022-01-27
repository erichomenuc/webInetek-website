const Devs = document.querySelectorAll('.dev-title-delete');


Devs.forEach((Dev)=>{

   // Dev.style.cursor = "pointer";
    Dev.onclick = function () {

        rc = confirm("¿Seguro que desea Eliminar?");

if(rc==true){
        
     // url = "http://localhost:3001/development/"+ Dev.dataset.id;
     url = "https://web-inetek-api.herokuapp.com/development/"+ Dev.dataset.id;
     
     console.log(url);
    
       fetch(url,{
        method: 'DELETE',
       
        headers: {
            'Content-Type': 'application/json'
        }
       
    })
    .then((res) => {
        console.log(res);
         
        alert("Desarrollo eliminado exitosamente");
        location.reload();
   })
    .catch((err) => alert(err));


}

    }});