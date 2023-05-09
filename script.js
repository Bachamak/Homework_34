const products = [
    { name: "Футболця", category: "Топ", price: 190 },
    { name: "Піджак", category: "Топ", price: 780 },
    { name: "Сорочка", category: "Топ", price: 400 },
    { name: "Джинси", category: "Низ", price: 600 },
    { name: "Шорти", category: "Низ", price: 200 },
    { name: "Штани", category: "Низ", price: 430 },
    { name: "Окуляри", category: "Аксесуари", price: 1940 },
    { name: "Годинники", category: "Аксесуари", price: 4340 },
    { name: "Кільце", category: "Аксесуари", price: 3900 },
];

function showProducts(category) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => {
        if (product.category === category) {
            const li = document.createElement("li");
            li.textContent = product.name;
            li.addEventListener("click", () => {
                showProductInfo(product);
            });
            productList.appendChild(li);
        }
    });
    productList.style.color = "DarkBlue";
}

function showProductInfo(product) {
    const productInfo = document.getElementById("product-info");
    productInfo.textContent = `Назва: ${product.name}. Ціна: ${product.price} грн.`;
    const buyBtn = document.getElementById("BtnBuy");
    buyBtn.addEventListener("click", () => {
        addToCart(product);
        productInfo.textContent = "";
    });
}

function addToCart(product) {
    const cartList = document.getElementById("cartList");
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${product.price} грн.`;
    cartList.appendChild(li);
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function loadCart() {
    const cartList = document.getElementById("cartList");
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - ${product.price} грн.`;
        cartList.appendChild(li);
    });
}

function clearCart() {
    localStorage.removeItem("cart");
    const cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
}

loadCart();