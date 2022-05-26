let listar_coisas = Array()

listar_coisas['pessoas'] = Array('joao', 'carlos' , 'alberto' , 'sergio' , 'davi' , 'lucas');
listar_coisas['carros'] = Array('Volkswagen Gol' , 'Fiat Uno' , 'Volkswagen Saveiro' , 'Fiat Fiorino' , 'Ford Ranger')

document.write('o ' + listar_coisas['pessoas'][3] + ' possui o carro' + listar_coisas['carros'][3] + ' e nao foi ao trabalho')



//incluir um elemento no final do array(.push e declarar o parametro para ele)
//listar_coisas['carros'].push('ferrari');


//para incluir elemento no inicio da array (.unshift e declarar parametro para ele)
//listar_coisas['carros'].unshift('ferrari');

//excluir elemento no final da array 
//remoçao de valor nao ha nessecidade de usar o paramento pois ele ja vai excluir o valor do final
//.pop()

//excluir o elemento no inicio da array 
//remoçao de valor nao ha nessecidade de usar o paramento pois ele ja vai excluir o valor do inicio
//usar eleemento 
//.shift()

console.log(listar_coisas);