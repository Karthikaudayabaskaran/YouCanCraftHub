
// ===============================
// ADD TO CART
// ===============================

function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(p => p.id === id);

    if (!product) {
        alert("Product not found!");
        return;
    }

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Product added to cart!");
}


// ===============================
// CART COUNT
// ===============================

function updateCartCount() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item => {
        total += item.quantity;
    });

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
        cartCount.innerText = total;
    }
}

window.onload = function () {
    updateCartCount();
};
