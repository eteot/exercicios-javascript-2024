function menos(valor, quant) {
    valor = Number(valor)
    let res = valor - quant
    console.log(`${valor} - ${quant} = ${res}`)
    num.value = res    
}
function mais(valor, quant) {
    valor = Number(valor)
    let res = valor + quant
    console.log(`${valor} + ${quant} = ${res}`)
    num.value = res  
}
function metade(valor) {
    valor = Number(valor)
    let res = valor / 2
    console.log(`${valor} ÷ 2 = ${res}`)
    num.value = res  
}
function dobro(valor) {
    valor = Number(valor)
    let res = valor * 2
    console.log(`${valor} x 2 = ${res}`)
    num.value = res  
}
