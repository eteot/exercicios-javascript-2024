function bimestre(){
    //entrada
    let mes = window.prompt('Informe o mes por extenso(ex. Janeiro): ');
    let res = document.querySelector('section#saida');
    let bimestre;

    //processamento
    //toUpperCase() transforma o texto em maiúscula
    //toLowerCase() transforma o texto em minúscula
    switch (mes.toUpperCase()){
        case 'JANEIRO': case 'FEVEREIRO':
            bimestre = '1º Bimestre';
            break;
        case 'MARÇO': case 'ABRIL':
            bimestre = '2º Bimestre';
            break;
        case 'MAIO': case 'JUNHO':
            bimestre = '3º Bimestre';
            break; 
        case 'JULHO': case 'AGOSTO':
            bimestre = '4º Bimestre';
            break;
        case 'SETEMBRO': case 'OUTUBRO':
            bimestre = '5º Bimestre';
            break;    
        case 'NOVEMBRO': case 'DEZEMBRO':
            bimestre = '6º Bimestre';
            break;
        default:
            bimestre = 'Indeferido';
            break;
    }

    //saida
    res.innerHTML = `<p> No mês de ${mes}, estamos no <strong>${bimestre}</strong> </p>`;

}