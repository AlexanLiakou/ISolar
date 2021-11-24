export class ApodUi{
    constructor(){
        this.title= document.getElementById("title");
        this.date= document.getElementById("apod-tag");
        this.picture= document.getElementById("picture");
    }

    fill(image){
        this.title.innerHTML=`${image.title}`;
        this.date.innerHTML=`${image.date} by NASA`;
        this.picture.setAttribute("src",`${image.url}`);
    }
}