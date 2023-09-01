import { inicializarCarrinho } from "./src/menuCarrinho";

const catalogo = [
    {
        id: 1,
        marca: "CalvinKlein",
        nome: "Boné",
        preco: 85,
        imagem: "bone.png",
        feminino: false,
    },
    {
      id: 2,
      marca: "CalvinKlein",
      nome: "Polo CK",
      preco: 450,
      imagem: "polo.png",
      feminino: false,
    },
    {
      id: 3,
      marca: "CalvinKlein",
      nome: "Calça Jeans",
      preco: 600,
      imagem: "calcajeans.png",
      feminino: false,
    },
    {
      id: 4,
      marca: "CalvinKlein",
      nome: "Calça de Sarja",
      preco: 160,
      imagem: "calcaSarja.png",
      feminino: false,
    },
    {
      id: 5,
      marca: "CalvinKlein",
      nome: "Camisa CK",
      preco: 250,
      imagem: "camisa.png",
      feminino: false,
    },
    {
      id: 6,
      marca: "CalvinKlein",
      nome: "Jaqueta CK",
      preco: 990,
      imagem: "jaqueta.png",
      feminino: false,
    },
    {
      id: 7,
      marca: "CalvinKlein",
      nome: "Mochila CK",
      preco: 890,
      imagem: "mochila.png",
      feminino: false,
    },
    {
      id: 8,
      marca: "CalvinKlein",
      nome: "Paletó CK",
      preco: 1490,
      imagem: "paleto.png",
      feminino: true,
    },
  ];
  
for(const produtoCatalogo of catalogo){
    const cartaoProduto = `<div class="border-solid border-2 border-sky-500 w-48  m-2"id="card-produto-${produtoCatalogo.id}">
<img 
src="./assets/${produtoCatalogo.imagem}"
alt="mantaAzul."
style="height: 200px;" />
<p class='marca'>${produtoCatalogo.marca}</p>
<p class='produto'>${produtoCatalogo.nome}</p>
<p>$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById('container-produto').innerHTML += cartaoProduto
}

inicializarCarrinho();