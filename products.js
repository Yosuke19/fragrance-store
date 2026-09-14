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
    image: "Pictures/01-crystal-noir.jpg",
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
    image: "Pictures/02-chloe-eau-de-parfum.jpg",
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
    image: "Pictures/03-lemon-tart.jpg",
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
    image: "Pictures/04-linstant.jpg",
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
    image: "Pictures/05-hundred-silent-ways.png",
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
    image: "Pictures/06-nebras.jpg",
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
    image: "Pictures/07-time-for-romance.jpg",
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
    image: "Pictures/08-catwalk.jpg",
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
    image: "Pictures/09-orza.jpg",
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
    image: "Pictures/10-anarch.webp",
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
    image: "Pictures/11-aphrodite.jpg",
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
    image: "Pictures/12-zeena.jpg",
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
    image: "Pictures/13-la-fleur-bouquet.jpg",
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
    image: "Pictures/14-vanilla-28.jpg",
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
    image: "Pictures/15-ocean-di-gioia.jpg",
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
    image: "Pictures/16-phenominal-quatorze.png",
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
    image: "Pictures/17-caramel-cascade.jpg",
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
    image: "Pictures/18-iris-malikhan.jpg",
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
    image: "Pictures/19-wabisabi.jpg",
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
    image: "Pictures/20-forbidden-sugar.webp",
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
    image: "Pictures/21-vicious-cacao.jpg",
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
    image: "Pictures/22-sunshine-woman.jpg",
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
    image: "Pictures/23-qissa-pink.jpg",
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
    image: "Pictures/24-blonde-amber.png",
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
    image: "Pictures/25-montblanc-signature.jpg",
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
    image: "Pictures/26-infini-musk.png",
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
    image: "Pictures/27-qimmah.jpg",
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
    image: "Pictures/28-vanilla-candy-rock-sugar.jpg",
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
    image: "Pictures/29-pure-musk.jpg",
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
    image: "Pictures/30-intro-ivory-musk.jpg",
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
    image: "Pictures/31-babycat.jpeg",
    shortDescription: "Smoky incense and saffron wrapped in bourbon vanilla and suede.",
    description: "Babycat opens with black and pink pepper alongside resinous elemi. Incense and saffron bring smoky warmth before bourbon vanilla, suede, and cedar form a rich, sensual base.",
    notes: ["Black pepper", "Elemi", "Incense", "Saffron", "Bourbon vanilla", "Suede"],
    sizes: atomizerPrices(12, 28, 52)
  }
];
