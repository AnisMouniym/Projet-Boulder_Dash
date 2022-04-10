let PositionX=0;
let PositionY=0;
let mort=true;
let fichier = "";
let nbrDiamant=0;
let tableauFinal = [];
let tableauTemporaire=[];

document.addEventListener("DOMContentLoaded", () => {
  chargerFichierTexte();
});

function chargerFichierTexte() {
  if(Niveau<5){
    fetch("../Niveau"+Niveau+".txt").then((res) => res.text()).then((text) => {
      fichier = text;
      compteurDiamant=0;
      tableauFinal=[];
      nbrDiamant=0;
      nbrDeplacement=0;
      nbrDiamantCollecte=0;
      mort=false;
      chargerTableauTemporaire();
  });
}
}

function chargerTableauTemporaire() {
  for (let ligne of fichier.split(/\n/)) {
    tableauTemporaire = [];
    for (let i = 0; i < ligne.length; i++) {
      if (ligne[i] === "M") {
        tableauTemporaire.push("M");
      }
      if (ligne[i] === "T") {
        tableauTemporaire.push("T");
      }
      if (ligne[i] === "R") {
        tableauTemporaire.push("R");
      }
      if (ligne[i] === "D") {
        tableauTemporaire.push("D");
        nbrDiamant+=1;
      }
      if (ligne[i] === "V") {
        tableauTemporaire.push("V");
      }
      if (ligne[i] === "P") {
        tableauTemporaire.push("P");
      }
      if (ligne[i] === "W") {
        tableauTemporaire.push("W")
      }
      if (ligne[i] === "B") {
        tableauTemporaire.push("B")
      }
    }
    tableauFinal.push(tableauTemporaire);
  }
  document.getElementById("total").innerHTML = nbrDiamant;
  document.getElementById("collected").innerHTML = nbrDiamantCollecte;
  document.getElementById("deplacement").innerHTML = nbrDeplacement;

  afficherTableauFinal();
}

function afficherTableauFinal() {
  const grille = document.getElementById("grille");
  grille.innerHTML = '';
  for (let i = 0; i < tableauFinal.length; ++i) { 
    let tabHTML = '<div class="tab">';
    for (let j = 0; j < tableauFinal[i].length; ++j) {
      if (tableauFinal[i][j] === "M") {
        tabHTML += '<div class="mur"></div>';
      }
      if (tableauFinal[i][j] === "T") {
        tabHTML += '<div class="terre"></div>';
      }
      if (tableauFinal[i][j] === "R") {
        tabHTML += '<div class="rocher"></div>';
      }
      if (tableauFinal[i][j] === "D") {
        tabHTML += '<div class="diamant"></div>';
      }
      if (tableauFinal[i][j] === "V") {
        tabHTML += '<div class="vide"></div>';
      }
      if (tableauFinal[i][j] === "P") {
        tabHTML += '<div class="player"></div>';
        PositionX=i;
        PositionY=j;
      }
      if (tableauFinal[i][j] === "B") {
        tabHTML += '<div class="black"></div>';
      }
      if (tableauFinal[i][j] === "W") {
        tabHTML += '<div class="white"></div>';
      }
      else if (tableauFinal[i] === "0") {
        tabHTML += '<div class="autre"></div>';
      }
    }
    tabHTML += '</div>';
    grille.innerHTML += tabHTML;
  } 
}

