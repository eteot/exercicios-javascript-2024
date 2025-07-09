// Área de escopo global
let compras = new Array()
console.clear()
mostralista()

function mostralista() {
    lista.innerHTML = ""
    if (compras.length == 0) {
        lista.innerHTML += `Sua lista está vazia`
    } else {
        for (let pos = 0; pos < compras.length; pos++) {
            lista.innerHTML += `<li>${compras[pos]}</li>`
        }
    }
}

function adicionar() {
    let item = prompt("O que você quer adicionar à lista de compras?")
    let pos = compras.indexOf(item)
    if (pos == -1) {
        compras.push(item)
        mostralista()
        console.log(`${item} adicionado.`)
    } else {
        alert(`Você já tem ${item} na sua lista de compras.`)
    }
}

function retirar() {
    let item = prompt("Que item você quer riscar da lista?")
    let pos = compras.indexOf(item)
    if (pos == -1) {
        alert(`Você não tem ${item} na lista de compras.`)
    } else {
        compras.splice(pos, 1)
        alert(`Risquei ${item} que estava na posição ${pos} da lista`)
        console.log(`${item} removido.`)
        mostralista()
    }
}