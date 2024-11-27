function media(){
    //entrada
    let nome = window.prompt('Informe o nome do Aluno: ');
    let n1 = Number(window.prompt(`Informe a Nota 1 de ${nome}`));
    let n2 = Number(window.prompt(`Informe a Nota 2 de ${nome}`));
    let saida = document.getElementById('saida');
    let msg;

    //processamento
    let med = (n1+n2)/2;
    if (med>=6){
        msg = "Aprovado - Meus Parabéns!";
    }
    else{
        msg = "Reprovado - Estude um pouco mais!";
    }

    //saida
    saida.innerHTML = `<p> Calculando a Média Final de ${nome} </p>`;
    saida.innerHTML += `<p> As notas obtidas foram ${n1} e ${n2} </p>`;
    saida.innerHTML += `<p> A média final é ${med} </p>`;
    saida.innerHTML += `<p> A situação é <strong style='color: red'> ${msg} </strong> </p>`;
}
