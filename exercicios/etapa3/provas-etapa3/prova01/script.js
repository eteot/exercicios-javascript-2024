resultado.style.visibility = 'hidden'

function somar(v1, v2) {
    v1 = Number(v1)
    v2 = Number(v2)
    let soma = v1 + v2
    mensagem.innerHTML = `A soma <strong>${v1} + ${v2}</strong> é igual a <strong>${soma}</strong>`
    resultado.style.visibility = 'visible'
}

function maior(v1, v2) {
    v1 = Number(v1)
    v2 = Number(v2)
    let maior 
    if (v1 > v2) {
        maior = v1
    } else {
        maior = v2
    }
    mensagem.innerHTML = `O <strong>maior número</strong> entre ${v1} e ${v2} é <strong>${maior}</strong>`
    resultado.style.visibility = 'visible'
}

function contar(v1, v2) {
    v1 = Number(v1)
    v2 = Number(v2)
    let contador = ''
    if (v1 > v2) {
        for (let i = v1; i >= v2; i--) {
            contador += i + ' '
        }
    } else {
        for (let i = v1; i <= v2; i++) {
            contador += i + ' '
        }
    }
    mensagem.innerHTML = `Contagem de <strong>${v1} até ${v2}</strong>:<br> ${contador}`
    resultado.style.visibility = 'visible'
}

function voltar() {
    resultado.style.visibility = 'hidden'
    val1.value = ''
    val2.value = ''
    val1.focus()
}