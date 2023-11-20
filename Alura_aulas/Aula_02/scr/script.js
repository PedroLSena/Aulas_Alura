rand = Math.floor(Math.random()*100);
let chute;
let tentativas=0;
console.log(rand);
randomico(rand);

alert(`o valor era ${rand}, jogo acabou!, você teve ${tentativas} tentativas`);

function randomico(rand){
do{
    chute =  prompt("Digite um numero de 1 a 100:");
    console.log(rand, tentativas);
    if(chute> rand){
        alert("Seu numero é menor");
        tentativas++;
    }else if(chute<rand){
        alert("Seu numero é maior");
        tentativas++;
    }else{
        alert("acertou");
        break
    }
}while(chute !== rand);
return(rand);
}
