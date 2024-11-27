resultado.style.visibility = 'hidden'

function porcento(v, p) {
    v = Number(v)
    p = Number(p)
    let porcentagem = v * p / 100
    mensagem.innerHTML = `${p}% de ${v} é igual a <strong>${porcentagem.toFixed(2)}</strong>`
    resultado.style.visibility = 'visible'
}

function multiplo(v, n) {
    v = Number(v)
    if (v % n == 0) {
        mensagem.innerHTML = `O número <strong>${v} é múltiplo</strong> de ${n}`
    } else {
        mensagem.innerHTML = `O número <strong>${v} não é múltiplo</strong> de ${n}`
    }
    resultado.style.visibility = 'visible'
}

function fatorial(v) {
    v = Number(v)

    let fatorial = 1
    for (let i = v; i > 1; i--) {
        fatorial *= i
    }
    mensagem.innerHTML = `O <strong>fatorial de ${v}</strong> é igual a <strong>${fatorial}</strong>`
    resultado.style.visibility = 'visible'
}

function voltar() {
    resultado.style.visibility = 'hidden'
    num.value = ''
    num.focus()
}