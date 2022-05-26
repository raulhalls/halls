let listar_coisas = Array();

listar_coisas['objQuarto'] = Array();
listar_coisas['objBanheiro'] = Array();

listar_coisas['objQuarto'][0] = 'computador';
listar_coisas['objQuarto'][1] = 'televisao';
listar_coisas['objQuarto'][2] = 'espelho';
listar_coisas['objQuarto'][3] = 'porta';
listar_coisas['objQuarto'][4] = 'cama';


listar_coisas['objBanheiro'][0] = 'vaso sanitario';
listar_coisas['objBanheiro'][1] = 'Box';
listar_coisas['objBanheiro'][2] = 'pia';
listar_coisas['objBanheiro'][3] = 'sabonete';
listar_coisas['objBanheiro'][4] = 'shampoo';


console.log(listar_coisas);

//procurar elemento dentro de uma array com .indexOf() dentro dos colchetes passando o parametro que vai ser pesquisado
//caso o retorno de -1 o elemento nao existira dentro da array
let entrada = prompt('insira aqui o elemnto que vc deseja pesquisar dentro do quarto')
if(listar_coisas['objQuarto'].indexOf(entrada) == -1){
    document.write('o elemento nao existe');
}
else{
    document.write('o elemento existe e esta na posiçao' + listar_coisas['objQuarto'].indexOf(entrada));
}
