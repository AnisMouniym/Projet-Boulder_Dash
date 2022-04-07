let d1 = document.getElementById("logo")

document.getElementById("newgame")
        .addEventListener("click", function() {
  document.getElementById("home").hidden = true;
  document.getElementById("game").hidden = false;
  document.getElementById("surprise").hidden = true;
  d1.style.display = "none"; 
}, false);

document.getElementById("accueil")
        .addEventListener("click", function() {
          if (confirm("Voulez-vous vraiment quitter la partie ?")) {
            document.getElementById("home").hidden = false;
            document.getElementById("game").hidden = true;
            document.getElementById("surprise").hidden = false;
            d1.style.display = "flex";
          }
}, false);

document.getElementById("recommencer")
        .addEventListener("click", function() {
          if (confirm("Voulez-vous vraiment recommencer la partie ?")) {
            document.getElementById("home").hidden = false;
            document.getElementById("game").hidden = true;
            document.getElementById("surprise").hidden = false;
            d1.style.display = "flex";
          }
}, false);


