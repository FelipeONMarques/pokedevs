const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

// biome-ignore lint/complexity/noForEach: <explanation>
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click" , ()=>{

        //Pegando o cartão com a class aberta e removendo-a
        esconderCartaoPokedev();

        
        //Pegando o cartão com a class aberta e adicionando-a
        const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);

        //Tirando a class ativo da Listagem
        desativarPokedevNaListagem();

        //Adicionando a class ativo da Listagem selecionada
        ativarPokedevNaListagem(idPokedevSelecionado);
    })
})

function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    // biome-ignore lint/style/useTemplate: <explanation>
    const idCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

    const cartaoPokedevParaAbrir = document.getElementById(idCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
