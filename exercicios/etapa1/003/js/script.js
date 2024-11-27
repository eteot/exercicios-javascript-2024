window.alert('Bem vindo!');

//entrada
nome = prompt('Informe o seu nome: ');
idade = prompt(`${nome}, informe a sua idade: `);


//processamento
escolherTema();

//saída
document.write(`<hr>`);
document.write(`<p> Bem vindo, ${nome} </p>`);
document.write(`<p> Idade: ${idade} </p>`);
document.write(`<hr>`);




function escolherTema(){
    cor = prompt('Escolha uma cor: \n\n a) Azul \n b) Vermelho \n c) Verde  \n d) cinza ');
    cor = cor.toLowerCase();

    //processamento
    switch (cor){
        case "a":
            msg = "Azul é uma cor especial";
            tema = "Azul";
            corFundo = "blue";
            corTexto = "white";
            break;
        case "b":
            msg = "Vemelho é uma cor forte";
            tema = "Vermelho";
            corFundo = "red";
            corTexto = "white";
            break;
        case "c":
            msg = "Verde é a cor da natureza";
            tema = "Verde";
            corFundo = "green";
            corTexto = "red";
            break;
        case "d":
            msg = "Cinza é uma cor neutra";
            tema = "Cinza";
            corFundo = "gray";
            corTexto = "yellow";
            break;
        default:
            msg = "Opçao inválida";
            tema = "Padrão";
            corFundo = "white";
            corTexto = "black";
            break;
    }
    document.body.style.background = corFundo;
    document.body.style.color = corTexto;
    document.getElementById('team').value = tema;
}

function lerNome(){
 
    nome = window.prompt('Informe o seu nome: ');
    window.alert(`${nome}, que bom vê-lo(a) por aqui!`);
}

function jogo(){
    if(window.confirm('Vamos Jogar? ')){
        alert('Legal, sabia que você iria gostar!');
    }
    else{
        alert('Que pena, não foi desta vez!');
    }
}