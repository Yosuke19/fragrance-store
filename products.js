/*
  NOTESDECOEUR PRODUCT CATALOG

  Add or edit products in the list below. The shop, search, filters,
  favorites, product popup, and cart all update automatically.

  Prices are starter atomizer prices and should be replaced with your
  final prices after bottle cost, packaging, and margin are confirmed.
*/

const atomizerPrices = (sample2ml, atomizer5ml, atomizer10ml) => [
  { name: "2ml Sample", price: sample2ml },
  { name: "5ml Atomizer", price: atomizer5ml },
  { name: "10ml Atomizer", price: atomizer10ml }
];

window.PERFUMES = [
  {
    id: 1,
    brand: "VERSACE",
    name: "Crystal Noir",
    family: "Floral",
    image: "https://kapao.fr/66940/crystal-noir-edp.jpg",
    shortDescription: "A dark, creamy floral warmed with spice and sandalwood.",
    description: "Crystal Noir opens with peppery cardamom and ginger before a lush gardenia heart takes over. Coconut, amber, musk, and sandalwood give the drydown its smooth, mysterious warmth.",
    notes: ["Cardamom", "Gardenia", "Coconut", "Sandalwood", "Amber"],
    badge: "BESTSELLER",
    sizes: atomizerPrices(8, 18, 32)
  },
  {
    id: 2,
    brand: "CHLOE",
    name: "Chloe Eau de Parfum",
    family: "Floral",
    image: "https://www.perfumepoint.com.tr/chloe-signature-edp-75-ml-kadin-parfum-chloe-20797-18-B.jpg",
    shortDescription: "Airy peony and lychee wrapped in an elegant rose bouquet.",
    description: "A luminous floral built around fresh, modern rose. Lychee and peony create a soft opening, while magnolia, amber, and cedar leave a clean and polished trail.",
    notes: ["Peony", "Lychee", "Rose", "Magnolia", "Cedar"],
    sizes: atomizerPrices(7, 16, 28)
  },
  {
    id: 3,
    brand: "THEODOROS KALOTINIS",
    name: "Lemon Tart",
    family: "Gourmand",
    image: "https://fraguru.com/photogram/p1200/fu/92/495dGK59k8vSvYZR.jpg",
    shortDescription: "Bright lemon zest folded into sugar, butter, and vanilla pastry.",
    description: "A cheerful citrus gourmand that captures the contrast of sharp lemon zest and a creamy baked crust. Sugared vanilla softens the edges without hiding the sparkling citrus.",
    notes: ["Lemon zest", "Sugar", "Butter", "Vanilla", "Pastry accord"],
    badge: "NEW",
    sizes: atomizerPrices(7, 14, 25)
  },
  {
    id: 4,
    brand: "GUERLAIN",
    name: "L'Instant",
    family: "Floral",
    image: "https://www.druni.es/media/catalog/product/6/0/6006303.jpg?canvas=700%3A700&fit=bounds&height=700&quality=80&width=700",
    shortDescription: "Honeyed magnolia, vanilla, and amber with a soft citrus glow.",
    description: "L'Instant balances radiant magnolia and iris with golden honey and warm vanilla. Citrus and apple keep the opening light before amber and benzoin deepen the finish.",
    notes: ["Magnolia", "Honey", "Vanilla", "Amber", "Benzoin"],
    sizes: atomizerPrices(8, 18, 32)
  },
  {
    id: 5,
    brand: "NISHANE",
    name: "Hundred Silent Ways",
    family: "Floral",
    image: "https://noseparis.com/media/catalog/product/cache/347e24147afc53942168a65937a6a684/n/o/nose_paris_0041_nishane_hundred_silent_ways.png",
    shortDescription: "Creamy white florals, ripe peach, and a velvety vanilla base.",
    description: "Tuberose, peach, and mandarin introduce a rich floral-fruity extrait. Gardenia and jasmine bloom at the center, settling into vanilla, sandalwood, and earthy vetiver.",
    notes: ["Tuberose", "Peach", "Gardenia", "Vanilla", "Sandalwood"],
    badge: "BESTSELLER",
    sizes: atomizerPrices(11, 26, 48)
  },
  {
    id: 6,
    brand: "LATTAFA",
    name: "Nebras",
    family: "Gourmand",
    image: "https://www.dubai-aroma.co.za/cdn/shop/files/nebras-perfume-bottle-against-white-background.jpg?v=1756564216&width=500",
    shortDescription: "Red berries and cacao melted into sweet vanilla and amber.",
    description: "Nebras is a plush gourmand where juicy red berries brighten a heart of vanilla, cacao, and rose. Tonka bean, amber, musk, and sugar create a warm, comforting finish.",
    notes: ["Red berries", "Vanilla", "Cacao", "Tonka bean", "Amber"],
    sizes: atomizerPrices(5, 11, 18)
  },
  {
    id: 7,
    brand: "JULIANNA'S PERFUME",
    name: "Time for Romance",
    family: "Gourmand",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.109408.2x.jpg",
    shortDescription: "Spiced coffee and caramel softened by vanilla and cashmere woods.",
    description: "Inspired by Minuit et Demi, this warm evening scent layers cardamom and coffee over caramel. Vanilla, tobacco, cashmeran, cedar, and musk form a smooth, lingering base.",
    notes: ["Cardamom", "Coffee", "Caramel", "Vanilla", "Cashmeran"],
    sizes: atomizerPrices(7, 14, 24)
  },
  {
    id: 8,
    brand: "JULIANNA'S PERFUME",
    name: "Catwalk",
    family: "Woody",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
    shortDescription: "Smoky vanilla, pepper, incense, and supple suede.",
    description: "A bold amber-vanilla scent inspired by Babycat. Pepper and elemi lead into smoky incense and saffron, followed by bourbon vanilla, suede, and dry cedarwood.",
    notes: ["Black pepper", "Incense", "Saffron", "Bourbon vanilla", "Suede"],
    sizes: atomizerPrices(7, 14, 24)
  },
  {
    id: 9,
    brand: "TIZIANA TERENZI",
    name: "Orza",
    family: "Floral",
    image: "https://static.thcdn.com/productimg/original/14605084-7445270990057694.jpg",
    shortDescription: "Lush berries and tropical fruit over flowers, caramel, and vanilla.",
    description: "Orza opens in a sweep of wild berries, green apple, plum, and coconut. An opulent floral heart gives way to caramel, vanilla, sandalwood, amber, and musk.",
    notes: ["Wild berries", "Green apple", "Coconut", "Magnolia", "Caramel", "Vanilla"],
    sizes: atomizerPrices(12, 29, 54)
  },
  {
    id: 10,
    brand: "MAISON ALHAMBRA",
    name: "Anarch",
    family: "Floral",
    image: "https://cdn.atacadoconnect.com/produtos/1288360/perfume-maison-alhambra-anarch-eau-de-parfum-unissex-30ml-1288360-83045.webp",
    shortDescription: "Juicy fruit and white flowers resting on vanilla and soft woods.",
    description: "A generous floral-fruity blend with bright mandarin, peach, and pear around jasmine, rose, tuberose, and orange blossom. Vanilla, amber, sandalwood, and musk soften the base.",
    notes: ["Mandarin", "Peach", "Jasmine", "Tuberose", "Vanilla", "Sandalwood"],
    sizes: atomizerPrices(5, 11, 19)
  },
  {
    id: 11,
    brand: "SOKI LONDON",
    name: "Aphrodite",
    family: "Fresh",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.83804.2x.jpg",
    shortDescription: "Juicy mango, lotus, and coconut with a cool aquatic breeze.",
    description: "Aphrodite pairs ripe mango with airy lotus and green palm leaf. Coconut and aquatic notes keep the tropical composition fresh, smooth, and easy to wear.",
    notes: ["Mango", "Lotus", "Palm leaf", "Coconut", "Aquatic notes"],
    sizes: atomizerPrices(9, 21, 39)
  },
  {
    id: 12,
    brand: "SHARQIYAT",
    name: "Zeena",
    family: "Gourmand",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.109882.2x.jpg",
    shortDescription: "Pineapple and peach layered with coconut, tuberose, and chocolate.",
    description: "Zeena begins with pineapple, peach, and blackcurrant before turning creamy with coconut and tuberose. A touch of chocolate melts into sandalwood and musk.",
    notes: ["Pineapple", "Peach", "Coconut", "Tuberose", "Chocolate", "Musk"],
    sizes: atomizerPrices(5, 11, 19)
  },
  {
    id: 13,
    brand: "AFNAN",
    name: "La Fleur Bouquet",
    family: "Floral",
    image: "https://fimgs.net/mdimg/perfume-thumbs/375x500.70707.2x.jpg",
    shortDescription: "A soft bouquet of peony and jasmine brightened by peach and lychee.",
    description: "Orange blossom, jasmine, and peony create a luminous floral opening. Lychee, peach, and bergamot add fruit and sparkle, while musk, moss, and petalia leave a graceful trail.",
    notes: ["Peony", "Jasmine", "Lychee", "Peach", "Musk", "Moss"],
    sizes: atomizerPrices(5, 11, 19)
  },
  {
    id: 14,
    brand: "KAYALI",
    name: "Vanilla | 28",
    family: "Gourmand",
    image: "https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw344433d5/products/KAYALI/UK200062137_KAYALI.jpg",
    shortDescription: "Brown sugar and vanilla orchid enriched with amber and tonka.",
    description: "A deep, layered vanilla where vanilla orchid and jasmine meet brown sugar and tonka bean. Amber, musk, and patchouli give the sweetness warmth and lasting depth.",
    notes: ["Vanilla orchid", "Brown sugar", "Tonka bean", "Amber", "Patchouli"],
    badge: "BESTSELLER",
    sizes: atomizerPrices(8, 18, 32)
  },
  {
    id: 15,
    brand: "GIORGIO ARMANI",
    name: "Ocean di Gioia",
    family: "Fresh",
    image: "https://cdn.awsli.com.br/2500x2500/1650/1650992/produto/126187384/de8f7e0ed6.jpg",
    shortDescription: "Crisp pear and water jasmine carried by clean musk and sandalwood.",
    description: "A bright aquatic floral with juicy pear, fresh citrus, and leafy green notes. Water jasmine, lily-of-the-valley, and rose float above a clean musk and sandalwood base.",
    notes: ["Pear", "Water jasmine", "Lily-of-the-valley", "Musk", "Sandalwood"],
    sizes: atomizerPrices(7, 16, 29)
  },
  {
    id: 16,
    brand: "NORTH STAG / PARIS CORNER",
    name: "Phenominal Quatorze XIV",
    family: "Woody",
    image: "https://assets.goldenscent.com/catalog/product/cache/1/small_image/750x750/9df78eab33525d08d6e5fb8d27136e95/6/2/6295875874519_-_north_stag_-_phenomenal_-_100_ml_-_fd.png",
    shortDescription: "Pink pepper and neroli over rum, tobacco, vetiver, and vanilla.",
    description: "Sparkling lemon, neroli, and pink pepper introduce an aromatic heart of clary sage, rum, and vetiver. Vanilla, tobacco leaf, and styrax create a smooth, smoky finish.",
    notes: ["Pink pepper", "Neroli", "Rum", "Vetiver", "Vanilla", "Tobacco"],
    sizes: atomizerPrices(6, 13, 22)
  },
  {
    id: 17,
    brand: "PARIS CORNER",
    name: "Taskeen Caramel Cascade",
    family: "Gourmand",
    image: "https://emiratesoud.co.uk/cdn/shop/files/Taskeen-Caramel-Cascade-Perfume-100ml-EDP-Paris-Corner-169839624.jpg?v=1750691236",
    shortDescription: "Milky caramel, honey, and tonka finished with vanilla musk.",
    description: "A dessert-like gourmand opening with caramel and warm milk. Honey and tonka add richness before vanilla, white musk, and amber settle into a soft, creamy drydown.",
    notes: ["Caramel", "Milk", "Honey", "Tonka bean", "Vanilla", "White musk"],
    sizes: atomizerPrices(5, 11, 18)
  },
  {
    id: 18,
    brand: "MAISON CRIVELLI",
    name: "Iris Malikhân",
    family: "Woody",
    image: "https://metropoliten.rs/upload/catalog/variation/3826/06960_1_66e955bdaef54.jpg",
    shortDescription: "Powdery iris contrasted with green resin, leather, and vanilla.",
    description: "A striking powdery-gourmand leather scent. Green cypress, lentisque, and galbanum frame rich orris butter and mimosa, while vanilla, amber, leather, and musk create a warm contrast.",
    notes: ["Orris butter", "Galbanum", "Mimosa", "Vanilla", "Leather", "Amber"],
    sizes: atomizerPrices(12, 28, 52)
  },
  {
    id: 19,
    brand: "THE HOUSE OF OUD",
    name: "Wabisabi",
    family: "Fresh",
    image: "https://thetwobarbers.com/image/cache/catalog/product/the-house-of-oud-eau-de-parfum-67-500x500.jpg",
    shortDescription: "Wasabi and citrus leaves sharpen a radiant white-floral heart.",
    description: "An unconventional fresh floral where lime, wasabi, citrus leaves, pear, and pink pepper sparkle above jasmine, rose, and ylang-ylang. Vanilla, musk, and cinnamon soften the finish.",
    notes: ["Wasabi", "Lime", "Pear", "Jasmine sambac", "Vanilla", "Musk"],
    sizes: atomizerPrices(11, 26, 48)
  },
  {
    id: 20,
    brand: "EMIR / PARIS CORNER",
    name: "Forbidden Sugar",
    family: "Gourmand",
    image: "https://ionelli.bg/cdn/img/products/1190/emir-forbidden-sugar-extrait-de-parfum-100ml-za-zeni--690766eb1929b.jpeg?height=600&v=1777627818&width=600",
    shortDescription: "Honeyed berries, marshmallow, caramel, and vanilla with soft musk.",
    description: "Forbidden Sugar opens with honey, blackcurrant, marshmallow, bergamot, and coconut. Caramel, jasmine, peach, pear, and vanilla lead to a playful base of raspberry, violet, and white musk.",
    notes: ["Blackcurrant", "Marshmallow", "Caramel", "Vanilla", "Raspberry", "White musk"],
    sizes: atomizerPrices(6, 13, 22)
  },
  {
    id: 21,
    brand: "MAISON TAHITE",
    name: "Vicious Cacao",
    family: "Gourmand",
    image: "https://www.feelingsexy.com.au/images/products/allproducts/TAHITE_VICIOUSCACAO.jpg",
    shortDescription: "Dark cacao and rum brightened by raspberry and salted caramel.",
    description: "A grown-up chocolate gourmand with rum, raspberry, and pink pepper at the opening. Cacao and amber deepen into salted caramel, benzoin, sandalwood, saffron, and moss.",
    notes: ["Cacao", "Rum", "Raspberry", "Caramel", "Saffron", "Sandalwood"],
    sizes: atomizerPrices(9, 22, 41)
  },
  {
    id: 22,
    brand: "AMOUAGE",
    name: "Sunshine Woman",
    family: "Floral",
    image: "https://www.marcgebauer.com/cdn/shop/files/amouage-Sunshine-Woman-100-ml-image1_1400x.webp?v=1764152527",
    shortDescription: "Almond and blackcurrant glow over osmanthus, vanilla, and tobacco.",
    description: "Sunshine Woman is radiant yet textured: almond, blackcurrant, and artemisia lead into osmanthus, jasmine, magnolia, and vanilla. White tobacco, papyrus, and woods give it a distinctive finish.",
    notes: ["Almond", "Blackcurrant", "Osmanthus", "Vanilla", "White tobacco"],
    sizes: atomizerPrices(13, 31, 58)
  },
  {
    id: 23,
    brand: "PARIS CORNER",
    name: "Qissa Pink",
    family: "Gourmand",
    image: "https://f.nooncdn.com/p/pzsku/Z4C705C334B579FC3E705Z/45/1746621313/259521ad-d417-43e4-9697-06f3b72640d1.jpg?width=1200",
    shortDescription: "Sweet apple and coconut over powdery flowers and sugared vanilla.",
    description: "A playful fruity gourmand with apple and coconut at the top. Heliotrope, violet, jasmine, and rose turn powdery before vanilla, sugar, cashmeran, and sandalwood round the base.",
    notes: ["Apple", "Coconut", "Heliotrope", "Violet", "Vanilla", "Sugar"],
    sizes: atomizerPrices(5, 11, 18)
  },
  {
    id: 24,
    brand: "CLIVE CHRISTIAN",
    name: "Blonde Amber",
    family: "Woody",
    image: "https://theparfums.com/cdn/shop/files/product-bottles-CLIVE_CHRISTIAN-BLONDE_AMBER_9c580087-ccc4-4432-8309-4e4782d81971.png?v=1736892850",
    shortDescription: "Rich amber, dried fruit, spice, and tobacco wrapped in vanilla.",
    description: "An opulent amber composition opening with rum, bitter orange, cardamom, and ginger. Dried fruits, tobacco, saffron, tonka, vanilla, and resinous woods create a dense, polished trail.",
    notes: ["Rum", "Dried fruits", "Tobacco", "Tonka bean", "Vanilla", "Amber"],
    badge: "LUXURY",
    sizes: atomizerPrices(16, 39, 74)
  },
  {
    id: 25,
    brand: "MONTBLANC",
    name: "Signature",
    family: "Floral",
    image: "https://down-tw.img.susercontent.com/file/91b32a46db2c8f15cd07c32f00f62623",
    shortDescription: "Creamy vanilla musk illuminated by clementine and magnolia.",
    description: "Signature opens with sparkling clementine, followed by magnolia, ylang-ylang, and peony. Vanilla, white musk, and benzoin create its smooth, clean, and comforting finish.",
    notes: ["Clementine", "Magnolia", "Ylang-ylang", "Vanilla", "White musk"],
    sizes: atomizerPrices(6, 14, 25)
  },
  {
    id: 26,
    brand: "MAISON ALHAMBRA",
    name: "Infini Musk",
    family: "Fresh",
    image: "https://beautyhouse.com/cdn/shop/files/02js90oy4l.png?v=1751405539&width=2048",
    shortDescription: "Citrus, violet, and rose floating over clean musk and sandalwood.",
    description: "A bright, airy musk with bergamot, mandarin, aquatic notes, and fresh greenery. Violet, rose, and lily-of-the-valley lead into white musk, amber, sandalwood, and vanilla.",
    notes: ["Bergamot", "Aquatic notes", "Violet", "White musk", "Sandalwood"],
    sizes: atomizerPrices(5, 11, 19)
  },
  {
    id: 27,
    brand: "LATTAFA",
    name: "Qimmah for Women",
    family: "Gourmand",
    image: "https://husainfragrance.co.za/cdn/shop/files/IMG_20250116_113044.jpg?v=1737019947&width=1946",
    shortDescription: "Coffee and almond layered with white flowers, cacao, and vanilla.",
    description: "Qimmah opens with a delicious pairing of almond and coffee. Jasmine and tuberose soften the heart, while tonka, cacao, vanilla, and sandalwood form a warm gourmand base.",
    notes: ["Almond", "Coffee", "Jasmine", "Tuberose", "Cacao", "Vanilla"],
    sizes: atomizerPrices(5, 11, 18)
  },
  {
    id: 28,
    brand: "KAYALI",
    name: "Vanilla Candy Rock Sugar | 42",
    family: "Gourmand",
    image: "https://wurusbeauty.com/wp-content/uploads/2024/05/s2752624-main-zoom.jpg",
    shortDescription: "Candied pear, marshmallow, and bubble gum over sugared vanilla.",
    description: "A playful candy-shop vanilla with glazed lemon, candied pear, marshmallow, rum, and violet leaf. Bubble gum, caramel, jellybean, vanilla, tonka, and cashmere woods make the drydown deliciously nostalgic.",
    notes: ["Candied pear", "Marshmallow", "Bubble gum", "Caramel", "Vanilla", "Tonka bean"],
    badge: "NEW",
    sizes: atomizerPrices(8, 18, 32)
  },
  {
    id: 29,
    brand: "AYAT PERFUMES",
    name: "Pure Musk",
    family: "Fresh",
    image: "https://alsiab.com/cdn/shop/files/5267eb12d95c4916acb9e63ae7f3ef22_tplv-tulkllf4y5-origin-jpeg.jpg?v=1710864300&width=1445",
    shortDescription: "Fresh citrus and rose settling into lavender, white musk, and vanilla.",
    description: "Pure Musk begins with bergamot, citrus, and rose. Green notes, lavender, and white musk create a clean heart, followed by smooth woods and a soft touch of vanilla.",
    notes: ["Bergamot", "Rose", "Lavender", "White musk", "Vanilla"],
    sizes: atomizerPrices(5, 11, 18)
  },
  {
    id: 30,
    brand: "FRAGRANCE WORLD",
    name: "Intro Ivory Musk",
    family: "Fresh",
    image: "https://marabika.lt/13508-large_default/intro-ivory-musk-initio-musk-therapy-100ml.jpg",
    shortDescription: "Sparkling citrus, magnolia, rose, and airy white musk.",
    description: "A clean unisex musk opening with bergamot and mandarin. Magnolia, white musk, and rose create a soft floral center, while musk and blackcurrant keep the drydown smooth and lightly fruity.",
    notes: ["Bergamot", "Mandarin", "Magnolia", "White musk", "Rose", "Blackcurrant"],
    sizes: atomizerPrices(5, 11, 19)
  },
  {
    id: 31,
    brand: "YVES SAINT LAURENT",
    name: "Babycat",
    family: "Woody",
    image: "https://www.parfum.hu/uploads/cache/fb_og_image/uploads/media/f/0/e/0/babycat-yves-saint-laurent-eau-de-parfum-unisex-parfum-1.jpeg",
    shortDescription: "Smoky incense and saffron wrapped in bourbon vanilla and suede.",
    description: "Babycat opens with black and pink pepper alongside resinous elemi. Incense and saffron bring smoky warmth before bourbon vanilla, suede, and cedar form a rich, sensual base.",
    notes: ["Black pepper", "Elemi", "Incense", "Saffron", "Bourbon vanilla", "Suede"],
    sizes: atomizerPrices(12, 28, 52)
  }
];
