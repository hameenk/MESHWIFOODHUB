/**
 * MESHWI FOOD HUB — MENU DATA
 * ----------------------------
 * PRICES ARE NOT SET. This structure is ready for the owner to confirm
 * final menu items, prices, and availability before publishing.
 *
 * Each item supports:
 *  id, name, description, category, price (null until confirmed),
 *  image, bestseller, spiceLevel (0-3), dietary ("veg" | "non-veg"),
 *  available (true/false)
 */
const MESHWI_MENU = [
  // ---------- MANDI ----------
  { id: "mandi-normal-alfaham", name: "Normal Alfaham Mandi", description: "Slow-cooked aromatic rice layered with tender grilled chicken, finished with traditional Arabian spice.", category: "Mandi", price: 880, image: "mandi.png", bestseller: true, spiceLevel: 1, dietary: "non-veg", available: true },
  { id: "mandi-peri-alfaham", name: "Peri Peri Alfaham Mandi", description: "Our signature Mandi rice topped with fiery peri peri grilled chicken.", category: "Mandi", price: null, image: "mandi.png", bestseller: true, spiceLevel: 2, dietary: "non-veg", available: true },
  { id: "mandi-rice", name: "Mandi Rice", description: "Fragrant slow-cooked Mandi rice, prepared the traditional way.", category: "Mandi", price: null, image: "mandi.png", bestseller: false, spiceLevel: 0, dietary: "veg", available: true },

  // ---------- SHAWARMA ----------
  { id: "shawarma-roll", name: "Roll Shawarma", description: "Classic hand-rolled shawarma with fresh vegetables and house sauces.", category: "Shawarma", price: null, image: "shawarma.png", bestseller: false, spiceLevel: 1, dietary: "non-veg", available: true },
  { id: "shawarma-cheese", name: "Cheese Shawarma", description: "Loaded with melted cheese for an extra indulgent bite.", category: "Shawarma", price: null, image: "shawarma.png", bestseller: true, spiceLevel: 1, dietary: "non-veg", available: true },
  { id: "shawarma-mexican", name: "Mexican Shawarma", description: "A bold twist with Mexican-style seasoning and salsa.", category: "Shawarma", price: null, image: "shawarma.png", bestseller: false, spiceLevel: 2, dietary: "non-veg", available: true },
  { id: "shawarma-signature-box", name: "Signature Box Shawarma", description: "Meshwi's own recipe, packed fresh in a signature box.", category: "Shawarma", price: null, image: "shawarma.png", bestseller: true, spiceLevel: 1, dietary: "non-veg", available: true },
  { id: "shawarma-plate", name: "Plate Shawarma", description: "A generous plate portion, perfect for sharing or a full meal.", category: "Shawarma", price: null, image: "shawarma.png", bestseller: false, spiceLevel: 1, dietary: "non-veg", available: true },
  { id: "shawarma-special-chicken", name: "Special Chicken Shawarma", description: "Our guests' favourite — extra chicken, extra flavour.", category: "Shawarma", price: null, image: "shawarma.png", bestseller: true, spiceLevel: 1, dietary: "non-veg", available: true },
  { id: "shawarma-full-meat", name: "Full Meat Shawarma", description: "Generously filled with succulent seasoned meat.", category: "Shawarma", price: null, image: "shawarma.png", bestseller: false, spiceLevel: 1, dietary: "non-veg", available: true },

  // ---------- BBQ & GRILLS ----------
  { id: "bbq-meshwi-chicken", name: "Meshwi BBQ Chicken", description: "Flame-grilled whole chicken marinated in our signature BBQ blend.", category: "BBQ & Grills", price: null, image: "bbq-chicken.png", bestseller: true, spiceLevel: 2, dietary: "non-veg", available: true },
  { id: "bbq-peri-alfaham", name: "Peri Peri Alfaham", description: "Charcoal-grilled Alfaham chicken finished with peri peri seasoning.", category: "BBQ & Grills", price: null, image: "peri-peri-alfaham.png", bestseller: true, spiceLevel: 2, dietary: "non-veg", available: true },
  { id: "bbq-alfaham-combo", name: "Alfaham BBQ Combo", description: "A combination platter of our best-loved grilled favourites.", category: "BBQ & Grills", price: null, image: "peri-peri-alfaham.png", bestseller: false, spiceLevel: 2, dietary: "non-veg", available: true },

  // ---------- BURGERS & ROLLS ----------
  { id: "burger-zinger", name: "Zinger Burger", description: "Crispy fried chicken fillet, fresh lettuce and house mayo.", category: "Burgers & Rolls", price: null, image: "burger.png", bestseller: false, spiceLevel: 1, dietary: "non-veg", available: true },
  { id: "roll-zinger", name: "Zinger Roll", description: "Crispy chicken wrapped fresh with crunchy veggies.", category: "Burgers & Rolls", price: null, image: "burger.png", bestseller: false, spiceLevel: 1, dietary: "non-veg", available: true },
  { id: "roll-rumali-zinger", name: "Rumali Zinger Roll", description: "Zinger filling wrapped in soft rumali-style flatbread.", category: "Burgers & Rolls", price: null, image: "burger.png", bestseller: false, spiceLevel: 1, dietary: "non-veg", available: true },

  // ---------- JUICES, MOJITOS, SHAKES & BEVERAGES ----------
  { id: "bev-virgin-mojito", name: "Virgin Mojito", description: "Refreshing mint and lime mocktail, served chilled.", category: "Juices & Mojitos", price: null, image: "mojito.png", bestseller: true, spiceLevel: 0, dietary: "veg", available: true },
  { id: "bev-fresh-juice", name: "Fresh Juice", description: "Seasonal fresh fruit juice, made to order.", category: "Juices & Mojitos", price: null, image: "mojito.png", bestseller: false, spiceLevel: 0, dietary: "veg", available: true },
  { id: "bev-lime-juice", name: "Lime Juice", description: "Classic sweet or salted lime juice.", category: "Juices & Mojitos", price: null, image: "mojito.png", bestseller: false, spiceLevel: 0, dietary: "veg", available: true },
  { id: "bev-grape-lime", name: "Grape Lime Juice", description: "A fruity grape and lime blend.", category: "Juices & Mojitos", price: null, image: "mojito.png", bestseller: false, spiceLevel: 0, dietary: "veg", available: true },
  { id: "bev-mint-lime", name: "Mint Lime Juice", description: "Cooling mint and lime combination.", category: "Juices & Mojitos", price: null, image: "mojito.png", bestseller: false, spiceLevel: 0, dietary: "veg", available: true },
  { id: "bev-cold-coffee", name: "Cold Coffee", description: "Chilled, creamy and lightly sweetened.", category: "Shakes & Beverages", price: null, image: "sharjah-shake.png", bestseller: false, spiceLevel: 0, dietary: "veg", available: true },
  { id: "bev-oreo-shake", name: "Oreo Shake", description: "Thick milkshake blended with crushed Oreo cookies.", category: "Shakes & Beverages", price: null, image: "sharjah-shake.png", bestseller: true, spiceLevel: 0, dietary: "veg", available: true },
  { id: "bev-sharjah-shake", name: "Sharjah Shake", description: "Meshwi's signature specialty shake.", category: "Shakes & Beverages", price: null, image: "sharjah-shake.png", bestseller: true, spiceLevel: 0, dietary: "veg", available: false }
];

const MESHWI_MENU_CATEGORIES = [
  "Mandi",
  "Shawarma",
  "BBQ & Grills",
  "Burgers & Rolls",
  "Juices & Mojitos",
  "Shakes & Beverages"
];
