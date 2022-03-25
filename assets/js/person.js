class Person {
    age;
    piods;
    taille;
    answers = new Array();
    f_pronostiques = new Array();

    f_graviteMineur = new Array();
    f_graviteMajeur = new Array();

    constructor(age, poids, taille) {
        this.age = age;
        this.poids = poids;
        this.taille = taille;
    }

    gravite() {
        // let x = this.f_graviteMajeur.length;
        // let y = Object.keys(this.f_graviteMineur).length;
        // return (x + y);
        return this.f_graviteMajeur.length + Object.keys(this.f_graviteMineur).length;
    }

    getFacteurDeGraviteMajeur() {
        if (parseFloat(this.answers['temperature']) <= 35.4) {
            this.f_graviteMajeur.push(this.answers['temperature']);
        }
        if (this.answers['geneRespiratoire'] == 'oui') {
            this.f_graviteMajeur.push(this.answers['geneRespiratoire']);
        }
        if (this.answers['alimenterBoire'] == 'oui') {
            this.f_graviteMajeur.push(this.answers['alimenterBoire']);
        }
    }

    getFacteurDeGraviteMineur() {
        if (parseFloat(this.answers['temperature']) >= 39) {
            this.f_graviteMineur['temperature'] = this.answers['temperature'];
        }
        if (this.answers['fatigue'] == 'oui') {
            this.f_graviteMineur['fatigue'] = this.answers['fatigue'];
        }
        if (this.answers['sentezVous'] == 'mal' || this.answers['sentezVous'] == 'tresMal') {
            this.f_graviteMineur['sentezVous'] = this.answers['sentezVous'];
        }
    }

    pronostique() {
        //return Object.keys(this.f_pronostiques).length;
        let count = 0;
    }

    graviteMajeur() {
        return Object.keys(this.f_graviteMajeur).length;
    }

    graviteMineur() {
        return Object.keys(this.f_graviteMineur).length;
    }

    symptomeMoidreDoute() {
        let counter = 0;
        if (this.answers['fievre'] == 'oui') counter++;
        if (this.answers['toux'] == 'oui') counter++;
        if (this.answers['malGorge'] == "oui") counter++;
        if (this.answers['douleursMusculaires'] == 'oui') counter++;

        return counter;
    }

    symptome() {
        return Object.keys(this.answers).length;
    }

    boubker() {
        let isValid = false;
        if (this.answers['fievre'] == 'oui') isValid = true;
        if (this.answers['toux'] == 'oui' && this.answers['malGorge'] == 'oui') isValid = true;
        if (this.answers['toux'] == 'oui' && this.answers['douleursMusculaires'] == 'oui') isValid = true;
        if (this.answers['fievre'] == 'oui' && this.answers['diarrhee'] == 'oui') isValid = true;

        return isValid;
    }
}