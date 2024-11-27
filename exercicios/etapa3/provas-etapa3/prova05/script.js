let numeros = [1, 6, 4, 2, 7, 3, 5, 9]
mostravetor()

function mostravetor() {
    vetor.innerHTML = ''
    for (let i = 0; i < numeros.length; i++) {
        vetor.innerHTML += ` <td>${numeros[i]}</td> `
    }
}

function remover(n) {
    n = Number(n)
    let pos = numeros.indexOf(n)
    if (pos == -1) {
        alert(`O número ${n} não está no vetor.`)
        console.log(`${n} não foi encontrado para ser removido.`)
    } else {
        numeros.splice(pos, 1)
        mostravetor()
        console.log(`${n} foi removido da posição ${pos} vetor.`)
    }
    num.value = ''
    num.focus()
}

function procurar(n) {
    n = Number(n)
    let pos = numeros.indexOf(n)
    if (pos == -1) {
        alert(`O número ${n} não está no vetor.`)
        console.log(`${n} não foi encontrado no vetor.`)
    } else {
        alert(`O número ${n} está na posição ${pos} do vetor.`)
        console.log(`${n} foi encontrado na posição ${pos} do vetor.`)
    }
    num.value = ''
    num.focus()
}