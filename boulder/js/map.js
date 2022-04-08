let x=0;
let y=0;

let fichier = "";
let nbrDiamant=0;
let tab = [];
let tab1=[];
document.addEventListener("DOMContentLoaded", () => {
  chargerFichier();
});

function chargerFichier() {
  fetch("./test.txt").then((res) => res.text()).then((text) => {
    fichier = text;
    tab=[];
    chargerTab();
  });
}

function chargerTab() {
  for (let ligne of fichier.split(/\n/)) {
    tab1 = [];
    for (let i = 0; i < ligne.length; i++) {
      if (ligne[i] === "M") {
        tab1.push("M");
      }
      if (ligne[i] === "T") {
        tab1.push("T");
      }
      if (ligne[i] === "R") {
        tab1.push("R");
      }
      if (ligne[i] === "D") {
        tab1.push("D");
        nbrDiamant+=1;
      }
      if (ligne[i] === "V") {
        tab1.push("V");
      }
      if (ligne[i] === "P") {
        tab1.push("P");
      }
      else if (ligne[i] === "0") {
      }
    }

    tab.push(tab1);
  }
  afficherTab();
}

function afficherTab() {
  const grille = document.getElementById("grille");
  grille.innerHTML = '';
  for (let i = 0; i < tab.length; ++i) { 
    let tabHTML = '<div class="tab">';
    for (let j = 0; j < tab[i].length; ++j) {
      if (tab[i][j] === "M") {
        tabHTML += '<div class="mur"></div>';
      }
      if (tab[i][j] === "T") {
        tabHTML += '<div class="terre"></div>';
      }
      if (tab[i][j] === "R") {
        tabHTML += '<div class="rocher"></div>';
      }
      if (tab[i][j] === "D") {
        tabHTML += '<div class="diamant"></div>';
      }
      if (tab[i][j] === "V") {
        tabHTML += '<div class="vide"></div>';
      }
      if (tab[i][j] === "P") {
        tabHTML += '<div class="player"></div>';
        x=i;
        y=j;
      }
      else if (tab[i] === "0") {
        tabHTML += '<div class="autre"></div>';
      }
    }
    tabHTML += '</div>';
    grille.innerHTML += tabHTML;

  } 
}

function nouvelleMap(){
  tab1=[];
  tab=[]

}