function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Fermeture Formulaire
const closemodal = document.getElementById("closemodal");

// Const Information
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementsByName("location");

// Const Message d'erreur
const errName = document.getElementById("errName");
const errLastName = document.getElementById("errLastName");
const errEmail = document.getElementById("errEmail");
const errBirth = document.getElementById("errBirth");
const errQuantity = document.getElementById("errQuantity")
const errCity = document.getElementById("errCity")

// Const Envois formulaire
const cparti = document.getElementById("parti");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture Formulaire (1)
closemodal.addEventListener("click",($event)=>{
  $event.preventDefault();
  closemodalform();
  });

function closemodalform(){
  
  modalbg.style.display = "none";
  errName.style.display="none";
  errLastName.style.display="none";
  errEmail.style.display="none";
  errBirth.style.display="none";
  errQuantity.style.display="none";
  errCity.style.display="none";

};

// Champs d'entrée prenom/nom correct/incorrect
function correctID(value) {
  return /^[A-Z-a-z]{2,20}$/.test(value);
};

firstname.addEventListener("change",($event)=>{
  if(correctID(firstname.value)==false){
    errName.textContent="Merci de saisir votre prenom"
    errName.style.display="block";
    return false;
  }else{
    errName.style.display="none";
    return true;
  }
});

lastname.addEventListener("change",($event)=>{
  if(correctID(lastname.value)==false){
    errLastName.textContent="Merci de saisir votre nom"
    errLastName.style.display="block";
    return false;
  }else{
    errLastName.style.display="none";
    return true;
  }
});

// Champs d'entrée email correct/incorrect
function correctMail(value) {
  return /^[A-Z-a-z-0-9-.]+@([A-Z-a-z-0-9]+\.)+[A-Z-a-z-0-9]{2,40}$/.test(value);
};

email.addEventListener("change",($event)=>{
  if(correctMail(email.value)==false){
    errEmail.textContent="Merci de saisir votre e-mail"
    errEmail.style.display="block";
    return false;
  }else{
    errEmail.style.display="none";
    return true;
  }
});
