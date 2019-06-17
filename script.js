const cartas = [
    {
        "nome": "batata",
        "imagem":"images/batata.jpg" ,
        "id": 1,
    },
    {
        "nome": "coxinha",
        "imagem":"images/coxinha.jpg" ,
        "id": 2,
    },
    {
        "nome": "donuts",
        "imagem": "donuts.png",
        "id": 3,
    },
    {
        "nome": "lasanha",
        "imagem": "images/lasanha.jpg",
        "id": 4,
    },
    {
        "nome": "pipoca",
        "imagem": "images/pipoca.jpg",
        "id": 5,
    }    
]

let container = document.querySelector(".container")

for (let i = 0; i<=cartas.length; i++){
    let box = document.createElement("div")
    box.setAttribute = ("class", cartas[i].nome)
    box.innerHTML = `
        <img src="${cartas[i].imagem}" alt="">
        <img src="" alt="">
    `
    container.appendChild(box)

}

