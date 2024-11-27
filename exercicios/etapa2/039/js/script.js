function vaquinha() {
    let din
    let tot = 0
    let bonzinho = 0
    let c = 0
    let continuar = true
    while (continuar) {
        c++
        din = Number(prompt(`Quantos R$ a ${c}a. pessoa deu?`))
        console.log(`${c}a. pessoa deu R$${din.toFixed(2)}`)
        tot += din // mesma coisa que tot = tot + din
        if (din >= 50) {
            bonzinho ++
        }
        continuar = confirm(`Quer continuar?`)
    }
    resultado.innerHTML = `A vaquinha arrecadou R$${tot.toFixed(2)}`
    resultado.innerHTML += ` e tivemos ${bonzinho} pessoas maravilhosas!`
    resultado.innerHTML += ` Fomos ajudados por ${c} pessoas.`
}
