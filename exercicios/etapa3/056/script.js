function equacao(a, b, c) {
    let delta = ((b) ** 2) - (4 * a * c)
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