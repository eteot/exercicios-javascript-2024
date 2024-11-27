function contar(){
    //entrada
    let f = Number(quant.value)

    saida.innerHTML = `<p> Lista com ${f} nomes: <\p>`
    //for(inicializador;delimitador;incremento)
    for(c=1;c<=f;c++){
        saida.innerHTML += `<p> ${c}. <input type='text'> </p>`;
    }
}