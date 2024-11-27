resp.style.visibility = "hidden"

function prova() {
    let nome = prompt("Qual é o nome do aluno?")
    titulo.innerHTML = `Resultados de ${nome}`
    let nota = Number(prompt(`Quanto ${nome} tirou na prova?`))
    let rec

    if (nota >= 6) {
        frase.innerHTML = `${nome} tirou ${nota.toFixed(1)} e <strong>está em ótima situação</strong> nesse trimestre! Não precisa fazer a prova de recuperação. Parabéns, ${nome}!`
    } else {
        rec = Number(prompt(`Qual foi a nota de ${nome} na prova de recuperação?`))
        if (rec >= nota) {
            if (rec >= 6) { 
                frase.innerHTML = `${nome} <strong>fez uma ótima recuperação</strong>. Tinha tirado ${nota.toFixed(1)} anteriormente, mas tirou ${rec.toFixed(1)} na recuperação e <strong>ficou acima da média</strong>! Parabéns, ${nome}!`
            } else {
                frase.innerHTML = `${nome} fez a prova de recuperação e <strong>melhorou um pouco sua nota</strong>. Tinha tirado ${nota.toFixed(1)} anteriormente e tirou ${rec.toFixed(1)} na recuperação. Ainda assim, <strong>ficou abaixo da média</strong>. Estude mais no próximo trimestre, ${nome}!`
            }
        } else {
            frase.innerHTML = `${nome} <strong>não conseguiu se recuperar</strong>. Tinha tirado ${nota.toFixed(1)} anteriormente e tirou ${rec.toFixed(1)} na recuperação. Estude mais no próximo trimestre, ${nome}!`
        }
    }

    resp.style.visibility = "visible"
}