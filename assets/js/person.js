class Person{
    age;
    piods;
    taille;

    answers = new Array();
    f_pronostiques = new Array();
    
    f_graviteMineur = new Array();
    f_graviteMajeur = new Array();

    constructor(age, poids, taille){
        this.age = age;
        this.poids = poids;
        this.taille = taille;
    }

    gravite(){
        return this.f_graviteMajeur.length + this.f_graviteMineur.length;
    }

    getFacteurDeGraviteMajeur(){
        if (parseFloat(this.answers['temperature']) <= 35.4 ){
            this.f_graviteMajeur.push(this.answers['temperature']);
        } else if (this.answers['geneRespiratoire'] == 'oui'){
            this.f_graviteMajeur.push(this.answers['geneRespiratoire']);
        } else if (this.answers['alimenterBoire'] == 'oui'){
            this.f_graviteMajeur.push(this.answers['alimenterBoire']);
        }
    }

    getFacteurDeGraviteMineur() {
        if( parseFloat(this.answers['temperature']) >= 39){
            this.f_graviteMineur['temperature'] = this.answers['temperature'];
        } else if ( this.answers['fatigue'] == 'oui'){
            this.f_graviteMineur['fatigue'] = this.answers['fatigue'] ;
        } else if ( this.answers['senterVous'] == 'oui'){
            this.f_graviteMineur['senterVous'] = this.answers['senterVous'];
        }
    }
}


