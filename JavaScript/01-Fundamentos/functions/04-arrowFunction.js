// Função comum/classica

// Função classica
function apresentar (nome) {
    return `Meu nome é ${nome}`;
}

// Arrow Functions

// Exemplo 1
const arrowFunctionApresenta = nome => `Meu nome é ${nome}`;
const soma = (numero1, numero2) => numero1 + numero2; 

// Exemplo 2 - Arrow function com mais de 1 linha de instrução.

const calculaNumeros = (n1, n2) => {
    if(n1 >= 10 && n2 >= 10) {
        return "Some números de 1 a 9";
    }

    return n1 + n2;
}
