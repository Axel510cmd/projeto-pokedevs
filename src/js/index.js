

const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);



listaSelecaoPokedevs.forEach(pokedev => {
   pokedev.addEventListener("click", () => {

      esconderCartaoPokedev();



      const idPokedevSelecionado = saberQualCartaoSeraAberto(pokedev);



      removerPokedevSelecionado();



      pokedevSelecionado(idPokedevSelecionado);


   })
})



function saberQualCartaoSeraAberto(pokedev) {
   const idPokedevSelecionado = pokedev.attributes.id.value;

   const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
   const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
   CartaoPokedevParaAbrir.classList.add("aberto");
   return idPokedevSelecionado;
}

function removerPokedevSelecionado() {
   const pokedevAtivoNaListagem = document.querySelector(".ativo");
   pokedevAtivoNaListagem.classList.remove("ativo");
}

function pokedevSelecionado(idPokedevSelecionado) {
   const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
   pokedevSelecionadoNaListagem.classList.add("ativo");
}

function esconderCartaoPokedev() {
   const cartaoPokedevAberto = document.querySelector(".aberto");
   cartaoPokedevAberto.classList.remove("aberto");
}

