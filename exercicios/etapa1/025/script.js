saida.style.visibility = "hidden"

function analise() {
    let calend = new Date()
    let atual = calend.getFullYear()

    let nome = fnome.value
    let ano = Number(fano.value)

    let idade = atual - ano

    let cat = ""

    switch (idade) {
        case 7: case 8: case 9:
            cat = "Fraldinha"
            break
        case 10: case 11:
            cat = "Dente de Leite"
            break
        case 12: case 13:
            cat = "Mirim"
            break
        case 14: case 15:
            cat = "Infantil"
            break
        case 16: case 17:
            cat = "Infanto-Juvenil"
            break
        case 18: case 19: case 20:
            cat = "Junior"
            break
        default:
            cat = "fora de categoria"
            break        
    }

    res.innerHTML = `${nome} tem ${idade} anos e é <strong>${cat}</strong>`
    
    saida.style.visibility = "visible"
}