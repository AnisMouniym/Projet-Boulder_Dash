let nbrDeplacement =0;
let nbrDiamantCollecte =0;
let compteur =0;
let mort=false;
let a=1;


document.addEventListener("keyup", function(event){
    if (nbrDiamant!=nbrDiamantCollecte){
        if(mort!=true){
            
        switch (event.code)
        {
            case 'ArrowUp':
            case 'KeyW' :
                if (document.querySelector("#grille").children[0].children[y].classList.contains('player')===true){
                    break;
                }
                if (document.querySelector("#grille").children[0].children[y].classList.contains('player')===false){
                if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x-1].children[y].classList.contains('mur')===false){
                document.querySelector("#grille").children[x-1].children[y].className="player";
                document.querySelector("#grille").children[x].children[y].className="vide";
                x-=1;
                nbrDeplacement+=1;
                    }
                }
            }
                break;
            
            case 'ArrowLeft':
            case 'KeyA' :
                if (document.querySelector("#grille").children[x].children[0].classList.contains('player')===true){
                    break;
                }
                if (document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x].children[y-1].classList.contains('mur')===false){
                    document.querySelector("#grille").children[x].children[y-1].className="player";
                    document.querySelector("#grille").children[x].children[y].className="vide";
                    y-=1;
                    nbrDeplacement+=1;
                    }
                }

                else if (document.querySelector("#grille").children[x].children[y-1].classList.contains('rocher')===true){
                    if(document.querySelector("#grille").children[x].children[y-2].classList.contains('vide')===true){
                        document.querySelector("#grille").children[x].children[y-2].className="rocher";
                        document.querySelector("#grille").children[x].children[y-1].className="player";
                        document.querySelector("#grille").children[x].children[y].className="vide";
                        y-=1;
                        nbrDeplacement+=1;
                    }
                }
                break;
                
            case 'ArrowDown':
            case 'KeyS' : 
            if (document.querySelector("#grille").children[15].children[y].classList.contains('player')===true){
                break;
            }
            if (document.querySelector("#grille").children[0].children[y].classList.contains('player')===true){
                if(document.querySelector("#grille").children[x+1].children[y].classList.contains('rocher')===false){
                    if(document.querySelector("#grille").children[x+1].children[y].classList.contains('mur')===false){
                        document.querySelector("#grille").children[x+1].children[y].className="player";
                        document.querySelector("#grille").children[x].children[y].className="vide";
                        x+=1;
                        nbrDeplacement+=1;
                break;
                    }
                }
            }
            if (document.querySelector("#grille").children[x-1].children[y].classList.contains('rocher')===true){
                if(document.querySelector("#grille").children[x+1].children[y].classList.contains('rocher')===false){
                    if(document.querySelector("#grille").children[x+1].children[y].classList.contains('mur')===false){
                        document.querySelector("#grille").children[x].children[y].className='rocher';
                        document.querySelector("#grille").children[x-1].children[y].className='vide';
                        mort=true;
                        break;
                    }
                }
            }
            if (document.querySelector("#grille").children[x+1].children[y].classList.contains('rocher')===false){
                if (document.querySelector("#grille").children[x+1].children[y].classList.contains('mur')===false){
            document.querySelector("#grille").children[x+1].children[y].className="player";
            document.querySelector("#grille").children[x].children[y].className="vide";
            x+=1;
            nbrDeplacement+=1;
                }
            }
                break;
                    
            case 'ArrowRight':
            case 'KeyD' :
                if (document.querySelector("#grille").children[x].children[31].classList.contains('player')===true){
                    break;
                }
                if (document.querySelector("#grille").children[x].children[y+1].classList.contains('rocher')===false){
                    if (document.querySelector("#grille").children[x].children[y+1].classList.contains('mur')===false){
                document.querySelector("#grille").children[x].children[y+1].className="player";
                document.querySelector("#grille").children[x].children[y].className="vide";
                y+=1;
                nbrDeplacement+=1;
                console.log("Niveau"+a+".txt");
                    }
                }
                else if (document.querySelector("#grille").children[x].children[y+1].classList.contains('rocher')===true){
                    if(document.querySelector("#grille").children[x].children[y+2].classList.contains('vide')===true){
                        document.querySelector("#grille").children[x].children[y+2].className="rocher";
                        document.querySelector("#grille").children[x].children[y+1].className="player";
                        document.querySelector("#grille").children[x].children[y].className="vide";
                        y+=1;
                        nbrDeplacement+=1;

                    }
                }

                break;
            default:
                break;
        }

    compteur=0;
    for (let i = 0; i < 32; ++i) {
        for (let j = 0; j < 16; ++j) {
            nbrDiamantCollecte=nbrDiamant-compteur;
            if(document.querySelector("#grille").children[j].children[i].classList.contains('rocher')===true){
                if(document.querySelector("#grille").children[j+1].children[i].classList.contains('vide')===true) {
                    document.querySelector("#grille").children[j+1].children[i].className='rocher';
                    document.querySelector("#grille").children[j].children[i].className='vide';
                }
            }
            if(document.querySelector("#grille").children[j].children[i].classList.contains('diamant')===true){
                compteur+=1;
            }
            if(document.querySelector("#grille").children[j].children[i].classList.contains('player')===true){
                mort=false;
            }
        }
    }

    document.getElementById("collected").innerHTML = nbrDiamantCollecte;
    document.getElementById("total").innerHTML = nbrDiamant;
    document.getElementById("deplacement").innerHTML = nbrDeplacement;



    console.log('nombre de diamant présents = ' + nbrDiamant + ' | nombre de diamant collectés = ' + nbrDiamantCollecte + ' | nombre de déplacement = '+ nbrDeplacement);
    if (nbrDiamant===nbrDiamantCollecte){
        console.log('VICTOIRE');
        a+=1;
        chargerFichier();
        console.log(a);

    }
    }
}
});

