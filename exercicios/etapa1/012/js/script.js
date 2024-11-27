let contador = 0; //inicializar o contador
let res = document.querySelector('section#result'); //identificando o resultado
let saida = document.getElementById('saida');

function contar(){
    contador++;    //incremento
    //decremento
    //contador = contador - 1 ou contador--
    //contador = contador + 1;
    res.innerHTML = `<p> O contador esta com <mark> ${contador}</mark> cliques. <p>`;
    saida.value = contador;
}

function zerar(){
    contador = 0;
    res.innerHTML = null;
    saida.value = contador;
}


