let buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function(){
        let isGreen = btn.classList.contains("btnClicked");
        if(isGreen){
            btn.classList.remove("btnClicked");
        } else {
            btn.classList.add("btnClicked");
        }
    });
});

let btnTester = document.getElementById("btnTester");


btnTester.addEventListener("click", function(e){
    let testCovid19Form = document.forms['testCovid19'];
    let facteurPronostique = document.forms['facteurPronostique'];
    globalThis.obj = new Person(facteurPronostique['age'].value, facteurPronostique['poids'].value, facteurPronostique['taille'].value);

    for(let i = 0 ; i < testCovid19Form.length ; i++){
        if (testCovid19Form[i].type == 'radio' && testCovid19Form[i].checked){
            obj.answers[testCovid19Form[i].name] = testCovid19Form[i].value;
            console.log(testCovid19Form[i].name + " : " + testCovid19Form[i].value);
        } else if (testCovid19Form[i].type != 'radio'){
            obj.answers[testCovid19Form[i].name] = testCovid19Form[i].value;
            console.log(testCovid19Form[i].name + " : " + testCovid19Form[i].value);
        }
    }

    for(let i = 0 ; i < facteurPronostique.length ; i++){
        if (facteurPronostique[i].type == 'radio' && facteurPronostique[i].checked){
            obj.f_pronostiques[facteurPronostique[i].name] = facteurPronostique[i].value;
            console.log(facteurPronostique[i].name + " : " + facteurPronostique[i].value);
        } else if (facteurPronostique[i].type != 'radio'){
            obj.f_pronostiques[facteurPronostique[i].name] = facteurPronostique[i].value;
            console.log(facteurPronostique[i].name + " : " + facteurPronostique[i].value);
        }
    }

    obj.getFacteurDeGraviteMajeur();
    obj.getFacteurDeGraviteMineur();
    e.preventDefault();
});
