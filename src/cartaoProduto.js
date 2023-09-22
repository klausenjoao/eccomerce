import { catalogo } from "./utlidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid w-48  m-2 flex flex-col p-2 justify-between shadow-lg shadow-slate-400 rounded-lg group"  id="card-produto-${produtoCatalogo.id}">
<img 
src="./assets/${produtoCatalogo.imagem}"
alt="mantaAzul."
class='group-hover:scale-110 duration-300 my-3  rounded-lg'
/>
<p class='text-sm'>${produtoCatalogo.marca}</p>
<p class='text-sm'>${produtoCatalogo.nome}</p>
<p class='text-sm'>$${produtoCatalogo.preco}</p>
<button id='adicionar-${produtoCatalogo.id}' class='bg-slate-950 hover:bg-slate-700'>
<i class="fa-solid fa-cart-plus" style="color: #ffffff;"></i>
</button>
</div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
    document.getElementById(`adicionar-${produtoCatalogo.id}`);
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
