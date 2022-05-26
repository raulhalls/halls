//value recupera o valor inserido dentro do input

function Distribui(){
   let entrada = document.getElementById('entrada').value;
    document.getElementById('saida_numeros').value;
    document.getElementById('saida_letras').value;
   //limpar campo de digitação
    document.getElementById('entrada').value = '';
    //limpando espaços de string
    entrada.trim();

    switch(entrada){
        case '1':
            document.getElementById('saida_numeros').value += entrada;
            break
            
        case '2':
            document.getElementById('saida_numeros').value += entrada;
            break
            
        case '3':
            document.getElementById('saida_numeros').value += entrada;
            break
        case '4':
            document.getElementById('saida_numeros').value += entrada;
            break
        case '5':
            document.getElementById('saida_numeros').value += entrada;
            break
        case '6':
            document.getElementById('saida_numeros').value += entrada;
            break
        case '7':
            document.getElementById('saida_numeros').value += entrada;
            break
        case '8':
            document.getElementById('saida_numeros').value += entrada;
            break
        case '9':
            document.getElementById('saida_numeros').value += entrada;
            //adicionar caractere ao campo de numeros
            break;
            default:
                document.getElementById('saida_letras').value += entrada;
            //adcionar caractere ao campo de letras

    }


}