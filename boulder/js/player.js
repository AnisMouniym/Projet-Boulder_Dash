let x=1;
let y=1;

document.addEventListener("keyup", function(event){

        switch (event.code)
        {
            case 'ArrowUp':
            case 'KeyW' :
                document.querySelector("#grille").children[x-1].children[y].innerHTML= '<div class="vide"><div/>';
                document.querySelector("#grille").children[x-1].children[y].innerHTML= '<div class="player"><div/>';
                document.querySelector("#grille").children[x].children[y].innerHTML= '<div class="vide"><div/>';
                x-=1;
                break;
            
            case 'ArrowLeft':
            case 'KeyA' :
                    document.querySelector("#grille").children[x].children[y-1].innerHTML= '<div class="vide"><div/>';
                    document.querySelector("#grille").children[x].children[y-1].innerHTML= '<div class="player"><div/>';
                    document.querySelector("#grille").children[x].children[y].innerHTML= '<div class="vide"><div/>';
                    y-=1;

                break;
                
            case 'ArrowDown':
            case 'KeyS' : 
            document.querySelector("#grille").children[x+1].children[y].innerHTML= '<div class="vide"><div/>';
            document.querySelector("#grille").children[x+1].children[y].innerHTML= '<div class="player"><div/>';
            document.querySelector("#grille").children[x].children[y].innerHTML= '<div class="vide"><div/>';
            x+=1;
                break;
                    
            case 'ArrowRight':
            case 'KeyD' :
                document.querySelector("#grille").children[x].children[y+1].innerHTML= '<div class="vide"><div/>';
                document.querySelector("#grille").children[x].children[y+1].innerHTML= '<div class="player"><div/>';
                document.querySelector("#grille").children[x].children[y].innerHTML= '<div class="vide"><div/>';
                y+=1;
                break;

            default:
                break;                      
        }
});
