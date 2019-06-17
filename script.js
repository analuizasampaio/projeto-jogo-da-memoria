let cartas = document.querySelectorAll(".carta");

function misturar(){
    for(let i = 0; i <= cartas.length;i++){
        let aleatorio = Math.floor(Match.random()*8)
        cartas.style.order = aleatorio
    }

}

misturar();
