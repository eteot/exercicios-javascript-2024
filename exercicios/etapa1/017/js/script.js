function maior(){
    //entrada
    let n1 = Number(window.prompt('Digite um número: '));
    let n2 = Number(window.prompt('Digite outro número: '));
    let res = document.querySelector('section#saida');
    let msg;

    //processamento
    if(n1 > n2){
        msg = `o maior valor é ${n1}`;
    }
    else if(n2 > n1){
        msg = `o maior valor é ${n2}`;
    }
    else{
        msg = `ambos os valores são iguais`;
    }

    //saída
    res.innerHTML = `<p> Analisando os valores ${n1} e ${n2}, ${msg} </p>`;

}
