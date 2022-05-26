var minhaPica = prompt('insira aqui o valor da minha pica');
var buracoDoCu = prompt('insira aqui o tamanho do buraco do cu');

if(minhaPica == '' && buracoDoCu == ''){
    document.write('você nao inseriu o tamanho');
}
if (minhaPica <= buracoDoCu){
    document.write('cabe certinho');
    document.write('<br>')
}
else{
    document.write('nao cabe nao');
    document.write('<br>')
}

minhaPica = parseInt(minhaPica);

buracoDoCu = parseInt(buracoDoCu);

if (minhaPica >= 30){
    document.write('CARALHO, ROLAO');
}
else if(buracoDoCu <= 10){
    document.write('top cuzinho');
}

/*var idade = prompt('insira aqui a idade do aluno')

var maxcriança = 15;

var maxjovem = 30;

var maxadulto = 60;

var maxidoso = 100;


if(idade <= maxcriança && idade < maxjovem && idade < maxadulto && idade < maxidoso){
    document.write('o aluno é uma criança');
}
else if(idade <= maxjovem && idade > maxcriança && idade < maxadulto && idade < maxidoso){
    document.write('o aluno é um jovem');
}
else if(idade > maxcriança && idade > maxjovem && idade <= maxadulto && idade < maxidoso){
    document.write('o aluno é um adulto');
}
else if (idade > maxcriança && idade > maxjovem && idade > maxadulto && idade <= maxidoso){
    document.write('o aluno é um idoso');
}*/
