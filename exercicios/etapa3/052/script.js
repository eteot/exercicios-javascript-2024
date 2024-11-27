function lancar(){

    let continuar = true;
    let totalEstudantes = 0;
    let somaNotas = 0;
    let mediaNotas = 0;
    let maiorNota = 0;
    let nome = "";
    let nomeMaiorNota = "";
    let nota;
    
    while (continuar){
        nome = prompt("Digite o nome do Estudante: ");
        nota = parseFloat(prompt("Digite a nota de " + nome + ": "));

        totalEstudantes++; //contador
        somaNotas += nota; //acumulador

        if (nota > maiorNota) {
            maiorNota = nota;
            nomeMaiorNota = nome;
        }

        continuar = confirm("Deseja registrar mais 1 estudante?");
    }
    mediaNotas = somaNotas / totalEstudantes;

    resultado.innerHTML = `<p> Total de Estudantes Registrados: ${totalEstudantes}</p>`;
    resultado.innerHTML += `<p> Soma das Notas: ${somaNotas}</p>`;
    resultado.innerHTML += `<p> Maior Nota: ${maiorNota} - Estudante: ${nomeMaiorNota}</p>`;
    resultado.innerHTML += `<p> Média das Notas: ${mediaNotas.toFixed(2)}</p>`;
}