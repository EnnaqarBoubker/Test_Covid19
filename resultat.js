// console.log(`js est liee`);
function testcovid(obj) {
  //      ?Tout patient avec fièvre et toux :
  if (obj.answers["fievre"] == "oui" && obj.answers["toux"] == "oui") {
    if (
      obj.pronostique() == 0 &&
      obj.gravite() >= 0 &&
      obj.graviteMajeur() == 0
    ) {
      // console.log(
      //   `téléconsultation ou médecin généraliste ou visite à domicile 1111`
      // );
      let msg =  `téléconsultation ou médecin généraliste ou visite à domicile`;
      document.getElementById('msg').innerText = msg;

    } else if (obj.pronostique() >= 1) {
      if (obj.gravite() == 0) {
        // console.log(
        //   `téléconsultation ou médecin généraliste ou visite à domicile 222`
        // );
        let msg =  `téléconsultation ou médecin généraliste ou visite à domicile`;
        document.getElementById('msg').innerText = msg;
      } else if (obj.graviteMineur() == 1) {
        // console.log(
        //   `téléconsultation ou médecin généraliste ou visite à domicile 333`
        // );
        let msg =  `téléconsultation ou médecin généraliste ou visite à domicile`;
        document.getElementById('msg').innerText = msg;
      } else if (obj.graviteMineur() >= 2) {
        // console.log(`appel 141`);
        let msg =  `appel 141`;
        document.getElementById('msg').innerText = msg;
      }
    }
  }

  //?     Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
  else if (obj.symptomeMoidreDoute() == 1) {
    if (obj.gravite() == 0) {
      console.log(
        `Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute. 00`
      );
    } else if ((obj.gravite() >= 1 && obj.pronostique() == 0) || (obj.gravite() == 0 && obj.pronostique() >= 1)) {
      console.log(
        `Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.`
      );
    }
  }

  //?     Tout patient avec aucun symptôme :
  else if (obj.symptome() == 0) {
    console.log(
      `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`
    );
  }
}
//?     Pour tous :

console.log(
  `Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`
);
