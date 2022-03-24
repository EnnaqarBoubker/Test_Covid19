const startTest = document.querySelector("#startest");
const informations = document.querySelector("#informations");
const questions = document.querySelector("#questions");

// Events : 
startTest.addEventListener("click", stepper);

// functions : 
function stepper() {
informations.classList.remove("label-circle-s");
informations.classList.add("label-circle-ns");
  questions.classList.add("label-circle-s");
}