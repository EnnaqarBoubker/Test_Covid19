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

//are > pronostique
btnTester.addEventListener("click", function(e){
    let testCovid19Form = document.forms['testCovid19'];
    //let facteurPronostique = document.forms['facteurPronostique'];
    globalThis.obj = new Person(testCovid19Form['age'].value, testCovid19Form['poids'].value, testCovid19Form['taille'].value);
    let indexOfAge = 0;
    for(let i = 0 ; i < testCovid19Form.length ; i++){
        if(testCovid19Form[i].name == "age") indexOfAge = 1;

        //remplir answers array
        if (testCovid19Form[i].type == 'radio' && testCovid19Form[i].checked && indexOfAge == 0){
            obj.answers[testCovid19Form[i].name] = testCovid19Form[i].value;
        } else if (testCovid19Form[i].type != 'radio' && indexOfAge == 0 ){
            obj.answers[testCovid19Form[i].name] = testCovid19Form[i].value;
        }

        //remplir f_pronostique array
        if (testCovid19Form[i].type == 'radio' && testCovid19Form[i].checked && indexOfAge == 1){
            obj.f_pronostiques[testCovid19Form[i].name] = testCovid19Form[i].value;
        } else if (testCovid19Form[i].type != 'radio' && indexOfAge == 1){
            obj.f_pronostiques[testCovid19Form[i].name] = testCovid19Form[i].value;
        }

        // if (testCovid19Form[i].type == 'radio' && testCovid19Form[i].checked){
        //     obj.answers[testCovid19Form[i].name] = testCovid19Form[i].value;
        //     console.log(testCovid19Form[i].name + " : " + testCovid19Form[i].value);
        // } else if (testCovid19Form[i].type != 'radio'){
        //     obj.answers[testCovid19Form[i].name] = testCovid19Form[i].value;
        //     console.log(testCovid19Form[i].name + " : " + testCovid19Form[i].value);
        // }
    }


    // for(let i = 0 ; i < facteurPronostique.length ; i++){
    //     if (facteurPronostique[i].type == 'radio' && facteurPronostique[i].checked){
    //         obj.f_pronostiques[facteurPronostique[i].name] = facteurPronostique[i].value;
    //         console.log(facteurPronostique[i].name + " : " + facteurPronostique[i].value);
    //     } else if (facteurPronostique[i].type != 'radio'){
    //         obj.f_pronostiques[facteurPronostique[i].name] = facteurPronostique[i].value;
    //         console.log(facteurPronostique[i].name + " : " + facteurPronostique[i].value);
    //     }
    // }

    obj.getFacteurDeGraviteMajeur();
    obj.getFacteurDeGraviteMineur();
    e.preventDefault();

    //cses 
    // globalThis.obj1 = new Person(40, 75, 175);
    // obj1.answers['fievre'] = 'oui';
    // obj1.answers['temperature'] = 35;

    // globalThis.obj2 = new Person(40, 75, 175);
    // obj2.answers['fievre'] = 'oui';
    // obj2.answers['temperature'] = 35;
    // obj2.answers['geneRespiratoire'] = 'oui';

    // globalThis.obj3 = new Person()

    //Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
    globalThis.obj0 = new Person(27, 75, 178);
    obj0.answers['fievre'] = 'oui';
    obj0.f_pronostiques.length = 0; //sans facteurs pronostiques

    globalThis.obj1 = new Person(27, 75, 178);
    obj1.answers['toux'] = "oui";
    obj1.answers['malGorge'] = "oui";

    globalThis.obj2 = new Person(27, 75, 178);
    obj2.answers['toux'] = 'oui';
    obj2.answers['douleursMusculaires'] = 'oui'; //courbatures


    globalThis.obj3 = new Person(27, 75, 178);
    obj3.answers['fievre'] = 'oui';
    obj3.answers['diarrhee'] = 'oui';

});
