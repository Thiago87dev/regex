// $1 $2 $3 -> retrovisores(espelho) para replace
// \1 \2 \3 -> retrovisores(espelho) para match
// ?: -> não conta o grupo()

const html = `<p
 data-teste='teste' 
 class="teste1 teste2">
    Olá mundo
</p> <p>Olá mundo</p> <div>Eu sou a div</div>`
console.log(html.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
console.log(html.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 hahaha $3 hahaha $4'));