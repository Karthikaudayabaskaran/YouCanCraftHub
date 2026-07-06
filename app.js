// ==============================
// CART FUNCTIONS
// ==============================

function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Add Product to Cart
function addToCart(id) {

    if (typeof products === "undefined") {
        alert("products.js is not loaded!");
        return;
    }

    const cart = getCart();

    const product = products.find(p => p.id === id);

    if (!product) {
        alert("Product not found!");
        return;
    }

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart(cart);

    alert(product.name + " added to cart!");
}

// Update Cart Count
function updateCartCount() {

    const cart = getCart();

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = count;
    }
}

// Remove Item
function removeFromCart(id) {

    let cart = getCart();

    cart = cart.filter(item => item.id !== id);

    saveCart(cart);

    loadCart();
}

// Increase Quantity
function increaseQuantity(id) {

    const cart = getCart();

    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity++;
    }

    saveCart(cart);

    loadCart();
}

// Decrease Quantity
function decreaseQuantity(id) {

    let cart = getCart();

    const item = cart.find(p => p.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    saveCart(cart);

    loadCart();
}

// Load Cart Page
function loadCart() {

    const container = document.getElementById("cart-items");

    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {

        container.innerHTML = "<h3>Your cart is empty.</h3>";

        return;
    }

    let html = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        html += `
        <div class="cart-item">

            <img src="${item.image}" width="80">

            <h3>${item.name}</h3>

            <p>₹${item.price}</p>

            <button onclick="decreaseQuantity(${item.id})">-</button>

            ${item.quantity}

            <button onclick="increaseQuantity(${item.id})">+</button>

            <button onclick="removeFromCart(${item.id})">Remove</button>

        </div>
        `;
    });

    html += `<h2>Total : ₹${total}</h2>`;

    container.innerHTML = html;
}

// Run on every page
document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

    loadCart();

});
