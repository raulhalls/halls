function calcular (tipo, valor){
if ( tipo === 'acao'){
    if ( valor == 'c'){
        //limpar o visor
        document.getElementById('visor').value = '';
    }
    if ( valor === '/' || valor === '*' || valor === '+' || valor === '-' || valor === '.'){
        //concatenar no calculo
        document.getElementById('visor').value += valor;
    }
    if (valor === '='){
      let valor_campo =  document.getElementById('visor').value
      //eval vai testar o campo q é uma string como um valor inteiro
     document.getElementById('visor').value = eval(valor_campo);
    }
}
else if (tipo === 'valor'){
    document.getElementById('visor').value += valor ;
}

}