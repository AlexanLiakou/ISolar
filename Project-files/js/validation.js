const submitBtn=document.querySelector(".submit-btn");
const visitorName= document.getElementById("name");
const occupation= document.getElementById("occupation");
const email= document.getElementById("email");

function validateName(){
    const name= document.getElementById("name");
    const re= /^[a-zA-Z]{2,10}$/;

    if(!re.test(name.value)){
        name.classList.add("is-invalid");
    } else{
        name.classList.remove("is-invalid");
    }
}

function validateOccupation(){
    const occupation=document.getElementById("occupation");
    const re= /^[a-zA-Z]{2,10}$/;

    if(!re.test(occupation.value)){
        occupation.classList.add("is-invalid");
    } else{
        occupation.classList.remove("is-invalid");
    }
}

function validateEmail(){
    const email= document.getElementById("email");
    const re= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([A-Za-z]{2,6})$/;

    if(!re.test(email.value)){
        email.classList.add("is-invalid");
    } else{
        email.classList.remove("is-invalid");
    }
}


visitorName.addEventListener("keyup",validateName);
occupation.addEventListener("keyup",validateOccupation);
email.addEventListener("keyup",validateEmail);