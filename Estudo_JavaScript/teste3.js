function mudarBackground(cor){
document.getElementById('input').style.backgroundColor = cor;
}
function letrasCor(){
let input =  document.getElementById('input');
let valorCampo = document.getElementById('input').value;
if(valorCampo.length < 3 ){
    input = document.getElementById('input').style.backgroundColor = '#ff0000';
}
else {
    input = document.getElementById('input').style.backgroundColor = '#008000';
}
}
function tirarFoco (){
    document.getElementById('input').style.backgroundColor = 'white';
}