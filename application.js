
document.getElementById("newgame")
        .addEventListener("click", function() {
  document.getElementById("home").hidden = true;
  document.getElementById("game").hidden = false;
}, false);

document.getElementById("retour")
        .addEventListener("click", function() {
  document.getElementById("game").hidden = true;
  document.getElementById("home").hidden = false;
}, false);



