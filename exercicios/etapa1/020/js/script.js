let saida = document.getElementById("saida")
let resultado = document.getElementById("resultado")
let v1 = document.getElementById("v1")
let v2 = document.getElementById("v2")

saida.style.visibility = "hidden"

function calcular() {
    let n1 = Number(m=v1.value)
    let n2 = Number(v2.value)

    let dob = n1 * 2
    let met = n2 / 2

    let mai 

    if (n1 > n2) {
        mai = n1
    } else {
        mai = n2
    }

    resultado.innerHTML = `Os valores analisados serão <strong>${n1} e ${n2}</strong><br>`
    resultado.innerHTML += `O dobro do primeiro valor é <strong>${dob}</strong><br>`
    resultado.innerHTML += `A metade do segundo valor é <strong>${met}</strong><br>`
    resultado.innerHTML += `O maior valor digitado foi <strong>${mai}</strong>`
    saida.style.visibility = "visible"
}
