// VETORES MULTIDIMENSIONAIS: Cada item do vetor é outro vetor - Posição 0 = número do candidato, Posição 1 = nome do candidato, Posição 2 = quantidade de votos
let votos = [
    [0, 'Inválido', 0], 
    [111, 'João Pereira', 0], 
    [222, 'Maria Silva', 0], 
    [333, 'Pedro Couto', 0], 
    [444, 'Ana Maria', 0], 
    [555, 'Carlos Marques', 0]
]
// Carrega os dois áudios
var somteclado = new Audio('sons/tom.mp3');
var somfim = new Audio('sons/fim.mp3');
// Preenche a tabela de resultados automaticamente
mostraresultado()

function mostraresultado() {
    // Esvazia a tabela e refaz o preenchimento
    dados.innerHTML = `<tr><th>Número</th><th>Nome</th><th>Votos</th></tr>`
    for (let pos = 0; pos < votos.length; pos++) {
        dados.innerHTML += `<tr><td>${votos[pos][0]}</td><td>${votos[pos][1]}</td><td>${votos[pos][2]}</td></tr>`
    }
}

function digitanum(num) {
    if (numero.value.length < 3) {
        numero.value += num
        somteclado.play()
    }
    if (numero.value.length == 3) {
        // Só vai buscar o candidato quando o número tiver 3 dígitos
        let cand = buscacandidato(numero.value)
        if (cand == 0) {
            // Se não encontrou o candidato, exibe a foto do voto inválido
            foto.src = 'candidatos/invalido.jpg'
            nome.innerHTML = 'Voto Inválido'
        } else {
            foto.src = `candidatos/${votos[cand][0]}.jpg`
            // A foto do candidato tem o mesmo nome do número do candidato (ex.: 111.jpg)
            nome.innerHTML = votos[cand][1]
        }
    }
}

function limpa() {
    numero.value = ''
    foto.src = 'candidatos/vazio.jpg'
    nome.innerHTML = ''
}

function buscacandidato(num) {
    num = Number(num)
    for(let pos = 0; pos < votos.length; pos++) {
        if (votos[pos][0] == num) {
            return pos // Encontrou, retorna a posição do candidato no vetor
        }
    }
    return 0 // Não encontrou, registra voto inválido (candidato de código 0 no vetor)
}

function confirma(num, quant) {
    if (isNaN(num) || num == '' || isNaN(quant) || quant == '' || num.length < 3) {
        // Evita que o usuário aperte CONFIRMA sem digitar um número de 3 dígitos
        console.log(`Ainda não é possível registrar ${quant} voto(s) para o candidato ${num}. Use números de 3 dígitos`)
    } else {
        let cand = buscacandidato(num)
        votos[cand][2] += quant
        console.log(`Registrado ${quant} voto(s) para o candidato ${votos[cand][1]}`)
        somfim.play()
        limpa()
    }
    mostraresultado()
}