window.alert("Bem vindo ao quiz ETEOT!");

let nome = window.prompt("Qual o seu nome?");
window.alert(`${nome}, que legal você por aqui!`);

if(window.confirm(`${nome}, deseja participar do nosso quiz?`)){
    window.alert("Sabia que você iria concordar.");
    window.alert("Vamos lá ...");

if(window.confirm("Fluminense é o melhor time Carioca")){
        window.alert("Você sabe das coisas .. ");
    }else{
        window.alert("Que isso, você nao sabe de nada");
    }

    let time = window.prompt("Qual o seu time do Coração?");
    if((time == "Fluminense") || (time == "fluminense") || (time == "Flu")){
        alert("Seu time é 10");
    }else if(time == "Flamengo"){
        alert("MEngooo é seleção");
    }else if(time == "Vasco"){
        alert("...");
    }else if(time == "Botafogo"){
        alert("Isso é bairro");
    }else{
        alert("Não conheço o seu time");
    }

    let resp = window.prompt("Quanto é 10 + 10? \n \n a) 1010 \n b) 100 \n c)10 \n d)20 ");
    if ( resp == "D" || resp == "d"){
        alert("Certa Resposta");
    }
    else{
        alert("Ah que pena, vc errou... A resposta certa é 20, letra d")
    }



}else{
    window.alert("Ah que pena! \n\n Você nao quer brincar comigo, tenho certeza que iria gostar");
}