function testCovide19(obj) {
    if (obj.boubker() == true && obj.graviteMajeur() == 0) {
        if (obj.pronostique() == 0) {
            if (obj.gravite() == 0 && obj.age < 50) {
                //console.log(`rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.`)
                let msg = "nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes";
                alert(msg);
            } else if ((obj.gravite() == 0 && (obj.age > 50 || obj.age <= 69)) || (obj.graviteMineur() >= 1)) {
                //console.log(`téléconsultation ou médecin généraliste ou visite à domicile`);
                let msg = `téléconsultation ou médecin généraliste ou visite à domicile`;
                alert(msg);
            }
        } else if (obj.pronostique() >= 1) {
            if (obj.gravite() == 0) {
                console.log(`téléconsultation ou médecin généraliste ou visite à domicile`);
            } else if (obj.graviteMineur() == 1 && obj.graviteMajeur() == 0) {
                console.log(`téléconsultation ou médecin généraliste ou visite à domicile`);
            } if (obj.graviteMineur() >= 2 && obj.graviteMajeur() == 0) {
                console.log(`Appele 141`);
            }
        }
    } else if (obj.boubker() == true && obj.graviteMajeur() >= 1 ) {
            console.log(`appele 141`);
    }
}