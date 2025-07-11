// ldpmepcj/app.js

alert("Boas vindas ao jogo do número secreto !")
let numeroSecreto = 5
let chute = Number(prompt("Escolha um número entre 1 e 10: "))

if (numeroSecreto === chute) {
    alert(`Você descobriu o número secreto ${numeroSecreto} !`)
} else {
    alert("Você errou !")
}
