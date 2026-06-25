// Allied Chemicals - Application Logic & Product Database

// 1. PRODUCT DATABASE
const products = [
    // --- NICKEL PLATING ---
    { id: "n1", name: "Nickel 1x1", category: "nickel", origin: "Imported", desc: "High-purity 1x1 inch electroplating nickel anodes, essential for forming uniform and dense nickel plating layers.", image: "images/nickel_plating.jpg" },
    { id: "n2", name: "NICKEL CATHODE", category: "nickel", origin: "Imported", desc: "Electrolytic pure nickel metal cathode sheets, ideal for premium-grade electroplating in automotive and sanitary industries.", image: "images/nickel_cathode.jpg" },
    { id: "n3", name: "NICKEL SULPHATE", category: "nickel", origin: "Imported", desc: "Premium-grade nickel sulfate crystals, the primary source of nickel ions in standard Watts electroplating baths.", image: "images/nickel_sulfate.jpg" },
    { id: "n4", name: "NICKEL 4INK", category: "nickel", origin: "Imported", desc: "High-purity 4x4 inch electrolytic nickel metal anodes, suitable for heavy-duty plating lines.", image: "images/electroplating_anode.jpg" },
    { id: "n5", name: "Nickel Chloride Powder 20 kg box", category: "nickel", origin: "Imported", desc: "High-purity nickel chloride powder, supplying chloride ions to ensure optimal anode corrosion and bath conductivity.", image: "images/nickel_chloride.jpg" },
    { id: "n6", name: "Boric Acid Etimaden Made in Turkey Packaging 25 kg", category: "nickel", origin: "Turkey", desc: "Etimaden brand boric acid, serving as the essential pH buffer to prevent burnt deposits in high current density zones.", image: "images/boric_acid.jpg" },

    // --- ZINC PLATING ---
    { id: "z1", name: "Zinc Chloride Japan", category: "zinc", origin: "Japan", desc: "Japanese-grade zinc chloride, optimized for acid chloride zinc electroplating baths, yielding excellent brightness.", image: "images/zinc_chloride_japan.jpg" },
    { id: "z2", name: "Zinc chloride ZnCl2 98%, Taiwan, 25kg/barrel", category: "zinc", origin: "Taiwan", desc: "Taiwanese high-purity zinc chloride (98%), ensuring maximum stability and excellent performance in industrial plating lines.", image: "images/zinc_chloride.jpg" },

    // --- OTHER ELECTROPLATING (CHROME, COPPER, CADMIUM, TIN, BRASS) ---
    { id: "e1", name: "Chromic Acid (Chromium Trioxide CrO3) Flakes 25 kg", category: "electroplating-other", origin: "Imported", desc: "Chromic acid flakes, the essential chemical compound for automotive decorative and hard industrial chrome plating.", image: "images/chromic_acid.jpg" },
    { id: "e2", name: "the purity of copper nuggets is > 99.50%", category: "electroplating-other", origin: "Imported", desc: "High-density copper nuggets (>99.50% purity), promoting uniform thickness and stable metal concentration in acid copper baths.", image: "images/copper_nuggets.jpg" },
    { id: "e3", name: "Tin(II) Chloride ( Stannous chloride dihydrate )", category: "electroplating-other", origin: "Imported", desc: "Stannous chloride dihydrate, widely used to deposit solderable coatings on electrical and industrial components.", image: "images/tin_chloride.jpg" },

    // --- OTHER INDUSTRIAL CHEMICALS & ACCESSORIES ---
    { id: "o1", name: "Palladium(II) chloride", category: "other", origin: "Imported", desc: "High-purity palladium chloride, essential for activating surfaces and copper metallization on non-conductive substrates.", image: "images/palladium_chloride.jpg" }
];

// --- COMPREHENSIVE CHEMICAL INDEX (FROM PROFILE) ---
const chemicalIndex = [
    // --- Nickel Plating ---
    { name: "Nickel Plating Chips (UK)", category: "nickel", origin: "United Kingdom", desc: "UK carbonyl gas refined pure nickel chips for titanium baskets." },
    { name: "Electrolytic Nickel Cathode (Vale Thompson)", category: "nickel", origin: "Canada", desc: "Premium purity full-size cathodes for high-grade electroplating." },
    { name: "Nickel Sulfate", category: "nickel", origin: "Belgium / Turkey", desc: "Main electrolyte compound for Watts nickel plating baths." },
    { name: "Nickel Chloride", category: "nickel", origin: "France / China", desc: "Conductivity salt promoting anode dissolution and bath performance." },
    { name: "Nickel Carbonate", category: "nickel", origin: "Imported", desc: "Used for pH adjustment and nickel plating bath maintenance." },
    { name: "Nickel Sulfamate (Liquid & Powder)", category: "nickel", origin: "Imported", desc: "Specialized low-stress plating salts for electroforming." },
    { name: "Brite Nickel Salt", category: "nickel", origin: "Imported", desc: "Formulated salts for achieving mirror-bright nickel deposits." },
    { name: "Nickel Brighteners (1001 / 1002 / HP)", category: "nickel", origin: "Imported", desc: "Specially formulated carrier & leveler additives." },
    { name: "Titanium Anode Baskets", category: "nickel", origin: "Imported", desc: "Corrosion-resistant anode baskets to hold nickel chips." },
    { name: "Boric Acid", category: "nickel", origin: "Turkey (Etimaden)", desc: "Essential pH buffer for nickel and zinc plating baths." },

    // --- Zinc Plating ---
    { name: "Korea Zinc (KZ) Anodes", category: "zinc", origin: "Korea", desc: "Sacrificial pure zinc metal anodes to prevent steel corrosion." },
    { name: "Taiwan Zinc Chloride (98%)", category: "zinc", origin: "Taiwan", desc: "Primary zinc source salt for acid zinc plating baths." },
    { name: "Potassium Chloride (Conducting Salt)", category: "zinc", origin: "Imported", desc: "Conductive chloride salt for cyanide-free zinc plating." },
    { name: "Zinc Cyanide", category: "zinc", origin: "Imported", desc: "Complexing zinc salt for traditional cyanide-based plating." },
    { name: "Zinc Oxide", category: "zinc", origin: "Imported", desc: "Main source of zinc in alkaline non-cyanide zinc baths." },
    { name: "Zinc Brighteners & Additives", category: "zinc", origin: "Imported", desc: "Acid zinc brighteners 1111 Mu, 2222 Br, 3333 Wi." },
    { name: "Zinc Passivators (Green, Blue, Black, Yellow)", category: "zinc", origin: "Imported", desc: "Chromating salts for conversion coating post-zinc plating." },

    // --- Chrome, Copper & Other Plating ---
    { name: "Chromic Acid (Chromium Trioxide CrO3)", category: "electroplating-other", origin: "China / Turkey / USA", desc: "Dark red flakes for decorative and hard industrial chrome plating." },
    { name: "Hard Chrome Salts", category: "electroplating-other", origin: "Imported", desc: "Formulated chromic salts with catalysts for rapid deposition." },
    { name: "Chrome Catalyst (A / 666 / conducting)", category: "electroplating-other", origin: "Imported", desc: "Additives to improve throwing power and hardness." },
    { name: "Copper Anodes (Nuggets / Balls / Phosphorous)", category: "electroplating-other", origin: "Imported", desc: "Pure Cu-DHP anodes with P 0.04-0.06% for acid copper baths." },
    { name: "Copper Sulfate", category: "electroplating-other", origin: "China / Domestic", desc: "Primary metal salt for acid copper plating and electroforming." },
    { name: "Copper Cyanide", category: "electroplating-other", origin: "Imported", desc: "Primary compound for alkaline copper strike baths." },
    { name: "Cadmium Ingots & Anodes", category: "electroplating-other", origin: "Imported", desc: "Pure cadmium metal for highly corrosion-resistant coatings." },
    { name: "Cadmium Salts & Brighteners", category: "electroplating-other", origin: "Imported", desc: "Cadmium sulfate, cadmium oxide, and cadmium mukp." },
    { name: "Brass Plating Salts (Canning / Korea)", category: "electroplating-other", origin: "Korea", desc: "Formulated copper-zinc alloy salts for decorative brass finishes." },
    { name: "Stannous Chloride (Tin Chloride)", category: "electroplating-other", origin: "Imported", desc: "Stannous chloride dihydrate for acid tin plating." },
    { name: "Tin Ingots & Tin Sulfate", category: "electroplating-other", origin: "Imported", desc: "Pure tin anodes and salts for solderable tin coatings." },
    { name: "Gold Ingots (99.5% pure LBMA)", category: "electroplating-other", origin: "Imported", desc: "Investment-grade gold nuggets for luxury jewelry plating." },
    { name: "Silver Anodes (.999 pure)", category: "electroplating-other", origin: "Imported", desc: "Soluble silver plates for decorative and electrical silver deposits." },
    { name: "Palladium Chloride & Activators", category: "electroplating-other", origin: "Imported", desc: "Catalytic salts used to activate non-conductive plastics." },

    // --- Polishing & Buffing ---
    { name: "Abrasive Belts (No. 60 to 400)", category: "polishing", origin: "Imported", desc: "Grits: 60, 80, 100, 120, 150, 180, 220, 240, 320, 400." },
    { name: "Emery Powders (Grits 60 / 90 / 120 / 150)", category: "polishing", origin: "Imported", desc: "High-grade natural corundum emery for coarse polishing." },
    { name: "Buffing Wheels (6\" to 12\" / 75P / 100P)", category: "polishing", origin: "Imported", desc: "Stitched cotton buffs and special white buffs for metal smoothing." },
    { name: "White Polish SS / Emery Floor Polish", category: "polishing", origin: "Imported", desc: "Premium abrasive compounds to achieve high-gloss mirror finishes." },

    // --- Industrial Chemicals & Equipment ---
    { name: "Caustic Soda (Pearls & Flakes)", category: "other", origin: "Imported", desc: "Sodium hydroxide, the primary industrial alkaline cleaner." },
    { name: "Soda Ash (Sodium Carbonate)", category: "other", origin: "Imported", desc: "Alkaline chemical used for neutralizations and pH control." },
    { name: "Hydrochloric Acid (HCL)", category: "other", origin: "Domestic", desc: "Strong acid for scale removal, pickling, and etching." },
    { name: "Sulfuric Acid", category: "other", origin: "Domestic", desc: "Essential acid for pickling steel and acid copper/anodizing baths." },
    { name: "Nitric Acid", category: "other", origin: "Domestic", desc: "Strong acid used for metal cleaning and passive chrome strikes." },
    { name: "Phosphoric Acid & Acetic Acid", category: "other", origin: "Imported", desc: "Acids used for surface preparation and chemical polishing." },
    { name: "Sodium Cyanide / Potassium Cyanide", category: "other", origin: "Imported", desc: "High-purity cyanides for alkaline plating bath complexes." },
    { name: "Hydrogen Peroxide (H2O2) & Ammonia", category: "other", origin: "Imported", desc: "Oxidizing agents and pH controllers for chemical processing." },
    { name: "IGBT Rectifier 3000A", category: "other", origin: "Imported", desc: "High-frequency switching rectifier power supply for electroplating." },
    { name: "PVC Tanks & Filter Clothes", category: "other", origin: "Imported", desc: "Chemical-grade PVC tanks, filter cartridges, and pumps." }
];

// Default feedback reviews list (preloaded)
const defaultReviews = [
    {
        name: "M. Saleem",
        company: "Sohrab Bicycles Vendor",
        rating: 5,
        comments: "Allied Chemicals' Nickel Anode sheets and brighteners have drastically improved the durability of our bicycle handlebars. Their technical support team solved our bath pitting problem in just one visit!"
    },
    {
        name: "Engr. Farhan",
        company: "Honda Automotive Parts Supplier",
        rating: 5,
        comments: "We use Allied's Acid Zinc Passivation systems (Olive Green and Blue). The corrosion resistance tests (salt spray) exceeded our Honda vendor requirements. Highly professional products."
    },
    {
        name: "Sheikh Haroon",
        company: "Master Sanitary Ware",
        rating: 5,
        comments: "For mirror-like chrome finishes, Allied's hard chrome salts and Falcon White polishing compounds are top-notch. Competitive pricing and reliable supply chains all over Karachi."
    }
];

// 2. STATE MANAGEMENT
let cart = [];
let reviews = [];
let currentReviewIndex = 0;
let reviewInterval = null;

// Initialize app when DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const initFuncs = [
        { name: "initNavigation", fn: initNavigation },
        { name: "initHeroAnimation", fn: initHeroAnimation },
        { name: "initProducts", fn: initProducts },
        { name: "initCart", fn: initCart },
        { name: "initProcessFlow", fn: initProcessFlow },
        { name: "initFeedback", fn: initFeedback },
        { name: "initScrollEffects", fn: initScrollEffects }
    ];

    initFuncs.forEach(item => {
        try {
            item.fn();
        } catch (err) {
            console.error(`Error in ${item.name}:`, err);
        }
    });
});

// 3. TAB NAVIGATION SYSTEM
function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll(".mobile-link");
    const sections = document.querySelectorAll(".section");
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const mobileDrawerClose = document.getElementById("mobile-drawer-close");
    const drawerOverlay = document.getElementById("drawer-overlay");
    const logoBtn = document.getElementById("nav-logo-btn");

    function activateTab(tabId) {
        // Hide all sections
        sections.forEach(sec => sec.classList.remove("active-section"));
        
        // Show target section
        const targetSection = document.getElementById(tabId);
        if (targetSection) {
            targetSection.classList.add("active-section");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        // Update active class on nav links
        navLinks.forEach(link => {
            if (link.getAttribute("data-tab") === tabId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        mobileLinks.forEach(link => {
            if (link.getAttribute("data-tab") === tabId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // Close mobile drawer if open
        closeMobileMenu();

        // Update dynamic header transition instantly
        if (typeof window.updateHeaderState === "function") {
            window.updateHeaderState();
        }
    }

    // Attach click events
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = link.getAttribute("data-tab");
            activateTab(tabId);
            window.location.hash = tabId;
        });
    });

    mobileLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const tabId = link.getAttribute("data-tab");
            activateTab(tabId);
            window.location.hash = tabId;
        });
    });

    logoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        activateTab("home");
        window.location.hash = "home";
    });

    // Mobile Menu Toggle
    function openMobileMenu() {
        mobileDrawer.classList.add("open");
        drawerOverlay.classList.add("open");
    }

    function closeMobileMenu() {
        mobileDrawer.classList.remove("open");
        drawerOverlay.classList.remove("open");
    }

    mobileToggle.addEventListener("click", openMobileMenu);
    mobileDrawerClose.addEventListener("click", closeMobileMenu);
    drawerOverlay.addEventListener("click", closeMobileMenu);

    // Read Hash on page load
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (["home", "catalog", "process", "feedback", "contact"].includes(hash)) {
            activateTab(hash);
        }
    }

    // Global switch tab exposure
    window.switchTab = function(tabId) {
        activateTab(tabId);
        window.location.hash = tabId;
    };
}

// 4. PRODUCT CATALOG HANDLER
function initProducts() {
    // Images are already mapped directly inside the products database array.

    const productGrid = document.getElementById("product-grid");
    const noResults = document.getElementById("no-results");
    const searchInput = document.getElementById("product-search");
    const clearSearchBtn = document.getElementById("clear-search");
    const resetSearchBtn = document.getElementById("reset-search");
    const categoryFilters = document.getElementById("category-filters");
    
    // Tab toggles
    const btnShowOrder = document.getElementById("btn-show-order");
    const btnShowDirectory = document.getElementById("btn-show-directory");
    const orderCatalogView = document.getElementById("order-catalog-view");
    const fullDirectoryView = document.getElementById("full-directory-view");

    let currentCategory = "all";
    let searchQuery = "";
    let activeView = "order"; // "order" or "directory"

    // Bind tab clicks
    if (btnShowOrder && btnShowDirectory) {
        btnShowOrder.addEventListener("click", () => {
            activeView = "order";
            btnShowOrder.classList.add("active");
            btnShowDirectory.classList.remove("active");
            orderCatalogView.style.display = "block";
            fullDirectoryView.style.display = "none";
            renderAll();
        });

        btnShowDirectory.addEventListener("click", () => {
            activeView = "directory";
            btnShowDirectory.classList.add("active");
            btnShowOrder.classList.remove("active");
            fullDirectoryView.style.display = "block";
            orderCatalogView.style.display = "none";
            renderAll();
        });
    }

    // Render product cards (12 main catalog items)
    function renderProducts() {
        const filtered = products.filter(p => {
            const matchesCategory = (currentCategory === "all" || p.category === currentCategory);
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 p.origin.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        // Toggle Empty State
        if (filtered.length === 0) {
            productGrid.style.display = "none";
            noResults.style.display = "block";
        } else {
            productGrid.style.display = "grid";
            noResults.style.display = "none";
            
            productGrid.innerHTML = filtered.map(p => {
                const cartItem = cart.find(item => item.id === p.id);
                const quantity = cartItem ? cartItem.qty : 1;
                const buttonText = cartItem ? '<i class="fa-solid fa-check"></i> Added' : '<i class="fa-solid fa-cart-plus"></i> Add to Order';
                const buttonClass = cartItem ? 'btn btn-secondary btn-sm' : 'btn btn-primary btn-sm';
                
                const hasImage = !!p.image;
                const cardClass = hasImage ? 'product-card' : 'product-card no-image';
                const imageContainer = hasImage ? `
                    <div class="product-image-container">
                        <img src="${p.image}" alt="${p.name}" class="product-card-img" onerror="this.style.display='none'; this.parentNode.style.display='none';">
                    </div>
                ` : '';
                
                return `
                    <div class="${cardClass}" data-id="${p.id}" data-category="${p.category}">
                        ${imageContainer}
                        <div class="product-card-header">
                            <span class="product-category-tag">${formatCategory(p.category)}</span>
                            <span class="product-origin">${p.origin}</span>
                        </div>
                        <h3>${p.name}</h3>
                        <p class="product-description">${p.desc}</p>
                        <div class="product-action-row">
                            <div class="qty-selector">
                                <button class="qty-btn dec-btn" onclick="adjustProductCardQty('${p.id}', -1)">-</button>
                                <input type="number" class="qty-input" id="qty-input-${p.id}" value="${quantity}" min="1" readonly>
                                <button class="qty-btn inc-btn" onclick="adjustProductCardQty('${p.id}', 1)">+</button>
                            </div>
                            <button class="${buttonClass}" id="add-btn-${p.id}" onclick="toggleProductInCart('${p.id}')">
                                ${buttonText}
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Render Full Directory Table (From Profile)
    function renderDirectory() {
        const directoryTbody = document.getElementById("directory-tbody");
        if (!directoryTbody) return;

        const filteredIndex = chemicalIndex.filter(p => {
            const matchesCategory = (currentCategory === "all" || p.category === currentCategory);
            const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 p.origin.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filteredIndex.length === 0) {
            directoryTbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; padding: 40px; color: var(--text-muted);">
                        <i class="fa-solid fa-magnifying-glass" style="font-size: 1.75rem; margin-bottom: 12px; display: block; color: var(--text-muted);"></i>
                        No matching chemical supplies found in the profile index.
                    </td>
                </tr>
            `;
        } else {
            directoryTbody.innerHTML = filteredIndex.map(p => {
                const whatsappText = encodeURIComponent(`Hi Allied Chemicals, I am interested in inquiring about "${p.name}" (Origin: ${p.origin}) listed in your Complete Supply Directory. Please provide pricing and availability details.`);
                return `
                    <tr>
                        <td>
                            <strong style="color: var(--primary); font-family: var(--font-heading); font-size: 0.95rem;">${p.name}</strong>
                            <span class="dir-mobile-category">${formatCategory(p.category)}</span>
                        </td>
                        <td><span class="dir-origin-badge">${p.origin}</span></td>
                        <td class="dir-desc-cell">${p.desc}</td>
                        <td>
                            <a href="https://wa.me/923122272232?text=${whatsappText}" target="_blank" rel="noopener" class="dir-inquiry-btn">
                                <i class="fa-brands fa-whatsapp"></i> Inquiry
                            </a>
                        </td>
                    </tr>
                `;
            }).join('');
        }
    }

    // Master render orchestrator
    function renderAll() {
        if (activeView === "order") {
            renderProducts();
        } else {
            renderDirectory();
        }
    }

    function formatCategory(cat) {
        switch(cat) {
            case 'nickel': return 'Nickel Plating';
            case 'zinc': return 'Zinc Plating';
            case 'polishing': return 'Polishing';
            case 'electroplating-other': return 'Chrome/Copper/Tin';
            case 'other': return 'Chemicals/Equip';
            default: return cat;
        }
    }

    // Search events
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery.length > 0) {
            clearSearchBtn.style.display = "block";
        } else {
            clearSearchBtn.style.display = "none";
        }
        renderAll();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderAll();
    });

    resetSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        currentCategory = "all";
        
        // Reset filter button styles
        const filterBtns = categoryFilters.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => {
            if (btn.getAttribute("data-category") === "all") {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        renderAll();
    });

    // Category filter click
    categoryFilters.addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-btn")) {
            const filterBtns = categoryFilters.querySelectorAll(".filter-btn");
            filterBtns.forEach(btn => btn.classList.remove("active"));
            
            e.target.classList.add("active");
            currentCategory = e.target.getAttribute("data-category");
            renderAll();
        }
    });

    // Global exposed category switcher (e.g. from footer links)
    window.switchCategoryTab = function(category) {
        currentCategory = category;
        const filterBtns = categoryFilters.querySelectorAll(".filter-btn");
        filterBtns.forEach(btn => {
            if (btn.getAttribute("data-category") === category) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        switchTab("catalog");
        renderAll();
    };

    // Global functions for card quantity manipulation
    window.adjustProductCardQty = function(productId, val) {
        const input = document.getElementById(`qty-input-${productId}`);
        if (input) {
            let current = parseInt(input.value) || 1;
            current += val;
            if (current < 1) current = 1;
            input.value = current;

            // If item is already in cart, update cart quantity
            const cartItem = cart.find(item => item.id === productId);
            if (cartItem) {
                cartItem.qty = current;
                saveAndRefreshCart();
            }
        }
    };

    // Toggle items in cart directly from catalog card
    window.toggleProductInCart = function(productId) {
        const product = products.find(p => p.id === productId);
        const input = document.getElementById(`qty-input-${productId}`);
        const qty = input ? parseInt(input.value) : 1;

        const cartIndex = cart.findIndex(item => item.id === productId);
        const button = document.getElementById(`add-btn-${productId}`);

        if (cartIndex > -1) {
            // Remove from cart
            cart.splice(cartIndex, 1);
            showToast(`Removed ${product.name} from order.`, "danger");
            if (button) {
                button.className = "btn btn-primary btn-sm";
                button.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Order';
            }
        } else {
            // Add to cart
            cart.push({
                id: product.id,
                name: product.name,
                category: product.category,
                qty: qty
            });
            showToast(`Added ${qty}x ${product.name} to order!`, "success");
            if (button) {
                button.className = "btn btn-secondary btn-sm";
                button.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            }
        }

        saveAndRefreshCart();
    };

    // Initial render
    renderAll();

    // Re-render when cart state changes (e.g. cleared or removed from cart drawer)
    window.refreshCatalogGrid = renderProducts;
}

// 5. SHOPPING CART ENGINE
function initCart() {
    const cartTrigger = document.getElementById("cart-trigger");
    const cartDrawer = document.getElementById("cart-drawer");
    const cartDrawerClose = document.getElementById("cart-drawer-close");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartGoCatalog = document.getElementById("cart-go-catalog");
    const orderInfoForm = document.getElementById("order-info-form");

    // Drawer triggers
    function openCart() {
        cartDrawer.classList.add("open");
        cartOverlay.classList.add("open");
    }

    function closeCart() {
        cartDrawer.classList.remove("open");
        cartOverlay.classList.remove("open");
    }

    cartTrigger.addEventListener("click", openCart);
    cartDrawerClose.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);
    cartGoCatalog.addEventListener("click", () => {
        closeCart();
        switchTab("catalog");
    });

    // Retrieve cart from sessionStorage
    const savedCart = sessionStorage.getItem("allied_cart");
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch(e) {
            cart = [];
        }
    }

    // Adjust quantities inside cart drawer
    window.adjustCartItemQty = function(productId, val) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.qty += val;
            if (cartItem.qty < 1) cartItem.qty = 1;
            saveAndRefreshCart();
        }
    };

    window.removeCartItem = function(productId) {
        const cartIndex = cart.findIndex(item => item.id === productId);
        if (cartIndex > -1) {
            const name = cart[cartIndex].name;
            cart.splice(cartIndex, 1);
            showToast(`Removed ${name} from order.`, "danger");
            saveAndRefreshCart();
        }
    };

    // WhatsApp and Email Submission
    document.getElementById("btn-whatsapp-order").addEventListener("click", (e) => {
        e.preventDefault();
        sendOrder("whatsapp");
    });

    document.getElementById("btn-email-order").addEventListener("click", (e) => {
        e.preventDefault();
        sendOrder("email");
    });
}

function saveAndRefreshCart() {
    sessionStorage.setItem("allied_cart", JSON.stringify(cart));
    updateCartUI();
    
    // Sync buttons in the product catalog
    if (window.refreshCatalogGrid) {
        window.refreshCatalogGrid();
    }
}

function updateCartUI() {
    const badge = document.getElementById("cart-badge");
    const emptyCart = document.getElementById("empty-cart");
    const cartFilled = document.getElementById("cart-filled");
    const cartItemsList = document.getElementById("cart-items-list");
    const totalQtySpan = document.getElementById("cart-total-qty");

    // Total quantity calculations
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.innerText = cart.length; // Number of unique items
    totalQtySpan.innerText = totalQty;

    if (cart.length === 0) {
        emptyCart.style.display = "block";
        cartFilled.style.display = "none";
    } else {
        emptyCart.style.display = "none";
        cartFilled.style.display = "flex";

        cartItemsList.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <span>${item.qty} Packs / Bags</span>
                </div>
                <div class="cart-item-actions">
                    <div class="qty-selector">
                        <button class="qty-btn" onclick="adjustCartItemQty('${item.id}', -1)">-</button>
                        <input type="number" class="qty-input" value="${item.qty}" readonly>
                        <button class="qty-btn" onclick="adjustCartItemQty('${item.id}', 1)">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeCartItem('${item.id}')" aria-label="Remove item">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Generate message and invoke checkout
function sendOrder(method) {
    const name = document.getElementById("order-name").value.trim();
    const company = document.getElementById("order-company").value.trim();
    const phone = document.getElementById("order-phone").value.trim();
    const message = document.getElementById("order-message").value.trim();

    if (!name || !phone) {
        showToast("Please fill out your Name and Contact Number.", "danger");
        
        // Highlight inputs
        document.getElementById("order-name").focus();
        return;
    }

    // Build invoice string
    let orderDetails = `*ALLIED CHEMICALS - CLIENT ORDER INQUIRY*\n`;
    orderDetails += `-----------------------------------------\n`;
    orderDetails += `*Customer:* ${name}\n`;
    if (company) orderDetails += `*Company:* ${company}\n`;
    orderDetails += `*Contact Phone:* ${phone}\n`;
    orderDetails += `-----------------------------------------\n`;
    orderDetails += `*ORDER ITEMS LIST:*\n`;
    
    cart.forEach((item, idx) => {
        orderDetails += `${idx + 1}. ${item.name} (${formatCategoryName(item.category)}) - *Qty: ${item.qty} units*\n`;
    });
    
    orderDetails += `-----------------------------------------\n`;
    if (message) orderDetails += `*Special Instructions:* ${message}\n`;
    orderDetails += `*Sent from Allied Chemicals Portal.*\n`;

    if (method === "whatsapp") {
        // Direct WhatsApp API Link
        const waUrl = `https://wa.me/923122272232?text=${encodeURIComponent(orderDetails)}`;
        window.open(waUrl, "_blank");
    } else {
        // Email Client Link
        const subject = encodeURIComponent(`Chemical Order Inquiry - ${name}`);
        const body = encodeURIComponent(orderDetails.replace(/\*/g, "")); // remove markdown bold for email
        window.open(`mailto:Allied.chemical@outlook.com?subject=${subject}&body=${body}`);
    }

    // Clear cart upon checkout and notify
    cart = [];
    saveAndRefreshCart();
    
    // Reset form
    document.getElementById("order-info-form").reset();
    
    // Close Drawer
    const cartDrawer = document.getElementById("cart-drawer");
    const cartOverlay = document.getElementById("cart-overlay");
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");

    showToast("Order request processed! Thank you for ordering.", "success");
}

function formatCategoryName(cat) {
    switch(cat) {
        case 'nickel': return 'Nickel Plating';
        case 'zinc': return 'Zinc Plating';
        case 'polishing': return 'Polishing Material';
        case 'electroplating-other': return 'Electroplating Additive';
        case 'other': return 'Chemicals & Accessories';
        default: return cat;
    }
}

// 6. PROCESS FLOW GRAPHICS SYSTEM
function initProcessFlow() {
    const indicators = document.querySelectorAll(".process-step-btn");
    const detailCards = document.querySelectorAll(".process-detail-card");

    indicators.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active states
            indicators.forEach(i => i.classList.remove("active"));
            detailCards.forEach(c => c.classList.remove("active"));

            // Add active states
            btn.classList.add("active");
            const stepNum = btn.getAttribute("data-step");
            const targetCard = document.getElementById(`process-step-${stepNum}`);
            if (targetCard) {
                targetCard.classList.add("active");
            }
        });
    });
}

// 7. CLIENT FEEDBACK ENGINE
function initFeedback() {
    const feedbackForm = document.getElementById("feedback-form");
    const stars = document.querySelectorAll("#star-rating .star");
    const ratingInput = document.getElementById("fb-rating");
    
    // Handle local storage storage
    const localSaved = localStorage.getItem("allied_reviews");
    if (localSaved) {
        try {
            reviews = JSON.parse(localSaved);
        } catch(e) {
            reviews = [...defaultReviews];
        }
    } else {
        reviews = [...defaultReviews];
    }

    // Star rating picker
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const rating = parseInt(star.getAttribute("data-rating"));
            ratingInput.value = rating;

            // Paint stars
            stars.forEach(s => {
                const sRating = parseInt(s.getAttribute("data-rating"));
                if (sRating <= rating) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });
        });
    });

    // Default 5 stars on load
    stars.forEach(s => s.classList.add("selected"));

    // Form Submission
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("fb-name").value.trim();
        const company = document.getElementById("fb-company").value.trim();
        const rating = parseInt(ratingInput.value) || 5;
        const comments = document.getElementById("fb-comments").value.trim();

        if (!name || !company || !comments) {
            showToast("Please fill out all required fields.", "danger");
            return;
        }

        const newReview = { name, company, rating, comments };
        reviews.unshift(newReview); // Put on top
        localStorage.setItem("allied_reviews", JSON.stringify(reviews));

        // UI success action
        showToast("Review submitted successfully! Thank you.", "success");
        feedbackForm.reset();
        
        // Reset stars to 5
        stars.forEach(s => s.classList.add("selected"));
        ratingInput.value = 5;

        // Re-render and navigate carousel to top
        renderReviewsCarousel();
        currentReviewIndex = 0;
        showActiveReview();
    });

    // Carousel Rendering
    const container = document.getElementById("feedback-container");
    const prevBtn = document.getElementById("prev-feedback");
    const nextBtn = document.getElementById("next-feedback");

    function renderReviewsCarousel() {
        if (reviews.length === 0) {
            container.innerHTML = `<div class="text-center"><p>No reviews yet.</p></div>`;
            return;
        }

        container.innerHTML = reviews.map((r, idx) => {
            let starHtml = "";
            for (let i = 1; i <= 5; i++) {
                if (i <= r.rating) {
                    starHtml += `<i class="fa-solid fa-star"></i>`;
                } else {
                    starHtml += `<i class="fa-regular fa-star"></i>`;
                }
            }
            
            return `
                <div class="feedback-card" id="feedback-card-${idx}">
                    <div class="feedback-stars">${starHtml}</div>
                    <p class="feedback-text">"${r.comments}"</p>
                    <div class="feedback-author">${r.name}</div>
                    <div class="feedback-author-company">${r.company}</div>
                </div>
            `;
        }).join('');
    }

    function showActiveReview() {
        const cards = container.querySelectorAll(".feedback-card");
        cards.forEach(c => c.classList.remove("active"));
        
        const activeCard = document.getElementById(`feedback-card-${currentReviewIndex}`);
        if (activeCard) {
            activeCard.classList.add("active");
        }
    }

    function nextReview() {
        currentReviewIndex++;
        if (currentReviewIndex >= reviews.length) {
            currentReviewIndex = 0;
        }
        showActiveReview();
    }

    function prevReview() {
        currentReviewIndex--;
        if (currentReviewIndex < 0) {
            currentReviewIndex = reviews.length - 1;
        }
        showActiveReview();
    }

    prevBtn.addEventListener("click", () => {
        clearInterval(reviewInterval);
        prevReview();
        startAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        clearInterval(reviewInterval);
        nextReview();
        startAutoSlide();
    });

    function startAutoSlide() {
        reviewInterval = setInterval(nextReview, 6000); // Change review every 6 seconds
    }

    renderReviewsCarousel();
    showActiveReview();
    startAutoSlide();
}

// 8. SCROLL & TRANSITION UTILITIES
function initScrollEffects() {
    const scrollTopBtn = document.getElementById("scroll-top-btn");
    const header = document.querySelector(".header");

    function updateHeaderState() {
        const activeSection = document.querySelector(".active-section");
        const activeTab = activeSection ? activeSection.id : "home";
        
        if (window.scrollY > 20 || activeTab !== "home") {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    // Expose to window so activateTab can trigger it
    window.updateHeaderState = updateHeaderState;

    // Scroll trigger show button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
        
        updateHeaderState();
        
        // Trigger scroll fade-ins
        revealOnScroll();
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Reveal elements on scroll
    const animElements = document.querySelectorAll("[data-animate]");
    
    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.9;
        
        animElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                el.classList.add("animated");
            }
        });
    }

    // Trigger on load
    setTimeout(() => {
        updateHeaderState();
        revealOnScroll();
    }, 300);
}

// 9. DYNAMIC TOAST NOTIFICATION
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    const toastIcon = document.getElementById("toast-icon");

    if (!toast) return;

    toastMsg.innerText = message;
    
    if (type === "success") {
        toast.style.borderLeftColor = "var(--success)";
        toastIcon.className = "fa-solid fa-circle-check toast-icon text-success";
    } else {
        toast.style.borderLeftColor = "var(--danger)";
        toastIcon.className = "fa-solid fa-circle-xmark toast-icon text-danger";
    }

    toast.classList.add("show");
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3200);
}

// 10. GLOBAL BANNER BACKGROUND ANIMATION (CHEMICAL PRODUCT SYMBOLS & BONDS)
function initHeroAnimation() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;

    // Force autoplay for background video (bypasses browser autoplay restrictions)
    const bgVideo = document.querySelector(".hero-video-bg");
    if (bgVideo) {
        try {
            const playPromise = bgVideo.play();
            if (playPromise !== undefined && typeof playPromise.catch === "function") {
                playPromise.catch(err => {
                    console.log("Autoplay blocked, adding user gesture triggers: ", err);
                    const forcePlay = () => {
                        bgVideo.play().catch(() => {});
                        document.removeEventListener("click", forcePlay);
                        document.removeEventListener("touchstart", forcePlay);
                    };
                    document.addEventListener("click", forcePlay);
                    document.addEventListener("touchstart", forcePlay);
                });
            }
        } catch (playErr) {
            console.log("Error trying to play video: ", playErr);
        }
    }

    const ctx = canvas.getContext("2d");
    let particles = [];
    
    // Set internal resolution to match layout size
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    function resizeCanvas() {
        if (!canvas) return;
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        initParticles();
    }

    // Handle resize and window load
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("load", resizeCanvas);
    
    // Trigger resize periodically to handle late layout shifts (like images loading)
    for (let delay of [100, 300, 500, 1000, 2000, 3000]) {
        setTimeout(resizeCanvas, delay);
    }

    // Preload Allied Logo and Product Images
    const logoImg = new Image();
    logoImg.src = 'images/logo.jpg';

    const pImages = [
        'images/nickel_plating.jpg',
        'images/nickel_cathode.jpg',
        'images/boric_acid.jpg',
        'images/copper_nuggets.jpg',
        'images/chromic_acid.jpg',
        'images/zinc_chloride.jpg',
        'images/rust_soak.png'
    ].map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    // Product chemical elements to display in animation (metallic and high-contrast colors)
    const chemSymbols = [
        { symbol: "Ni", name: "Nickel", color: "#1e293b", strokeColor: "#64748b" }, // Slate
        { symbol: "Zn", name: "Zinc", color: "#1e3a8a", strokeColor: "#3b82f6" },   // Royal Blue
        { symbol: "Cr", name: "Chrome", color: "#0c4a6e", strokeColor: "#0284c7" }, // Deep Sky Blue
        { symbol: "Cu", name: "Copper", color: "#7c2d12", strokeColor: "#ea580c" }, // Copper Orange
        { symbol: "Sn", name: "Tin", color: "#311042", strokeColor: "#8b5cf6" },    // Indigo/Tin
        { symbol: "Cd", name: "Cadmium", color: "#064e3b", strokeColor: "#10b981" } // Forest Green
    ];

    // Particle class representing chemical bubbles with elements
    class ChemParticle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 50 + 10; // start slightly below the bottom edge of the banner
            this.size = Math.random() * 10 + 18; // Slightly larger bubbles (18px to 28px) for image clarity
            this.speedY = -(Math.random() * 0.4 + 0.2); // float upward steadily
            this.speedX = Math.random() * 0.4 - 0.2; // slight drift
            this.opacity = Math.random() * 0.25 + 0.55; // Opacity value
            
            // Randomly choose particle type: 'symbol', 'logo', or 'product'
            const rand = Math.random();
            if (rand < 0.45) {
                // Chemical symbol
                this.type = 'symbol';
                const element = chemSymbols[Math.floor(Math.random() * chemSymbols.length)];
                this.symbol = element.symbol;
                this.color = element.color;
                this.strokeColor = element.strokeColor;
            } else if (rand < 0.65) {
                // Company logo
                this.type = 'logo';
                this.img = logoImg;
                this.strokeColor = "#0f2d59"; // Steel blue border
            } else {
                // Product image
                this.type = 'product';
                this.img = pImages[Math.floor(Math.random() * pImages.length)];
                this.strokeColor = "#2563eb"; // Cobalt blue border
            }
        }

        update(mouse) {
            this.y += this.speedY;
            this.x += this.speedX;

            // Mouse interaction (repel relative to canvas coords)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 130) {
                    const force = (130 - dist) / 130;
                    this.x += (dx / dist) * force * 3;
                    this.y += (dy / dist) * force * 3;
                }
            }

            // Recycle if particle goes past the top or sides of the canvas banner
            if (this.y < -this.size * 2 || this.x < -this.size * 2 || this.x > width + this.size * 2) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            
            // Draw soft drop shadow for 3D look
            ctx.shadowColor = "rgba(15, 23, 42, 0.16)";
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 5;

            // Draw white solid bubble background
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();

            // Turn off shadow for outline and text/image
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;

            if ((this.type === 'logo' || this.type === 'product') && this.img && this.img.complete && this.img.naturalWidth !== 0) {
                // Draw clipped image
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size - 1.5, 0, Math.PI * 2);
                ctx.clip();
                ctx.drawImage(this.img, this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
                ctx.restore();
            } else {
                // Draw chemical symbol inside (bold, high-contrast)
                ctx.font = `bold ${Math.floor(this.size * 0.8)}px 'Outfit', sans-serif`;
                ctx.fillStyle = this.color || "#0f2d59";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(this.symbol || "Ni", this.x, this.y);
            }

            // Draw glowing outline
            ctx.strokeStyle = this.strokeColor;
            ctx.lineWidth = 2.5;
            ctx.stroke();

            ctx.restore();
        }
    }

    function initParticles() {
        particles = [];
        // Determine count based on width of the banner
        const particleCount = Math.min(Math.floor(width / 55), 22);
        for (let i = 0; i < particleCount; i++) {
            const p = new ChemParticle();
            p.y = Math.random() * height; // distribute initially
            particles.push(p);
        }
    }

    initParticles();

    // Mouse coordinates relative to canvas bounding rect
    const mouse = { x: null, y: null };
    
    const heroBanner = document.querySelector(".hero-banner");
    if (heroBanner) {
        heroBanner.addEventListener("mousemove", (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        heroBanner.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Update and draw particles
        particles.forEach(p => {
            p.update(mouse);
            p.draw();
        });

        // Draw chemical bonds between close nodes
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 130) {
                    const alpha = (130 - dist) / 130 * 0.18;
                    ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}
