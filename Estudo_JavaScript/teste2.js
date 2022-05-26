

//calculadorazinha basica
let numero = prompt('insira aqui seu numero');
let equacao = prompt(' insira aqui sua equaçao de multiplicaçao ou divisao');
let qtde = prompt('insira por quanto deve ser a conta');

qtde = parseInt(qtde);
numero = parseInt(numero);





let funcao = function(numero , qtde , equacao){
if (equacao == 'multiplicaçao'){
    numero = numero * qtde;
}
else if ( equacao == 'divisao'){
    numero = numero / qtde;
}
else if (equacao == 'soma'){
    numero = numero + qtde;
}
else if (equacao == 'subtraçao'){
    numero = numero - qtde;
}
else{
    document.write('a equaçao nao foi inserida')
}
return('esse é o resultado da operaçao é : ' + numero + ' com essa equaçao');
}
document.write(funcao(numero,qtde,equacao));


