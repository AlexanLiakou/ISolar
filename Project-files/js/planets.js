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