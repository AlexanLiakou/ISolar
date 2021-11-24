import {ApodUi} from "./apod-ui.js";
import {Apod} from "./nasa.js";
import {copyright} from "./general.js";

const apod= new Apod();
const uia= new ApodUi();
copyright;

document.addEventListener("DOMContentLoaded",getPicture);

function getPicture(){
    apod.getPicture()
        .then(results =>{uia.fill(results)})
        .catch(err =>{console.log(err)})
}