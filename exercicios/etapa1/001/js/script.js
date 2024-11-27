window.alert("Olá, bem vindo ao meu Site!");

nome = prompt("Que bom vê-lo por aqui! \n\n Qual o seu nome? ");

alert("Bem-vindo " + nome); //usando o concatenador +

alert(`Bem-vindo ${nome}`); //usando o interpolador `

//entrada
n1 = 10;
n2 = 20;
//processamento
soma = n1 + n2;
//saida
alert(`A soma de ${n1} + ${n2} = ${soma}`);

//entrada
n1 = Number(prompt("Informe o primeiro numero: "));
n2 = Number(prompt("Informe o outro numero: "));

//processamento : soma, multiplicacao, divisao e subtracao
soma = n1 + n2;
sub = n1 - n2;
mult = n1 * n2;
div = n1 / n2;

//saida
alert(`A soma de ${n1} + ${n2} = ${soma}`);
alert(`A subtração de ${n1} - ${n2} = ${sub}`);
alert(`A multiplicação de ${n1} * ${n2} = ${mult}`);
alert(`A divisão de ${n1} / ${n2} = ${div}`);








//entrada
anoAtual = 2024;
anoNasc = Number(prompt(`${nome}, qual o seu ano de nascimento?`));
//processamento
idade = anoAtual - anoNasc;
//saida
alert(`${nome} a sua idade é ${idade}` )