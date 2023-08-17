// ^ - Tem no começo
// $ - Tem no final
// m - Multiline

const cpfs = `
254.475.987-25
698.587.698-78 369.258.147-85
258.456.753-41`

const cpfRegex = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm

console.log(cpfs.match(cpfRegex));