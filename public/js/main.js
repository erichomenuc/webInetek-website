//const { getSingleDevelopments } = require("../../utils/developments");

let indexMenu = 1;
window.onscroll = function () {
  var y = window.scrollY;

  const mq = window.matchMedia("(max-width: 768px)");
  if (!mq.matches) {
    if (y > 220 && y < 550) {
      let coords = document
        .getElementById("container-service")
        .getBoundingClientRect();
      document.getElementById("menu-pads").style.left = "-900px";
      document.getElementById("menu-pads").style.top = coords.top + 60 + "px";
      var element = document.getElementById("service-menu");
      element.classList.add("service-menu-visibility");
      if (indexMenu != 3) {
        document.getElementById("index-menu3").style.opacity = "0";
        document.getElementById("index-menu" + indexMenu).style.opacity = "1";
      }
    } else {
      
      document.getElementById("menu-pads").style.left = "-1000px";
      document.getElementById("menu-pads").style.top = "275px";
      var element = document.getElementById("service-menu");
      element.classList.remove("service-menu-visibility");

      document.getElementById("index-menu" + indexMenu).style.opacity = "0";
      document.getElementById("index-menu3").style.opacity = "1";
    }

    //console.log("y=" + y);
  }

  
};

document
  .getElementById("menu-schematic")
  .addEventListener("click", function () {
    indexMenu = 1;
    document.getElementById("index-menu1").style.opacity = "1";
    document.getElementById("index-menu2").style.opacity = "0";
    document.getElementById("index-menu3").style.opacity = "0";
    document.getElementById("index-menu4").style.opacity = "0";
    document.getElementById("index-menu5").style.opacity = "0";
    document.getElementById("img-service").src = "img/serv-img1.png";
    document.getElementById("text-service").innerHTML =
      "Diseñamos el diagrama de circuito electrónico analógico y digital. Desde la tipología hasta el cálculo. Cada desarrollo tiene un diseño exclusivo adaptado a las necesidades de cada cliente.";
    document.getElementById("title-text-service").innerHTML = this.innerHTML;
  });

document.getElementById("menu-pcb").addEventListener("click", function () {
  indexMenu = 2;
  document.getElementById("index-menu1").style.opacity = "0";
  document.getElementById("index-menu2").style.opacity = "1";
  document.getElementById("index-menu3").style.opacity = "0";
  document.getElementById("index-menu4").style.opacity = "0";
  document.getElementById("index-menu5").style.opacity = "0";
  document.getElementById("img-service").src = "img/serv-img2.png";
  document.getElementById("title-text-service").innerHTML = this.innerHTML;
  document.getElementById("text-service").innerHTML =
    "Con herramientas CAD de vanguardia, diseñamos y modelamos la placa de circuito impreso 3D, para optimizar el diseño y simular el espacio físico donde será alojada. Brindamos el servicio de fabricación y ensamblado de pequeños o grandes volúmenes de producción.";
});

document.getElementById("menu-firmware").addEventListener("click", function () {
  indexMenu = 3;
  document.getElementById("index-menu1").style.opacity = "0";
  document.getElementById("index-menu2").style.opacity = "0";
  document.getElementById("index-menu3").style.opacity = "1";
  document.getElementById("index-menu4").style.opacity = "0";
  document.getElementById("index-menu5").style.opacity = "0";
  document.getElementById("img-service").src = "img/serv-img3.png";
  document.getElementById("title-text-service").innerHTML = this.innerHTML;
  document.getElementById("text-service").innerHTML =
    "Realizamos desarrollo de firmware para diferentes microcontroladores. Nuestra basta experiencia en algoritmos de control y automatización nos permite brindar soluciones electrónicas integrales en campos multidisciplinarios de la ciencia y la industria.";
});

document.getElementById("menu-software").addEventListener("click", function () {
  indexMenu = 4;
  document.getElementById("index-menu1").style.opacity = "0";
  document.getElementById("index-menu2").style.opacity = "0";
  document.getElementById("index-menu3").style.opacity = "0";
  document.getElementById("index-menu4").style.opacity = "1";
  document.getElementById("index-menu5").style.opacity = "0";
  document.getElementById("img-service").src = "img/serv-img4.png";
  document.getElementById("title-text-service").innerHTML = this.innerHTML;
  document.getElementById("text-service").innerHTML =
    "Desarrollamos softwares instalables en PC, para monitoreo, control de procesos, automatización o adquisición de datos que ameriten tener una interface de usuario más compleja y se requiera de generación de reportes, bases de datos o post procesamiento de la información.";
});

document.getElementById("menu-iot").addEventListener("click", function () {
  indexMenu = 5;
  document.getElementById("index-menu1").style.opacity = "0";
  document.getElementById("index-menu2").style.opacity = "0";
  document.getElementById("index-menu3").style.opacity = "0";
  document.getElementById("index-menu4").style.opacity = "0";
  document.getElementById("index-menu5").style.opacity = "1";
  document.getElementById("img-service").src = "img/serv-img5.png";
  document.getElementById("title-text-service").innerHTML = this.innerHTML;
  document.getElementById("text-service").innerHTML =
    "Con industria 4.0 en pleno auge, brindamos servicios de conectividad para control o monitoreo remoto de diferentes variables físicas. Conectamos tu sensor a internet mediante WIFI o GPRS y almacenamos los datos en la nube. Usamos redes LPWAN para concentrar múltiples EndPoint sin instalación cableada.";
});

document
  .getElementById("menu-schematic2")
  .addEventListener("click", function () {
    document.getElementById("img-service").src = "img/serv-img1.png";
    document.getElementById("title-text-service").innerHTML = this.innerHTML;
    document.getElementById("text-service").innerHTML =
      "Diseñamos el diagrama de circuito electrónico analógico y digital. Desde la tipología hasta el cálculo. Cada desarrollo tiene un diseño exclusivo adaptado a las necesidades de cada cliente.";
  });

document.getElementById("menu-pcb2").addEventListener("click", function () {
  document.getElementById("img-service").src = "img/serv-img2.png";
  document.getElementById("title-text-service").innerHTML = this.innerHTML;
  document.getElementById("text-service").innerHTML =
    "Con herramientas CAD de vanguardia, diseñamos y modelamos la placa de circuito impreso 3D, para optimizar el diseño y simular el espacio físico donde será alojada. Brindamos el servicio de fabricación y ensamblado de pequeños o grandes volúmenes de producción.";
});

document
  .getElementById("menu-firmware2")
  .addEventListener("click", function () {
    document.getElementById("img-service").src = "img/serv-img3.png";
    document.getElementById("title-text-service").innerHTML = this.innerHTML;
    document.getElementById("text-service").innerHTML =
      "Realizamos desarrollo de firmware para diferentes microcontroladores. Nuestra basta experiencia en algoritmos de control y automatización nos permite brindar soluciones electrónicas integrales en campos multidisciplinarios de la ciencia y la industria.";
  });

document
  .getElementById("menu-software2")
  .addEventListener("click", function () {
    document.getElementById("img-service").src = "img/serv-img4.png";
    document.getElementById("title-text-service").innerHTML = this.innerHTML;
    document.getElementById("text-service").innerHTML =
      "Desarrollamos softwares instalables en PC, para monitoreo, control de procesos, automatización o adquisición de datos que ameriten tener una interface de usuario más compleja y se requiera de generación de reportes, bases de datos o post procesamiento de la información.";
  });

document.getElementById("menu-iot2").addEventListener("click", function () {
  document.getElementById("img-service").src = "img/serv-img5.png";
  document.getElementById("title-text-service").innerHTML = this.innerHTML;
  document.getElementById("text-service").innerHTML =
    "Con industria 4.0 en pleno auge, brindamos servicios de conectividad para control o monitoreo remoto de diferentes variables físicas. Conectamos tu sensor a internet mediante WIFI o GPRS y almacenamos los datos en la nube. Usamos redes LPWAN para concentrar múltiples EndPoint sin instalación cableada.";
});





var modalDev = document.getElementById("modal-dev");
var blur = document.getElementById("blur");
var modalDevTitle = document.querySelector(".modal-dev-title");
var modalDevService = document.querySelector(".modal-dev-service");
var modalDevDescription = document.querySelector(".modal-dev-description");
var modalDevImg = document.querySelector(".modal-dev-img");
var cardDevs = document.querySelectorAll(".card-dev")
// faltan las restantes cards development



cardDevs.forEach((cardDev)=>{

cardDev.style.cursor = "pointer";
cardDev.onclick = function () {
  modalDev.classList.add("active");
  //modalDev.innerHTML = "Acá va el contenido detalldo del trabajo en card 01";
  blur.classList.add("active");

 // url = "http://localhost:3000/development/"+ cardDev.dataset.id;

 url = "https://web-inetek-website.herokuapp.com/development/"+ cardDev.dataset.id;
 


  //console.log(cardDev.dataset.id);  

  fetch(url)
  .then(response => response.json())
  .then(data => {    
   // modalDev.innerHTML = data.title;
    modalDevTitle.innerText = data.title;
    modalDevService.innerText = data.service;
    modalDevDescription.innerText = data.description;
    modalDevImg.src = data.urlImg;
  });
}});



blur.addEventListener("click", function () {
  modalDev.classList.remove("active");
  blur.classList.remove("active");
});

document.getElementById("menu-button").addEventListener("click", function () {
  document.getElementById("main-nav-ul").style.display = "block";
  
  window.scrollTo(0, 0);
});

document.getElementById("main-nav-ul").addEventListener("click", function () {
  const mq = window.matchMedia("(max-width: 768px)");
  if (mq.matches) {
    document.getElementById("main-nav-ul").style.display = "none";
  }
});
