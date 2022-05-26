//atribuir data a uma variavel
//let data = new Date();
// os objetos de data vao recuperar a data do sistema comforme  a data do usuario
//document.write(data.getDate());
// o codigo acima vai imprimir a dia comforme o dia no computador do usuario
//------------------------------------------------------------------------------------------------------
//imprimir horas de acordo com o compudaor do usuario
//document.write(data.getHours());
//imprimir ano de acordo com o computador do usuario
//document.write(data.getFullYear());
//imprimir mes de 0 a 11 janeiro = 0 e dezembro = 11
//document.write(data.getMonth() + 1);
//comfirmaçao de data por ambiente de usuario ( computador do usuário)
//document.write('a data de hoje é:' + data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + '<br>');
//document.write(' a hora atual é' + data.getHours() + '<br>');
//document.write('o minuto atual é' + data.getMinutes() + '<br>');
//document.write('segundos:' + data.getSeconds() + '<br>');
//document.write('agora são' + data.getHours() + '/' + data.getMinutes() + '/' + data.getSeconds());


//objetos . get sao utilizados para recuperar dados enquando os objetos set sao usados para setar(inserir) dados

//realizando operaçoes com o objeto date

/*let data = new Date();
//passando a data para string
document.write(data.toString());
//adicionar dias a data ou retirar
data.setDate(data.getDate() - 1);
document.write('<hr>');
document.write(data.toString());
document.write('<hr>');
//adicionando e removendo meses
document.write(data.toString());
data.setMonth(data.getMonth() + 4);
document.write('<hr>');
document.write(data.toString());
//alterando o ano
document.write(data.toString());
document.write('<hr>');
data.setFullYear(data.getFullYear() + 2);
document.write(data.toString())*/

//let data1 = new Date(2003 ,07 , 08);
//let data2 = new Date(2022 ,06 , 16);

//document.write(data1.toString());
//document.write('<hr>');
//document.write(data2.toString());


//converter o valor para um valor que possa ser usado em uma conta

//document.write('<hr>' + '<br>' + '<br>');
//let milissegundos_datas = data1.getTime() + data2.getTime();


//document.write(milissegundos_datas);
//document.write('<hr>');


//encontrar a quantidade de milissegundos entre a data1 e data 2
//math.abs converter para valor absoluto

//let milissegundos_dia = (1*24*60*60*1000);

//document.write(milissegundos_datas);

//document.write('<hr>');

//document.write('um dia tem' + milissegundos_dia + 'milissegundos');

//document.write('<hr>' + '<br>' + '<br>');

//document.write(' a diferença de dias entre as duas datas é :' + Math.ceil(milissegundos_datas / milissegundos_dia / 30 / 12));




