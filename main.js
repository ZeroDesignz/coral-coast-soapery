// e:\CORAL COAST SOAPERY\main.js

const productsData = [
    // Soap Bars
    { id: 's1', category: 'Soap Bars', title: 'Canadian Flag Soap', description: 'Red/white, maple leaf', scent: 'Sweet Maple & Crisp Winter Air', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Natural Fragrance, Red Mica', weight: '~107–145g', sku: 'SOAP-CAN-001', price: 12.00, image: 'images/IMG-20260616-WA0015.jpg' },
    { id: 's2', category: 'Soap Bars', title: 'Watermelon Soap', description: 'Cold-process, stamped with logo', scent: 'Juicy Watermelon & Summer Sugar', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Fragrance, Poppy Seeds, Mica', weight: '107g', sku: 'SOAP-WAT-002', price: 12.00, image: 'images/IMG-20260616-WA0016.jpg' },
    { id: 's3', category: 'Soap Bars', title: 'Bergamot Soap', description: 'Cold-process, stamped with logo', scent: 'Bright Citrus Bergamot & Earl Grey', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Bergamot Essential Oil, Natural Clay', weight: '107g', sku: 'SOAP-BER-003', price: 12.00, image: 'images/IMG-20260616-WA0017.jpg' },
    { id: 's4', category: 'Soap Bars', title: 'Eucalyptus & Lavender Soap', description: 'Cold-process, stamped with logo', scent: 'Calming Lavender & Refreshing Eucalyptus', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Eucalyptus & Lavender Essential Oils', weight: '120g', sku: 'SOAP-EUC-LAV-004', price: 13.00, image: 'images/IMG-20260616-WA0018.jpg' },
    { id: 's5', category: 'Soap Bars', title: 'Eucalyptus & Cedarwood Soap', description: 'Rope soap option available', scent: 'Earthy Cedarwood & Brisk Eucalyptus', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Eucalyptus & Cedarwood Essential Oils', weight: '200g', sku: 'SOAP-EUC-CED-005', price: 15.00, image: 'images/IMG-20260616-WA0019.jpg' },
    { id: 's6', category: 'Soap Bars', title: 'Eucalyptus & Ginger Soap', description: 'Cold-process, stamped with logo', scent: 'Zesty Ginger & Cool Eucalyptus', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Eucalyptus Essential Oil, Ginger Extract', weight: '143g', sku: 'SOAP-EUC-GIN-006', price: 14.00, image: 'images/IMG-20260616-WA0020.jpg' },
    { id: 's7', category: 'Soap Bars', title: 'Eucalyptus & Eucalyptus Soap', description: 'Cold-process, stamped with logo', scent: 'Pure, Potent Eucalyptus', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Double-strength Eucalyptus Essential Oil', weight: '~107–145g', sku: 'SOAP-EUC-EUC-007', price: 12.00, image: 'images/IMG-20260616-WA0021.jpg' },
    { id: 's8', category: 'Soap Bars', title: 'Unscented Soap', description: 'Cream/white color', scent: 'Pure and Natural (Unscented)', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water', weight: '135g', sku: 'SOAP-UNS-008', price: 11.00, image: 'images/IMG-20260616-WA0022.jpg' },
    { id: 's9', category: 'Soap Bars', title: 'Lavender Soap', description: 'Purple/white swirl', scent: 'Soothing Lavender Fields', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Lavender Essential Oil, Purple Brazilian Clay', weight: '~107–145g', sku: 'SOAP-LAV-009', price: 12.00, image: 'images/IMG-20260616-WA0023.jpg' },
    { id: 's10', category: 'Soap Bars', title: 'Charcoal Soap', description: 'Black/white marble', scent: 'Clean & Purifying Tea Tree', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Activated Charcoal, Tea Tree Essential Oil', weight: '~107–145g', sku: 'SOAP-CHA-010', price: 12.00, image: 'images/IMG-20260616-WA0024.jpg' },
    { id: 's11', category: 'Soap Bars', title: 'Oatmeal & Honey Soap', description: 'Yellow, bee + oat toppers (Personalizable)', scent: 'Warm Honey & Toasted Oats', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Colloidal Oatmeal, Raw Organic Honey', weight: '~107–145g', sku: 'SOAP-OAT-011', price: 14.00, image: 'images/IMG-20260616-WA0025.jpg' },
    { id: 's12', category: 'Soap Bars', title: 'Pumpkin Spice Soap', description: 'Cold-process, stamped with logo', scent: 'Warm Cinnamon, Nutmeg & Sweet Pumpkin', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Pumpkin Puree, Spice Essential Oils', weight: '~107–145g', sku: 'SOAP-PUM-012', price: 12.00, image: 'images/IMG-20260616-WA0026.jpg' },
    { id: 's13', category: 'Soap Bars', title: 'Pink Himalayan Salt Soap', description: 'Cold-process, stamped with logo', scent: 'Ocean Breeze & Soft Florals', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Pink Himalayan Salt, Natural Fragrance', weight: '~107–145g', sku: 'SOAP-PIN-013', price: 13.00, image: 'images/IMG-20260616-WA0027.jpg' },
    { id: 's14', category: 'Soap Bars', title: 'Vanilla Swirl Soap', description: 'Cold-process, stamped with logo', scent: 'Rich, Warm Madagascar Vanilla', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Vanilla Extract, Cocoa Powder', weight: '~107–145g', sku: 'SOAP-VAN-014', price: 12.00, image: 'images/IMG-20260616-WA0028.jpg' },
    { id: 's15', category: 'Soap Bars', title: 'Sage Green Soap', description: 'Likely a eucalyptus variant', scent: 'Earthy Sage & Crisp Eucalyptus', ingredients: 'Olive Oil, Coconut Oil, Shea Butter, Lye, Water, Clary Sage & Eucalyptus Essential Oils', weight: '~107–145g', sku: 'SOAP-SAG-015', price: 12.00, image: 'images/IMG-20260616-WA0029.jpg' },

    // Lip Balms
    { id: 'lb1', category: 'Lip Balms', title: 'Raspberry Lip Balm', description: '0.15oz Lip Balm', scent: 'Sweet Wild Raspberry', ingredients: 'Raspberry seed oil, Grass-fed Tallow, Beeswax, Shea Butter', weight: '4g', sku: 'LIP-RAS-001', price: 5.00, image: 'images/IMG-20260616-WA0030.jpg' },
    { id: 'lb2', category: 'Lip Balms', title: 'Peppermint Lip Balm', description: '0.15oz Lip Balm', scent: 'Cool, Refreshing Peppermint', ingredients: 'Grass-fed Tallow, Beeswax, Shea Butter, Peppermint Essential Oil', weight: '4g', sku: 'LIP-PEP-002', price: 5.00, image: 'images/IMG-20260616-WA0031.jpg' },
    { id: 'lb3', category: 'Lip Balms', title: 'Bubble Gum Lip Balm', description: '0.15oz Lip Balm', scent: 'Classic Sweet Bubble Gum', ingredients: 'Grass-fed Tallow, Beeswax, Shea Butter, Natural Flavoring', weight: '4g', sku: 'LIP-BUB-003', price: 5.00, image: 'images/IMG-20260616-WA0032.jpg' },
    { id: 'lb4', category: 'Lip Balms', title: 'Lip Balm Trio', description: 'Set of 3 Lip Balms', scent: 'Raspberry, Peppermint, Bubble Gum', ingredients: 'Tallow, Beeswax, Shea Butter, Natural Flavorings', weight: '12g', sku: 'LIP-TRI-004', price: 12.00, image: 'images/IMG-20260616-WA0033.jpg' },

    // Balms / Tins
    { id: 'b1', category: 'Balms & Tins', title: 'Tallow Whipped Balm', description: 'Whipped Body Balm', scent: 'Delicate Magnolia Blossom', ingredients: 'Grass-fed Tallow, Walnut oil, Rice Bran oil, Rosehip oil, Magnolia EO', weight: '65g', sku: 'BAL-WHI-001', price: 20.00, image: 'images/IMG-20260616-WA0034.jpg' },
    { id: 'b2', category: 'Balms & Tins', title: 'Tallow Bum Balm', description: 'Baby balm', scent: 'Unscented (Natural Oatmilk & Honey)', ingredients: 'Grass-fed Tallow, Rosehip seed oil, Almond oil, Olive oil, Oatmilk & Honey EO', weight: '80g', sku: 'BAL-BUM-002', price: 22.00, image: 'images/IMG-20260616-WA0035.jpg' },

    // Gift Sets & Extras
    { id: 'g1', category: 'Gift Sets & Extras', title: 'Bamboo Gift Box', description: 'Balms + Soap + Lip Balm', scent: 'Assorted Best-Sellers', ingredients: 'See individual products', weight: 'N/A', sku: 'GFT-BAM-001', price: 45.00, image: 'images/IMG-20260616-WA0036.jpg' },
    { id: 'g2', category: 'Gift Sets & Extras', title: 'Kraft-box Duo', description: 'Soap + Lip Balm', scent: 'Curated Pairing', ingredients: 'See individual products', weight: 'N/A', sku: 'GFT-KRA-002', price: 18.00, image: 'images/IMG-20260616-WA0037.jpg' },
    { id: 'g3', category: 'Gift Sets & Extras', title: 'Custom Event Favors', description: 'e.g. baby shower "From Our Shower to Yours"', scent: 'Customized to your event', ingredients: 'Custom tailored', weight: 'N/A', sku: 'GFT-CUS-003', price: 0.00, image: 'images/IMG-20260616-WA0038.jpg' },
];

function createProductCard(product) {
    // Only display weight if it's applicable
    const weightDisplay = product.weight !== 'N/A' ? `<p class="product-weight">${product.weight}</p>` : '';
    
    return `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                ${weightDisplay}
                <p class="product-desc-small">${product.description}</p>
                <p class="product-scent" style="font-size: 0.85rem; font-style: italic; color: var(--color-ocean); margin-bottom: 0.25rem;">✨ ${product.scent}</p>
                <p class="product-ingredients" style="font-size: 0.8rem; color: #718096; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;" title="${product.ingredients}"><strong>Ingredients:</strong> ${product.ingredients}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-primary add-to-cart">Add to Cart</button>
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
    
    // --- Add to Cart (Delegation since products are dynamically rendered) ---
    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('add-to-cart')) {
            const btn = e.target;
            const productCard = btn.closest('.product-card');
            const id = productCard.dataset.id;
            
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
                    <div class="cart-item-title">${item.title} (x${item.quantity})</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="remove-item" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
        
        cartTotalEl.innerText = '$' + total.toFixed(2);
        
        // Remove item listeners
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
    
    // Initial calls
    updateCartCount();
});
