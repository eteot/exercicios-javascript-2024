function pessoas() {
    let idade
    let jovem, velho
    let soma = 0
    let c = 1
    while (c <= 5) {
        idade = Number(prompt(`Idade da ${c}a. pessoa`))
        console.log(`${c}a. pessoa tem ${idade} anos.`)
        soma += idade
        if (c == 1) {
            jovem = idade
            velho = idade
        } else {
            if (idade < jovem) { jovem = idade }
            if (idade > velho) { velho = idade }
        }
        c++
    }
    let media = soma / 5
    resultado.innerHTML = `A pessoa mais jovem tem ${jovem} anos e a mais velha tem ${velho} anos. A média de idade do grupo é de ${media.toFixed(1)} anos.`
    resultado.innerHTML += `....`
}
