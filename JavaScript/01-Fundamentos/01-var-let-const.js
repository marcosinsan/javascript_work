//------ "var" - tem um contexto global. ------ //

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// ------ "let" - tem um contexto de escopo de função. ------ //

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area)

//------ "const" - uma constante que não pode ter seu valor alterado. ------ //

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area)