// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString);

// conversão explícita

// ---> Number();
// ---> String();

const numeroConvertidoString = String(123);
const stringNumeroConvertido = Number(123);

console.log(numeroConvertidoString === stringNumeroConvertido);
