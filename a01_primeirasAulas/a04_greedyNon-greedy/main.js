const html = '<p>Olá mundo</p> <p>Olá de novo</p> <div> Sou a div</div>'

console.log(html.match(/<.+>.+<\/.+>/gi)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/gi)); // non-greedy - colocar o "?" do lado do quantificador