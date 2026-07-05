// ==========================================
// YouCanCraftHub Product Database
// ==========================================

const products = [

{
id:1,
name:"Beginner Bracelet Kit",
price:99,
oldPrice:149,
category:"DIY Kits",
badge:"Best Seller",
rating:5,
image:"images/product1.jpg",
description:"Perfect starter kit for beginners."
},

{
id:2,
name:"Pastel Acrylic Beads",
price:69,
oldPrice:89,
category:"Beads",
badge:"New",
rating:5,
image:"images/product2.jpg",
description:"100 premium pastel beads."
},

{
id:3,
name:"Gold Findings Pack",
price:49,
oldPrice:59,
category:"Findings",
badge:"Popular",
rating:5,
image:"images/product3.jpg",
description:"Premium quality gold findings."
},

{
id:4,
name:"8mm Jelly Beads",
price:89,
oldPrice:99,
category:"Beads",
badge:"Hot",
rating:5,
image:"images/product4.jpg",
description:"Soft transparent jelly beads."
},

{
id:5,
name:"Cute Charms Mix",
price:79,
oldPrice:99,
category:"Charms",
badge:"New",
rating:5,
image:"images/product5.jpg",
description:"Random cute charms."
},

{
id:6,
name:"Elastic Thread 0.8mm",
price:39,
oldPrice:49,
category:"Elastic Thread",
badge:"",
rating:5,
image:"images/product6.jpg",
description:"Strong elastic thread."
}

];

// ===============================
// Load Products
// ===============================

const container=document.querySelector(".product-grid");

if(container){

container.innerHTML="";

products.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<span class="badge">
${product.badge}
</span>

<img src="${product.image}">

<h3>${product.name}</h3>

<div class="rating">

${"⭐".repeat(product.rating)}

</div>

<h2>₹${product.price}</h2>

<p>

<del>₹${product.oldPrice}</del>

</p>

<p>${product.description}</p>

<div class="buttons">

<button class="cart-btn"
onclick="addToCart(${product.id})">

Add to Cart

</button>

<button class="buy-btn"

onclick="buyNow(${product.id})">

WhatsApp

</button>

</div>

</div>

`;

});

}

// ===============================
// WhatsApp Order
// ===============================

function buyNow(id){

const p=products.find(x=>x.id===id);

const message=

`Hi YouCanCraftHub 👋

I want to order:

📦 ${p.name}

💰 Price : ₹${p.price}

Please share payment details.`;

window.open(

`https://wa.me/919999999999?text=${encodeURIComponent(message)}`,

"_blank"

);

}

// ===============================
// Cart
// ===============================

let cart=[];

function addToCart(id){

cart.push(id);

alert("Added to Cart 🛒");

console.log(cart);

}

// ===============================
// Search
// ===============================

function searchProducts(){

const text=document.querySelector(".search-box input").value.toLowerCase();

const cards=document.querySelectorAll(".product-card");

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

card.style.display=

title.includes(text)

?

"block"

:

"none";

});

}
