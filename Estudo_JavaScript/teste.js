var nome = prompt('insira aqui seu nome');

var altura = prompt('insira sua altura em cm');

var peso = prompt('insira aqui seu peso')

var massa = 0;

var classificaçao = 0;

altura = parseFloat(altura);

peso = parseFloat(peso);

altura = altura / 100;

massa = peso / (altura * altura);

if (massa <= 16){
   classificaçao = ('Baixo peso muito grave' + '<br>');
}
else if(massa > 16 && massa <= 17){
   classificaçao = ('Baixo peso grave' + '<br>');
}
else if(massa > 17 && massa <= 18.49){
   classificaçao = ('Baixo peso' + '<br>');
}
else if(massa > 18.50 && massa <= 24.99){
   classificaçao = ('peso normal' + '<br>');
}
else if(massa > 25 && massa <= 29.99){
   classificaçao = ('sobrepeso' + '<br>');
}
else if(massa > 30 && massa <= 34.99){
    classificaçao  = ('obesidade de grau 1' + '<br>');
}
else if(massa > 35 && massa <= 39.99){
    classificaçao = ('obesidade de grau 2' + '<br>');
}
else if(massa > 40){
    classificaçao = ('obesidade de grau 3' + '<br>');
}

document.write(nome + ' possui índice de massa corporal igual a ' + massa + ', sendo classificado como:' + classificaçao );


