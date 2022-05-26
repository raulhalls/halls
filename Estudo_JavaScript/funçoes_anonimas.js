 /*var fraseSaudaçao = function (nome) {
document.write('ola ' + nome + ' , tudo bem ?')
}
var nome = prompt('insira aqui seu nome')



fraseSaudaçao(nome)

//funçoes callback
function exibirArtigo (id , callbackSucesso , callbackErro){
   var id = 1;
    if( id == 1){
        callbackSucesso('funçoes de callback em js' + ' funçoes de callback sao muito utilizadas');
    }
    else{
        callbackErro('erro ao recuperar os dados');
    }
}

var callbackSucesso = function (titulo , descriçao) {
document.write('<h1>' + titulo + '</h1>')
document.write('<hr>')
document.write('<h5>' + descriçao + '</h5>')
}
var callbackErro = function (erro) {
    document.write('<p>' + erro + '</p>')
}



exibirArtigo(callbackSucesso,callbackErro);*/

//codigo nao funcional
/*function exibirNumero ( numero1 , numero2){
    if (false){
        document.write(numero1)
    }
    else{
        document.write(numero2)
    }
}
var numero1 = function (){
   document.write('o numero 1 foi exibido')
}
var numero2 = function (){
   document.write('o numero 2 foi exibido')
}

exibirNumero(numero2);*/

//function ola(nome) {
    /*essa funcao será passada como parâmetro, e ela espera
  um parametro, chamado nome */
   // document.write('Olá ' + nome)
//}
 
//function saudacao(funcaoParametro) {
    /*parametro funcaoParametro recebe como parametro a funcao
     ola criada acima*/
   // var usuario = 'Luis Paulo Cavalcante'
    /*Mas, funcaoParametro vai enviar a variavel usuario para a funcao ola, já que ola espera um parametro*/
    //funcaoParametro(usuario)
//}
 
//saudacao(ola) /*executando saudacao e passando a funcao ola como parametro*/




/*function tela (numero){
    document.write('esse é seu numero:' + numero)
}

function numeroTela (parametro){
    var numerozin = 2;
    parametro(numerozin)
}
numeroTela(tela);*/

//funçao callback feita PORRA!!!!!!!
/*function recuperarArtigo (id , sucesso, erro){
    //id
    if (true){
        sucesso('o documento foi recuperado ' , ' aqui esta seu documento')
    }
    else{
        erro('erro de recuperaçao')
    }
}
var sucesso = function(titulo , documento){
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr>')
    document.write('<h5>' + documento + '</h5>')
}
var erro = function(erro){
    document.write(erro)
}
recuperarArtigo( 1,sucesso,erro);*/

//outra funçao com callback

function recuperarNome (id , callNome , callErro){
    // dentro dessa funçao voce dara os valores tidos como parametro nas outras dua funçoes
    if (true){
        sucesso('o nome foi recuperado' , 'o nome é jorge');
    }
    else{
        erro('o nome nao foi recuperado');
    }

}
//é como se voce inserisse essas funçoes abaixo a funçao acima
var sucesso = function(resultado , nome){
    document.write('<h2>' + resultado + '</h2>');
    document.write('aqui esta seu nome:');
    document.write(nome);
}
var erro = function(erro){
    document.write('houve um erro ao recuperar o nome');
}
//lembre se sempre de chamar a funçao com seus respectivos parametros que no caso sao de callback
recuperarNome(1, sucesso, erro);



