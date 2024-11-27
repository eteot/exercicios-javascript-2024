function numeros() {
    let continuar, num, soma = 0, maior, pares = 0
    let c = 0
    do {
        c++
        num = Number(prompt(`Digite o ${c}o. valor`))
        console.log(`Valor ${c} = ${num}`)
        soma += num
        if (num % 2 == 0) {
            pares ++
        }
        if ((c == 1) || (num > maior)) {
            maior = num
        } 
        continuar = confirm(`Quer digitar outro número?`)
    } while (continuar) // E.R. com teste no fim
    resultado.innerHTML = `<li>Ao todo, temos ${c} números</li>`
    resultado.innerHTML += `<li>A soma dos valores é ${soma}</li>`
    resultado.innerHTML += `<li>Ao todo são ${pares} valores pares</li>`
    resultado.innerHTML += `<li>O maior valor é ${maior}</li>`
}