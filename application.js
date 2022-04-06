let d1 = document.getElementById("logo")

document.getElementById("newgame")
        .addEventListener("click", function() {
  document.getElementById("home").hidden = true;
  document.getElementById("game").hidden = false;
  d1.style.display = "none";
  
  
}, false);

document.getElementById("accueil")
        .addEventListener("click", function() {
  document.getElementById("game").hidden = true;
  document.getElementById("home").hidden = false;
  d1.style.display = "flex";
}, false);



