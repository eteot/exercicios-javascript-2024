function calcular() {
    let p = Number(preco.value)
    let d = Number(desc.value)

    let novo = p - (p * d / 100)

    frase.innerHTML = `O produto que custava R$${p.toFixed(2)}, com ${d}% de desconto vai custar R$${novo.toFixed(2)}`
    console.log(`Antes R$${p.toFixed(2)}, depois R$${novo.toFixed(2)}`)
}