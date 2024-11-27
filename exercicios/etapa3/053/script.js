 
function analisar() {
    let continuar = true
    let tot = 0
    let mais18 = 0
    let menor
    let jovem
    let soma = 0
    let nome
    let idade

    while (continuar) {
        tot++

        nome = prompt(`Nome da ${tot}ª pessoa: `)
        idade = Number(prompt(`Idade de ${nome}: `))
        console.log(`Pessoa ${tot}: ${nome} tem ${idade} anos.`)

        soma += idade
        if (idade >= 18) {
            mais18++
        }
        if (tot == 1) {
            menor = idade
            jovem = nome
        } else {
            if (idade < menor) {
                menor = idade
                jovem = nome
            }
        }

        continuar = confirm('Quer cadastrar mais uma pessoa?')
    }

    let media = soma / tot
    
    resposta.innerHTML = `<li>Ao todo temos ${tot} pessoa(s) cadastrada(s).</li>`
    resposta.innerHTML += `<li>${mais18} pessoa(s) tem 18 anos ou mais.</li>`
    resposta.innerHTML += `<li>A pessoa mais jovem é ${jovem}, com ${menor} anos de idade.</li>`
    resposta.innerHTML += `<li>A média de idade do grupo é de ${numero.format(media)} anos.</li>`
    
}

function limpar() {
    console.clear()
    resultado.style.visibility = 'hidden';
}