const texto = `
João Maria
Telefone 3432355842
fone2 3432355841
Rua Modesta Maria, 51
Cidade Uberlândia
Estado (MG)
CEP 32549
Rua Modesta Maria, 51 João Maria Joao Maria MARIA
Maria
Telefone 9132264877
Passagem Maria Aguiar, 112
Cidade Belém
Estado (PA)
CEP 91000
Passagem Maria Aguiar, 112 Maria Maria MARIA
Maria Angélica Silva Santos
Telefone 7532047434
Rua Maria Quitéria
Cidade Maria Quitéria
Estado (BA)
CEP 71435
Maria Quitéria Rua Maria Quitéria Maria Angélica Silva Santos Maria Angelica Silva Santos
`

console.log(texto.replace(/(?<=Telefone )(\d{2})(\d{8})/g, '($1) $2'));