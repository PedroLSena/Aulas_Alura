let filmeUm = "https://m.media-amazon.com/images/I/71ShGTVJy4L._AC_UF894,1000_QL80_.jpg";

let filmeDois ="https://periodico.sites.uepg.br/images/essa.jpg";

let filmeTres="https://moviesense.files.wordpress.com/2015/02/whiplash5.jpg";

let listaFilmes=[];

listaFilmes[0]=filmeUm;
listaFilmes[1]=filmeDois; 
listaFilmes[2]=filmeTres; 

for(let i=0;i<listaFilmes.length;i++){
    document.write('<img src='+listaFilmes[i]+'>');
}