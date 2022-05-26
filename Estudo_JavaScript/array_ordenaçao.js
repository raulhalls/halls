let listar_coisas = Array();

listar_coisas['pessoas'] = Array();
listar_coisas['cores'] = Array();


listar_coisas['pessoas'][0] = 'jefferson';
listar_coisas['pessoas'][1] = 'Anderson';
listar_coisas['pessoas'][2] = 'Isaias';
listar_coisas['pessoas'][3] = 'julya';
listar_coisas['pessoas'][4] = 'lorrayne';
listar_coisas['pessoas'][5] = 'sayuri';
listar_coisas['pessoas'][6] = 'andre';


listar_coisas['cores'][0] = ' branco';
listar_coisas['cores'][1] = ' vermelho';
listar_coisas['cores'][2] = ' azul';
listar_coisas['cores'][3] = ' cinza';
listar_coisas['cores'][4] = ' preto';
listar_coisas['cores'][5] = ' marrom';
listar_coisas['cores'][6] = ' ciano';

//fazer ordenaçao com .sort()
//o metodo .sort() sem parametro é incapaz de trabalhar com arrays de tipos numericos
//semrpe ultilizar funçao para ordenar valores numericos
function ordenarNumeros (a ,b){
    return a - b;

}


console.log(listar_coisas['cores'].sort(ordenarNumeros));
console.log(listar_coisas['pessoas'].sort(ordenarNumeros));

