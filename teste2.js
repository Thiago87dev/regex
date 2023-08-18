const teste = `oi tudo bom ? sim
ou nao ?`
const letraO = teste.match(/^o/gm)
console.log(letraO);

const listaFone = `
          (11) 97914-4355   
98912-4895
(47) 8912-4895
47 98547-6987
() 98912-4895
 98912-4895
11885423654
(21)98912       4895         
(477) 98912-4895
4799632----------1927
        (52) 932473287   
(47) 98912-48958
(91)932886984
(47) 98914895
12932876781
(47) 88912-4895
(10) 98912-4895
(49) 93654-2006
(7) 98912-4895
10985423654
`
const listaFoneValido = listaFone.match(/\b *\(?[1-9]{2}\)?\s?9\d{4}(?:-*| *)\d{4}\b/gm)
console.log(listaFoneValido);
const listaFoneValidoAjustado = []
for(let i of listaFoneValido){
    listaFoneValidoAjustado.push(i.replace(/\b *\(?([1-9]{2})\)?\s?9(\d{4})(?:-*| *)(\d{4})\b/gm,'($1) 9$2-$3'))
    
}
console.log(listaFoneValidoAjustado);