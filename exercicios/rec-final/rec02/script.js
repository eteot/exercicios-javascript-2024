function entrada() {
    // Obtem os dados do formulário
    let qtd = Number(quant.value)

    lista.innerHTML = ''
    // Iniciando as variáveis de trabalho
    let c = 1, soma = 0, par = 0, impar = 0, maior = 0, menor = 0
    while (c <= qtd) {
        // Lendo os números via prompt
        let valor = Number(prompt(`Digite o ${c}º valor:`))
        console.log(`${c}º valor: ${valor}`)
        // Somando
        soma += valor
        // Pares e ímpares
        if (valor % 2 == 0) {
            par++
        } else {
            impar++
        }
        // Maior e menor
        if (c == 1) {
            maior = valor
            menor = valor
        } else {
            if (valor > maior) {
                maior = valor
            }
            if (valor < menor) {
                menor = valor
            }
        }
        c++
    }
    // Mostrando os resultados na lista
    lista.innerHTML += `<li>Foram digitados ${qtd} valores</li>`
    lista.innerHTML += `<li>A soma total dos valores é ${soma}</li>`
    lista.innerHTML += `<li>Ao todo foram ${par} número(s) par(es) e ${impar} número(s) ímpar(es)</li>`
    lista.innerHTML += `<li>O menor valor lido foi ${menor} e o maior  foi ${maior}</li>`
    resultado.style.visibility = 'visible'
}