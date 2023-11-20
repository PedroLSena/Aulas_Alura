let btnClick = document.querySelector('.btnClick');
window.alert("cole a URL da imagem que deseja que seja apresentada");

btnClick.addEventListener('click', function(){
    let inputFilme = document.getElementById('filme').value;
    let elementosFilmes = document.getElementById('listaFilmes');
        console.log("click");
        //console.log(inputFilme);
        elementosFilmes.innerHTML = '<img src='+inputFilme+'>';
        document.getElementById('filme').value = '';
});