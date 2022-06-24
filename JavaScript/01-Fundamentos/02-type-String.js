// Conhecento tipo texto JS

const texto1 = "Olá, Mundo!";
const texto = 'Olá, Mundo!';
const senha = "senhaSuperSegura4561!";

const citacao = "O vida boa hein ";
const nome = "Juca";

// Concatenação de String

console.log(citacao + nome);

// Template string OU Template literal

const tl = `Que-bra-do a maldição ${texto1}`;
console.log(tl);

// Código Unicode

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// Trabalhando com String

const cidade = "são paulo";
const input = "São Paulo";

console.log(cidade === input); 

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo);