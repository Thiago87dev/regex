// g - global (encontra todas as ocorrências)
// i - insensitive (não diferencia maiusculas e minusculas)
// () grupos
// |
// .test = verifica se existe a regex no texto
// .exec = para capturar regex

const { texto } = require('./base')

const regExp1 = /((Também) né!)/gi
const regExp2 = /(maria|joão|thiago)(, hoje sua esposa)/gi

const found = regExp1.test(texto)
const captured = regExp2.exec(texto)

if(captured){
    console.log(captured[0]); // todos os grupos
    console.log(captured[1]); // primeiro grupo
    console.log(captured[2]); // segundo grupo
} else{
    console.log('regex não encontrada');
}

console.log(found); // true se existe ou false se nao existe


