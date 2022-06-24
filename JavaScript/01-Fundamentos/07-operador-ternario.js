const idadeMinima = 18;
const idadeCliente = 18;

// Condição classica
if (idadeCliente >= 18) {
    console.log("pode beber cerveja!");
} else {
    console.log('Não pode beber!');
}

// Operador tenario - [condição] ? [true] : [false];

console.log(idadeCliente >= idadeMinima ? 'Maior' : 'Menor');