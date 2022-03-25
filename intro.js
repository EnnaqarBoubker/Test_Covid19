const startTest = document.querySelector("#startest");
const informations = document.querySelector("#informations");
const questions = document.querySelector("#questions");

// Events : 
startTest.addEventListener("click", function() {
  informations.classList.remove("label-circle-s");
  console.log("eddd");
  informations.classList.add("label-circle-ns");
  questions.classList.remove("label-circle-ns");
  questions.classList.add("label-circle-s");

  });

// functions : 
// function stepper() {
// informations.classList.remove("label-circle-s");
// informations.classList.add("label-circle-ns");
// questions.classList.add("label-circle-s");
// }