// Área de escopo global
let compras = new Array()

mostralista()

function mostralista() {
    lista.innerHTML = ""
    console.clear()
    if (compras.length == 0) {
        lista.innerHTML += `Sua lista está vazia`
    } else {
        for (let pos = 0; pos < compras.length; pos++) {
            lista.innerHTML += `<li>${compras[pos]}</li>`
            console.log(`Posição ${pos} tem ${compras[pos]}`)
        }
    }
}

function adicionar() {
    let item = prompt("O que você quer adicionar à lista de compras?")
    let pos = compras.indexOf(item)
    if (pos == -1) {
        compras.push(item)
        msg.innerHTML = `Acabei de adicionar ${item} à sua lista de compras.`
        mostralista()
    } else {
        msg.innerHTML = `Você já tem ${item} na sua lista de compras.`
    }
}

function procurar() {
    let item = prompt("O que você está procurando?")
    let pos = compras.indexOf(item)
    if (pos == -1) {
        msg.innerHTML = `Você não tem ${item} na sua lista de compras.`
    } else {
        msg.innerHTML = `Encontrei ${item} na posição ${pos} da lista.`
    }
}

function retirar() {
    let item = prompt("Que item você quer riscar da lista?")
    let pos = compras.indexOf(item)
    if (pos == -1) {
        msg.innerHTML = `Você não tem ${item} na lista de compras.`
    } else {
        compras.splice(pos, 1)
        msg.innerHTML = `Risquei ${item} que estava na posição ${pos} da lista`
        mostralista()
    }
}