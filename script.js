
const products = [
    { name: "Netflix", price: 1.5 },
    { name: "Disney+", price: 1.8 },
    { name: "Crunchyroll", price: 0.6 },
    { name: "Paramount+", price: 1 },
    { name: "Prime Video", price: 2.5 },
    { name: "NordVPN", price: 3.5 },
    { name: "Capcut Pro", price: 2.5 },
    { name: "ChatGPT+", price: 4.5 },
    { name: "FiveM Account", price: 1 },
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

let cart = [];
function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(p => {
        const li = document.createElement("li");
        li.textContent = `${p.name} - ${p.price.toFixed(2)}€`;
        cartItems.appendChild(li);
        total += p.price;
    });
    totalPrice.textContent = total.toFixed(2) + "€";
}

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<h3>${p.name}</h3><p>${p.price.toFixed(2)}€</p><button>Ajouter</button>`;
    card.querySelector("button").addEventListener("click", () => addToCart(p));
    productList.appendChild(card);
});
