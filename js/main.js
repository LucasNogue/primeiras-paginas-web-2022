function trocarPokebola(classe) {
    if(classe.src == "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-nao-favorita.png"){
       return classe.src = "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-favorita.png";
    }
    return classe.src = "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-nao-favorita.png";    
}

function destacarLink(tipoPokemon) {
    const listaLink = ['fire','water','grass','electric','todos']; 

    listaLink.forEach(link => document.getElementById("link-"+link).classList.remove("link-"+link+"-ativo"));

    const linkSelecionado = document.querySelector(`#link-${tipoPokemon}`);
    linkSelecionado.classList.add (`link-${tipoPokemon}-ativo`);
}

function exibirTodosPokemons(tipoPokemon) {
    destacarLink(tipoPokemon);
    
    for (let card of document.getElementsByClassName('corpo-card')) {
        card.style.display = 'block';
    }
}

function exibirPokemons(tipoPokemon) {

    const listaTipos = ['fire','water','grass','electric']; 
    const tamanhoListaTipos = listaTipos.length;
    const listaTipoNaoSelecionado = [];

    destacarLink(tipoPokemon);

    for (let card of document.getElementsByClassName('corpo-card')) {
        card.style.display = 'block';
    }
   
    for(i=0; i <= tamanhoListaTipos; i++){
        if(tipoPokemon !==listaTipos[i]){
            listaTipoNaoSelecionado.push(listaTipos[i]);
        }
    }
    
    for(i=0; i <= tamanhoListaTipos; i++) {
        for (let card of document.getElementsByClassName(listaTipoNaoSelecionado[i])) {
            card.style.display = 'none';
        }
    }
}