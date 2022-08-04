function trocarPokebola(classe) {
    if(classe.src == "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-nao-favorita.png"){
       return classe.src = "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-favorita.png";

    }
       return classe.src = "https://lucasnogue.github.io/primeiras-paginas-web-2022/images/pokebola-nao-favorita.png";
}

function exibirTodosPokemons() {

    for (let e of document.getElementsByClassName('corpo-card')) {
        e.style.display = 'block';
    }
}

function exibirPokemons(tipoPokemon) {

    for (let e of document.getElementsByClassName('corpo-card')) {
        e.style.display = 'block';
    }
   
    let listaTipos = ['fire','water','grass','electric']; 
    let listaTipoNaoSelecionado = [];

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