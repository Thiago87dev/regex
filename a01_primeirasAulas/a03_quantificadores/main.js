const { texto, arquivos } = require('../a01_test_exec/base')

// * (opcional) 0 ou n - {0,}
// + (obrigatorio) 1 ou n - {1,}
// ? (opcional) 0 ou 1 - {0,1}
// \ caractere de escape
// {n, m} - (n= minimo m= maxino)
//{10,} no minimo 10
//{,10} de 0 a 10
//{5 ,10} de 5 a 10
//{10} exatamente 10

console.log(texto);
const regExp1 = /Jo*ão{1,3}/gi
console.log(texto.match(regExp1));

const regExp2 = /\.((jp|JP)(e|E)?(g|G))/g

for(let i of arquivos){
    const valido = i.match(regExp2)
    if(!valido) continue
    console.log(i);
}

const jpegJpg = arquivos.filter(v => v.match(regExp2))
console.log(jpegJpg);