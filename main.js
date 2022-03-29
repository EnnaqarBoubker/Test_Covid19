testCovide19 = (obj) =>  {
    if (obj.boubker() == true && obj.graviteMajeur() == 0) {
        if (obj.pronostique() == 0) {
            if (obj.gravite() == 0 && obj.age < 50) {
                //console.log(`rester à votre domicile et de contacter votre médecin en cas d’ apparition de nouveaux symptômes.Vous pourrez aussi utiliser à nouveau l’ application pour réévaluer vos symptômes.`)
                let msg = "nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes";
                //alert(msg);
                document.getElementById('msg').innerText = msg;
                return true;
            } else if ((obj.gravite() == 0 && (obj.age >= 50 || obj.age <= 69)) || (obj.graviteMineur() >= 1)) {
                //console.log(`téléconsultation ou médecin généraliste ou visite à domicile`);
                let msg = `téléconsultation ou médecin généraliste ou visite à domicile “appelez le 141 si une gêne respiratoire ou des difficultésimportantes pours’alimenter ou boire pendant plus de 24h apparaissent.`;
                //alert(msg);
                document.getElementById('msg').innerText = msg;
                return true;
            }
        } else if (obj.pronostique() >= 1) {
            if (obj.gravite() == 0) {
                //console.log(`téléconsultation ou médecin généraliste ou visite à domicile “appelez le 141 si une gêne respiratoire ou des difficultésimportantes pours’alimenter ou boire pendant plus de 24h apparaissent.`);
                let msg = "téléconsultation ou médecin généraliste ou visite à domicile “appelez le 141 si une gêne respiratoire ou des difficultésimportantes pours’alimenter ou boire pendant plus de 24h apparaissent.";
                document.getElementById('msg').innerText = msg;
                return true;
            } else if (obj.graviteMineur() == 1 && obj.graviteMajeur() == 0) {
                //console.log(`téléconsultation ou médecin généraliste ou visite à domicile`);
                let msg = `téléconsultation ou médecin généraliste ou visite à domicile`;
                document.getElementById('msg').innerText = msg;
                return true;
            } if (obj.graviteMineur() >= 2 && obj.graviteMajeur() == 0) {
                //console.log(`Appele 141`);
                let msg = `Appele 141`;
                document.getElementById('msg').innerText = msg;
                return true;
            }
        }
    } else if (obj.boubker() == true && obj.graviteMajeur() >= 1 ) {
            //console.log(`appele 141`);
            let msg = `Appele 141`;
            document.getElementById('msg').innerText = msg;
            return true;
    }
}