var nota = prompt('digite aqui a nota do aluno');

var media = 7;

var qtdeFaltas = prompt('digite aqui a quantidade de faltas do aluno');

var limiteFaltas = 60;


nota = parseInt(nota);

qtdeFaltas = parseInt(qtdeFaltas);


if (nota >= media && qtdeFaltas <= limiteFaltas){
    document.write('o aluno foi aprovado');
}
else{
 document.write('o aluno foi reprovado');
}