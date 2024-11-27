let produtos = []
mostravetor()

function mostravetor() {
    vetor.innerHTML = ''
    if (produtos.length == 0) {
        vetor.innerHTML = '<li>Não há produtos na lista.</li>'
    } else {
        for (let i = 0; i < produtos.length; i++) {
            vetor.innerHTML += `<li>${produtos[i]}</li>`
        }
    }
}

function adicionar(p) {
    let pos = produtos.indexOf(p)
    if (pos == -1) {
        produtos.push(p)
        mostravetor()
        console.log(`${p} adicionado à lista.`)
    } else {
        alert(`Você já tem ${p} na lista.`)
        console.log(`${p} não pode ser adicionado à lista.`)
    }
    prod.value = ''
    prod.focus()
}

function tamanho() {
    let tam = produtos.length
    alert(`Sua lista de compras tem ${tam} produtos.`)
}