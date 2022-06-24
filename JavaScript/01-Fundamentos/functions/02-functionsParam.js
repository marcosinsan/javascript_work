// Funções com Paramentros

function printName(name) {
    return name;
}

function greeting(mesagem, name) {
    console.log(`${mesagem}, ${printName(name)}!`);
}

// Exucute function

greeting("Welcome","Marco");
