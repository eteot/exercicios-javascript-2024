let numeros = []
mostravetor()

function mostravetor() {
    vetor.innerHTML = ''
    if (numeros.length == 0) {
        vetor.innerHTML = 'Vetor vazio'
    } else {
        for (let pos = 0; pos < numeros.length; pos++) {
            vetor.innerHTML += `<td>${numeros[pos]}</td>`
        }
    }
}

function esvaziar() {
    let conf
    if (conf = confirm(`Quer mesmo apagar os ${numeros.length} valores do vetor?`)) {
        numeros = []
        mostravetor()
    }
}

function incluir(n) {
    n = Number(n)
    numeros.push(n)
    mostravetor()
    num.value = ''
    num.focus()
}

function somar() {
    let s = 0
    for (let pos = 0; pos < numeros.length; pos++) {
        s += numeros[pos]
    }
    resultado.innerHTML = `A soma dos valores do vetor é igual a ${s}`
}

function maior() {
    let mai = numeros[0]
    for (let pos = 1; pos < numeros.length; pos++) {
        if (numeros[pos] > mai) { mai = numeros[pos] }
    }
    resultado.innerHTML = `O maior valor que está no vetor é ${mai}`
}

function pares() {
    resultado.innerHTML = `Os valores pares são: `
    for (let pos = 0; pos < numeros.length; pos++) {
        if (numeros[pos] % 2 == 0) {
             resultado.innerHTML += ` ${numeros[pos]} - `
        }
    }
    resultado.innerHTML += `FIM`
}