function trocarPokebola(classe) {
    if(classe.src == "http://127.0.0.1:5500/images/pokebola-nao-favorita.png"){
       return classe.src = "https://raw.githubusercontent.com/LucasNogue/primeiras-paginas-web-2022/images/pokebola-favorita.png";

    }
       return classe.src = "https://raw.githubusercontent.com/LucasNogue/primeiras-paginas-web-2022/images/pokebola-nao-favorita.png";
}

function exibirTodosPokemons() {

    for (let e of document.getElementsByClassName('corpo-card')) {
        e.style.display = 'block';
    }
}

function exibirPokemons(tipoPokemon) {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('a');
    const menuLength = menuItem.length
    for ( let i = 0; i <menuLength; i++){
        if(menuItem[i].href === currentLocation){
            menuItem[i].className = "active"
        }
    }

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