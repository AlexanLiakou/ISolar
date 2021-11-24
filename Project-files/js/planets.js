export class Planet{
    constructor(planet){
        this.planet=planet;
    }

    async getPlanet(){

        const response= await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${this.planet}`);

        const responseData= await response.json();

        return responseData;
    }

    changePlanet(planet){
        this.planet=planet;
    }
}

export class PlanetImg{
    constructor(planet){
        this.planet=planet;
    }

    fillImg(){
        const plImage= document.getElementById("p-image");
        if(this.planet=="earth"){
            plImage.setAttribute("src", "./assets/images/earth.jpg");
        }else if(this.planet=="mars"){
            plImage.setAttribute("src", "./assets/images/mars.jpg");
        }else if(this.planet=="venus"){
            plImage.setAttribute("src", "./assets/images/venus.jpg");
        }else if(this.planet=="mercury"){
            plImage.setAttribute("src", "./assets/images/mercury.jpg");
        }else if(this.planet=="jupiter"){
            plImage.setAttribute("src", "./assets/images/jupiter.png");
        }else if(this.image=="neptune"){
            plImage.setAttribute("src", "./assets/images/neptune.jpg");
        }else if(this.image=="saturn"){
            plImage.setAttribute("src", "./assets/images/saturn.jpg");
        }else if(this.image=="uranus"){
            plImage.setAttribute("src", "./assets/images/uranus.jpg");
        }
    }

    changePlanetImg(planet){
        this.planet=planet;
    }
}