// --- Data ---
const products = [
  {id: 1, name:"XtremeX Smartphone", desc:"Flagship 128GB phone with OLED display", price:777, img:"C:/Users/N Poojitha/Documents/web development/1.jpg" , category:"smartphone"},
  {id: 2, name:"VoltX Laptop Pro", desc:"High-performance 16GB RAM laptop", price:1299, img:"C:/Users/N Poojitha/Documents/web development/2.jpg", category:"laptop"},
  {id: 3, name:"EchoSound Wireless Earbuds", desc:"Noise-cancelling true wireless earbuds", price:149, img:"C:/Users/N Poojitha/Documents/web development/3.jpg",  category:"audio"},
  {id: 4, name:"PowerMax Powerbank 20000mAh", desc:"Ultra-fast charging powerbank", price:49, img:"C:/Users/N Poojitha/Documents/web development/4.jpg", category:"accessory"},
  {id: 5, name:"VisionX 4K Monitor", desc:"27-inch UHD display with HDR", price:399, img:"C:/Users/N Poojitha/Documents/web development/5.jpg ", category:"other"},
  {id: 6, name:"TurboSpeed Gaming Mouse", desc:"RGB wired mouse with programmable buttons", price:59, img:"C:/Users/N Poojitha/Documents/web development/6.jpg", category:"gaming"},
  {id: 7, name:"Quantum VR Headset", desc:"Immersive virtual reality experience", price:349, img:"C:/Users/N Poojitha/Documents/web development/7.jpg", category:"gaming"},
  {id: 8, name:"SmartHome Hub", desc:"Control all your smart devices", price:129, img:"C:/Users/N Poojitha/Documents/web development/8.jpg", category:"smart"},
  {id: 9, name:"Glide Pro Mechanical Keyboard", desc:"RGB backlit mechanical keyboard", price:109, img:"C:/Users/N Poojitha/Documents/web development/9.jpg", category:"gaming"},
  {id: 10, name:"StreamX Webcam HD", desc:"1080p HD streaming webcam", price:89, img:"C:/Users/N Poojitha/Documents/web development/10.jpg", category:"other"},
  {id: 11, name:"AirBreeze Smart Fan", desc:"WiFi-enabled cooling fan", price:79, img:"C:/Users/N Poojitha/Documents/web development/11.jpg", category:"smart"},
  {id: 12, name:"SolarCharge Bluetooth Speaker", desc:"Portable solar-powered speaker", price:99, img:"C:/Users/N Poojitha/Documents/web development/12.jpg", category:"audio"},
  {id: 13, name:"PixelPro DSLR Camera", desc:"24MP professional DSLR camera", price:899, img:"C:/Users/N Poojitha/Documents/web development/13.jpg", category:"other"},
  {id: 14, name:"Nexus Tablet 10″", desc:"10-inch tablet with stylus support", price:349, img:"C:/Users/N Poojitha/Documents/web development/14.jpg", category:"other"},
  {id: 15, name:"RoboVac Smart Cleaner", desc:"Automatic robotic vacuum cleaner", price:299, img:"C:/Users/N Poojitha/Documents/web development/15.jpg", category:"smart"},
  {id: 16, name:"PulseFit Fitness Tracker", desc:"Heart-rate monitor with GPS", price:59, img:"C:/Users/N Poojitha/Documents/web development/16.jpg", category:"accessory"},
  {id: 17, name:"LuxSound Home Theater", desc:"5.1 surround sound system", price:499, img:"C:/Users/N Poojitha/Documents/web development/17.jpg", category:"audio"},
  {id: 18, name:"EcoLight Smart Bulbs (4 pack)", desc:"Energy-saving smart LED bulbs", price:39, img:"C:/Users/N Poojitha/Documents/web development/18.jpg", category:"smart"},
  {id: 19, name:"DroneX Pro", desc:"4K camera drone with GPS", price:799, img:"C:/Users/N Poojitha/Documents/web development/19.jpg", category:"gaming"},
  {id: 20, name:"UltraHD Projector", desc:"1080p home theater projector", price:599, img:"C:/Users/N Poojitha/Documents/web development/20.jpg", category:"other"},
  {id: 21, name:"ZenBook Wireless Charger", desc:"Fast Qi wireless charging pad", price:29, img:"C:/Users/N Poojitha/Documents/web development/21.jpg", category:"accessory"},
  {id: 22, name:"HyperDrive External SSD 1TB", desc:"Portable fast external storage", price:179, img:"C:/Users/N Poojitha/Documents/web development/22.jpg", category:"accessory"},
  {id: 23, name:"SoundBlast Bluetooth Headphones", desc:"Over-ear noise-cancelling headphones", price:199, img:"C:/Users/N Poojitha/Documents/web development/23.jpg", category:"audio"},
  {id: 24, name:"GamerPro Steering Wheel", desc:"Force feedback racing wheel", price:229, img:"C:/Users/N Poojitha/Documents/web development/24.jpg", category:"gaming"},
  {id: 25, name:"SmartWatch S3", desc:"Advanced smartwatch with health apps", price:249, img:"C:/Users/N Poojitha/Documents/web development/25.jpg", category:"smart"},
  {id: 26, name:"TurboCharge USB-C Hub", desc:"Multiport USB-C adapter", price:69, img:"C:/Users/N Poojitha/Documents/web development/26.jpg", category:"accessory"},
  {id: 27, name:"BrightView LED Desk Lamp", desc:"Adjustable color temperature lamp", price:49, img:"C:/Users/N Poojitha/Documents/web development/27.jpg", category:"other"},
  {id: 28, name:"GigaSpeed Ethernet Cable", desc:"Cat7 10Gbps network cable", price:15, img:"C:/Users/N Poojitha/Documents/web development/28.jpg", category:"accessory"},
  {id: 29, name:"PocketScan Portable Scanner", desc:"Wireless handheld scanner", price:129, img:"C:/Users/N Poojitha/Documents/web development/29.jpg", category:"other"},
  {id: 30, name:"MiniSmart Projector", desc:"Compact HD projector", price:159, img:"C:/Users/N Poojitha/Documents/web development/30.jpg", category:"other"},
  {id: 31, name:"AuraRGB Gaming Chair", desc:"Ergonomic chair with RGB lights", price:399, img:"C:/Users/N Poojitha/Documents/web development/31.jpg", category:"gaming"},
  {id: 32, name:"SafeGuard Security Camera", desc:"1080p home security camera", price:89, img:"C:/Users/N Poojitha/Documents/web development/32.jpg", category:"smart"},
  {id: 33, name:"X1 VR Gloves", desc:"Haptic feedback VR gloves", price:299, img:"C:/Users/N Poojitha/Documents/web development/33.jpg", category:"gaming"},
  {id: 34, name:"SnapShot Instant Printer", desc:"Mobile photo printer", price:99, img:"C:/Users/N Poojitha/Documents/web development/34.jpg", category:"accessory"},
  {id: 35, name:"SoundWave Bluetooth Receiver", desc:"Turn wired speakers wireless", price:39, img:"C:/Users/N Poojitha/Documents/web development/35.jpg", category:"audio"},
  {id: 36, name:"FlexiCharge Cable", desc:"Durable braided charging cable", price:19, img:"C:/Users/N Poojitha/Documents/web development/36.jpg", category:"accessory"},
  {id: 37, name:"NanoDrone Micro Drone", desc:"Tiny drone for beginners", price:49, img:"C:/Users/N Poojitha/Documents/web development/37.jpg", category:"gaming"},
  {id: 38, name:"MaxBoost Laptop Cooling Pad", desc:"Ergonomic cooling with RGB", price:59, img:"C:/Users/N Poojitha/Documents/web development/38.jpg", category:"accessory"},
  {id: 39, name:"ZoomPro Video Conference Kit", desc:"Microphone + webcam set", price:159, img:"C:/Users/N Poojitha/Documents/web development/39.jpg", category:"other"},
  {id: 40, name:"BoltSmart Home Security Kit", desc:"All-in-one security solution", price:299, img:"C:/Users/N Poojitha/Documents/web development/40.jpg", category:"smart"}
];

// --- State ---
let cart = JSON.parse(localStorage.getItem('electroCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('electroWishlist')) || [];
let currentPage = 'home';
let user = JSON.parse(localStorage.getItem('electroUser')) || null;

// --- Utilities ---
function saveCart() { localStorage.setItem('electroCart', JSON.stringify(cart)); updateCartCount(); }
function saveWishlist() { localStorage.setItem('electroWishlist', JSON.stringify(wishlist)); updateWishlistCount(); }
function updateCartCount() { document.getElementById('cartCount').textContent = cart.reduce((a, x) => a + x.qty, 0); }
function updateWishlistCount() { document.getElementById('wishlistCount').textContent = wishlist.length; }
function findProductById(id) { return products.find(p => p.id === id); }
function formatPrice(p) { return '$' + p.toFixed(2); }

// --- Render Home ---
function renderHome(searchText = '', selectedCategory = '') {
  currentPage = 'home';
  const main = document.getElementById('mainContent');
  const filtered = products.filter(p => {
    const textMatch = p.name.toLowerCase().includes(searchText.toLowerCase()) 
                    || p.desc.toLowerCase().includes(searchText.toLowerCase());
    const catMatch = !selectedCategory || p.category === selectedCategory;
    return textMatch && catMatch;
  });

  main.innerHTML = `
    <div class="search-bar" style="display:flex; gap:1rem; margin-bottom:2rem;">
      <select id="categoryFilter">
        <option value="">All Categories</option>
        <option value="smartphone"${selectedCategory=='smartphone'?' selected':''}>Smartphones</option>
        <option value="laptop"${selectedCategory=='laptop'?' selected':''}>Laptops</option>
        <option value="audio"${selectedCategory=='audio'?' selected':''}>Audio</option>
        <option value="smart"${selectedCategory=='smart'?' selected':''}>Smart Home</option>
        <option value="gaming"${selectedCategory=='gaming'?' selected':''}>Gaming</option>
        <option value="accessory"${selectedCategory=='accessory'?' selected':''}>Accessories</option>
        <option value="other"${selectedCategory=='other'?' selected':''}>Others</option>
      </select>
      <input type="text" id="searchInput" placeholder="Search products..." value="${searchText}" />
    </div>
    <div class="product-grid">
      ${filtered.map(p => `
        <div class="product-card" data-id="${p.id}">
          <img class="product-image" src="${p.img}" alt="${p.name}" />
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-price">${formatPrice(p.price)}</div>
          <div class="buttons">
            <button class="btn-cart">Add to Cart</button>
            <button class="btn-wishlist${wishlist.includes(p.id) ? ' active' : ''}" data-id="${p.id}">
              ${wishlist.includes(p.id) ? '❤' : '🤍'}
            </button>
          </div>
        </div>`).join('')}
    </div>
  `;

  // Attach listeners
  document.getElementById('searchInput').addEventListener('input', e =>
    renderHome(e.target.value, document.getElementById('categoryFilter').value)
  );
  document.getElementById('categoryFilter').addEventListener('change', e =>
    renderHome(document.getElementById('searchInput').value, e.target.value)
  );

  document.querySelectorAll('.btn-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.closest('.product-card').dataset.id);
      addToCart(id);
    });
  });

  document.querySelectorAll('.btn-wishlist').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      toggleWishlist(id);
    });
  });
}

// --- Cart ---
function addToCart(id) {
  const product = findProductById(id);
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({id, qty:1});
  saveCart();
  alert(`Added "${product.name}" to cart.`);
}

function renderCart() {
  currentPage = 'cart';
  const main = document.getElementById('mainContent');
  if (!cart.length) {
    main.innerHTML = `<h2>Your cart is empty 😔</h2><button onclick="renderHome()">Go Shopping</button>`;
    updateCartCount();
    return;
  }
  let total = 0;
  main.innerHTML = `
    <h2>Your Cart 🛒</h2>
    <ul class="cart-list">
      ${cart.map((item, i) => {
        const p = findProductById(item.id);
        total += p.price * item.qty;
        return `<li class="cart-item">
          <img src="${p.img}" alt="${p.name}" />
          <div class="cart-item-details">
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-price">${formatPrice(p.price)} × </div>
            <div class="cart-qty"><input type="number" min="1" value="${item.qty}" /></div>
          </div>
          <button class="cart-remove-btn">Remove</button>
        </li>`;
      }).join('')}
    </ul>
    <div class="cart-total">Total: ${formatPrice(total)}</div>
    <button class="btn-checkout" id="checkoutBtn">Proceed to Checkout</button>
    <button onclick="renderHome()" style="margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-weight: 900;
    font-size: 1.1rem;
    background: #0ff;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    color: #111;
    transition: background-color 0.3s ease #0cc;
  ">Continue Shopping</button>
    
  `;

  main.querySelectorAll('.cart-qty input').forEach((inp, i) => {
    inp.addEventListener('change', e => {
      let v = parseInt(e.target.value);
      if (isNaN(v) || v < 1) v = 1;
      cart[i].qty = v;
      saveCart();
      renderCart();
    });
  });

  main.querySelectorAll('.cart-remove-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      cart.splice(i, 1);
      saveCart();
      renderCart();
    });
  });

  document.getElementById('checkoutBtn').addEventListener('click', renderCheckout);
  updateCartCount();
}

// --- Checkout ---
function renderCheckout() {
  currentPage = 'checkout';
  const main = document.getElementById('mainContent');
  if (!cart.length) { renderCart(); return; }
  const total = cart.reduce((sum, item) => sum + findProductById(item.id).price * item.qty, 0);
  main.innerHTML = `
    <h2>Checkout</h2>
    <div>Total to Pay: <strong>${formatPrice(total)}</strong></div>
    <form class="checkout-form" id="checkoutForm" novalidate>
      <label>Full Name *</label><input type="text" id="name" required />
      <label>Email *</label><input type="email" id="email" required />
      <label>Address *</label><input type="text" id="address" required />
      <label>Card Number *</label><input type="text" id="card" required pattern="\\d{10}" maxlength="10" />
      <button type="submit">Place Order</button>
    </form>
    <button onclick="renderCart()" style="background-color: #4caf50;
  color: white; margin-top: 1rem;
  margin-top: 1rem;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  font-weight: 900;
  ">Back to Cart</button>
  `;

  document.getElementById('checkoutForm').addEventListener('submit', e => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      alert('Please fill out all fields correctly.');
      return;
    }
    alert('Order placed successfully! Thank you for shopping with ElectroNova.');
    cart = [];
    saveCart();
    renderHome();
  });
}

// --- Wishlist ---
function toggleWishlist(id) {
  if (wishlist.includes(id)) wishlist = wishlist.filter(x => x !== id);
  else wishlist.push(id);
  saveWishlist();
  if (currentPage === 'home') renderHome(document.getElementById('searchInput').value, document.getElementById('categoryFilter').value);
  else renderWishlist();
}

function renderWishlist() {
  currentPage = 'wishlist';
  const main = document.getElementById('mainContent');
  if (!wishlist.length) {
    main.innerHTML = `<h2>Your wishlist is empty 💔</h2><button onclick="renderHome()">Go Shopping</button>`;
    return;
  }

  const items = wishlist.map(findProductById).filter(Boolean);
  main.innerHTML = `
    <h2>Your Wishlist 💖</h2>
    <div class="product-grid">
      ${items.map(p => `
        <div class="product-card" data-id="${p.id}">
          <img class="product-image" src="${p.img}" alt="${p.name}" />
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-price">${formatPrice(p.price)}</div>
          <div class="buttons">
            <button class="btn-cart">Add to Cart</button>
            <button class="btn-wishlist active" data-id="${p.id}">❤ Remove</button>
          </div>
        </div>`).join('')}
    </div>
  `;

  document.querySelectorAll('.btn-cart').forEach((btn, i) => {
    btn.addEventListener('click', () => addToCart(items[i].id));
  });

  document.querySelectorAll('.btn-wishlist').forEach((btn, i) => {
    btn.addEventListener('click', () => toggleWishlist(items[i].id));
  });
}

// --- Profile 🔐 ---
function renderProfile() {
  const modal = document.getElementById('profileContent');
  if (user) {
    modal.innerHTML = `<h2>Welcome, ${user.name}</h2><p><strong>Email:</strong> ${user.email}</p><button id="logoutBtn">Logout</button>`;
    document.getElementById('logoutBtn').addEventListener('click', () => {
      user = null;
      localStorage.removeItem('electroUser');
      closeProfileModal();
      alert('Logged out successfully.');
    });
  } else {
    modal.innerHTML = `
      <h2>Login</h2>
      <form id="loginForm" novalidate>
        <input type="email" id="loginEmail" placeholder="Email" required />
        <input type="password" id="loginPassword" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>`;
    document.getElementById('loginForm').addEventListener('submit', e => {
      e.preventDefault();
      const email = e.target.loginEmail.value.trim();
      const pwd = e.target.loginPassword.value.trim();
      if (!email || !pwd) return alert('Please enter email and password.');
      user = { name: email.split('@')[0], email };
      localStorage.setItem('electroUser', JSON.stringify(user));
      renderProfile();
    });
  }
}
function openProfileModal() { renderProfile(); document.getElementById('profileModal').classList.remove('hidden'); }
function closeProfileModal() { document.getElementById('profileModal').classList.add('hidden'); }

// --- Event Listeners & Init ---
document.getElementById('profileIcon').addEventListener('click', openProfileModal);
document.getElementById('closeProfile').addEventListener('click', closeProfileModal);
document.getElementById('profileModal').addEventListener('click', e => {
  if (e.target.id === 'profileModal') closeProfileModal();
});
document.getElementById('cartIcon').addEventListener('click', renderCart);
document.getElementById('wishlistIcon').addEventListener('click', renderWishlist);
document.getElementById('logo').addEventListener('click', renderHome);

updateCartCount();
updateWishlistCount();
renderHome();
