let lista = new Array(5, 8, 3, 9, 1, 4, 6)
mostraLista()

function mostraLista() {
    vetor.innerHTML = ''
    if (lista.length == 0) {
        vetor.innerHTML += `Lista Vazia`
    }
    for (let pos = 0; pos < lista.length; pos++) {
        vetor.innerHTML += `<td>${lista[pos]}</td>`
    }
}












function adicionar(n) {
    if (n == '') {
        console.log('Digite o número que quer incluir')
    } else {
        n = Number(n)
        let pos = lista.indexOf(n)
        if (pos == -1) {
            lista.push(n)
            console.log(`Valor ${n} adicionado à lista`)
            mostraLista()
        } else {
            alert(`O elemento ${n} já está na lista!`)
        }
        numero.value = ''
        numero.focus()
    }
}








function remover(n) {
    if (n == '') {
        console.log('Digite o número que quer remover')
    } else {
        n = Number(n)
        let pos = lista.indexOf(n)
        if (pos == -1) {
            alert(`Não consigo remover ${n}, porque ele não está na lista`)
        } else {
            lista.splice(pos, 1)
            console.log(`${n} removido da posição ${pos} da lista`)
            numero.value = ''
            numero.focus()
            mostraLista()
        }
    }
}