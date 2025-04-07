function creerRapportUtilisateur(nom, age, ville, profession, estAbonne) {
  let rapport = "Rapport utilisateur :\n";
  rapport += `Nom : ${nom}\n`;
  rapport += `Age : ${age} ans\n`;
  rapport += `Ville : ${ville}\n`;
  rapport += `Profession : ${profession}\n`;

  return rapport;
}

function ajouterStatutEtCategorie(age, estAbonne, rapport) {
  if (estAbonne == true) {
    rapport += "Statut : Abonné\n";
  } else {
    rapport += "Statut : Non abonné\n";
  }
  if (age < 18) {
    rapport += "Catégorie : Jeune\n";
  } else if (age >= 18 && age < 60) {
    rapport += "Catégorie : Adulte\n";
  } else {
    rapport += "Catégorie : Senior\n";
  }
  return rapport;
}

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
  let rapport = creerRapportUtilisateur(nom, age, ville, profession);
  rapport = ajouterStatutEtCategorie(age, estAbonne, rapport);
  console.log(rapport);
}
genererRapportUtilisateur("Bob", 19, "Nantes", "Dev web", true);
