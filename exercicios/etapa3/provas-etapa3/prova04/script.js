let numeros = []
mostravetor()

function mostravetor() {
    vetor.innerHTML = ''
    if (numeros.length == 0) {
        vetor.innerHTML = '<td>Vetor vazio.</td>'
    } else {
        for (let i = 0; i < numeros.length; i++) {
            vetor.innerHTML += ` <td>${numeros[i]}</td> `
        }
    }
}

function adicionar(n) {
    n = Number(n)
    let pos = numeros.indexOf(n)
    if (pos == -1) {
        numeros.push(n)
        mostravetor()
        console.log(`${n} adicionado no final do vetor.`)
    } else {
        alert(`Você já tem ${n} no vetor.`)
        console.log(`${n} não pode ser adicionado ao vetor.`)
    } 
    num.value = ''
    num.focus()
}

function tamanho() {
    let tam = numeros.length
    alert(`O vetor tem ${tam} elementos.`)
}