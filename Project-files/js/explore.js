import {copyright} from "./general.js";
import {Planet, PlanetImg} from "./planets.js";
import {PlanetUi} from "./planets-ui.js";

const planet= new Planet("earth");
const planetImg= new PlanetImg("earth");
const uip= new PlanetUi();
copyright;

document.addEventListener("DOMContentLoaded",getPlanet);
document.addEventListener("DOMContentLoaded",getPlanetImg);

document.getElementById("planet-submit").addEventListener("click", (e) =>{
    let cPlanet= document.getElementById("planet").value;

    planet.changePlanet(cPlanet);
    planetImg.changePlanetImg(cPlanet);

    getPlanet();
    getPlanetImg();
    clearModal();
});

function getPlanet(){
    planet.getPlanet()
    .then(results =>{uip.fill(results)})
    .catch(err =>{console.log(err)})
}

function getPlanetImg(){
    planetImg.fillImg()
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
    const planetInput= document.getElementById("planet");
    const submitBtn= document.getElementById("planet-submit");
    const re=/^(earth|mars|venus|mercury|jupiter|uranus|neptune|saturn)$/;
    if(!re.test(planetInput.value)|| planetInput.value==""){
        planetInput.classList.add("is-invalid");
        submitBtn.setAttribute("disabled", "disabled");
    } else{
        planetInput.classList.remove("is-invalid");
        submitBtn.removeAttribute("disabled");
    }
}

