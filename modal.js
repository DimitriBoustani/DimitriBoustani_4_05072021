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
const confirmation_mess = document.getElementById('confirmation_mess');
const modalB = document.querySelector(".bground");

// Fermeture Formulaire
const closemodal = document.getElementById("closemodal");

// Const Information
const form1 = document.getElementById("dep");
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.querySelectorAll("input[type=radio]");


// Const Message d'erreur
const errName = document.getElementById("errName");
const errLastName = document.getElementById("errLastName");
const errEmail = document.getElementById("errEmail");
const errBirth = document.getElementById("errBirth");
const errQuantity = document.getElementById("errQuantity")
const errCity = document.getElementById("errCity")

// Const Envois formulaire
const parti = document.getElementById("parti");

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
  return /^[A-Za-z]{2,20}$/.test(value);
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

// Champs d'entrée date correct/incorrect
function correctBirthdate(){
  if(!birthdate.value){
    errBirth.style.display="block";
    errBirth.textContent="Veuillez saisir correctement votre Date de naissance";
    return false;
  }else{
    errBirth.style.display="none";
    return true;
  }
};

// Champs d'entrée quantité correct/incorrect
function correctQuantity(){
  if(quantity.value ==="" || quantity.value >= 100) {
    errQuantity.textContent = "Veuillez choisir un nombre entre 0 et 99";
    return false;
  }else {
    errQuantity.display="none";
    return true;
  }
};

// Champs d'entrée ville correct/incorrect 
function correctCity() { 
  let i =0;
  let isChecked = false;
  while ( i < city.length) {
    if (city[i].checked) {
      isChecked=true;
      break;
    } else {
      i++
    }
  }
  if(!isChecked) {
    errCity.textContent ='Veuillez choisir une ville'
    return false;
    } else {
      errCity.display="none";
      return true;
    }
};

// Champs d'entrée validation du formulaire
form1.addEventListener('submit', (e) => {
  
  e.preventDefault();
  if( correctID() && correctMail() && correctBirthdate() && correctQuantity() && correctCity() ) {
      modalB.style.display = "none";
      confirmation_mess.style.display = "block";  
      document.querySelectorAll('.confirmation_ferme').forEach(button =>{
      button.addEventListener('click', button => {
      if (confirmation_mess.style.display === "block"){
          confirmation_mess.style.display = 'none';
      }})});
      form1.reset();
    } 
    return true;
  })
