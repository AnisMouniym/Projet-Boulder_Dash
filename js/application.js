let d1 = document.getElementById("logo")

document.getElementById("reprendre")
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




var playing = !!('ontouchstart' in window) || !!('ontouchstart' in document.documentElement) || 
!!window.ontouchstart || (!!window.Touch && !!window.Touch.length) || !!window.onmsgesturechange || 
(window.DocumentTouch && window.document instanceof window.DocumentTouch),
snd = document.getElementsByTagName('audio')[0],
ctrl = document.getElementById('mute');
playing = !playing;
ctrl.title = playing? 'Mute' : 'Unmute';
if(playing){snd.autoplay = false; ctrl.src = 'img/mute.png';}
ctrl.addEventListener('click', function(){
  if(playing){
    document.getElementById('music').pause()
  } else {
    document.getElementById('music').play()
  }
  playing = !playing;
  ctrl.title = playing? 'Mute' : 'Unmute';
  ctrl.src = playing? 'img/play.png' : 'img/mute.png';
}, false);
