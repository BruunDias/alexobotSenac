const prompt = require("prompt-sync")();
// function na pratica
function mostrarMenu() {
    console.log("\n--- Alexo: O seu Bot Nerd ---");
    console.log("[1] Qual o pokemon mais famoso?");
    console.log("[2] Cante um Trecho de uma Musica");
    console.log("[3] Curiosidade de Hq");
    console.log("[4] Me recomenda um filme");
    console.log("[5] Sair");
    console.log("------------------------------------");
}
// as funções para as escolhas
function falaSobrePokemon() {
    console.log("Atualmente, o pokemon mais famoso é o Pikachu");
}

function cantarUmaMusica() {
    console.log("Is this the real life, is this just Fantasy?");
}

function curiosidadenerd() {
    console.log("Voce sabia que o Scott Pilgrim teve que lutar contra 7 ex malvados so por uma garota?");
}
function recomendarFilme(){
    console.log ("Assista: Questao de tempo, Brilho eterno de uma mente sem lembranças ou o classico, Interestelar ")
}

// Ira ser mostrado
console.log("Olá! Eu sou o Alexo.");
let nomeUsuario = prompt("Qual é o seu nome? ");
console.log("Olaaa, " + nomeUsuario + "espero que voce esteja bem");

let opcao = "";
while (true) { // Escolhas a ser feita
    mostrarMenu();
    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            falaSobrePokemon();
            break;
        case "2":
            cantarUmaMusica();
            break;
        case "3":
            curiosidadenerd("scottpilgrim");
            break;
        case "4":
            recomendarFilme();
            break;
        case "5":
            console.log("ate maiiiis, espero ter ajudado");
            process.exit(); 
            break;
        default:
            console.log("Opção inválida.");
    }
}

