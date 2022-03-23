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
    globalThis.obj = new Person(form['age'].value, form['age'].value, form['age'].value);
})
