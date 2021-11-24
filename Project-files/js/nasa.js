export class Apod{
    constructor(){
        this.apiKey="52ihK033dqKHieg3X128kqDmdZ4kgp468f3of0Bv";
    }

    async getPicture(){
        const response= await fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`);

        const responseData= await response.json();

        return responseData;
    }
}
