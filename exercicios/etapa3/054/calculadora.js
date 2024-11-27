// Declarações Globais
let op = '' // Qual será a operação realizada
let numanterior = '' // Qual é o primeiro operando da conta
let numatual = '0' // Qual é o segundo operando da conta
mostraVisor()

function mostraVisor() {
    if (isNaN(numatual)) {
        display.value = 'ERRO'
    } else {
        display.value = numatual
    }

    console.log(`ANTERIOR = ${numanterior}`)
    console.log(`OPERAÇÃO = ${op}`)
    console.log(`ATUAL = ${numatual}`)
    console.log(`---------------------`)
}

function pressNum(tecla) {
    if (numatual == '0') {
        numatual = tecla
    } else {
        numatual = numatual + tecla
    }
    mostraVisor()
}

function limpa() {
    numatual = '0'
    numanterior = ''
    op = ''
    mostraVisor()
}

function pressOp(tecla) {
    if (numatual == '') {
        return false
    }
    numanterior = numatual
    op = tecla
    numatual = ''
}

function calcular() {
    if (isNaN(numanterior) || isNaN(numatual)) {
        return false
    }
    const n1 = Number(numanterior)
    const n2 = Number(numatual)
    let res
    switch (op) {
        case "soma":
            res = n1 + n2
            break
        case "sub":
            res = n1 - n2                
            break
        case "mult":
            res = n1 * n2
            break
        case "div":
            res = n1 / n2
            break
        default:
            return false
    }   
    numanterior = ''
    op = ''
    numatual = res
    mostraVisor()
}