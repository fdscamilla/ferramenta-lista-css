const log = console.log;
const readline = require("readline-sync");

let ins = "";
const propriedades = [];

while (ins != "sair"){
    propriedades.push(ins);
    ins = readline.question("Adicione um atriburto de CSS a lista, quando terminar digite (sair): ");
}

log((`${propriedades.sort().join('\n')}`));