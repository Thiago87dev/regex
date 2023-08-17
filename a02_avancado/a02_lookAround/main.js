const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`

const cpf = `
456.788.547-85
111.111.111-11
999.999.999-91
854.652.365-87
`
console.log(cpf.match(/(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)^\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));

// console.log(lookahead.match(/.+\bactive/gim))

//positive loodahead(frases que tem active)
// console.log(lookahead.match(/.+(?=\s+\bactive)/gim))

//positive loodahead(frases que tem inactive)
// console.log(lookahead.match(/.+(?=\s+inactive)/gim))

//negative loodahead(frases que NÃO tem active)
// console.log(lookahead.match(/^(?!.+\bactive).+$/gim))

//negative loodahead(frases que NÃO tem inactive)
// console.log(lookahead.match(/(?!.+inactive$).+/gim))

//positive loodabehind(frases que começam com online)
// console.log(lookahead.match(/(?<=online\s+)\S+.*/gim))

//negative loodabehind(frases que NÃO começam com online)
// console.log(lookahead.match(/^.+(?<!online.+)$/gim))
