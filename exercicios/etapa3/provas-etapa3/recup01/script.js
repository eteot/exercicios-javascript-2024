let vetorfla = []
let vetorflu = []
let vetorempate = []
resultado.style.visibility = 'hidden'
mostravetor()

function cadastrar(a, f1, f2) {
    let ano = Number(a)
    let placarfla = Number(f1)
    let placarflu = Number(f2)
    if (placarfla > placarflu) {
        vetorfla.push(`${ano} - ${placarfla} x ${placarflu}`)
    } else if (placarflu > placarfla) {
        vetorflu.push(`${ano} - ${placarflu} x ${placarfla}`)
    } else {
        vetorempate.push(`${ano} - ${placarfla} x ${placarflu}`)
    }
    mostravetor()
    limpar()
}

function mostravetor() {
    if (vetorfla.length == 0) {
        resfla.innerHTML = `<li>Nenhuma vitória até aqui</li>`
    } else {
        resfla.innerHTML = ''
        for (let pos=0; pos < vetorfla.length; pos++) {
            resfla.innerHTML += `<li>${vetorfla[pos]}</li>`
        }
    }

    if (vetorflu.length == 0) {
        resflu.innerHTML = `<li>Nenhuma vitória até aqui</li>`
    } else {
        resflu.innerHTML = ''
        for (let pos=0; pos < vetorflu.length; pos++) {
            resflu.innerHTML += `<li>${vetorflu[pos]}</li>`
        }
    }

    if (vetorempate.length == 0) {
        resempate.innerHTML = `<li>Nenhum empate até aqui</li>`
    } else {
        resempate.innerHTML = ''
        for (let pos=0; pos < vetorempate.length; pos++) {
            resempate.innerHTML += `<li>${vetorempate[pos]}</li>`
        }
    }
}

function limpar() {
    vano.value = ''
    vfla.value = '0'
    vflu.value = '0'
    vano.focus()
}

function analisar() {
    analise.innerHTML = ''
    analise.innerHTML += `<li>Flamengo venceu ${vetorfla.length} vezes</li>`
    analise.innerHTML += `<li>Fluminense venceu ${vetorflu.length} vezes</li>`
    analise.innerHTML += `<li>Foram ${vetorempate.length} empates</li>`
    if (vetorfla.length > vetorflu.length) {
        analise.innerHTML += `<li>Flamengo tem mais vitórias</li>`
    } else if (vetorflu.length > vetorfla.length) {
        analise.innerHTML += `<li>Fluminense tem mais vitórias</li>`
    } else {
        analise.innerHTML += `<li>Flamengo e Fluminense estão empatados em número de vitórias</li>`
    }
    resultado.style.visibility = 'visible'
}