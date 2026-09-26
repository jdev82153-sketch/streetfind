const produtos = [
    {
        nome: "Nike Tech Fleece",
        fonte: "Shopee",
        preco: "R$ 149,90",
        imagem: "https://placehold.co/600x750/111111/ffffff?text=NIKE+TECH",
        link: "#"
    },
    {
        nome: "Camiseta Oversized",
        fonte: "SHEIN",
        preco: "R$ 59,90",
        imagem: "https://placehold.co/600x750/181818/ffffff?text=OVERSIZED",
        link: "#"
    },
    {
        nome: "Calça Cargo Streetwear",
        fonte: "Shopee",
        preco: "R$ 89,90",
        imagem: "https://placehold.co/600x750/111111/ffffff?text=CARGO",
        link: "#"
    },
    {
        nome: "Tênis Street",
        fonte: "SHEIN",
        preco: "R$ 129,90",
        imagem: "https://placehold.co/600x750/181818/ffffff?text=SNEAKER",
        link: "#"
    }
];

const productGrid = document.getElementById("productGrid");

function mostrarProdutos(lista) {
    productGrid.innerHTML = "";

    lista.forEach((produto, index) => {

        const card = document.createElement("article");

        card.className = "product-card";

        card.style.animationDelay = `${index * 0.08}s`;

        card.innerHTML = `
            <div class="product-image-container">

                <img
                    class="product-image"
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    loading="lazy"
                >

            </div>

            <div class="product-info">

                <h3 class="product-name">
                    ${produto.nome}
                </h3>

                <p class="product-source">
                    FONTE: <span>${produto.fonte}</span>
                </p>

                <div class="product-bottom">

                    <strong class="product-price">
                        ${produto.preco}
                    </strong>

                </div>

                <a
                    class="product-button"
                    href="${produto.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VER PRODUTO
                    <span>↗</span>
                </a>

            </div>
        `;

        productGrid.appendChild(card);
    });

    observarCards();
}

function observarCards() {

    const cards = document.querySelectorAll(".product-card");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    cards.forEach(card => observer.observe(card));
}


/* MENU */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});


/* FECHAR MENU */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* CATEGORIAS */

const categoryButtons =
    document.querySelectorAll(".category-list button");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

    });

});


/* INICIAR */

mostrarProdutos(produtos);
