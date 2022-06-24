// TIPO DE FUNÇÕES CLASSICA EM JAVASCRIPT

// Funções sem parametros

function printHelloWord() {
    console.log('Hello, word!');
}

function substract() {
    let n1 = 10;
    let n2 = 5;
    
    return  n1 - n2;
}

//  Funções com Parametros

function printText(text) {
    console.log(text);
}

let n1 = 10;
let n2 = 5;

function sum(number1, number2) {
    return number1 + number2;
}

// Executando Função.
printName();
console.log(substract());
printText('Texto teste!');
console.log(sum(n1, n2));

