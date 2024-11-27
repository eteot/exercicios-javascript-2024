saida.style.visibility = "hidden"

function testador() {
    let f1 = fr1.value
    let f2 = fr2.value

    if (f1 == f2) {
        result.innerHTML = "As frases são iguais"
    } else {
        result.innerHTML = "As frases são diferentes"
    }
    saida.style.visibility = "visible"
}
