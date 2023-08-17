// [abc] conjunto
// [^abc] negando conjunto
//[de - para] - range

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz aaBB99 atenção &$#@ 0123456789 *'

console.log(alfabeto)
console.log(alfabeto.match(/[abc123]+/gi))
console.log(alfabeto.match(/[0-9]+/gi))
console.log(alfabeto.match(/[c-j]+/gi))
console.log(alfabeto.match(/[^a-zA-Z0-9]+/gi))
console.log(alfabeto.match(/[a-zA-Z0-9çã]+/gi))
console.log(alfabeto.match(/[\u0021-\u0040]+/gi)) // utilizando unicode
