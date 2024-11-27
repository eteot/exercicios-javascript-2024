function contar(){

    saida.innerHTML = "";

    saida.innerHTML += `<p> Números Pares <\p>`
    //for(inicializador;delimitador;incremento)
    for(c=0;c<=10;c++){
        if (c % 2 == 0) { 
            saida.innerHTML += ` ${c} `;
        }
    }

    saida.innerHTML += `<p> Números Ímpares <\p>`
    //for(inicializador;delimitador;incremento)
    for(c=0;c<=10;c++){
        if (c % 2 == 1) {
            saida.innerHTML += ` ${c} `;
        }
    }

    saida.innerHTML += '<p> FIM! </p>';



}