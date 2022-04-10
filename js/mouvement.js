let nbrDeplacement=0;
let nbrDiamantCollecte =0;
let compteurDiamant=0;
let Niveau=1;

const Grille=document.querySelector("#grille");

document.addEventListener("keyup", function(event){
    if (nbrDiamant!=nbrDiamantCollecte){                                                                        //Impossible de bouger si la partie est gagnée
        if(mort!=true){                                                                                         //Impossible de bouger si player est mort
            switch (event.code){
                case 'ArrowUp':
                case 'KeyW' :
                    if (Grille.children[0].children[PositionY].classList.contains('player')===true){            //Impossible de bouger vers le haut si le personnage est placé a l'extremité haute
                        break;
                    }
                    haut();                                                                                     //Appel de la fonction haut()
                    break;

                case 'ArrowLeft':
                case 'KeyA' :
                    if (Grille.children[PositionX].children[0].classList.contains('player')===true){            //Impossible de bouger vers la gauche si le personnage est placé a l'extremité gauche
                        break;
                    }
                    gauche();                                                                                   //Appel de la fonction gauche()
                    break;

                case 'ArrowDown':
                case 'KeyS' : 
                if (Grille.children[15].children[PositionY].classList.contains('player')===true){               //Impossible de bouger vers le bas si le personnage est placé a l'extremité basse
                    break;
                }
                if (Grille.children[0].children[PositionY].classList.contains('player')===true){                //Verification de la position du personnage a l'extremité haute
                    if(Grille.children[PositionX+1].children[PositionY].classList.contains('rocher')===false){  //Verification d'un rocher sous le player
                        if(Grille.children[PositionX+1].children[PositionY].classList.contains('mur')===false){ //Verification d'un mur sous le player
                            Grille.children[PositionX+1].children[PositionY].className="player";                //Remplace la terre ou le diamant par le personnage
                            Grille.children[PositionX].children[PositionY].className="vide";                    //Remplace l'ancienne position du personnage par du vide
                            PositionX+=1;                                                                       //Modifie la position X du personnage
                            nbrDeplacement+=1;                                                                  //Augmente le compteur du nombre de déplacement du personnage
                            break;
                        }
                    }
                }
                playermort();                                                                                   //Appel de la fonction playermort()
                bas();                                                                                          //Appel de la fonction bas()

                break;
                    
                case 'ArrowRight':
                case 'KeyD' :
                    if (Grille.children[PositionX].children[31].classList.contains('player')===true){           //Impossible de bouger vers le bas si le personnage est placé a l'extremité droite
                        break;
                    }
                    droite();                                                                                   //Appel de la fonction droite()
                    break;      

                default:
                    break;
            }

            compteurDiamant=0;                                                                                  //Remise à 0 du compteur de diamant
            for (let i = 0; i < 32; ++i) {                                                                      //Boucle parcourant la totalité du jeu
                for (let j = 0; j < 16; ++j) {
                    nbrDiamantCollecte=nbrDiamant-compteurDiamant;                                              //Actualisation du nombre de diamant collecté
                    if(Grille.children[j].children[i].classList.contains('rocher')===true){                     //Verification d'un rocher placé au dessus d'un vide
                        if(Grille.children[j+1].children[i].classList.contains('vide')===true) {
                            Grille.children[j+1].children[i].className='rocher';                                //Remplace du vide par le rocher
                            Grille.children[j].children[i].className='vide';                                    //Remplace le rocher par du vide
                        }
                    }
                    if(Grille.children[j].children[i].classList.contains('diamant')===true){                    //Si il y a un diamant dans le jeu, on augmente le compteur de diamant
                        compteurDiamant+=1;
                    }
                    if(Grille.children[j].children[i].classList.contains('player')===true){                     //Si le joueur est dans le jeu, il n'est donc pas mort
                        mort=false;
                    }
                }
            }

            document.getElementById("collected").innerHTML = nbrDiamantCollecte;                                //Information pour l'affiche du nombre de diamant collecté
            document.getElementById("total").innerHTML = nbrDiamant;                                            //Information pour l'affiche du nombre de diamant total dans le niveau
            document.getElementById("deplacement").innerHTML = nbrDeplacement;                                  //Information pour l'affiche du nombre de déplacement effectués


            if (nbrDiamant===nbrDiamantCollecte){                                                               //Si tous les diamants on était récuperer, alors le niveau est fini
                Niveau+=1;                                                                                      //On change donc de niveau
                chargerFichierTexte();                                                                          //On charge la nouvelle carte
            }
        }
    }
});


function playermort(){
    if (Grille.children[PositionX-1].children[PositionY].classList.contains('rocher')===true){
        if(Grille.children[PositionX+1].children[PositionY].classList.contains('rocher')===false){
            if(Grille.children[PositionX+1].children[PositionY].classList.contains('mur')===false){
                Grille.children[PositionX+1].children[PositionY].className='rocher';
                Grille.children[PositionX-1].children[PositionY].className='vide';
                Grille.children[PositionX].children[PositionY].className='vide';
                mort=true;
            }
        }
    }

}

function haut(){

    if (Grille.children[0].children[PositionY].classList.contains('player')===false){
        if (Grille.children[PositionX-1].children[PositionY].classList.contains('rocher')===false){
            if (Grille.children[PositionX-1].children[PositionY].classList.contains('mur')===false){
                Grille.children[PositionX-1].children[PositionY].className="player";
                Grille.children[PositionX].children[PositionY].className="vide";
                PositionX-=1;
                nbrDeplacement+=1;
            }
        }
    }
}

function bas(){

    if (Grille.children[PositionX+1].children[PositionY].classList.contains('rocher')===false){
        if (Grille.children[PositionX+1].children[PositionY].classList.contains('mur')===false){
            Grille.children[PositionX+1].children[PositionY].className="player";
            Grille.children[PositionX].children[PositionY].className="vide";
            PositionX+=1;
            nbrDeplacement+=1;
        }
    }
    
}

function droite(){

    if (Grille.children[PositionX].children[PositionY+1].classList.contains('rocher')===false){
        if (Grille.children[PositionX].children[PositionY+1].classList.contains('mur')===false){
            Grille.children[PositionX].children[PositionY+1].className="player";
            Grille.children[PositionX].children[PositionY].className="vide";
            PositionY+=1;
            nbrDeplacement+=1;
        }
    }
    else if (Grille.children[PositionX].children[PositionY+1].classList.contains('rocher')===true){
        if(Grille.children[PositionX].children[PositionY+2].classList.contains('vide')===true){
            Grille.children[PositionX].children[PositionY+2].className="rocher";
            Grille.children[PositionX].children[PositionY+1].className="player";
            Grille.children[PositionX].children[PositionY].className="vide";
            PositionY+=1;
            nbrDeplacement+=1;

        }
    }

    
}

function gauche(){

    if (Grille.children[PositionX].children[PositionY-1].classList.contains('rocher')===false){
        if (Grille.children[PositionX].children[PositionY-1].classList.contains('mur')===false){
            Grille.children[PositionX].children[PositionY-1].className="player";
            Grille.children[PositionX].children[PositionY].className="vide";
            PositionY-=1;
            nbrDeplacement+=1;
        }
    }

    else if (Grille.children[PositionX].children[PositionY-1].classList.contains('rocher')===true){
        if(Grille.children[PositionX].children[PositionY-2].classList.contains('vide')===true){
            Grille.children[PositionX].children[PositionY-2].className="rocher";
            Grille.children[PositionX].children[PositionY-1].className="player";
            Grille.children[PositionX].children[PositionY].className="vide";
            PositionY-=1;
            nbrDeplacement+=1;
        }
    }    
}

