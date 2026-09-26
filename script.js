const produtos = [
    {
        nome: "Nike Tech Fleece",
        loja: "Shopee",
        preco: "R$ 149,90",
        imagem: "https://placehold.co/600x700/111111/ffffff?text=NIKE+TECH",
        link: "#"
    },
    {
        nome: "Camiseta Oversized",
        loja: "Shopee",
        preco: "R$ 59,90",
        imagem: "https://placehold.co/600x700/181818/ffffff?text=OVERSIZED",
        link: "#"
    },
    {
        nome: "Calça Cargo Streetwear",
        loja: "Shopee",
        preco: "R$ 89,90",
        imagem: "https://placehold.co/600x700/111111/ffffff?text=CARGO",
        link: "#"
    },
    {
        nome: "Tênis Street",
        loja: "Shopee",
        preco: "R$ 129,90",
        imagem: "https://placehold.co/600x700/181818/ffffff?text=SNEAKER",
        link: "#"
    }
];


const productGrid = document.getElementById("productGrid");


function mostrarProdutos(lista) {

    productGrid.innerHTML = "";

    lista.forEach(produto => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <img
                class="product-image"
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="product-info">

                <div class="product-name">
                    ${produto.nome}
                </div>

                <div class="product-store">
                    ${produto.loja}
                </div>

                <div class="product-price">
                    ${produto.preco}
                </div>

                <a
                    class="product-button"
                    href="${produto.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VER PRODUTO →
                </a>

            </div>
        `;

        productGrid.appendChild(card);
    });
}


mostrarProdutos(produtos);


/* MENU MOBILE */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});


/* FECHAR MENU AO CLICAR */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});
