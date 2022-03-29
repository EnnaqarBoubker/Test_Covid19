//console.log("js est liee")
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
  //  startTest.addEventListener("click", () => {
  //   informations.classList.remove("label-circle-s");
  //   informations.classList.add("label-circle-ns");
  //   questions.classList.remove("label-circle-ns");
  //   questions.classList.add("label-circle-s");
  // });

  //todo__________________________had fonction dyal resultat______________________________________


  //const resultats = document.querySelector("#result");
  //const btntst = document.querySelector("#btnSuivant");
  function resultatProgress() {
    answers.classList.add("label-circle-ns");
    answers.classList.remove("label-circle-s");
    result.classList.add("label-circle-s");
    result.classList.add("label-circle-ns");
  }

  //todo___________________________________________________________________________________________
let progress_bar = document.querySelector(".progress-bar");
let btn_next = document.getElementById("btnSuivant");
let btn_prec = document.getElementById("btnPrecedant");
let nbr_Q = document.querySelector(".nbr-Q");

let prog = 4.34;
let nbrQ = 1;

btn_next.addEventListener("click",()=>{
  prog += 4.34;
 if(prog < 100){
    nbrQ++;
    progress_bar.style.width = prog +"%";
    nbr_Q.innerHTML = nbrQ + "/23";
    //console.log(prog);
 }
 if (nbrQ == 23){
   document.getElementById('btnSuivant').style.visibility = "hidden";
   document.getElementById('btnTester').style.visibility = "visible";
 }
})

btn_prec.addEventListener("click",()=>{
  prog -= 4.34;
  if(prog >= 4.34 ){
   nbrQ--;
   progress_bar.style.width = prog +"%";
   nbr_Q.innerHTML = nbrQ + "/23";
   //console.log(prog);
  }
})





































//!______________________function annonyme___________________________________

  // startTest.addEventListener("click", function(){
  //   informations.classList.remove("label-circle-s");
  //   console.log("eddd");
  //   informations.classList.add("label-circle-ns");
  //   questions.classList.remove("label-circle-ns");
  //   questions.classList.add("label-circle-s");
  
  //   });


  
