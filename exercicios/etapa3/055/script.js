function potencia(base, exp) {
    // console.log(`Calculando ${base} elevado a ${exp}`)
    let pot = 1
    result.innerHTML = `${base}<sup>${exp}</sup> = `
    for (let c = 1; c <= exp; c++) {
        pot = pot * base
        result.innerHTML += `${base} `
        if (c !== exp) {
            result.innerHTML += ` x `
        } else {
            result.innerHTML += ` = `
        }
    }
    result.innerHTML += `<strong>${pot}</strong>`
}