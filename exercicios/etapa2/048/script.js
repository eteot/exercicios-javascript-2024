let num = Array(5, 8, 4, 9, 1)
// let num = [5, 8, 4, 9, 1]
let pessoas = ["Ana", "José", "Pedro", "Paula"]

num.push(7) // Acrescenta um item no fim do vetor
num.pop() // Remove um item no fim do vetor
num.shift() // Remove um item no início do vetor
num.unshift(11) // Acrescenta um item no início do vetor

saida.innerHTML = `<li>O vetor: ${num}</li>`
saida.innerHTML += `<li>O tamanho do vetor: ${num.length}</li>`
saida.innerHTML += `<li>O primeiro elemento: ${num[0]}</li>`
saida.innerHTML += `<li>O segundo elemento: ${num.at(1)}</li>`
saida.innerHTML += `<li>O último elemento: ${num[num.length-1]}</li>`
saida.innerHTML += `<li>Encontrei o valor 9 em ${num.indexOf(9)}</li>`
saida.innerHTML += `<li>Encontrei o valor 5 em ${num.indexOf(5)}</li>`
saida.innerHTML += `<li>O vetor invertido é ${num.toReversed()}</li>`
saida.innerHTML += `<li>Os valores em ordem são ${num.toSorted()}</li>`

