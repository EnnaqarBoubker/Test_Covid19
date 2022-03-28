console.log("js est liee")
//todo page introduction

const startTest = document.querySelector("#startest");
const informations = document.querySelector("#informations");
const questions = document.querySelector("#questions");

//?---------------page questionaire--------------------
const answers = document.querySelector("#answers");
const info = document.querySelector("#info");

answers.classList.remove("label-circle-ns");
answers.classList.add("label-circle-s");

info.classList.remove("label-circle-s");
info.classList.add("label-circle-ns");


// Events : 
//!______________________arrow function ___________________________________
   startTest.addEventListener("click", () => {
  informations.classList.remove("label-circle-s");
  informations.classList.add("label-circle-ns");
  questions.classList.remove("label-circle-ns");
  questions.classList.add("label-circle-s");



  });
//!______________________function annonyme___________________________________

  // startTest.addEventListener("click", function(){
  //   informations.classList.remove("label-circle-s");
  //   console.log("eddd");
  //   informations.classList.add("label-circle-ns");
  //   questions.classList.remove("label-circle-ns");
  //   questions.classList.add("label-circle-s");
  
  //   });


  
//   const resultats = document.querySelector("#result");
//   const btntst = document.querySelector("#btnSuivant");

//   btnSuivant.addEventListener("click", ()=>{
//   answers.classList.remove("label-circle-ns");
//   answers.classList.remove("label-circle-s");
//   resultats.classList.add("label-circle-s");
//   resultats.classList.add("label-circle-ns");
// });
