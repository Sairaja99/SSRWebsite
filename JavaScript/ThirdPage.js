/*

// Cart Open Close

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Making Add to cart

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

// Making Function
function ready(){
    // Remove item from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    // Quantity change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    // Add to cart
    var addCartButtons = document.getElementsByClassName('add-cart');
    for(var i = 0; i < addCartButtons.length; i++){
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }
    loadCartItems();
}

// Remove cart Item
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
    updateCartQuantity();
    saveCartItems();
}

// Quantity change
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
    saveCartItems();
}

// Add cart Function
function addCartClicked(event){
    var button = event.target;
    var box = button.parentElement;
    var title = box.getElementsByClassName("product-title")[0].innerText;
    var price = box.getElementsByClassName("price")[0].innerText;
    var productImg = box.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateCartTotal();
    updateCartQuantity();
    saveCartItems();
    updateCartIcon();
}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for(var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert("This item is already added to cart");
            return;
        }
    }
    var cartBoxContent = `
    <img src="${productImg}" alt="oops!!" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- remove Item -->
    <i class='bx bx-trash cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click', removeCartItem);
    cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change', quantityChanged);
    saveCartItems();
    updateCartIcon();
}

function updateCartTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100; // rounding to two decimal places
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;

    // Save Total to Local Storage
    localStorage.setItem('cartTotal', total);
}

// Update the cart quantity badge
function updateCartQuantity(){
    var cartIcon = document.querySelector('#cart-icon');
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var totalQuantity = 0;
    for (var i = 0; i < cartBoxes.length; i++){
        var quantityElement = cartBoxes[i].getElementsByClassName("cart-quantity")[0];
        totalQuantity += parseInt(quantityElement.value);
    }
    cartIcon.setAttribute('data-quantity', totalQuantity);
}


// Keep Items in cart when page refresh with localStorage 

function saveCartItems(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var cartItems = [];

    for(var i = 0 ; i < cartBoxes.length ; i++){
        var cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName('cart-product-title')[0];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var productImg = cartBox.getElementsByClassName('cart-img')[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg,
        };
        cartItems.push(item);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


// Loads In cart

function loadCartItems(){
    var cartItems = localStorage.getItem('cartItems');
    if(cartItems){
        cartItems = JSON.parse(cartItems);

        for(var i = 0 ; i < cartItems.length ; i++){
            var items = cartItems[i];
            addProductToCart(items.title, items.price, items.productImg);

            var cartBoxes = document.getElementsByClassName('cart-box');
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            quantityElement.value = items.quantity;
        }
    }
    var carTotal = localStorage.getItem('cartTotal');
    if(carTotal){
        document.getElementsByClassName('total-price')[0].innerText = "$" + carTotal;
    }
}



// Quantity In Cart Icon

function updateCartIcon(){
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;

    for(var i = 0 ; i < cartBoxes.length ; i++){
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        quantity += parseInt(quantityElement.value);
    }

    var cartIcon = document.querySelector('#cart-icon');
    cartIcon.setAttribute('data-quantity', quantity);
}
*/

// Cart Open Close

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// Open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

// Close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Toggle Mode
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
})

// Load Mode Preference
window.onload = () => {
    loadModePreference();
    loadCartItems();
};

// Save Mode Preference
function saveModePreference() {
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('modePreference', currentMode);
}

// Load Mode Preference
function loadModePreference() {
    const modePreference = localStorage.getItem('modePreference');
    if (modePreference === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}

// Making Add to cart
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// Making Function
function ready() {
    // Remove item from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    // Quantity change
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    // Add to cart
    var addCartButtons = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCartButtons.length; i++) {
        var button = addCartButtons[i];
        button.addEventListener('click', addCartClicked);
    }
    loadCartItems();
}

// Remove cart Item
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateCartTotal();
    updateCartQuantity();
    saveCartItems();
}

// Quantity change
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
    saveCartItems();
}

// Add cart Function
function addCartClicked(event) {
    var button = event.target;
    var box = button.parentElement;
    var title = box.getElementsByClassName("product-title")[0].innerText;
    var price = box.getElementsByClassName("price")[0].innerText;
    var productImg = box.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateCartTotal();
    updateCartQuantity();
    saveCartItems();
    updateCartIcon();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("This item is already added to cart");
            return;
        }
    }
    var cartBoxContent = `
    <img src="${productImg}" alt="oops!!" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <!-- remove Item -->
    <i class='bx bx-trash cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click', removeCartItem);
    cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change', quantityChanged);
    saveCartItems();
    updateCartIcon();
}

function updateCartTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100; // rounding to two decimal places
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;

    // Save Total to Local Storage
    localStorage.setItem('cartTotal', total);
}

// Update the cart quantity badge
function updateCartQuantity() {
    var cartIcon = document.querySelector('#cart-icon');
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var totalQuantity = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var quantityElement = cartBoxes[i].getElementsByClassName("cart-quantity")[0];
        totalQuantity += parseInt(quantityElement.value);
    }
    cartIcon.setAttribute('data-quantity', totalQuantity);
}

// Keep Items in cart when page refresh with localStorage 
function saveCartItems() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var cartItems = [];

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var titleElement = cartBox.getElementsByClassName('cart-product-title')[0];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var productImg = cartBox.getElementsByClassName('cart-img')[0].src;

        var item = {
            title: titleElement.innerText,
            price: priceElement.innerText,
            quantity: quantityElement.value,
            productImg: productImg,
        };
        cartItems.push(item);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Loads In cart
function loadCartItems() {
    var cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
        cartItems = JSON.parse(cartItems);

        for (var i = 0; i < cartItems.length; i++) {
            var items = cartItems[i];
            addProductToCart(items.title, items.price, items.productImg);

            var cartBoxes = document.getElementsByClassName('cart-box');
            var cartBox = cartBoxes[cartBoxes.length - 1];
            var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
            quantityElement.value = items.quantity;
        }
    }
    var carTotal = localStorage.getItem('cartTotal');
    if (carTotal) {
        document.getElementsByClassName('total-price')[0].innerText = "$" + carTotal;
    }
}

// Quantity In Cart Icon
function updateCartIcon() {
    var cartBoxes = document.getElementsByClassName('cart-box');
    var quantity = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        quantity += parseInt(quantityElement.value);
    }

    var cartIcon = document.querySelector('#cart-icon');
    cartIcon.setAttribute('data-quantity', quantity);
}
