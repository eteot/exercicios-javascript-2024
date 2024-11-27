function maior(a, b, c) {
    a = Number(a)
    b = Number(b)
    c = Number(c)

    if (a == b || b == c || a == c) {
        alert('Os valores não podem ser iguais')
        return false
    }

    let maior
    if (a > b && a > c) {
        maior = a
    } else if (b > a && b > c) {
        maior = b
    } else if (c > a && c > b) {
        maior = c
    }

    resultado.innerHTML = `<p>O maior valor digitado foi ${maior}.</p>`
    return maior
}