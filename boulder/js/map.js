

let fichier = "";
const tab = [];

document.addEventListener("DOMContentLoaded", () => {
  chargerFichier();
});

function chargerTab() {
  const grille = document.getElementById("grille");
  grille.innerHTML = '';
  for (let ligne of fichier.split(/\n/)) {
    const tab1 = [];
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
  console.log(tab);
  afficherTab();
}

function chargerFichier() {
  fetch("./test.txt").then((res) => res.text()).then((text) => {
    fichier = text;
    chargerTab();
  });
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
      }
      else if (tab[i] === "0") {
        tabHTML += '<div class="autre"></div>';
      }
    }
    tabHTML += '</div>';
    grille.innerHTML += tabHTML;
  } 
}

