* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #0a0a0a;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
}

/* HEADER */

.header {
    height: 70px;
    padding: 0 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #222;
    position: sticky;
    top: 0;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    z-index: 100;
}

.logo {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 2px;
}

.menu-button {
    background: none;
    border: none;
    color: white;
    font-size: 25px;
    cursor: pointer;
}

/* MENU */

.menu {
    display: none;
    position: fixed;
    top: 70px;
    right: 0;
    width: 220px;
    background: #111;
    border-left: 1px solid #222;
    border-bottom: 1px solid #222;
    z-index: 99;
}

.menu.active {
    display: block;
}

.menu a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 18px 22px;
    border-bottom: 1px solid #222;
}

.menu a:hover {
    background: #1a1a1a;
}

/* HERO */

.hero {
    min-height: 620px;
    padding: 100px 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:
        radial-gradient(circle at 80% 30%, #252525 0%, transparent 35%),
        #0a0a0a;
}

.hero-small {
    color: #999;
    font-size: 12px;
    letter-spacing: 3px;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(55px, 13vw, 130px);
    line-height: 0.9;
    letter-spacing: -5px;
    font-weight: 900;
}

.hero-description {
    color: #aaa;
    margin-top: 30px;
    font-size: 16px;
}

.hero-button {
    display: inline-block;
    width: fit-content;
    margin-top: 35px;
    padding: 16px 25px;
    background: white;
    color: black;
    text-decoration: none;
    font-size: 13px;
    font-weight: bold;
    transition: 0.2s;
}

.hero-button:hover {
    transform: translateY(-3px);
}

/* SEÇÕES */

.categories,
.products {
    padding: 70px 6%;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 30px;
}

.section-title span {
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: bold;
}

.section-title::after {
    content: "";
    height: 1px;
    background: #333;
    flex: 1;
}

/* CATEGORIAS */

.category-list {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 10px;
}

.category-list::-webkit-scrollbar {
    display: none;
}

.category-list button {
    flex-shrink: 0;
    padding: 14px 18px;
    background: #151515;
    color: white;
    border: 1px solid #292929;
    cursor: pointer;
    font-size: 13px;
}

.category-list button:hover {
    background: white;
    color: black;
}

/* PRODUTOS */

.product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.product-card {
    background: #111;
    border: 1px solid #202020;
    overflow: hidden;
    transition: 0.25s;
}

.product-card:hover {
    transform: translateY(-4px);
    border-color: #444;
}

.product-image {
    width: 100%;
    aspect-ratio: 1 / 1.15;
    object-fit: cover;
    display: block;
}

.product-info {
    padding: 15px;
}

.product-name {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}

.product-store {
    color: #777;
    font-size: 11px;
    margin-bottom: 12px;
}

.product-price {
    font-size: 17px;
    font-weight: bold;
}

.product-button {
    display: block;
    margin-top: 14px;
    padding: 12px;
    text-align: center;
    background: white;
    color: black;
    text-decoration: none;
    font-size: 11px;
    font-weight: bold;
}

/* FOOTER */

.footer {
    margin-top: 50px;
    padding: 50px 6%;
    border-top: 1px solid #222;
    color: #777;
}

.footer .logo {
    color: white;
    margin-bottom: 15px;
}

.footer p {
    font-size: 13px;
    margin-bottom: 20px;
}

.footer small {
    font-size: 11px;
}

/* DESKTOP */

@media (min-width: 768px) {

    .header {
        padding: 0 8%;
    }

    .menu-button {
        display: none;
    }

    .menu {
        position: static;
        display: flex;
        width: auto;
        border: none;
        background: transparent;
        padding: 0 8%;
        gap: 30px;
        height: 50px;
        align-items: center;
    }

    .menu a {
        border: none;
        padding: 0;
        color: #aaa;
        font-size: 13px;
    }

    .menu a:hover {
        color: white;
        background: transparent;
    }

    .hero {
        padding-left: 8%;
        padding-right: 8%;
    }

    .product-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    .categories,
    .products {
        padding-left: 8%;
        padding-right: 8%;
    }
      }
