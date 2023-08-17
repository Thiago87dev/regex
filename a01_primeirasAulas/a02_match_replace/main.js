const { texto } = require('../a01_test_exec/base')

const regExp1 = /João|Maria/ig

console.log(texto.match(regExp1));

console.log(texto.replace(/João|Maria/ig, 'Thiago')); // troca todo João e Maria por Thiago
console.log();
console.log('###################################################');
console.log();
console.log(texto.replace(/(João|Maria)/ig, '"-$1-"')); // $1 representa tudo que esta no primeiro grupo $2 seria o segundo grupo e assim por diante
console.log();
console.log('###################################################');
console.log();
console.log(texto.replace(/João|Maria/ig, (input) => {
    return input.toUpperCase()
})) // colocando todos os João e Maria em UPPERCASE