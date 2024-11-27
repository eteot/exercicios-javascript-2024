function equacao(a, b, c) {
    if (isNaN(a)) { a = Number(a) }
    if (isNaN(b)) { b = Number(b) }
    if (isNaN(c)) { c = Number(c) }

    let delta = b * b - 4 * a * c
    console.log(delta)
    result.innerHTML = `<li>&Delta; = ${delta}</li>`
    if (delta < 0) {
        result.innerHTML += `<li>Não existem raízes reais.</li>`
    } else {
        let x1 = (-b + delta ** 0.5) / (2 * a)
        let x2 = (-b - delta ** 0.5) / (2 * a)
        result.innerHTML += `<li>x' = ${x1}</li>`
        result.innerHTML += `<li>x'' = ${x2}</li>`
    }
}