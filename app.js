const PRODUCTS = window.PERFUMES || [];
const CART_KEY = "notesdecoeur-cart-v2";
const FAVORITES_KEY = "notesdecoeur-favorites-v2";

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || "[]");
const saveCart = (cart) => { localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCounts(); };
const getFavorites = () => JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
const saveFavorites = (items) => { localStorage.setItem(FAVORITES_KEY, JSON.stringify(items)); updateCounts(); };
const money = (number) => `$${Number(number).toFixed(2)}`;

function sharedLayout() {
  const page = document.body.dataset.page || "shop";
  document.getElementById("site-header").innerHTML = `
    <div class="announcement">COMPLIMENTARY SHIPPING ON ORDERS $75+ <span>·</span> AUTHENTIC FRAGRANCE, THOUGHTFULLY DECANTED</div>
    <header class="header">
      <button class="menu-button" aria-label="Toggle menu">☰</button>
      <nav>
        <a class="${page === "shop" ? "active" : ""}" href="index.html">Shop</a>
        <a class="${page === "about" ? "active" : ""}" href="about.html">Our story</a>
        <a class="${page === "inquiry" ? "active" : ""}" href="inquiry.html">Inquiry</a>
      </nav>
      <a class="logo" href="index.html"><img src="assets/logo.png" alt="Notesdecoeur"><span><strong>NOTESDECOEUR</strong><small>CURATED FRAGRANCE</small></span></a>
      <div class="header-actions">
        <a class="${page === "favorites" ? "active" : ""}" href="favorites.html" aria-label="Favorites">♡ <b id="favorite-count">0</b></a>
        <a class="${page === "cart" ? "active" : ""}" href="cart.html">Bag <b id="cart-count">0</b></a>
      </div>
    </header>`;

  document.getElementById("site-footer").innerHTML = `
    <section class="newsletter"><p class="eyebrow">NOTES FROM NOTESDECOEUR</p><h2>A quieter kind of inbox.</h2><p>New arrivals, fragrance stories, and thoughtful recommendations—sent occasionally.</p><form class="newsletter-form"><input type="email" required placeholder="Your email address"><button>JOIN US →</button></form></section>
    <footer><a class="logo light" href="index.html"><img src="assets/logo.png" alt=""><span><strong>NOTESDECOEUR</strong><small>CURATED FRAGRANCE</small></span></a><p>Explore slowly. Wear beautifully.</p><div class="footer-links"><a href="index.html">SHOP</a><a href="about.html">ABOUT</a><a href="inquiry.html">INQUIRY</a><a href="favorites.html">FAVORITES</a></div><small>© 2026 NOTESDECOEUR. ALL RIGHTS RESERVED.</small></footer>`;

  document.querySelector(".menu-button").addEventListener("click", () => document.querySelector("nav").classList.toggle("open"));
  document.querySelector(".newsletter-form").addEventListener("submit", (event) => { event.preventDefault(); showToast("Welcome to Notesdecoeur."); event.target.reset(); });
  updateCounts();
}

function updateCounts() {
  const cartCount = getCart().reduce((total, item) => total + item.quantity, 0);
  const cartEl = document.getElementById("cart-count");
  const favoriteEl = document.getElementById("favorite-count");
  if (cartEl) cartEl.textContent = cartCount;
  if (favoriteEl) favoriteEl.textContent = getFavorites().length;
}

function productCard(product) {
  const saved = getFavorites().includes(product.id);
  return `
    <article class="product-card">
      <div class="product-image" data-product="${product.id}" tabindex="0" role="button" aria-label="View ${product.name}">
        ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
        <button class="favorite-button ${saved ? "saved" : ""}" data-favorite="${product.id}" aria-label="Save ${product.name}">${saved ? "♥" : "♡"}</button>
        <img src="${product.image}" alt="${product.brand} ${product.name}">
        <span class="view-label">VIEW FRAGRANCE →</span>
      </div>
      <p class="product-brand">${product.brand}</p>
      <h3>${product.name}</h3>
      <p class="product-summary">${product.shortDescription}</p>
      <div class="product-bottom"><span>From ${money(product.sizes[0].price)}</span><button data-product="${product.id}">CHOOSE SIZE +</button></div>
    </article>`;
}

function renderProducts(items, targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  if (!items.length) {
    target.innerHTML = `<div class="empty"><span>♡</span><h3>No fragrances here yet</h3><p>Save a scent you love and it will appear here.</p><a class="outline-button" href="index.html">Browse collection</a></div>`;
    return;
  }
  target.innerHTML = items.map(productCard).join("");
  target.querySelectorAll("[data-product]").forEach((element) => {
    element.addEventListener("click", (event) => { if (!event.target.closest("[data-favorite]")) openProduct(Number(element.dataset.product)); });
    element.addEventListener("keydown", (event) => { if (event.key === "Enter") openProduct(Number(element.dataset.product)); });
  });
  target.querySelectorAll("[data-favorite]").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation(); toggleFavorite(Number(button.dataset.favorite)); renderCurrentPage();
  }));
}

function openProduct(id) {
  const product = PRODUCTS.find((item) => item.id === id);
  if (!product) return;
  let selectedSize = product.sizes[1] || product.sizes[0];
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<section class="product-modal" role="dialog" aria-modal="true"><button class="modal-close" aria-label="Close">×</button><img class="modal-image" src="${product.image}" alt="${product.name}"><div class="modal-copy"><p class="product-brand">${product.brand}</p><h2>${product.name}</h2><p>${product.description}</p><div class="notes"><strong>NOTES</strong><span>${product.notes.join(" · ")}</span></div><p class="size-heading">CHOOSE YOUR SIZE</p><div class="size-options">${product.sizes.map((size, index) => `<button class="${size.name === selectedSize.name ? "active" : ""}" data-size="${index}"><strong>${size.name}</strong><span>${money(size.price)}</span></button>`).join("")}</div><button class="primary-button add-button">ADD TO CART — ${money(selectedSize.price)}</button><button class="text-button save-modal">${getFavorites().includes(id) ? "♥ SAVED TO FAVORITES" : "♡ SAVE TO FAVORITES"}</button></div></section>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.querySelector(".modal-close").addEventListener("click", close);
  modal.addEventListener("click", (event) => { if (event.target === modal) close(); });
  modal.querySelectorAll("[data-size]").forEach((button) => button.addEventListener("click", () => {
    selectedSize = product.sizes[Number(button.dataset.size)];
    modal.querySelectorAll("[data-size]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    modal.querySelector(".add-button").textContent = `ADD TO CART — ${money(selectedSize.price)}`;
  }));
  modal.querySelector(".add-button").addEventListener("click", () => { addToCart(product, selectedSize); close(); });
  modal.querySelector(".save-modal").addEventListener("click", () => { toggleFavorite(id); modal.querySelector(".save-modal").textContent = getFavorites().includes(id) ? "♥ SAVED TO FAVORITES" : "♡ SAVE TO FAVORITES"; });
}

function toggleFavorite(id) {
  const favorites = getFavorites();
  saveFavorites(favorites.includes(id) ? favorites.filter((item) => item !== id) : [...favorites, id]);
}

function addToCart(product, size) {
  const cart = getCart();
  const existing = cart.find((item) => item.productId === product.id && item.size === size.name);
  if (existing) existing.quantity += 1;
  else cart.push({ productId: product.id, size: size.name, price: size.price, quantity: 1 });
  saveCart(cart); showToast(`${product.name} added to your cart`);
}

function renderShop() {
  const query = (document.getElementById("search")?.value || "").toLowerCase();
  const family = document.querySelector("[data-family].active")?.dataset.family || "All";
  renderProducts(PRODUCTS.filter((product) => (family === "All" || product.family === family) && `${product.brand} ${product.name} ${product.notes.join(" ")}`.toLowerCase().includes(query)), "product-grid");
}

function renderCart() {
  const target = document.getElementById("cart-items");
  if (!target) return;
  const cart = getCart();
  if (!cart.length) {
    target.innerHTML = `<div class="empty"><span>♙</span><h3>Your cart is empty</h3><p>Discover your next signature scent.</p><a class="outline-button" href="index.html">Shop fragrances</a></div>`;
    document.getElementById("cart-summary").innerHTML = ""; return;
  }
  target.innerHTML = cart.map((item, index) => {
    const product = PRODUCTS.find((product) => product.id === item.productId);
    return `<article class="cart-item"><img src="${product.image}" alt=""><div><p class="product-brand">${product.brand}</p><h3>${product.name}</h3><p>${item.size}</p><div class="quantity"><button data-quantity="${index}" data-change="-1">−</button><span>${item.quantity}</span><button data-quantity="${index}" data-change="1">+</button></div></div><div><strong>${money(item.price * item.quantity)}</strong><button class="remove" data-remove="${index}">Remove</button></div></article>`;
  }).join("");
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  document.getElementById("cart-summary").innerHTML = `<div><span>Subtotal</span><strong>${money(subtotal)}</strong></div><p>Shipping and taxes calculated at checkout.</p><button class="primary-button checkout-button">SECURE CHECKOUT →</button><small>Checkout must be connected to Stripe or Shopify before launch.</small>`;
  target.querySelectorAll("[data-quantity]").forEach((button) => button.addEventListener("click", () => { const next = getCart(); const index = Number(button.dataset.quantity); next[index].quantity = Math.max(1, next[index].quantity + Number(button.dataset.change)); saveCart(next); renderCart(); }));
  target.querySelectorAll("[data-remove]").forEach((button) => button.addEventListener("click", () => { const next = getCart(); next.splice(Number(button.dataset.remove), 1); saveCart(next); renderCart(); }));
  document.querySelector(".checkout-button").addEventListener("click", () => showToast("Connect Stripe or Shopify to activate checkout."));
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div"); toast.className = "toast"; toast.textContent = `✓ ${message}`; document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function renderCurrentPage() {
  const page = document.body.dataset.page;
  if (page === "shop") renderShop();
  if (page === "favorites") renderProducts(PRODUCTS.filter((product) => getFavorites().includes(product.id)), "favorite-grid");
  if (page === "cart") renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  sharedLayout(); renderCurrentPage();
  document.getElementById("search")?.addEventListener("input", renderShop);
  document.querySelectorAll("[data-family]").forEach((button) => button.addEventListener("click", () => { document.querySelectorAll("[data-family]").forEach((item) => item.classList.remove("active")); button.classList.add("active"); renderShop(); }));
  document.getElementById("inquiry-form")?.addEventListener("submit", (event) => { event.preventDefault(); showToast("Thank you — your inquiry has been received."); event.target.reset(); });
});
