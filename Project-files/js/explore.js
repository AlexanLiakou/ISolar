import {copyright} from "./general.js";
import {Planet} from "./planets.js";
import {PlanetUi} from "./planets-ui.js";

const planet= new Planet("earth");
const uip= new PlanetUi();
copyright;

document.addEventListener("DOMContentLoaded",getPlanet);
document.addEventListener("DOMContentLoaded",initialImage);


document.getElementById("planet-submit").addEventListener("click", (e) =>{
    let cPlanet= document.getElementById("planet").value;
    planet.changePlanet(cPlanet);
    getPlanet();
    changePlanetImage(cPlanet);
    clearModal();
});

function getPlanet(){
    planet.getPlanet()
    .then(results =>{uip.fill(results)})
    .catch(err =>{console.log(err)})
}

function initialImage(){
    const plImage= document.getElementById("p-image");
    plImage.setAttribute("src", "./assets/images/earth.jpg");
}


function changePlanetImage(option){
    const planet= option;
    const plImage= document.getElementById("p-image");

    if(planet=="earth"){
        plImage.setAttribute("src", "./assets/images/earth.jpg");
    }else if(planet=="mars"){
        plImage.setAttribute("src", "./assets/images/mars.jpg");
    }else if(planet=="venus"){
        plImage.setAttribute("src", "./assets/images/venus.jpg");
    }else if(planet=="mercury"){
        plImage.setAttribute("src", "./assets/images/mercury.jpg");
    }else if(planet=="jupiter"){
        plImage.setAttribute("src", "./assets/images/jupiter.png");
    }else if(planet=="neptune"){
        plImage.setAttribute("src", "./assets/images/neptune.jpg");
    }else if(planet=="saturn"){
        plImage.setAttribute("src", "./assets/images/saturn.jpg");
    }else if(planet=="uranus"){
        plImage.setAttribute("src", "./assets/images/uranus.jpg");
    }
}

function clearModal(){
    const planetForm= document.getElementById("explore-form");
    const submitBtn= document.getElementById("planet-submit");
    submitBtn.disabled=true;
    planetForm.reset();
}

document.getElementById("planet").addEventListener("keyup",validateModal);
const submitBtn= document.getElementById("planet-submit");
submitBtn.disabled=true;

function validateModal(){
    let planetInput= document.getElementById("planet");
    const submitBtn= document.getElementById("planet-submit");
    const re=/^(earth|mars|venus|mercury|jupiter|uranus|neptune|saturn)$/;
    planetInput.value= planetInput.value.toLowerCase();
    if(!re.test(planetInput.value)|| planetInput.value==""){
        planetInput.classList.add("is-invalid");
        submitBtn.setAttribute("disabled", "disabled");
    } else{
        planetInput.classList.remove("is-invalid");
        submitBtn.removeAttribute("disabled");
    }
}

document.querySelector(".btn-close").addEventListener("click", clearModal);