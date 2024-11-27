resultado.style.visibility = 'hidden'

function triplo(v) {
    v = Number(v)
    let tri = v * 3
    mensagem.innerHTML = `O <strong>triplo de ${v}</strong> é igual a <strong>${tri}</strong>`
    resultado.style.visibility = 'visible'
}

function parouimpar(v) {
    v = Number(v)
    let paridade = ''
    if (v % 2 == 0) {
        paridade = 'par'
    } else {
        paridade = 'ímpar'
    }
    mensagem.innerHTML = `O valor ${v} <strong>é ${paridade}</strong>`
    resultado.style.visibility = 'visible'
}

function tabuada(v) {
    v = Number(v)
    let tabuada = ''
    for (let i = 1; i <= 10; i++) {
        tabuada += `${v} x ${i} = <strong>${v * i}</strong><br>`
    }
    mensagem.innerHTML = `Tabuada do ${v}:<br> ${tabuada}`
    resultado.style.visibility = 'visible'
}

function voltar() {
    resultado.style.visibility = 'hidden'
    valor.value = ''
    valor.focus()
}