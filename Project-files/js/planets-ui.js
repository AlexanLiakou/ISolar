export class PlanetUi{
    constructor(){
        this.name= document.getElementById("p-name");
        this.gravity=document.getElementById("p-gravity");
        this.lengthOfDay= document.getElementById("p-length-of-day");
        this.distanceFromTheSun= document.getElementById("p-distance-from-the-sun");
        this.lengthOfYear= document.getElementById("p-length-of-year");
        this.moons= document.getElementById("p-moons");
    }

    fill(planet){
        this.name.innerHTML=`${planet.englishName}`;
        this.gravity.innerHTML=`${planet.gravity.toFixed(2)} m/s-&#178;`;
        this.lengthOfYear.innerHTML=`${planet.sideralOrbit.toFixed(0)} days`;
        this.lengthOfDay.innerHTML=`${planet.sideralRotation.toFixed(0)} hours`;
        this.distanceFromTheSun.innerHTML=`${(planet.semimajorAxis/1000000).toFixed(1)} km`;
        this.moons.innerHTML=`${planet.moons.length}`;
    }
}