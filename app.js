<script src="js/products.js"></script>
<script src="js/app.js"></script>
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(p => p.id === id);

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

    alert("Product added to cart!");
}


// ===============================
// CART COUNT
// ===============================

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    cart.forEach(item=>{
        total += item.quantity;
    });

    const cartCount = document.getElementById("cartCount");

    if(cartCount){
        cartCount.innerText = total;
    }

}



window.onload = updateCartCount;

