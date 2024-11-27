saida.style.visibility = "hidden"

function analise() {
    let nome = fnome.value
    let ano = Number(fano.value)

    // Pegar o ano atual
    let calend = new Date()
    let atual = calend.getFullYear()

    let idade = atual - ano
    res.innerHTML = `Em ${atual}, ${nome} vai completar ${idade} anos de idade`

    saida.style.visibility = "visible"
}