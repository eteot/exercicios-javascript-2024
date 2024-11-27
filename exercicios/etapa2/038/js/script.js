function vaquinha() {
    let din
    let tot = 0
    let bonzinho = 0
    for(let c = 1; c <= 5; c++) {
        din = Number(prompt(`Quantos R$ a ${c}a. pessoa deu?`))
        console.log(`${c}a. pessoa deu R$${din.toFixed(2)}`)
        tot += din // mesma coisa que tot = tot + din
        if (din >= 50) {
            bonzinho ++
        }
    }
    resultado.innerHTML = `A vaquinha arrecadou R$${tot.toFixed(2)}`
    resultado.innerHTML += ` e tivemos ${bonzinho} pessoas maravilhosas!`
}
