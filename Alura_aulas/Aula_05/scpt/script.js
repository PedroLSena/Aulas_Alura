var Player1 ={
    nome:'Player1',
    empate:0,
    derrota:0,
    vitoria:0,
    pontos:0,
};
var Player2 ={
    nome:'Player2',
    empate:0,
    derrota:0,
    vitoria:0,
    pontos:0,
};
var Player3 ={
    nome:'Player3',
    empate:0,
    derrota:0,
    vitoria:0,
    pontos:0,
};

var elementoTabela = document.getElementById('tabelaJogadores');

function exTela(){

elementoTabela.innerHTML=`
<tr>
    <td>${Player1.nome}</td>
    <td>${Player1.vitoria}</td>
    <td>${Player1.empate}</td>
    <td>${Player1.derrota}</td>
    <td>${Player1.pontos}</td>
        <td><button onClick="adicionarVitoria(Player1)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(Player1)">Empate</button></td>
        <td><button onClick="adicionarDerrota(Player1)">Derrota</button></td>
</tr>

<tr>
    <td>${Player2.nome}</td>
    <td>${Player2.vitoria}</td>
    <td>${Player2.empate}</td>
    <td>${Player2.derrota}</td>
    <td>${Player2.pontos}</td>
        <td><button onClick="adicionarVitoria(Player2)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(Player2)">Empate</button></td>
        <td><button onClick="adicionarDerrota(Player2)">Derrota</button></td>
</tr>

<tr>
    <td>${Player3.nome}</td>
    <td>${Player3.vitoria}</td>
    <td>${Player3.empate}</td>
    <td>${Player3.derrota}</td>
    <td>${Player3.pontos}</td>
        <td><button onClick="adicionarVitoria(Player3)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(Player3)">Empate</button></td>
        <td><button onClick="adicionarDerrota(Player3)">Derrota</button></td>
</tr>`;
}
exTela();
function adicionarVitoria(jogador){
    //console.log(jogador);
    jogador.vitoria++;
    jogador.pontos += jogador.pontos + 3;
    console.log(jogador.vitoria,jogador.pontos);
    exTela();
}

function adicionarEmpate(jogador){
    jogador.empate++;
    jogador.pontos++;
    exTela();
}

function adicionarDerrota(jogador){
    jogador.derrota++
    exTela();
}