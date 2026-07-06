// =========================
// YouCanCraftHub - script.js
// =========================

console.log("YouCanCraftHub loaded");

document.addEventListener("DOMContentLoaded", function () {

    // Update cart count if function exists
    if (typeof updateCartCount === "function") {
        updateCartCount();
    }

    // Attach Add to Cart button events
    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach((button, index) => {
        button.addEventListener("click", function () {

            // Product IDs start from 1
            if (typeof addToCart === "function") {
                addToCart(index + 1);
            } else {
                alert("addToCart() function not found!");
            }

        });
    });

});
