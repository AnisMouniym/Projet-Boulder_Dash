let x=1;
let y=1;

document.addEventListener("keyup", function(event){
        switch (event.code)
        {
            case 'ArrowUp':
            case 'KeyW' :
                if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('mur')===false){
                document.querySelector("#grille").children[x-1].children[y].className="vide";
                document.querySelector("#grille").children[x-1].children[y].className="player";
                document.querySelector("#grille").children[x].children[y].className="vide";
                x-=1;
                    }
                }
                break;
            
            case 'ArrowLeft':
            case 'KeyA' :
                if (document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x].children[y-1].classList.contains('mur')===false){
                    document.querySelector("#grille").children[x].children[y-1].className="vide";
                    document.querySelector("#grille").children[x].children[y-1].className="player";
                    document.querySelector("#grille").children[x].children[y].className="vide";
                    y-=1;
                    }
                }
                break;
                
            case 'ArrowDown':
            case 'KeyS' : 
            if (document.querySelector("#grille").children[x+1].children[y].classList.contains('rocher')===false){
                if (document.querySelector("#grille").children[x+1].children[y].classList.contains('mur')===false){
            document.querySelector("#grille").children[x+1].children[y].className="vide";
            document.querySelector("#grille").children[x+1].children[y].className="player";
            document.querySelector("#grille").children[x].children[y].className="vide";
            x+=1;
                }
            }
                break;
                    
            case 'ArrowRight':
            case 'KeyD' :
                if (document.querySelector("#grille").children[x].children[y+1].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x].children[y+1].classList.contains('mur')===false){
                document.querySelector("#grille").children[x].children[y+1].className="vide";
                document.querySelector("#grille").children[x].children[y+1].className="player";
                document.querySelector("#grille").children[x].children[y].className="vide";
                y+=1;
                    }
                }
                break;
            default:
                break;
    
        }
});

setInterval(Gravité(), 200);

function Gravité() {

        if(document.querySelector("#grille").children[1].children[12].innerHTML==='<div class="rocher"><div/>'){
            if(document.querySelector("#grille").children[1+1].children[12].innerHTML==='<div class="vide"><div/>') {
                document.querySelector("#grille").children[1+1].children[12].innerHTML='<div class="rocher"><div/>';
                document.querySelector("#grille").children[1].children[12].innerHTML='<div class="vide"><div/>';

    }
}
}
