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


btnTester.addEventListener("click", function(){
    let testCovid19Form = document.forms['testCovid19'];
    let facteurPronostique = document.forms['facteurPronostique'];
    globalThis.obj = new Person(facteurPronostique['age'].value, facteurPronostique['poids'].value, facteurPronostique['taille'].value);
    console.log(testCovid19Form.length);
    console.log(Object.keys(testCovid19Form).length);
    for(let i = 0 ; i < Object.keys(testCovid19Form).length ; i++){
        obj.answers[testCovid19Form[i].name] = testCovid19Form[i].value;
        console.log(testCovid19Form[i].name + " : " + testCovid19Form[i].value);
    }

    // Object.entries(testCovid19Form).forEach(item => {
    //     console.log(item['fievre'].value);
    // });
    for(let i = 0 ; i < facteurPronostique.length ; i++){
        obj.f_pronostiques[facteurPronostique[i].name] = facteurPronostique[i].value;
    }

    obj.getFacteurDeGraviteMajeur();
    obj.getFacteurDeGraviteMineur();
});
