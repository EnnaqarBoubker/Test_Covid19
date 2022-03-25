function testCovide19(obj) {
    if (obj.boubker() == true) {
        if (obj.pronostique() == 0) {
            if (obj.gravite() == 0 && obj.age < 50) {
                console.log(`e rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.`)
            } else if (obj.gravite() == 0 && (obj.age <= 50 && obj.age > 70) || obj.gravite() == 1) {
                console.log(`téléconsultation ou médecin généraliste ou visite à domicile`);
            }
        } else if (obj.pronostique >= 1) {
            if (obj.gravite() == 0) {
                console.log(` téléconsultation ou médecin généraliste ou visite à domicile`);
            } else if (obj.graviteMineur() >= 1) {
                console.log(`téléconsultation ou médecin généraliste ou visite à domicile`);
            } else if (obj.graviteMineur() >= 2) {
                console.log(`Appele 414`);
            }
        } else if (obj.graviteMajeur() >= 1) {
            console.log(`appele 141`);
        }
    }
}