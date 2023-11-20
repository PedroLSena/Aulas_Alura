


//val1=4;
//val2=20;

//console.log(val1+val2);

const btn = document.querySelector(".btnConv");

btn.addEventListener("click", function(e) {
    let val1= document.querySelector('.valor1').value;
    let val2= document.querySelector('.valor2').value;
    let resultado= document.querySelector('.resultado');

    let valor1 = Number(val1);
    let valor2= Number(val2);

    let res;

    res=valor1*valor2;
    res = res.toFixed(2);
    
    resultado.innerHTML=(`Valor do real em dolar ${res}`);
    e.preventDefault();
});