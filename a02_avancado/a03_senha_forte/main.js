// A senha deve conter no minino 8 caracteres sendo no minimo 2 numeros 1 letra maiuscula 1 letra minuscula e 1 caractere especial
const validaSenhaForte = /(?=.*[a-z])(?=.*[A-Z])(?=(?:.*\d){2})(?=.*[!)(\[\]@#$%]).{8,}/gm

const senhas = `
Joa4de@8
abcDe75fgh
`

console.log(senhas.match(validaSenhaForte));