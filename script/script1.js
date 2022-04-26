let Pista = parseInt(prompt("Qual o comprimento da pista em metros"));
let Voltas = parseInt(prompt("Quantas voltas serao percorridas"));
let Consumo = parseInt(prompt("qual o consumo de combustivel (km/l)"));
let Abastecimentos = parseInt(prompt("Quantas vezes sera abastecido"));

let LitrosConsumidos = (Pista * Voltas) / (Consumo * 1000);

let CommbustivelGasto = LitrosConsumidos / Abastecimentos;

document.write("Total de combustivel gasto até o primeiro reabastecimento: ", CommbustivelGasto, " Litros");