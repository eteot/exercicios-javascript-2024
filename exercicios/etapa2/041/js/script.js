saida.style.visibility = "hidden"

function funcionarios() {
    let c = 0
    let sal, total = 0
    let maior, menor
    let salmin = 1412
    let cincosal = 0
    let somasete = 0
    let continua = true
    while (continua) {
        // Total de funcionários
        c++
        // Leitura de dados
        sal = Number(prompt(`Salário do ${c}o. funcionário (R$)`))
        console.log(`Funcionário ${c} ganha R$${sal.toFixed(2)}`)
        // Total da folha de pagamento
        total += sal  
        // Menor e maior salários
        if (c == 1) {
            menor = sal
            maior = sal
        } else {
            if (sal < menor) { menor = sal }
            if (sal > maior) { maior = sal }
        }        
        // Quantos ganham mais de 5 salários mínimos
        if (sal >= salmin * 5) { cincosal ++ }

        // Quanto a empresa gasta pagando quem ganha mais de 7 mil
        if (sal >= 7000) {
            somasete += sal
        }
        // Quer continuar?
        continua = confirm(`${c} funcionário(s) cadastrado(s). Quer continuar?`)
    }

    // Media Salarial
    let media = total / c
    // Mostrar resultados
    resultado.innerHTML = `<li>Ao todo, foram cadastrados ${c} funcionário(s).</li>`
    resultado.innerHTML += `<li>O menor salário da empresa é R$${menor.toFixed(2)}</li>`
    resultado.innerHTML += `<li>O maior salário da empresa é R$${maior.toFixed(2)}</li>`
    resultado.innerHTML += `<li>${cincosal} funcionário(s) ganha(m) mais de 5 salários mínimos</li>`
    resultado.innerHTML += `<li>Ao todo, a empresa gasta R$${somasete.toFixed(2)} com funcionários que ganham mais de R$ 7 mil</li>`
    resultado.innerHTML += `<li>O total da folha de pagamentos é R$${total.toFixed(2)}</li>`
    resultado.innerHTML += `<li>Em média, os funcionários ganham R$${media.toFixed(2)} por mês.</li>`
    saida.style.visibility = "visible"
}