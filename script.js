const produtos = [

    {
        nome: "Nike Tech Fleece",
        fonte: "Shopee",
        preco: "R$ 149,90",
        categoria: "calcas",
        imagem: "https://placehold.co/600x750/111111/ffffff?text=NIKE+TECH",
        link: "#"
    },

    {
        nome: "Camiseta Oversized",
        fonte: "SHEIN",
        preco: "R$ 59,90",
        categoria: "camisetas",
        imagem: "https://placehold.co/600x750/181818/ffffff?text=OVERSIZED",
        link: "#"
    },

    {
        nome: "Calça Cargo Streetwear",
        fonte: "Shopee",
        preco: "R$ 89,90",
        categoria: "calcas",
        imagem: "https://placehold.co/600x750/111111/ffffff?text=CARGO",
        link: "#"
    },

    {
        nome: "Tênis Street",
        fonte: "SHEIN",
        preco: "R$ 129,90",
        categoria: "tenis",
        imagem: "https://placehold.co/600x750/181818/ffffff?text=SNEAKER",
        link: "#"
    }

];


const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const noResults =
    document.getElementById("noResults");


let categoriaAtual = "todos";


/* =========================
   MOSTRAR PRODUTOS
========================= */

function mostrarProdutos(lista) {

    productGrid.innerHTML = "";

    if (lista.length === 0) {

        noResults.style.display = "block";

        return;

    }

    noResults.style.display = "none";


    lista.forEach((produto, index) => {

        const card =
            document.createElement("article");

        card.className = "product-card";

        card.style.animationDelay =
            `${index * 0.07}s`;


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

                    FONTE:
                    <span>
                        ${produto.fonte}
                    </span>

                </p>


                <strong class="product-price">

                    ${produto.preco}

                </strong>


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


/* =========================
   ANIMAÇÃO DOS CARDS
========================= */

function observarCards() {

    const cards =
        document.querySelectorAll(".product-card");


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.1
            }

        );


    cards.forEach(card =>
        observer.observe(card)
    );

}


/* =========================
   FILTRAR
========================= */

function filtrarProdutos() {

    const busca =
        searchInput.value
            .toLowerCase()
            .trim();


    const resultado =
        produtos.filter(produto => {

            const correspondeCategoria =
                categoriaAtual === "todos" ||
                produto.categoria === categoriaAtual;


            const correspondeBusca =
                produto.nome
                    .toLowerCase()
                    .includes(busca) ||

                produto.fonte
                    .toLowerCase()
                    .includes(busca);


            return (
                correspondeCategoria &&
                correspondeBusca
            );

        });


    mostrarProdutos(resultado);

}


/* =========================
   PESQUISA
========================= */

searchInput.addEventListener(
    "input",
    filtrarProdutos
);


/* =========================
   CATEGORIAS
========================= */

const categoryButtons =
    document.querySelectorAll(
        ".category-button"
    );


categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categoryButtons.forEach(btn => {

                btn.classList.remove(
                    "selected"
                );

            });


            button.classList.add(
                "selected"
            );


            categoriaAtual =
                button.dataset.category;


            filtrarProdutos();

        }
    );

});


/* =========================
   MENU
========================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const menu =
    document.getElementById("menu");


menuButton.addEventListener(
    "click",
    () => {

        menu.classList.toggle(
            "active"
        );

    }
);


/* =========================
   FECHAR MENU
========================= */

document
    .querySelectorAll(".menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "active"
                );

            }
        );

    });


/* =========================
   INICIAR
========================= */

mostrarProdutos(produtos);
