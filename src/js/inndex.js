const icones = document.querySelectorAll(".selection-container .img");

//2 - pegar todas as cartas
const cartas = document.querySelectorAll(".char-content");

//3 - perccorrer por todos os icones
icones.forEach(function (icone, indice) {

    icone.addEventListener("click", function () {

        cartas.forEach(function (carta) {

            //5 - romever a classe visible de todas as cartas
            carta.classList.remove("visible")
        })
        //6 - adicionar a clase visible na carta referente ao icone clicado
        cartas[indice].classList.add("visible")

    })
})

