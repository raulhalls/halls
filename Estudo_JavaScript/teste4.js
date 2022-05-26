listar_coisas = Array();

listar_coisas[0] = 'cadeira';
listar_coisas[1] = 'impressora';
listar_coisas[2] = 'garfo';


console.log(listar_coisas);



function adicinar(){
    let valor = document.getElementById('visor').value;

    if(valor == ''){
        alert('não é possivel inserir um valor nulo')
    }
    if(valor != ''){

     if(listar_coisas.indexOf(valor) != -1){
         alert('o objeto ja foi adicionado');
     }
      else if(valor == ''){
        alert('insira um objeto válido');
    }
     else{
         listar_coisas.push(valor);
         console.log(listar_coisas);
         document.getElementById('valor') = '';
     }
     
    }

    function ordenarobjetos() {
        listar_coisas.sort(sort);
        
        console.log(listar_coisas);

        function sort (a , b){
            a - b
        }

    }
    

    


}