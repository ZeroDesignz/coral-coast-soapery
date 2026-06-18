// e:\CORAL COAST SOAPERY\main.js

const productsData = [
    {
        "id": "CCS-S01",
        "sku": "CCS-S01",
        "title": "Eucalyptus & Lavender Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0054.jpg",
        "weight": "129g",
        "scent": "Eucalyptus & Lavender",
        "description": "Peach/tan bar",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S02",
        "sku": "CCS-S02",
        "title": "Eucalyptus & Cedarwood Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0024.jpg",
        "weight": "200g",
        "scent": "Eucalyptus & Cedarwood",
        "description": "Sage green, rope hanger",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S03",
        "sku": "CCS-S03",
        "title": "Eucalyptus & Ginger Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0024.jpg",
        "weight": "143g",
        "scent": "Eucalyptus & Ginger",
        "description": "Blue/green/pink layered",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S04",
        "sku": "CCS-S04",
        "title": "Eucalyptus Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0058.jpg",
        "weight": "135g",
        "scent": "Eucalyptus",
        "description": "Sage green bar",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S05",
        "sku": "CCS-S05",
        "title": "Bergamont & Eucalyptus Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0096.jpg",
        "weight": "135g",
        "scent": "Bergamot & Eucalyptus",
        "description": "Sage green bar",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S06",
        "sku": "CCS-S06",
        "title": "Bergamont Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0024.jpg",
        "weight": "107g",
        "scent": "Bergamot",
        "description": "Grey/charcoal swirl",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S07",
        "sku": "CCS-S07",
        "title": "Unscented Soap (cream)",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0057.jpg",
        "weight": "135g",
        "scent": "Unscented",
        "description": "Cream/white bar",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent) - no fragrance"
    },
    {
        "id": "CCS-S08",
        "sku": "CCS-S08",
        "title": "Unscented Soap (blue)",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0063.jpg",
        "weight": "135g",
        "scent": "Unscented",
        "description": "Teal/blue bar",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent) - no fragrance"
    },
    {
        "id": "CCS-S09",
        "sku": "CCS-S09",
        "title": "Watermelon Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0082.jpg",
        "weight": "107g",
        "scent": "Watermelon",
        "description": "Red/white/green w/ seeds",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S10",
        "sku": "CCS-S10",
        "title": "Lavender Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0056.jpg",
        "weight": "N/A",
        "scent": "Lavender",
        "description": "Purple/white swirl + buds",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S11",
        "sku": "CCS-S11",
        "title": "Charcoal Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0060.jpg",
        "weight": "N/A",
        "scent": "Activated Charcoal",
        "description": "Black/white marble",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent), Activated charcoal"
    },
    {
        "id": "CCS-S12",
        "sku": "CCS-S12",
        "title": "Cow Print Charcoal Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0084.jpg",
        "weight": "N/A",
        "scent": "Charcoal (novelty)",
        "description": "Cream w/ black spots",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent), Activated charcoal"
    },
    {
        "id": "CCS-S13",
        "sku": "CCS-S13",
        "title": "Oatmeal & Honey Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0053.jpg",
        "weight": "N/A",
        "scent": "Oatmeal & Honey",
        "description": "Yellow w/ bee & oat tops",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent), Oatmeal, Honey"
    },
    {
        "id": "CCS-S14",
        "sku": "CCS-S14",
        "title": "Pumpkin Spice Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0064.jpg",
        "weight": "N/A",
        "scent": "Pumpkin Spice",
        "description": "Orange/tan w/ flower top",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S15",
        "sku": "CCS-S15",
        "title": "Pink Himalayan Salt Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0066.jpg",
        "weight": "N/A",
        "scent": "Pink Himalayan Salt",
        "description": "Pink, salt texture/swirl",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent), Pink Himalayan salt"
    },
    {
        "id": "CCS-S16",
        "sku": "CCS-S16",
        "title": "Vanilla Swirl Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0077.jpg",
        "weight": "N/A",
        "scent": "Vanilla",
        "description": "Brown/tan swirl",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S17",
        "sku": "CCS-S17",
        "title": "Coffee Scrub Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0076.jpg",
        "weight": "N/A",
        "scent": "Coffee",
        "description": "Brown w/ coffee grounds",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent), Coffee grounds"
    },
    {
        "id": "CCS-S18",
        "sku": "CCS-S18",
        "title": "Rose Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0079.jpg",
        "weight": "N/A",
        "scent": "Rose / floral",
        "description": "Pink/rose swirl",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S19",
        "sku": "CCS-S19",
        "title": "Calendula Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0083.jpg",
        "weight": "N/A",
        "scent": "Calendula",
        "description": "Cream w/ calendula petals",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent), Calendula petals"
    },
    {
        "id": "CCS-S20",
        "sku": "CCS-S20",
        "title": "Dinosaur Kids Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0074.jpg",
        "weight": "N/A",
        "scent": "Kids / novelty",
        "description": "Rainbow swirl + dino top",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S21",
        "sku": "CCS-S21",
        "title": "Rainbow / Pride Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0087.jpg",
        "weight": "N/A",
        "scent": "Novelty",
        "description": "Layered rainbow + heart",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S22",
        "sku": "CCS-S22",
        "title": "Canadian Flag Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0015.jpg",
        "weight": "N/A",
        "scent": "Novelty / flag",
        "description": "Red/white maple leaf",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-S23",
        "sku": "CCS-S23",
        "title": "De lo Mio Soap (Dominican Flag)",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0098.jpg",
        "weight": "120g (4oz)",
        "scent": "Novelty / flag",
        "description": "Red/white/blue DR flag",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent); Ocean Breeze & Margarita EO"
    },
    {
        "id": "CCS-S24",
        "sku": "CCS-S24",
        "title": "Cake Soap",
        "category": "Soap Bar",
        "price": 8.0,
        "image": "images/IMG-20260616-WA0096.jpg",
        "weight": "N/A",
        "scent": "TBD",
        "description": "Green striped (per display)",
        "ingredients": "Tallow, Coconut oil, Olive oil, Shea butter, Castor oil (+ scent)"
    },
    {
        "id": "CCS-L01",
        "sku": "CCS-L01",
        "title": "Raspberry Lip Balm",
        "category": "Lip Balm",
        "price": 5.0,
        "image": "images/IMG-20260616-WA0030.jpg",
        "weight": "4g (0.15oz)",
        "scent": "Raspberry",
        "description": "White tube, pink balm",
        "ingredients": "Raspberry seed oil, Tallow (+ more - TBD)"
    },
    {
        "id": "CCS-L02",
        "sku": "CCS-L02",
        "title": "Peppermint Lip Balm",
        "category": "Lip Balm",
        "price": 5.0,
        "image": "images/IMG-20260616-WA0034.jpg",
        "weight": "4g (0.15oz)",
        "scent": "Peppermint",
        "description": "White tube",
        "ingredients": "TBD"
    },
    {
        "id": "CCS-L03",
        "sku": "CCS-L03",
        "title": "Bubble Gum Lip Balm",
        "category": "Lip Balm",
        "price": 5.0,
        "image": "images/IMG-20260616-WA0032.jpg",
        "weight": "4g (0.15oz)",
        "scent": "Bubble Gum",
        "description": "White tube",
        "ingredients": "TBD"
    },
    {
        "id": "CCS-L04",
        "sku": "CCS-L04",
        "title": "Lip Balm Trio",
        "category": "Lip Balm Set",
        "price": 5.0,
        "image": "images/IMG-20260616-WA0032.jpg",
        "weight": "3 x 4g",
        "scent": "Raspberry + Peppermint + Bubble Gum",
        "description": "Set of 3 tubes",
        "ingredients": "TBD"
    },
    {
        "id": "CCS-B01",
        "sku": "CCS-B01",
        "title": "Tallow Whipped Balm",
        "category": "Balm",
        "price": 15.0,
        "image": "images/IMG-20260616-WA0039.jpg",
        "weight": "65g",
        "scent": "Magnolia (lightly scented)",
        "description": "Glass jar, black lid",
        "ingredients": "Tallow, Walnut oil, Rice Bran oil, Rosehip oil, Magnolia EO"
    },
    {
        "id": "CCS-B02",
        "sku": "CCS-B02",
        "title": "Tallow Bum Balm (Baby)",
        "category": "Balm",
        "price": 15.0,
        "image": "images/IMG-20260616-WA0045.jpg",
        "weight": "80g",
        "scent": "Unscented",
        "description": "Aluminum tin",
        "ingredients": "Tallow, Rosehip seed oil, Almond oil, Olive oil, Oatmilk & Honey EO"
    },
    {
        "id": "CCS-G01",
        "sku": "CCS-G01",
        "title": "Bamboo Box Gift Set",
        "category": "Gift Set",
        "price": 25.0,
        "image": "images/IMG-20260616-WA0044.jpg",
        "weight": "Mixed",
        "scent": "Assorted",
        "description": "Bamboo box: balm tin, whipped balm, soap, lip balm",
        "ingredients": "Varies by contents"
    },
    {
        "id": "CCS-G02",
        "sku": "CCS-G02",
        "title": "Kraft Box Duo (Soap + Lip Balm)",
        "category": "Gift Set",
        "price": 25.0,
        "image": "images/IMG-20260616-WA0036.jpg",
        "weight": "Mixed",
        "scent": "Assorted",
        "description": "Kraft window box: 1 soap + 1 lip balm",
        "ingredients": "Varies by contents"
    },
    {
        "id": "CCS-C01",
        "sku": "CCS-C01",
        "title": "Custom Event Favor Soap",
        "category": "Custom",
        "price": 50.0,
        "image": "images/IMG-20260616-WA0043.jpg",
        "weight": "N/A",
        "scent": "Customer choice",
        "description": "Wrapped soap + custom band label",
        "ingredients": "Varies"
    },
    {
        "id": "CCS-C02",
        "sku": "CCS-C02",
        "title": "Personalized Name-Stamped Soap",
        "category": "Custom",
        "price": 50.0,
        "image": "images/IMG-20260616-WA0052.jpg",
        "weight": "N/A",
        "scent": "Customer choice",
        "description": "Soap stamped w/ name",
        "ingredients": "Varies"
    }
];

function createProductCard(product) {
    // Only display weight if it's applicable
    const weightDisplay = product.weight !== 'N/A' ? `<p class="product-weight">${product.weight}</p>` : '';

    // Zero-priced items (e.g. custom orders) are quoted, not bought directly.
    const priceDisplay = product.price > 0 ? `$${product.price.toFixed(2)}` : 'Contact for Quote';
    const actionButton = product.price > 0
        ? `<button class="btn btn-primary add-to-cart">Add to Cart</button>`
        : `<a href="product.html?id=${product.id}" class="btn btn-primary">Enquire</a>`;

    return `
        <div class="product-card" data-id="${product.id}">
            <a href="product.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy" decoding="async">
            </a>
            <div class="product-info">
                <a href="product.html?id=${product.id}" class="product-link">
                    <h3 class="product-title">${product.title}</h3>
                </a>
                ${weightDisplay}
                <p class="product-desc-small">${product.description}</p>
                <p class="product-scent" style="font-size: 0.85rem; font-style: italic; color: var(--color-ocean); margin-bottom: 0.25rem;">✨ ${product.scent}</p>
                <p class="product-ingredients" style="font-size: 0.8rem; color: #718096; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;" title="${product.ingredients}"><strong>Ingredients:</strong> ${product.ingredients}</p>
                <div class="product-price">${priceDisplay}</div>
                ${actionButton}
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // --- Render Products ---
    const featuredContainer = document.getElementById('featured-products-grid');
    if (featuredContainer) {
        // Grab a few featured products
        const featured = [productsData[1], productsData[8], productsData[10]];
        featuredContainer.innerHTML = featured.map(createProductCard).join('');
    }

    const shopContainer = document.getElementById('shop-products-container');
    if (shopContainer) {
        const categories = [...new Set(productsData.map(p => p.category))];
        let html = '';
        categories.forEach(cat => {
            const catProducts = productsData.filter(p => p.category === cat);
            html += `<h2 class="category-title" style="margin-top: 3rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--color-accent); display: inline-block;">${cat}</h2>`;
            html += `<div class="grid">`;
            html += catProducts.map(createProductCard).join('');
            html += `</div>`;
        });
        shopContainer.innerHTML = html;
    }

    // --- State ---
    let cart = JSON.parse(localStorage.getItem('coralCart')) || [];
    
    // --- Elements ---
    const cartIcon = document.getElementById('cart-icon');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total-amount');
    
    // --- Cart Toggle ---
    if(cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('open');
            renderCart();
        });
    }
    
    if(closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
        });
    }

    // --- Mobile Nav Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if(menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            menuToggle.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
        // Close the menu after tapping a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
    
    // --- Add to Cart (Delegation since products are dynamically rendered) ---
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('add-to-cart')) {
            const btn = e.target;
            const productCard = btn.closest('.product-card');
            // Product cards expose the id on the wrapper; the product-detail
            // button has no card wrapper, so fall back to the button's own id.
            const id = btn.dataset.id || (productCard && productCard.dataset.id);
            if(!id) return;

            const product = productsData.find(p => p.id === id);
            if(!product) return;

            const title = product.title;
            const price = product.price;
            const image = product.image;
            
            const existingItem = cart.find(item => item.id === id);
            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, title, price, image, quantity: 1 });
            }
            
            saveCart();
            updateCartCount();
            
            // Animation feedback
            const originalText = btn.innerText;
            btn.innerText = 'Added!';
            btn.style.backgroundColor = 'var(--color-secondary)';
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
            }, 1000);
        }
    });
    
    // --- Functions ---
    function saveCart() {
        localStorage.setItem('coralCart', JSON.stringify(cart));
    }
    
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if(cartCount) cartCount.innerText = totalItems;
    }
    
    function renderCart() {
        if(!cartItemsContainer) return;
        
        cartItemsContainer.innerHTML = '';
        let total = 0;
        
        if(cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartTotalEl.innerText = '$0.00';
            return;
        }
        
        cart.forEach(item => {
            total += item.price * item.quantity;
            
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-qty">
                        <button class="qty-btn qty-decrease" data-id="${item.id}" aria-label="Decrease quantity">&minus;</button>
                        <span class="qty-value">${item.quantity}</span>
                        <button class="qty-btn qty-increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });

        cartTotalEl.innerText = '$' + total.toFixed(2);

        // Quantity + remove listeners
        document.querySelectorAll('.qty-increase').forEach(btn => {
            btn.addEventListener('click', () => changeQty(btn.dataset.id, 1));
        });
        document.querySelectorAll('.qty-decrease').forEach(btn => {
            btn.addEventListener('click', () => changeQty(btn.dataset.id, -1));
        });
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                cart = cart.filter(item => item.id !== id);
                saveCart();
                updateCartCount();
                renderCart();
            });
        });
    }

    // Adjust an item's quantity; removing it entirely when it drops to zero.
    function changeQty(id, delta) {
        const item = cart.find(i => i.id === id);
        if(!item) return;
        item.quantity += delta;
        if(item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        saveCart();
        updateCartCount();
        renderCart();
    }
    
    // Render Checkout (if on checkout page)
    const orderItemsContainer = document.getElementById('order-items');
    if(orderItemsContainer) {
        let total = 0;
        orderItemsContainer.innerHTML = '';
        
        if(cart.length === 0) {
            orderItemsContainer.innerHTML = '<p>No items in order.</p>';
            document.getElementById('checkout-total').innerText = '$0.00';
        } else {
            cart.forEach(item => {
                total += item.price * item.quantity;
                const itemEl = document.createElement('div');
                itemEl.style.display = 'flex';
                itemEl.style.justifyContent = 'space-between';
                itemEl.style.marginBottom = '0.5rem';
                itemEl.innerHTML = `
                    <span>${item.title} (x${item.quantity})</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                `;
                orderItemsContainer.appendChild(itemEl);
            });
            document.getElementById('checkout-total').innerText = '$' + total.toFixed(2);
        }
    }
    
    // Render Individual Product Page (if on product.html)
    const productDetailContainer = document.getElementById('product-detail-container');
    if (productDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = productsData.find(p => p.id === productId);
        
        if (product) {
            document.title = `${product.title} | Coral Coast Soapery`;
            const weightDisplay = product.weight !== 'N/A' ? `<p class="pd-weight">Weight: ${product.weight}</p>` : '';

            const pdPriceDisplay = product.price > 0 ? `$${product.price.toFixed(2)}` : 'Contact for Quote';
            const pdActionButton = product.price > 0
                ? `<button class="btn btn-primary add-to-cart pd-add-btn" data-id="${product.id}">Add to Cart</button>`
                : `<a href="contact.html" class="btn btn-primary pd-add-btn">Enquire About This Item</a>`;

            productDetailContainer.innerHTML = `
                <div class="pd-gallery">
                    <img src="${product.image}" alt="${product.title}" decoding="async">
                </div>
                <div class="pd-info">
                    <p class="pd-category">${product.category}</p>
                    <h1 class="pd-title">${product.title}</h1>
                    <div class="pd-price">${pdPriceDisplay}</div>
                    <p class="pd-scent">✨ ${product.scent}</p>
                    <p class="pd-desc">${product.description}</p>
                    ${weightDisplay}
                    <div class="pd-ingredients">
                        <h3>Ingredients</h3>
                        <p>${product.ingredients}</p>
                    </div>

                    ${pdActionButton}

                    <div class="pd-shipping-note">
                        <p>🌿 Handmade in small batches. Please allow 3-5 days for shipping.</p>
                    </div>
                </div>
            `;
            
            // Re-bind the add-to-cart listener for this specific button
            // Actually, the delegated click listener on document will handle it automatically!
        } else {
            productDetailContainer.innerHTML = `<h2>Product not found. <a href="shop.html" style="color: var(--color-accent); text-decoration: underline;">Return to Shop</a></h2>`;
        }
    }
    
    const checkoutForm = document.getElementById('checkout-form');
    if(checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Order placed successfully! Thank you for choosing Coral Coast Soapery.');
            cart = [];
            saveCart();
            window.location.href = 'index.html';
        });
    }

    // Contact / order enquiry form -> opens the visitor's email client pre-filled
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        // TODO (client): set this to the real business inbox.
        const BUSINESS_EMAIL = 'hello@coralcoastsoapery.com';
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('cName').value.trim();
            const email = document.getElementById('cEmail').value.trim();
            const message = document.getElementById('cMessage').value.trim();

            const subject = encodeURIComponent(`Order enquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;

            const status = document.getElementById('contact-form-status');
            if(status) {
                status.textContent = `Opening your email app… if nothing happens, email us directly at ${BUSINESS_EMAIL}.`;
            }
            contactForm.reset();
        });
    }
    
    // Initial calls
    updateCartCount();
});
