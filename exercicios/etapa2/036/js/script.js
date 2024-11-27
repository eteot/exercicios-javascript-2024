function contar(){
    //entrada
    let i = Number(inicio.value);
    let f = Number(fim.value)

    saida.innerHTML = `<p> Contar de ${i} até ${f} <\p>`
    //for(inicializador;delimitador;incremento)
    for(c=i;c<=f;c++){
        saida.innerHTML += ` ${c} - `;
    }

    saida.innerHTML += '<p> FIM! </p>';



}