
let vistas = ["Viva", "Perón"];

let index = 0;

function adelante(){

    let vistaActual = document.getElementById('vista');

    
    for(let i = 0; i <= vistas.length-1; i++){

        if(i == index){
            vistaActual.innerHTML = vistas[i];
        }

    }

    index++;
    
}





function atras(){
    let vistaActual = document.getElementById('vista');

    index--;

    for(let j = vistas.length -1; j >= 0; j--){
        if(index == j){
            vistaActual.innerHTML = vistas[j];
        }
    }
    
    

}

