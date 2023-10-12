export const catalogo = [
    {
        id: "1",
        marca: "CalvinKlein",
        nome: "Boné",
        preco: 85,
        imagem: "bone.png",
        feminino: false,
    },
    {
      id: "2",
      marca: "CalvinKlein",
      nome: "Polo CK",
      preco: 450,
      imagem: "polo.png",
      feminino: false,
    },
    {
      id: "3",
      marca: "CalvinKlein",
      nome: "Calça Jeans",
      preco: 600,
      imagem: "calcajeans.png",
      feminino: false,
    },
    {
      id: "4",
      marca: "CalvinKlein",
      nome: "Calça de Sarja",
      preco: 160,
      imagem: "calcaSarja.png",
      feminino: false,
    },
    {
      id: "5",
      marca: "CalvinKlein",
      nome: "Camisa CK",
      preco: 250,
      imagem: "camisa.png",
      feminino: false,
    },
    {
      id: "6",
      marca: "CalvinKlein",
      nome: "Jaqueta CK",
      preco: 990,
      imagem: "jaqueta.png",
      feminino: false,
    },
    {
      id: "7",
      marca: "CalvinKlein",
      nome: "Mochila CK",
      preco: 890,
      imagem: "mochila.png",
      feminino: false,
    },
    {
      id: "8",
      marca: "CalvinKlein",
      nome: "Paletó CK",
      preco: 1490,
      imagem: "paleto.png",
      feminino: false,
    },

    {
      id: "9",
      marca: "CalvinKlein",
      nome: "Camiseta Feminina",
      preco: 1490,
      imagem: "camisaFeminina.png",
      feminino: true
    },
  ];

  export function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao));
  }

  export function lerLocalStorage(chave, informacao){
    return JSON.parse(localStorage.getItem(chave));
  }

  function desenharProdutoNoCarrinho(idProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho =
      document.getElementById("produtos-carrinho");
  
    const elementoArticle = document.createElement("article");
    const articleClasses = [
      "flex",
      "p-1",
      "relative",
      "border-slate-950",
      "border",
      "border-black",
    ];
  
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
  
    const cartaoProdutoCarrinho = `<button id="remover-item-${produto.id}"  class="absolute  top-0 right-2">
        <i class="fa-solid fa-trash text-slate-500 hover:text-slate-800"></i>
      </button>
      <img
      src="./assets/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg" />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-small">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <button id='decrementar-produto-${produto.id}' class=''>-</button>
        <p id='quantidade-${produto.id}' class='ml-2'>${idsProdutoCarrinhoComQuantidade[produto.id]
      }
        </p>
        <button id='incrementar-produto-${produto.id}'  class='ml-2'>+</button>
      </div>`;
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
  
    document
      .getElementById(`decrementar-produto-${produto.id}`)
      .addEventListener("click", () => decrementarQuantidadeProduto(idProduto));
    document
      .getElementById(`incrementar-produto-${produto.id}`)
      .addEventListener("click", () => incrementarQuantidadeProduto(idProduto));
  
      document
      .getElementById(`remover-item-${produto.id}`)
      .addEventListener("click", () => removerDoCarrinho(idProduto));
  }