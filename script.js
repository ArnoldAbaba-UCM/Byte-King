
        // Product data
        const products = {
            cpu: [
                { id: 1, name: "AMD Ryzen 9 5900X 12-Core Processor", price: 150.99, image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "cpu", description: "The AMD Ryzen 9 5900X is a high-performance CPU with 12 cores and 24 threads, perfect for gaming and content creation." },
                { id: 2, name: "Intel Core i9-12900K 16-Core Processor", price: 50.99, image: "https://www.guru3d.com/data/publish/220/6413fd926d77f860d2c112bb266d4241d98e50/img_9794.jpg", category: "cpu", description: "The Intel Core i9-12900K features a hybrid architecture with 16 cores (8 Performance + 8 Efficient) for exceptional multitasking." },
                { id: 3, name: "AMD Ryzen 1F 5800X 8-Core Processor", price: 25.99, image: "https://lh3.googleusercontent.com/pw/AP1GczMqBllGsP5ZCiPG5eHYImH6eOaxBBPDjX3Uvr2ve0KRrEqcmXTl6RXwkHAXYo4TLdt0iKbMwqFoPGUa1Vqyi_MJG6zKKptTKB2Cn1B2fYpIXnK-vS-V=w2400", category: "cpu", description: "The AMD Ryzen 7 5800X delivers exceptional gaming performance with 8 cores and 16 threads." },
                { id: 4, name: "Intel Core F1-12700K 12-Core Processor", price: 1.99, image: "https://lh3.googleusercontent.com/pw/AP1GczP9to2xb4CGA3ryzT8OTybCpYaoy4KTqeGnMVIS3TjYGVW9GU6n6Yf8L0PTIbzEuSxMvNEkSRGhR5rRQ67YMcVtWYaNfrOylmXCT5Q1_cUqHhI5rQtk=w2400", category: "cpu", description: "The Intel Core i7-12700K features 12 cores (8 Performance + 4 Efficient) for excellent gaming and productivity performance." }
            ],
            gpu: [
                { id: 5, name: "NVIDIA GeForce RTX 3080 10GB GDDR6X", price: 2.99, image: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-3060-ti-out-december-2/nvidia-geforce-rtx-3060-ti-announcement-article-key-visual.jpg", category: "gpu", description: "The NVIDIA GeForce RTX 3080 delivers the ultra performance that gamers crave, powered by Ampere architecture." },
                { id: 6, name: "AMD Radeon RX 6800 XT 16GB GDDR6", price: 649.99, image: "https://grafickekarty.sk/wp-content/uploads/2025/07/Geforce-rtx-6090-mozny-buduci-vzhlad-1024x683.webp", category: "gpu", description: "The AMD Radeon RX 6800 XT features 16GB of GDDR6 memory and delivers exceptional 4K gaming performance." },
                { id: 7, name: "NVIDIA GeForce RTX 3070 8GB GDDR6", price: 499.99, image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "gpu", description: "The NVIDIA GeForce RTX 3070 delivers excellent performance for 1440p gaming with ray tracing and DLSS." },
                { id: 8, name: "AMD Radeon RX 6700 XT 12GB GDDR6", price: 23.99, image: "https://lh3.googleusercontent.com/pw/AP1GczOSa7zsJyoyzzYVmsPoX2n8HWomjFCrkANdZBUGsb0dEL-JRqSik4RtyqX-mZfH38nc-gJa7DsOmkc0KVtjfgiow2WXmsnpGqgvXZ0M5A-iLuxFnSEZ=w2400", category: "gpu", description: "The AMD Radeon RX 6700 XT offers excellent 1440p gaming performance with 12GB of GDDR6 memory." }
            ],
            motherboard: [
                { id: 9, name: "ASUS ROG Strix B550-F Gaming Motherboard", price: 189.99, image: "https://gameone.ph/media/catalog/product/mpiowebpcache/d378a0f20f83637cdb1392af8dc032a2/a/s/asus-rog-strix-b850-f-gaming-wifi-7-ddr5-am5-atx-motherboard-1.webp", category: "motherboard", description: "The ASUS ROG Strix B550-F Gaming motherboard offers robust power delivery and comprehensive cooling for AMD Ryzen processors." },
                { id: 10, name: "MSI MPG Z690 Carbon WiFi Motherboard", price: 349.99, image: "https://gameone.ph/media/catalog/product/mpiowebpcache/d378a0f20f83637cdb1392af8dc032a2/a/s/asus-rog-strix-b850-f-gaming-wifi-7-ddr5-am5-atx-motherboard-1.webp", category: "motherboard", description: "The MSI MPG Z690 Carbon WiFi supports 12th Gen Intel Core processors with DDR5 memory and PCIe 5.0." },
                { id: 11, name: "Gigabyte B660M DS3H AX DDR4 Motherboard", price: 149.99, image: "https://gameone.ph/media/catalog/product/mpiowebpcache/d378a0f20f83637cdb1392af8dc032a2/a/s/asus-rog-strix-b850-f-gaming-wifi-7-ddr5-am5-atx-motherboard-1.webp", category: "motherboard", description: "The Gigabyte B660M DS3H AX DDR4 motherboard supports 12th Gen Intel Core processors with DDR4 memory and WiFi 6." },
                { id: 12, name: "ASRock B550M Steel Legend Motherboard", price: 139.99, image: "https://gameone.ph/media/catalog/product/mpiowebpcache/d378a0f20f83637cdb1392af8dc032a2/a/s/asus-rog-strix-b850-f-gaming-wifi-7-ddr5-am5-atx-motherboard-1.webp", category: "motherboard", description: "The ASRock B550M Steel Legend supports AMD Ryzen processors with PCIe 4.0 and dual M.2 slots." }
            ],
            ram: [
                { id: 13, name: "Corsair Vengeance RGB Pro 32GB DDR4 3600MHz", price: 179.99, image: "https://c1.neweggimages.com/productimage/nb640/20-236-879-03.jpg", category: "ram", description: "Corsair Vengeance RGB Pro memory lights up your PC with dynamic multi-zone RGB lighting while delivering high-frequency performance." },
                { id: 14, name: "G.Skill Trident Z5 RGB 32GB DDR5 6000MHz", price: 289.99, image: "https://c1.neweggimages.com/productimage/nb640/20-236-879-03.jpg", category: "ram", description: "G.Skill Trident Z5 RGB DDR5 memory delivers exceptional performance for the latest Intel and AMD platforms." },
                { id: 15, name: "Crucial Ballistix 16GB DDR4 3200MHz", price: 79.99, image: "https://c1.neweggimages.com/productimage/nb640/20-236-879-03.jpg", category: "ram", description: "Crucial Ballistix DDR4 memory delivers reliable performance for gaming and productivity applications." },
                { id: 16, name: "TeamGroup T-Force Delta RGB 16GB DDR4 3200MHz", price: 84.99, image: "https://c1.neweggimages.com/productimage/nb640/20-236-879-03.jpg", category: "ram", description: "TeamGroup T-Force Delta RGB DDR4 memory features vibrant RGB lighting and excellent performance." }
            ],
            storage: [
                { id: 17, name: "Samsung 970 EVO Plus 1TB NVMe M.2 SSD", price: 129.99, image: "https://www.techfinitive.com/wp-content/uploads/2024/12/AdobeStock_323405056.jpeg", category: "storage", description: "The Samsung 970 EVO Plus NVMe SSD delivers exceptional performance for gaming and content creation with speeds up to 3,500MB/s." },
                { id: 18, name: "WD Blue SN550 1TB NVMe M.2 SSD", price: 99.99, image: "https://www.techfinitive.com/wp-content/uploads/2024/12/AdobeStock_323405056.jpeg", category: "storage", description: "The WD Blue SN550 NVMe SSD offers fast storage for your operating system and applications with speeds up to 2,400MB/s." },
                { id: 19, name: "Seagate BarraCuda 2TB 3.5\" Internal HDD", price: 54.99, image: "https://www.techfinitive.com/wp-content/uploads/2024/12/AdobeStock_323405056.jpeg", category: "storage", description: "The Seagate BarraCuda 2TB HDD offers reliable storage for your games, media, and files with 7200 RPM performance." },
                { id: 20, name: "Crucial MX500 1TB 2.5\" SATA SSD", price: 89.99, image: "https://www.techfinitive.com/wp-content/uploads/2024/12/AdobeStock_323405056.jpeg", category: "storage", description: "The Crucial MX500 SATA SSD delivers fast storage performance for your system with speeds up to 560MB/s." }
            ],
            psu: [
                { id: 21, name: "Corsair RM750x 750W 80 Plus Gold", price: 129.99, image: "https://m.media-amazon.com/images/I/71sHLnts-HL._AC_SL1500_.jpg", category: "psu", description: "The Corsair RM750x power supply delivers efficient, quiet power with 80 Plus Gold certification and fully modular cables." },
                { id: 22, name: "EVGA SuperNOVA 850 G5 850W 80 Plus Gold", price: 149.99, image: "https://m.media-amazon.com/images/I/71sHLnts-HL._AC_SL1500_.jpg", category: "psu", description: "The EVGA SuperNOVA 850 G5 power supply offers reliable power delivery with 80 Plus Gold efficiency and fully modular design." },
                { id: 23, name: "Seasonic FOCUS GX-650 650W 80 Plus Gold", price: 119.99, image: "https://scontent.fmnl4-2.fna.fbcdn.net/v/t39.30808-6/493312099_9603950993024008_4978583331157528373_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gGCD0GQ8NOQQ7kNvwHM-1v8&_nc_oc=Adnsb-Tos8JcJyYeEsrOUFj0DbjXc_9jQhE0ooWo089RDTOJRYQqCL3N2jpGpxmWnkkjdiFTxPEWNrRIeO5gpcJY&_nc_zt=23&_nc_ht=scontent.fmnl4-2.fna&_nc_gid=HHUXRgNX18PugFRk4MN5zw&oh=00_Afhox0AXNunZxUb3Uvbk2t7-OY6P2vJTMhmRZCFTQpMyqQ&oe=692292AA", category: "psu", description: "The Seasonic FOCUS GX-650 power supply provides stable power with 80 Plus Gold certification and semi-modular cables." },
                { id: 24, name: "Thermaltake Toughpower GF1 750W 80 Plus Gold", price: 109.99, image: "https://m.media-amazon.com/images/I/71sHLnts-HL._AC_SL1500_.jpg", category: "psu", description: "The Thermaltake Toughpower GF1 750W power supply delivers efficient power with 80 Plus Gold rating and fully modular cables." }
            ]
        };

        // Category descriptions
        const categoryDescriptions = {
            cpu: "High-performance processors from Intel and AMD for gaming, content creation, and productivity.",
            gpu: "Powerful graphics cards for gaming, video editing, and 3D rendering from NVIDIA and AMD.",
            motherboard: "Motherboards supporting the latest CPUs with advanced features and connectivity options.",
            ram: "High-speed memory modules from DDR4 to the latest DDR5 technology.",
            storage: "Fast SSDs and high-capacity HDDs for all your storage needs.",
            psu: "Reliable power supplies with 80 Plus certification for stable system operation.",
            cooling: "CPU coolers, case fans, and liquid cooling solutions.",
            case: "PC cases in various sizes and styles to house your components."
        };

        // Shopping cart
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // DOM elements
        const mainContent = document.getElementById('main-content');
        const homePage = document.getElementById('home-page');
        const productsPage = document.getElementById('products-page');
        const cartPage = document.getElementById('cart-page');
        const featuredProducts = document.getElementById('featured-products');
        const categoryProducts = document.getElementById('category-products');
        const cartItems = document.getElementById('cart-items');
        const cartSummary = document.getElementById('cart-summary');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        const categoryTitle = document.getElementById('category-title');
        const categoryDescription = document.getElementById('category-description');
        const checkoutModal = document.getElementById('checkout-modal');
        const orderConfirmation = document.getElementById('order-confirmation');
        const checkoutForm = document.getElementById('checkout-form');
        const orderTotal = document.getElementById('order-total');
        const serviceForm = document.getElementById('service-form');
        const serviceFormTitle = document.getElementById('service-form-title');
        const servicesForm = document.getElementById('services-form');
        const serviceType = document.getElementById('service-type');
        const serviceConfirmation = document.getElementById('service-confirmation');

        // Initialize the page
        function init() {
            displayFeaturedProducts();
            updateCartCount();
            setupEventListeners();
        }

        // Display featured products on the home page
        function displayFeaturedProducts() {
            featuredProducts.innerHTML = '';
            
            // Get 6 random products from all categories
            const allProducts = Object.values(products).flat();
            const shuffled = allProducts.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 6);
            
            selected.forEach(product => {
                const productElement = createProductElement(product);
                featuredProducts.appendChild(productElement);
            });
        }

        // Display products by category
        function displayProductsByCategory(category) {
            categoryProducts.innerHTML = '';
            
            if (products[category]) {
                products[category].forEach(product => {
                    const productElement = createProductElement(product);
                    categoryProducts.appendChild(productElement);
                });
            }
            
            // Update category title and description
            const categoryNames = {
                cpu: "Processors",
                gpu: "Graphics Cards",
                motherboard: "Motherboards",
                ram: "Memory",
                storage: "Storage",
                psu: "Power Supplies",
                cooling: "Cooling",
                case: "Cases"
            };
            
            categoryTitle.textContent = categoryNames[category] || "Products";
            categoryDescription.textContent = categoryDescriptions[category] || "Browse our selection of computer components";
        }

        // Create product element
        function createProductElement(product) {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">₱${product.price.toFixed(2)}</div>
                    <div class="product-actions">
                        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                        <button class="wishlist"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            `;
            
            return productDiv;
        }

        // Display cart items
        function displayCart() {
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                emptyCartMessage.classList.remove('hidden');
                cartSummary.classList.add('hidden');
                return;
            }
            
            emptyCartMessage.classList.add('hidden');
            cartSummary.classList.remove('hidden');
            
            let total = 0;
            
            cart.forEach(item => {
                const product = getProductById(item.id);
                if (product) {
                    const itemTotal = product.price * item.quantity;
                    total += itemTotal;
                    
                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.className = 'cart-item';
                    cartItemDiv.innerHTML = `
                        <div class="cart-item-img">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="cart-item-details">
                            <h3 class="cart-item-title">${product.name}</h3>
                            <div class="cart-item-price">₱${product.price.toFixed(2)}</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn" data-id="${product.id}" data-action="decrease">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${product.id}">
                                <button class="quantity-btn" data-id="${product.id}" data-action="increase">+</button>
                            </div>
                            <button class="cart-item-remove" data-id="${product.id}">Remove</button>
                        </div>
                    `;
                    
                    cartItems.appendChild(cartItemDiv);
                }
            });
            
            cartTotal.textContent = `₱${total.toFixed(2)}`;
        }

        // Get product by ID
        function getProductById(id) {
            const allProducts = Object.values(products).flat();
            return allProducts.find(product => product.id === parseInt(id));
        }

        // Add product to cart
        function addToCart(productId) {
            const product = getProductById(productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    quantity: 1
                });
            }
            
            saveCart();
            updateCartCount();
            
            // Show confirmation
            alert(`${product.name} added to cart!`);
        }

        // Update cart count in header
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = count;
        }

        // Save cart to localStorage
        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            updateCartCount();
            displayCart();
        }

        // Update item quantity in cart
        function updateQuantity(productId, quantity) {
            if (quantity < 1) {
                removeFromCart(productId);
                return;
            }
            
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
                saveCart();
                updateCartCount();
                displayCart();
            }
        }

        // Setup event listeners
        function setupEventListeners() {
            // Navigation
            document.querySelectorAll('.nav-links a, .category, .footer-links a[data-category]').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const category = this.getAttribute('data-category');
                    showProductsPage(category);
                });
            });
            
            // Services link
            document.getElementById('services-link').addEventListener('click', function(e) {
                e.preventDefault();
                showServicesSection();
            });
            
            // Service buttons
            document.querySelectorAll('.service-card .btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const service = this.getAttribute('data-service');
                    showServiceForm(service);
                });
            });
            
            // Cart link
            document.getElementById('cart-link').addEventListener('click', function(e) {
                e.preventDefault();
                showCartPage();
            });
            
            // Shop now button
            document.getElementById('shop-now-btn').addEventListener('click', function(e) {
                e.preventDefault();
                showProductsPage('cpu');
            });
            
            // Continue shopping buttons
            document.getElementById('continue-shopping').addEventListener('click', function(e) {
                e.preventDefault();
                showHomePage();
            });
            
            document.getElementById('continue-shopping-confirm').addEventListener('click', function(e) {
                e.preventDefault();
                orderConfirmation.style.display = 'none';
                showHomePage();
            });
            
            document.getElementById('continue-shopping-service').addEventListener('click', function(e) {
                e.preventDefault();
                serviceConfirmation.style.display = 'none';
                showHomePage();
            });
            
            // Add to cart buttons (delegated)
            mainContent.addEventListener('click', function(e) {
                if (e.target.classList.contains('add-to-cart')) {
                    const productId = e.target.getAttribute('data-id');
                    addToCart(productId);
                }
                
                // Wishlist buttons
                if (e.target.classList.contains('wishlist') || e.target.closest('.wishlist')) {
                    const wishlistBtn = e.target.classList.contains('wishlist') ? e.target : e.target.closest('.wishlist');
                    const icon = wishlistBtn.querySelector('i');
                    if (icon.classList.contains('far')) {
                        icon.classList.remove('far');
                        icon.classList.add('fas');
                        icon.style.color = 'var(--accent)';
                    } else {
                        icon.classList.remove('fas');
                        icon.classList.add('far');
                        icon.style.color = '';
                    }
                }
                
                // Cart quantity controls
                if (e.target.classList.contains('quantity-btn')) {
                    const productId = e.target.getAttribute('data-id');
                    const action = e.target.getAttribute('data-action');
                    const item = cart.find(item => item.id === parseInt(productId));
                    
                    if (item) {
                        if (action === 'increase') {
                            updateQuantity(parseInt(productId), item.quantity + 1);
                        } else if (action === 'decrease') {
                            updateQuantity(parseInt(productId), item.quantity - 1);
                        }
                    }
                }
                
                // Remove from cart
                if (e.target.classList.contains('cart-item-remove')) {
                    const productId = e.target.getAttribute('data-id');
                    removeFromCart(parseInt(productId));
                }
            });
            
            // Quantity input changes
            mainContent.addEventListener('change', function(e) {
                if (e.target.classList.contains('quantity-input')) {
                    const productId = e.target.getAttribute('data-id');
                    const quantity = parseInt(e.target.value);
                    updateQuantity(parseInt(productId), quantity);
                }
            });
            
            // Checkout button
            document.getElementById('checkout-btn').addEventListener('click', function() {
                checkoutModal.style.display = 'flex';
            });
            
            // Close modals
            document.getElementById('checkout-close').addEventListener('click', function() {
                checkoutModal.style.display = 'none';
            });
            
            document.getElementById('confirmation-close').addEventListener('click', function() {
                orderConfirmation.style.display = 'none';
            });
            
            document.getElementById('service-confirmation-close').addEventListener('click', function() {
                serviceConfirmation.style.display = 'none';
            });
            
            // Checkout form submission
            checkoutForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real application, you would process the payment here
                // For this demo, we'll just show the confirmation
                
                const total = cart.reduce((total, item) => {
                    const product = getProductById(item.id);
                    return total + (product ? product.price * item.quantity : 0);
                }, 0);
                
                orderTotal.textContent = `₱${total.toFixed(2)}`;
                
                // Clear cart
                cart = [];
                saveCart();
                updateCartCount();
                
                // Show confirmation
                checkoutModal.style.display = 'none';
                orderConfirmation.style.display = 'flex';
                
                // Return to home page
                setTimeout(() => {
                    orderConfirmation.style.display = 'none';
                    showHomePage();
                }, 5000);
            });
            
            // Service form submission
            servicesForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real application, you would send this data to a server
                // For this demo, we'll just show the confirmation
                
                // Reset form
                servicesForm.reset();
                serviceForm.classList.add('hidden');
                
                // Show confirmation
                serviceConfirmation.style.display = 'flex';
            });
        }

        // Show home page
        function showHomePage() {
            homePage.classList.remove('hidden');
            productsPage.classList.add('hidden');
            cartPage.classList.add('hidden');
            serviceForm.classList.add('hidden');
        }

        // Show products page
        function showProductsPage(category) {
            homePage.classList.add('hidden');
            productsPage.classList.remove('hidden');
            cartPage.classList.add('hidden');
            serviceForm.classList.add('hidden');
            
            displayProductsByCategory(category);
        }

        // Show cart page
        function showCartPage() {
            homePage.classList.add('hidden');
            productsPage.classList.add('hidden');
            cartPage.classList.remove('hidden');
            serviceForm.classList.add('hidden');
            
            displayCart();
        }

        // Show services section
        function showServicesSection() {
            homePage.classList.remove('hidden');
            productsPage.classList.add('hidden');
            cartPage.classList.add('hidden');
            serviceForm.classList.add('hidden');
            
            // Scroll to services section
            document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
        }

        // Show service form
        function showServiceForm(service) {
            const serviceNames = {
                build: "Custom PC Build",
                upgrade: "PC Upgrade",
                repair: "PC Repair"
            };
            
            serviceFormTitle.textContent = `${serviceNames[service]} Request`;
            serviceType.value = service;
            serviceForm.classList.remove('hidden');
            
            // Scroll to form
            serviceForm.scrollIntoView({ behavior: 'smooth' });
        }

        // Initialize the application
        init();

        //update