function contar(){

    saida.innerHTML = "";
/*
    let c = 0; //inicializador

    while (c<=10) {//delimitador
        console.log(c);
        saida.innerHTML += ` ${c} `;
        c++; //incremento
    }
*/
    saida.innerHTML += `<p> Ordem Crescente <\p>`
    //for(inicializador;delimitador;incremento)
    for(c=0;c<=10;c++){
        saida.innerHTML += ` ${c} `;
    }

    saida.innerHTML += `<p> Ordem Decrescente <\p>`
    //for(inicializador;delimitador;incremento)
    for(c=10;c>=0;c--){
        saida.innerHTML += ` ${c} `;
    }

    saida.innerHTML += '<p> FIM! </p>';



}