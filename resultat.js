function testcovid(obj) {
    
//      ?Tout patient avec fièvre et toux :
  if (obj.answers["fievre"] == "oui" && obj.answer["toux"] == 'oui') {
    if (obg.pronostique() == 0) {
      if (
        obj.gravite() == 0 ||
        (obj.graviteMineur() > 0 && obj.graviteMajeur() == 0)
      ) {
        console.log(
          `téléconsultation ou médecin généraliste ou visite à domicile`
        );
      }
    } else if (obj.pronostique() >= 1) {
      if (obj.gravite() == 0) {
        console.log(
          `téléconsultation ou médecin généraliste ou visite à domicile`
        );

      } else if (obj.graviteMineur() == 1) {
        console.log(
          `téléconsultation ou médecin généraliste ou visite à domicile`
        );
      } else if (obj.graviteMineur() >= 2) {
        console.log(`appel 141`);
      }
    } else if (obj.graviteMajeur() >= 1) {
      console.log(`appel 141`);
    }
  }

//?     Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :
 else if (obj.symptompsdoute() >= 1) {
     if (obj.gravite() == 0) {
        console.log(`téléconsultation ou médecin généraliste ou visite à domicile`);   
     }
     else if (obj.gravite() >= 1 || obj.pronostique() >= 1) {
        console.log(`Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.`);
     }
 } 
 
//?     Tout patient avec aucun symptôme :
 else if (obg.symptoms() ==  0) {
             console.log(`Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`);
 }

//?     Pour tous :
 else {
     console.log(`Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.`)
 }

}
