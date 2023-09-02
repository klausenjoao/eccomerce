function abrirCarrinho() {
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
  }
  
  function fecharCarrinho() {
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
  }
  
  export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  
    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  }
  
  export function adicionarAoCarrinho(){
    const containerProdutosCarrinho  = document.getElementById('produtos-carrinho');
    const cartaoProdutoCarrinho = `<article class="flex border-slate-950 p-1  relative">
    <button id="fechar-carrinho"  class="absolute  top-0 right-2">
      <i class="fa-solid fa-trash text-slate-500 hover:text-slate-800"></i>
    </button>
    <img src="./assets/bone.png" alt="Carrinho: Boné CK" class="h-24" />
    <div class="py-2">
      <p class="text-slate-900 text-small">Boné</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$85</p>
    </div>
  </article>`;

  containerProdutosCarrinho,innerHTML +=  cartaoProdutoCarrinho;
  }