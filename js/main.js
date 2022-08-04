function trocarPokebola(classe) {
    if(classe.src == "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-nao-favorita.png"){
       return classe.src = "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-favorita.png";

    }
       return classe.src = "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-nao-favorita.png";
       
}

function destacarLink(tipoPokemon) {
    let listaLink = ['fire','water','grass','electric','todos']; 
    let tamanhoListaLink = listaLink.length;
    for(i=0; i < tamanhoListaLink; i++){
        document.getElementById("link-"+listaLink[i]).classList.remove("link-"+listaLink[i]+"-ativo");

    }

    let linkSelecionado = document.querySelector("#link-"+tipoPokemon);
    linkSelecionado.classList.add ("link-"+tipoPokemon+"-ativo");

}

function exibirTodosPokemons(tipoPokemon) {

    destacarLink(tipoPokemon);

    for (let e of document.getElementsByClassName('corpo-card')) {
        e.style.display = 'block';

    }
}

function exibirPokemons(tipoPokemon) {

    let listaTipos = ['fire','water','grass','electric']; 
    let listaTipoNaoSelecionado = [];

    destacarLink(tipoPokemon);

    for (let e of document.getElementsByClassName('corpo-card')) {
        e.style.display = 'block';

    }
   
    for(i=0;i <= 3;i++){
        if(tipoPokemon !==listaTipos[i]){
            listaTipoNaoSelecionado.push(listaTipos[i]);
           
        }
    }
    
    for(i=0; i <= 3;i++) {
        for (let e of document.getElementsByClassName(listaTipoNaoSelecionado[i])) {
            e.style.display = 'none';
        
        }
    }
}