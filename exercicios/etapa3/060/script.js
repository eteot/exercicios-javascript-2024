function fatorial(n) {
    n = Number(n)

    let fat = 1
    for (let c = n; c >= 1; c--) {
        fat = fat * c
    }
    resultado.innerHTML = `<p>O valor de ${n}! é igual a ${fat}</p>`
    return fat
}