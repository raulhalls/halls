var nota = prompt('digite a nota do aluno');
var media = 7;

nota = parseInt(nota);

if(nota >= media){
    document.write('o aluno foi aprovado');
}
else{
    document.write('o aluno foi reprovado');
}