function teste(){
    //entrada
    let num = Number(window.prompt('Digite um número: '));
    let saida = document.querySelector('section#saida');
    let result

    //processamento
    if(num % 2 == 0){
        result = '<strong> PAR </strong>';
    }else{
        result = '<strong> ÍMPAR </strong>';
    }


    //saida
    saida.innerHTML = `<p> O número ${num} é ${result}</p>`;
}