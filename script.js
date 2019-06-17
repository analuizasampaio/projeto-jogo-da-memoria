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
        "imagem": "images/donuts.png",
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


const cartas2 = [
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
        "imagem": "images/donuts.png",
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
    box.setAttribute = ("class", cartas[i].id)
    box.innerHTML = `
        <img src="${cartas[i].imagem}" alt="">
        <img src="images/Mastertech.png" alt="">
    `
    container.appendChild(box)

    let box2 = document.createElement("div")
    box2.setAttribute = ("class", cartas2[i].id)
    box2.innerHTML = `
        <img src="${cartas2[i].imagem}" alt="">
        <img src="images/Mastertech.png" alt="">
    `
    container.appendChild(box2)
}