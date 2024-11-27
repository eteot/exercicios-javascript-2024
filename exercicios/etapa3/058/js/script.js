function exibir(resposta){
   if (document.getElementById(resposta).style.display == "block") {
        document.getElementById(resposta).style.display = "none";
   }
   else{
       document.getElementById(resposta).style.display = "block";
   }
    
}

function valida(){
    aux = "";

    if(document.quiz.nome.value == ""){
        alert("O Campo nome é Obrigatório");
        document.quiz.nome.focus();
        return false;
    }

    if(document.quiz.q1[0].checked == false && document.quiz.q1[1].checked == false && document.quiz.q1[2].checked == false ){
        aux += "A questao 1 não foi respondida. \n";
    }

    if(document.quiz.q2[0].checked == false && document.quiz.q2[1].checked == false && document.quiz.q2[2].checked == false ){
        aux += "A questao 2 não foi respondida. \n";
    }

    if(document.quiz.q3[0].checked == false && document.quiz.q3[1].checked == false && document.quiz.q3[2].checked == false ){
        aux += "A questao 3 não foi respondida. \n";
    }

    if (confirm(aux + "\n Confirma o envio do Quiz?")){
       // alert("Quiz enviado com Sucesso");
        confere();
        return true;
    }
    else{
        return false;
    }


}

function confere(){
    nome = document.quiz.nome.value;
    pontos = 0;

    resultado = `<div id='pag'><h1 class='center'> Resultado de ${nome} </h1>`;

    //conferir a questao 1
    if(document.quiz.q1[1].checked){
        resultado += "<div style='color: green'> Questao 1: Resposta Correta. </div>";
        pontos++;
    }
    else{
        resultado += "<div style='color: red'> Questao 1: Resposta Errada. A opção correta é a letra(B) </div>";
    }

    //conferir a questao 2
    if(document.quiz.q2[0].checked){
        resultado += "<div style='color: green'> Questao 1: Resposta Correta. </div>";
        pontos++;
    }
    else{
        resultado += "<div style='color: red'> Questao 1: Resposta Errada. A opção correta é a letra(A) </div>";
    }

    //conferir a questao 3
    if(document.quiz.q3[2].checked){
        resultado += "<div style='color: green'> Questao 1: Resposta Correta. </div>";
        pontos++;
    }
    else{
        resultado += "<div style='color: red'> Questao 1: Resposta Errada. A opção correta é a letra(C) </div>";
    }
    perc = pontos/3*100;
    resultado += `<div class='center'> Você acertou ${pontos} de 3 questões - ${perc.toFixed(1)}% do quiz. </div> </div> `;

    window.close();
    correcao = open();

    correcao.document.write("<link rel='stylesheet' href='css/style.css'>");
    correcao.document.write(resultado);
}