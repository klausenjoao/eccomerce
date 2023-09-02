import { catalogo } from "./utlidades";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="border-solid border-2 border-sky-500 w-48  m-2 flex flex-col p-2 justify-between"  id="card-produto-${produtoCatalogo.id}">
<img 
src="./assets/${produtoCatalogo.imagem}"
alt="mantaAzul."/>
<p class='marca'>${produtoCatalogo.marca}</p>
<p class='produto'>${produtoCatalogo.nome}</p>
<p>$${produtoCatalogo.preco}</p>
<button class='bg-slate-950 hover:bg-slate-700'>
<i class="fa-solid fa-cart-plus"></i></button>
</div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }
}
