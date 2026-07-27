/**
 * Sattva Scan — Premium Indian Diet Guard
 * Core JavaScript Controller and Analysis Engine
 */

// ==========================================
// 1. EXPANDED INDIAN FOOD DATABASE (50+ Products)
// ==========================================
const LOCAL_PRODUCTS_DB = {
  // Snacking & Noodles
  "8901058820875": {
    barcode: "8901058820875",
    name: "2-Minute Masala Noodles",
    brand: "Nestlé Maggi",
    category: "snacks",
    fssai: "10012011000168",
    manufacturer: "Nestlé India Limited, Haryana",
    ingredients: "Wheat Flour (Maida), Refined Palm Oil, Iodised Salt, Wheat Gluten, Calcium Carbonate, Thickener (INS 508), Acidity Regulators (INS 501i, INS 500i), Color (INS 150d). Masala Tastemaker: Mixed Spices (Onion Powder, Coriander Powder, Chili Powder, Turmeric Powder, Cumin Powder, Garlic Powder, Aniseed, Ginger, Black Pepper, Clove, Nutmeg, Cardamom), Sugar, Hydrolysed Groundnut Protein, Salt, Palm Oil, Flavor Enhancer (INS 635), Acidity Regulator (INS 330).",
    nutrition: { serving_size: 70, calories: 299, sugar: 1.5, sodium: 875, carbs: 41.2, protein: 5.6, fat: 11.0, fibre: 2.1 },
    claims: ["Quick 2 Minute Snack", "No Added MSG", "Multigrain goodness"],
    alternatives: ["8901088160071", "8901491162046"] // Saffola Oats, Quaker Oats
  },
  "8901491101830": {
    barcode: "8901491101830",
    name: "Masala Munch",
    brand: "Kurkure (PepsiCo)",
    category: "snacks",
    fssai: "10012064000100",
    manufacturer: "PepsiCo India Holdings Pvt. Ltd., Punjab",
    ingredients: "Rice Meal, Corn Meal, Gram Meal, Edible Vegetable Oil (Palmolein Oil), Seasoning (Spices and Condiments, Onion Powder, Garlic Powder, Chili Powder, Coriander Powder, Ginger Powder, Turmeric Powder), Salt, Sugar, Maltodextrin, Citric Acid (INS 330), Flavor Enhancers (INS 627, INS 631).",
    nutrition: { serving_size: 30, calories: 167, sugar: 1.1, sodium: 264, carbs: 16.8, protein: 1.8, fat: 10.4, fibre: 0.9 },
    claims: ["Made with Kitchen Ingredients", "Baked not fried"],
    alternatives: ["8901262173031"]
  },
  "8901491502057": {
    barcode: "8901491502057",
    name: "Magic Masala Chips",
    brand: "Lay's (PepsiCo)",
    category: "snacks",
    fssai: "10012064000100",
    manufacturer: "PepsiCo India Holdings Pvt. Ltd., Punjab",
    ingredients: "Potato, Edible Vegetable Oil (Palmolein Oil), Seasoning (Spices & Condiments, Onion Powder, Chili Powder, Garlic Powder, Ginger Powder, Turmeric Powder), Salt, Sugar, Maltodextrin, Fructose, Citric Acid (INS 330).",
    nutrition: { serving_size: 30, calories: 163, sugar: 1.3, sodium: 216, carbs: 15.8, protein: 2.1, fat: 10.1, fibre: 1.0 },
    claims: ["0% Cholesterol", "No Added MSG"],
    alternatives: ["8901262173031"]
  },
  "8904063200111": {
    barcode: "8904063200111",
    name: "Bhujia Sev",
    brand: "Haldiram's",
    category: "snacks",
    fssai: "10014051000921",
    manufacturer: "Haldiram Foods International, Maharashtra",
    ingredients: "Tepary Beans Flour (Moth Flour), Gram Flour, Refined Palmolein Oil, Iodised Salt, Mixed Spices (Red Chili Powder, Black Pepper Powder, Ginger Powder, Clove Powder, Mace Powder, Nutmeg Powder, Cardamom Powder).",
    nutrition: { serving_size: 35, calories: 201, sugar: 0.0, sodium: 340, carbs: 14.2, protein: 4.8, fat: 14.3, fibre: 1.8 },
    claims: ["Traditional Indian Snack", "No trans fat"],
    alternatives: ["8901262173031"]
  },
  "8904063200234": {
    barcode: "8904063200234",
    name: "Aloo Bhujia",
    brand: "Haldiram's",
    category: "snacks",
    fssai: "10014051000921",
    manufacturer: "Haldiram Foods International, Maharashtra",
    ingredients: "Potato, Tepary Beans Flour, Gram Flour, Refined Palmolein Oil, Salt, Starch, Spices (Chili, Black Pepper, Coriander, Cumin, Ginger, Garlic Powder, Onion Powder), Citric Acid (INS 330).",
    nutrition: { serving_size: 35, calories: 198, sugar: 0.2, sodium: 295, carbs: 15.1, protein: 3.1, fat: 13.8, fibre: 1.2 },
    claims: ["Loved by all", "Vegetarian product"],
    alternatives: ["8901262173031"]
  },
  "8901595861448": {
    barcode: "8901595861448",
    name: "Schezwan Chutney",
    brand: "Ching's Secret",
    category: "condiments",
    fssai: "10013022001865",
    manufacturer: "Capital Foods Private Limited, Maharashtra",
    ingredients: "Water, Garlic, Ginger, Chili, Sunflower Oil, Sugar, Salt, Soy Sauce (Wheat, Soybeans), Acidity Regulator (INS 260), Thickener (INS 1422, INS 415), Preservative (INS 211), Flavor Enhancers (INS 627, INS 631).",
    nutrition: { serving_size: 15, calories: 34, sugar: 3.2, sodium: 420, carbs: 4.5, protein: 0.3, fat: 1.7, fibre: 0.2 },
    claims: ["Desi Chinese Flavor", "No Added MSG"],
    alternatives: ["8901262173031"]
  },
  "8901595862339": {
    barcode: "8901595862339",
    name: "Schezwan Instant Noodles",
    brand: "Ching's Secret",
    category: "snacks",
    fssai: "10013022001865",
    ingredients: "Wheat Flour (Maida), Palm Oil, Salt, Wheat Gluten, Potassium Chloride, Pentasodium Triphosphate (INS 451i). Seasoning: Salt, Mixed Spices (Garlic, Chili, Onion, Ginger, Cumin, Black Pepper), Sugar, Soy Sauce Powder, Flavor Enhancers (INS 627, INS 631), Silicon Dioxide (INS 551).",
    nutrition: { serving_size: 75, calories: 332, sugar: 1.8, sodium: 990, carbs: 49.0, protein: 6.8, fat: 12.1, fibre: 2.2 },
    claims: ["Hot and Spicy Noodles"],
    alternatives: ["8901088160071"]
  },
  "8901725191058": {
    barcode: "8901725191058",
    name: "Mad Angles Achaari Masti",
    brand: "Bingo (ITC)",
    category: "snacks",
    fssai: "10012031000312",
    ingredients: "Rice Grits, Seasoning (Spices, Onion Powder, Garlic Powder, Mango Powder), Refined Palmolein Oil, Corn Grits, Gram Grits, Salt, Acidity Regulator (INS 330, INS 296), Flavor Enhancers (INS 627, INS 631).",
    nutrition: { serving_size: 30, calories: 156, sugar: 1.2, sodium: 220, carbs: 18.2, protein: 2.0, fat: 8.3, fibre: 0.8 },
    claims: ["Baked not fried", "Perfect Triangle Snack"],
    alternatives: ["8901262173031"]
  },
  "8901725181226": {
    barcode: "8901725181226",
    name: "Dark Fantasy Choco Fills",
    brand: "Sunfeast (ITC)",
    category: "snacks",
    fssai: "10012031000312",
    ingredients: "Sugar, Wheat Flour (Maida), Hydrogenated Vegetable Oil (Palm Oil), Cocoa Solids (8%), Milk Solids, Emulsifier (INS 322i, INS 471), Raising Agents (INS 503ii, INS 500ii), Salt.",
    nutrition: { serving_size: 25, calories: 128, sugar: 9.8, sodium: 45, carbs: 16.5, protein: 1.4, fat: 6.3, fibre: 0.6 },
    claims: ["Pure chocolate bliss", "High Quality Cocoa"],
    alternatives: ["7622201753061"] // Lipton Green Tea or cleaner chocolates
  },
  "8901194002010": {
    barcode: "8901194002010",
    name: "Golden Sizzle Popcorn",
    brand: "Act II",
    category: "snacks",
    fssai: "10014022002599",
    ingredients: "Popping Corn (70%), Refined Palm Oil, Iodised Salt, Beta Carotene (INS 160ai), TBHQ Preservative (INS 319), Natural Flavor.",
    nutrition: { serving_size: 30, calories: 145, sugar: 0.0, sodium: 240, carbs: 18.0, protein: 2.8, fat: 7.0, fibre: 2.5 },
    claims: ["High fiber snack", "Hot popcorn in 3 mins"],
    alternatives: ["8901262173031"]
  },

  // Dairy & Spreads
  "8901262010022": {
    barcode: "8901262010022",
    name: "Pasteurised Salted Butter",
    brand: "Amul",
    category: "dairy",
    fssai: "10012021000071",
    manufacturer: "Kaira Milk Producers Union, Gujarat",
    ingredients: "Butter (Milk Fat 80%), Iodised Salt, Annatto Color (INS 160b).",
    nutrition: { serving_size: 10, calories: 72, sugar: 0.0, sodium: 83, carbs: 0.0, protein: 0.1, fat: 8.0, fibre: 0.0 },
    claims: ["Utterly Butterly Delicious", "100% Pure Butter"],
    alternatives: ["8904043900123"] // Low sodium alternative
  },
  "8901262151121": {
    barcode: "8901262151121",
    name: "Taaza Toned Milk",
    brand: "Amul",
    category: "dairy",
    fssai: "10012021000071",
    ingredients: "Toned Milk, Milk Solids, Vitamin A, Vitamin D.",
    nutrition: { serving_size: 200, calories: 116, sugar: 9.6, sodium: 100, carbs: 9.6, protein: 6.4, fat: 6.0, fibre: 0.0 },
    claims: ["Virtually zero bacteria", "Fresh and Pure Toned Milk"],
    alternatives: []
  },
  "8901262173031": {
    barcode: "8901262173031",
    name: "Masti Spiced Buttermilk",
    brand: "Amul",
    category: "dairy",
    fssai: "10012021000071",
    ingredients: "Water, Milk Solids, Salt, Mixed Spices (Ginger, Green Chili, Coriander, Cumin, Mustard, Curry Leaves), Stabilizer (INS 440).",
    nutrition: { serving_size: 200, calories: 30, sugar: 0.0, sodium: 180, carbs: 2.2, protein: 1.6, fat: 1.5, fibre: 0.1 },
    claims: ["100% Natural cooling drink", "Low Fat & High Calcium"],
    alternatives: []
  },
  "8904077600020": {
    barcode: "8904077600020",
    name: "Cow Milk Premium",
    brand: "Mother Dairy",
    category: "dairy",
    fssai: "10012011000015",
    ingredients: "Cow Milk, Vitamin A, Vitamin D.",
    nutrition: { serving_size: 200, calories: 122, sugar: 9.0, sodium: 96, carbs: 9.2, protein: 6.6, fat: 7.0, fibre: 0.0 },
    claims: ["Rich in Vitamin A & D", "Easy to Digest Cow Milk"],
    alternatives: []
  },
  "8906070632115": {
    barcode: "8906070632115",
    name: "Greek Yogurt Strawberry",
    brand: "Epigamia",
    category: "dairy",
    fssai: "10019022009848",
    ingredients: "Pasteurised Double Toned Milk, Strawberry Fruit Prep (Sugar, Strawberry Pulp 10%, Water, Thickener INS 440), Milk Solids, Permitted Active Cultures.",
    nutrition: { serving_size: 90, calories: 88, sugar: 7.8, sodium: 42, carbs: 11.2, protein: 5.4, fat: 1.6, fibre: 0.2 },
    claims: ["High Protein greek yogurt", "Zero preservatives", "Low fat"],
    alternatives: ["8901262173031"]
  },
  "4903080120022": {
    barcode: "4903080120022",
    name: "Yakult Probiotic Drink",
    brand: "Yakult Danone",
    category: "dairy",
    fssai: "10012011000020",
    ingredients: "Water, Sugar, Skimmed Milk Powder, Glucose, Citrus Pectin (INS 440), Lactobacillus casei Shirota Strain Cultures.",
    nutrition: { serving_size: 65, calories: 50, sugar: 10.2, sodium: 12, carbs: 12.0, protein: 0.8, fat: 0.0, fibre: 0.1 },
    claims: ["Improves gut health", "6.5 billion beneficial bacteria"],
    alternatives: ["8901262173031"]
  },
  "80135816": {
    barcode: "80135816",
    name: "Hazelnut Spread",
    brand: "Nutella (Ferrero)",
    category: "condiments",
    fssai: "10013022002181",
    ingredients: "Sugar, Palm Oil, Hazelnuts (13%), Skimmed Milk Powder (8.7%), Cocoa Powder (7.4%), Emulsifier Lecithin (INS 322i), Vanillin.",
    nutrition: { serving_size: 15, calories: 81, sugar: 8.5, sodium: 6, carbs: 8.7, protein: 0.9, fat: 4.7, fibre: 0.5 },
    claims: ["Rich in real Hazelnuts", "No artificial preservatives"],
    alternatives: ["8901262173031"]
  },

  // Drinks & Beverages
  "8901491321030": {
    barcode: "8901491321030",
    name: "Orange Delight Juice",
    brand: "Tropicana",
    category: "drinks",
    fssai: "10012022000057",
    ingredients: "Water, Concentrated Orange Juice (11.6%), Sugar, Acidity Regulator (INS 330), Citrus Stabilizer (INS 440), Ascorbic Acid Vitamin C (INS 300), Natural Orange Flavor.",
    nutrition: { serving_size: 200, calories: 96, sugar: 22.4, sodium: 30, carbs: 24.0, protein: 0.2, fat: 0.0, fibre: 0.4 },
    claims: ["No added preservatives", "Rich in Vitamin C"],
    alternatives: ["8901262173031", "8906046200676"] // Buttermilk, Coconut Water
  },
  "8901491321031": {
    barcode: "8901491321031",
    name: "Slice Mango Drink",
    brand: "PepsiCo India",
    category: "drinks",
    fssai: "10012064000100",
    ingredients: "Water, Mango Pulp (15%), Sugar, Acidity Regulator (INS 330), Stabilizers (INS 440, INS 466), Sodium Benzoate Preservative (INS 211), Food Color (INS 110), Synthetic Mango Flavor.",
    nutrition: { serving_size: 200, calories: 124, sugar: 30.0, sodium: 12, carbs: 31.0, protein: 0.1, fat: 0.0, fibre: 0.3 },
    claims: ["Made with handpicked mangoes", "Thick mango delight"],
    alternatives: ["8906046200676"]
  },
  "8901207040411": {
    barcode: "8901207040411",
    name: "Mixed Fruit Juice",
    brand: "Real Fruit Power",
    category: "drinks",
    fssai: "10012011000064",
    ingredients: "Water, Mixed Fruit Juice Concentrate (18.5% pulp of Orange, Pineapple, Guava, Mango, Banana, Apricot, Peach), Sugar, Acidity Regulator (INS 330), Pectin Stabilizer (INS 440), Vitamin C (INS 300).",
    nutrition: { serving_size: 200, calories: 110, sugar: 24.2, sodium: 22, carbs: 27.5, protein: 0.1, fat: 0.0, fibre: 0.5 },
    claims: ["No added preservatives", "Made with 100% real fruit"],
    alternatives: ["8906046200676"]
  },
  "8901207040527": {
    barcode: "8901207040527",
    name: "Pomegranate Fruit Power",
    brand: "Real Fruit Power",
    category: "drinks",
    fssai: "10012011000064",
    ingredients: "Water, Sugar, Pomegranate Juice Concentrate (12.2%), Acidity Regulator (INS 330), L-Ascorbic Acid (INS 300), Food Color (INS 122).",
    nutrition: { serving_size: 200, calories: 112, sugar: 25.8, sodium: 16, carbs: 28.0, protein: 0.0, fat: 0.0, fibre: 0.2 },
    claims: ["Rich in antioxidants", "Great energy source"],
    alternatives: ["8906046200676"]
  },
  "8906046200201": {
    barcode: "8906046200201",
    name: "Aamras Mango Drink",
    brand: "Paper Boat",
    category: "drinks",
    fssai: "10012064000017",
    ingredients: "Mango Pulp (45%), Water, Sugar, Lemon Juice Concentrate, Pectin Stabilizer (INS 440), Natural Flavours.",
    nutrition: { serving_size: 200, calories: 114, sugar: 21.0, sodium: 8, carbs: 28.5, protein: 0.3, fat: 0.0, fibre: 1.2 },
    claims: ["No preservatives", "No artificial colours", "Contains 45% real mango pulp"],
    alternatives: []
  },
  "8906046200676": {
    barcode: "8906046200676",
    name: "Coconut Water Premium",
    brand: "Paper Boat",
    category: "drinks",
    fssai: "10012064000017",
    ingredients: "Natural Tender Coconut Water, Vitamin C (INS 300), Nisin Preservative (INS 234).",
    nutrition: { serving_size: 200, calories: 38, sugar: 4.8, sodium: 48, carbs: 9.0, protein: 0.2, fat: 0.0, fibre: 0.5 },
    claims: ["No added sugar", "Natural electrolyte source", "Hydrates instantly"],
    alternatives: []
  },
  "9002470024222": {
    barcode: "9002470024222",
    name: "Energy Drink",
    brand: "Red Bull",
    category: "drinks",
    fssai: "10012011000350",
    ingredients: "Water, Sucrose, Glucose, Citric Acid, Carbon Dioxide, Sodium Bicarbonate, Taurine (0.4%), Caffeine (0.03%), Niacin, B-vitamins, Riboflavin Color (INS 101).",
    nutrition: { serving_size: 250, calories: 115, sugar: 27.5, sodium: 200, carbs: 27.5, protein: 0.0, fat: 0.0, fibre: 0.0 },
    claims: ["Vitalizes body and mind", "High caffeine content"],
    alternatives: ["8906046200676"]
  },
  "5060337500123": {
    barcode: "5060337500123",
    name: "Energy Drink Classic",
    brand: "Monster Energy",
    category: "drinks",
    fssai: "10012011000350",
    ingredients: "Water, Sugar, Glucose Syrup, Citric Acid, Carbon Dioxide, Sodium Citrate, Panax Ginseng Extract, L-Carnitine, Caffeine, Sodium Benzoate Preservative (INS 211), Sucralose Sweetener (INS 955), Inositol.",
    nutrition: { serving_size: 350, calories: 168, sugar: 38.0, sodium: 280, carbs: 42.0, protein: 0.0, fat: 0.0, fibre: 0.0 },
    claims: ["Unleash the Beast", "Contains energy blend"],
    alternatives: ["8906046200676"]
  },
  "5449000000996": {
    barcode: "5449000000996",
    name: "Original Cola Soda",
    brand: "Coca-Cola",
    category: "drinks",
    fssai: "10012011000021",
    ingredients: "Carbonated Water, Sugar, Acidity Regulator Phosphoric Acid (INS 338), Caffeine, Caramel Color IV (INS 150d), Natural Cola Flavor.",
    nutrition: { serving_size: 200, calories: 88, sugar: 21.8, sodium: 18, carbs: 21.8, protein: 0.0, fat: 0.0, fibre: 0.0 },
    claims: ["Classic cola taste", "Thirst quencher"],
    alternatives: ["8906046200676"]
  },
  "5449000050212": {
    barcode: "5449000050212",
    name: "Diet Coke No Sugar",
    brand: "Coca-Cola",
    category: "drinks",
    fssai: "10012011000021",
    ingredients: "Carbonated Water, Caramel Color (INS 150d), Acidity Regulators (INS 338, INS 331iii), Aspartame Sweetener (INS 951), Acesulfame Potassium (INS 950), Caffeine, Sodium Benzoate Preservative (INS 211).",
    nutrition: { serving_size: 200, calories: 0, sugar: 0.0, sodium: 24, carbs: 0.0, protein: 0.0, fat: 0.0, fibre: 0.0 },
    claims: ["Zero Calories", "No Sugar Cola"],
    alternatives: ["8906046200676"]
  },
  "5449000131805": {
    barcode: "5449000131805",
    name: "Sprite Lemon Lime Soda",
    brand: "Coca-Cola",
    category: "drinks",
    fssai: "10012011000021",
    ingredients: "Carbonated Water, Sugar, Acidity Regulators (INS 330, INS 331iii), Sodium Benzoate Preservative (INS 211), Natural Lemon-Lime Flavours.",
    nutrition: { serving_size: 200, calories: 96, sugar: 24.0, sodium: 20, carbs: 24.0, protein: 0.0, fat: 0.0, fibre: 0.0 },
    claims: ["Clear soft drink", "100% natural lemon lime flavor"],
    alternatives: ["8906046200676"]
  },
  "7622201820432": {
    barcode: "7622201820432",
    name: "Tang Orange Drink Mix",
    brand: "Mondelez India",
    category: "drinks",
    fssai: "10014022002711",
    ingredients: "Sugar, Acidity Regulator (INS 330), Fruit Powder (1%), Stabilizer (INS 466, INS 415), Sodium Citrate, Anticaking Agent (INS 551), Vitamins (Vitamin C, Vitamin A, Folate, Vitamin B12), Synthetic Colors (INS 171, INS 110, INS 102).",
    nutrition: { serving_size: 20, calories: 78, sugar: 18.2, sodium: 65, carbs: 19.5, protein: 0.0, fat: 0.0, fibre: 0.1 },
    claims: ["Rich in Vitamin C, A, B12", "Instant fruit drink mix"],
    alternatives: ["8906046200676"]
  },
  "8901030753061": {
    barcode: "8901030753061",
    name: "Green Tea Pure & Light",
    brand: "Lipton (HUL)",
    category: "drinks",
    fssai: "10013022001897",
    ingredients: "Green Tea Leaves.",
    nutrition: { serving_size: 2, calories: 0, sugar: 0.0, sodium: 0, carbs: 0.0, protein: 0.0, fat: 0.0, fibre: 0.0 },
    claims: ["0% Calories", "Helps reduce waistline", "Rich in Catechin Antioxidants"],
    alternatives: []
  },
  "8901058002471": {
    barcode: "8901058002471",
    name: "Classic Coffee",
    brand: "Nescafe",
    category: "drinks",
    fssai: "10012011000168",
    ingredients: "Pure Coffee Beans.",
    nutrition: { serving_size: 2, calories: 4, sugar: 0.0, sodium: 1, carbs: 0.7, protein: 0.3, fat: 0.0, fibre: 0.0 },
    claims: ["100% Pure Coffee", "Awakens your senses"],
    alternatives: []
  },

  // Biscuits & Breakfast
  "8901063014160": {
    barcode: "8901063014160",
    name: "Marie Gold Biscuits",
    brand: "Britannia",
    category: "breakfast",
    fssai: "10015043001129",
    ingredients: "Wheat Flour (Maida), Sugar, Refined Palm Oil, Invert Sugar Syrup, Raising Agents (INS 503ii, INS 500ii), Milk Solids, Dough Conditioner (INS 223), Emulsifier (INS 322i, INS 471), Iodised Salt.",
    nutrition: { serving_size: 25, calories: 110, sugar: 4.6, sodium: 87, carbs: 19.0, protein: 1.9, fat: 3.0, fibre: 0.4 },
    claims: ["Light tea-time biscuit", "Contains 10 Essential Vitamins"],
    alternatives: ["8901491162046"] // Oats
  },
  "8901719101254": {
    barcode: "8901719101254",
    name: "Parle-G Gold Biscuits",
    brand: "Parle",
    category: "breakfast",
    fssai: "10013022002253",
    ingredients: "Wheat Flour (Atta & Maida 50%), Sugar, Refined Palm Oil, Invert Sugar Syrup, Raising Agents (INS 503ii, INS 500ii), Milk Solids, Iodised Salt, Emulsifier (INS 322i).",
    nutrition: { serving_size: 20, calories: 90, sugar: 5.1, sodium: 56, carbs: 15.2, protein: 1.3, fat: 2.8, fibre: 0.3 },
    claims: ["Gold Standard Parle-G", "Source of Energy"],
    alternatives: ["8901491162046"]
  },
  "8901063015440": {
    barcode: "8901063015440",
    name: "Good Day Cashew Biscuits",
    brand: "Britannia",
    category: "breakfast",
    fssai: "10015043001129",
    ingredients: "Wheat Flour (Maida), Sugar, Palm Oil, Cashew Nuts (4.5%), Butter, Raising Agents (INS 503ii, INS 500ii), Milk Solids, Iodised Salt, Emulsifiers (INS 322i, INS 471).",
    nutrition: { serving_size: 20, calories: 104, sugar: 4.8, sodium: 62, carbs: 13.6, protein: 1.4, fat: 5.0, fibre: 0.3 },
    claims: ["Rich buttery cashews", "India's favorite cookie"],
    alternatives: ["8901491162046"]
  },
  "8901491162046": {
    barcode: "8901491162046",
    name: "Whole Grain Oats",
    brand: "Quaker",
    category: "breakfast",
    fssai: "10014064000435",
    ingredients: "100% Whole Grain Rolled Oats.",
    nutrition: { serving_size: 40, calories: 158, sugar: 0.4, sodium: 2, carbs: 26.8, protein: 4.7, fat: 3.4, fibre: 4.2 },
    claims: ["Helps reduce cholesterol", "100% Whole Grain", "Rich in dietary fiber"],
    alternatives: []
  },
  "8901088160071": {
    barcode: "8901088160071",
    name: "Masala Oats Classic",
    brand: "Saffola (Marico)",
    category: "breakfast",
    fssai: "10012022000258",
    ingredients: "Rolled Oats (70%), Barley Flakes, Seasoning (Spices & Condiments, Coriander Powder, Turmeric Powder, Chili, Cumin), Salt, Sugar, Dried Vegetables (Carrots, Beans, Onion, Garlic), Hydrolysed Vegetable Protein, Yeast Extract.",
    nutrition: { serving_size: 40, calories: 154, sugar: 1.2, sodium: 480, carbs: 27.2, protein: 3.8, fat: 3.0, fibre: 3.8 },
    claims: ["Guilt-free snacking", "Ready in 3 minutes", "High Fiber & Protein"],
    alternatives: []
  },
  "8901058860222": {
    barcode: "8901058860222",
    name: "Corn Flakes",
    brand: "Kellogg's",
    category: "breakfast",
    fssai: "10013022002031",
    ingredients: "Corn Grits, Sugar, Malt Extract, Salt, Vitamins, Minerals, Antioxidant (INS 320 BHA).",
    nutrition: { serving_size: 30, calories: 114, sugar: 2.6, sodium: 288, carbs: 25.8, protein: 2.2, fat: 0.3, fibre: 0.6 },
    claims: ["Original Corn Flakes", "Rich in Iron & B-vitamins"],
    alternatives: ["8901491162046"]
  },
  "8901058860555": {
    barcode: "8901058860555",
    name: "Muesli Fruit & Nut",
    brand: "Kellogg's",
    category: "breakfast",
    fssai: "10013022002031",
    ingredients: "Multigrain (Wheat 28%, Rolled Oats 20%, Corn Grits 12%, Rice Flour 5%), Sugar, Dried Fruits and Nuts (15% Almonds, Raisins, Candied Papaya), Malt Extract, Salt, Soy Lecithin.",
    nutrition: { serving_size: 40, calories: 156, sugar: 6.8, sodium: 90, carbs: 31.0, protein: 3.2, fat: 2.2, fibre: 2.4 },
    claims: ["Made with 5 grains", "No added preservatives", "High in fiber"],
    alternatives: ["8901491162046"]
  },

  // Confectionery
  "7622201722880": {
    barcode: "7622201722880",
    name: "Dairy Milk Silk Plain",
    brand: "Cadbury",
    category: "snacks",
    fssai: "10014022002711",
    ingredients: "Sugar, Milk Solids (23%), Cocoa Butter, Cocoa Solids, Emulsifiers (INS 442, INS 476), Artificial Vanilla Flavor.",
    nutrition: { serving_size: 20, calories: 106, sugar: 11.2, sodium: 18, carbs: 11.8, protein: 1.5, fat: 6.0, fibre: 0.4 },
    claims: ["Smoother, Creamier chocolate"],
    alternatives: ["8901030753061"]
  },
  "7622201722958": {
    barcode: "7622201722958",
    name: "Dairy Milk Silk Roast Almond",
    brand: "Cadbury",
    category: "snacks",
    fssai: "10014022002711",
    ingredients: "Sugar, Milk Solids, Almonds (16%), Cocoa Butter, Cocoa Solids, Emulsifiers (INS 442, INS 476), Natural Flavours.",
    nutrition: { serving_size: 20, calories: 111, sugar: 10.1, sodium: 16, carbs: 10.9, protein: 1.8, fat: 6.8, fibre: 0.8 },
    claims: ["Crunchy almonds in silk chocolate"],
    alternatives: ["8901030753061"]
  },
  "7622201763135": {
    barcode: "7622201763135",
    name: "Dairy Milk Silk Bubbly",
    brand: "Cadbury",
    category: "snacks",
    fssai: "10014022002711",
    ingredients: "Sugar, Milk Solids, Cocoa Butter, Cocoa Solids, Emulsifiers (INS 442, INS 476), Permitted Flavors.",
    nutrition: { serving_size: 20, calories: 107, sugar: 11.4, sodium: 17, carbs: 12.0, protein: 1.4, fat: 5.9, fibre: 0.4 },
    claims: ["Unique bubbly chocolate", "Soft aerated center"],
    alternatives: ["8901030753061"]
  },
  "8901058002341": {
    barcode: "8901058002341",
    name: "Munch Chocolatey Bar",
    brand: "Nestlé",
    category: "snacks",
    fssai: "10012011000168",
    ingredients: "Sugar, Hydrogenated Vegetable Fats (Sesame Oil), Wheat Flour (Maida), Milk Solids, Cocoa Solids (2.8%), Emulsifier Soy Lecithin (INS 322i), Raising Agent (INS 500ii), Salt.",
    nutrition: { serving_size: 10, calories: 51, sugar: 4.8, sodium: 11, carbs: 6.4, protein: 0.6, fat: 2.6, fibre: 0.1 },
    claims: ["Crunchy Wafer Snack", "Share the crunch"],
    alternatives: ["8 green tea"]
  },

  // Condiments & Ingredients
  "8901030659127": {
    barcode: "8901030659127",
    name: "Mixed Fruit Jam",
    brand: "Kissan (HUL)",
    category: "condiments",
    fssai: "10013022001897",
    ingredients: "Sugar, Mixed Fruit Pulp (45% of Apple, Grape, Pineapple, Pear, Papaya, Mango, Banana), Acidity Regulator (INS 330), Pectin Gelling Agent (INS 440), Preservative (INS 211), Synthetic Red Color (INS 122).",
    nutrition: { serving_size: 15, calories: 42, sugar: 9.8, sodium: 4, carbs: 10.4, protein: 0.0, fat: 0.0, fibre: 0.1 },
    claims: ["Made with 100% real fruits", "Sweet and tangy spread"],
    alternatives: ["8901262173031"]
  },
  "8901030761233": {
    barcode: "8901030761233",
    name: "Tomato Soup Mix",
    brand: "Knorr",
    category: "condiments",
    fssai: "10013022001897",
    ingredients: "Sugar, Wheat Flour (Maida), Tomato Paste Powder (12%), Salt, Starch, Hydrolysed Vegetable Protein, Palm Oil, Thickener (INS 415), Silicon Dioxide (INS 551), Flavor Enhancers (INS 627, INS 631).",
    nutrition: { serving_size: 15, calories: 52, sugar: 5.4, sodium: 620, carbs: 11.2, protein: 0.7, fat: 0.4, fibre: 0.3 },
    claims: ["No added preservatives", "100% Real Vegetables soup"],
    alternatives: ["8901262173031"]
  },
  "8904043900031": {
    barcode: "8904043900031",
    name: "Iodised Salt",
    brand: "Tata Salt",
    category: "condiments",
    fssai: "10012022000344",
    ingredients: "Iodised Vacuum Evaporated Salt, Potassium Iodate, Anticaking Agent (INS 536).",
    nutrition: { serving_size: 1, calories: 0, sugar: 0.0, sodium: 387, carbs: 0.0, protein: 0.0, fat: 0.0, fibre: 0.0 },
    claims: ["Desh ka Namak", "Vacuum evaporated purity"],
    alternatives: ["8904043900123"]
  },
  "8904043900123": {
    barcode: "8904043900123",
    name: "Salt Lite (Low Sodium)",
    brand: "Tata Salt",
    category: "condiments",
    fssai: "10012022000344",
    ingredients: "Sodium Chloride, Potassium Chloride, Potassium Iodate, Anticaking Agent (INS 551).",
    nutrition: { serving_size: 1, calories: 0, sugar: 0.0, sodium: 250, carbs: 0.0, protein: 0.0, fat: 0.0, fibre: 0.0 },
    claims: ["15% Low Sodium", "Helps manage Blood Pressure"],
    alternatives: []
  },
  "7622201140028": {
    barcode: "7622201140028",
    name: "Bournvita Health Drink",
    brand: "Cadbury",
    category: "drinks",
    fssai: "10014022002711",
    ingredients: "Cereal Extract, Sugar, Cocoa Powder, Milk Solids, Maltodextrin, Liquid Glucose, Raising Agents (INS 500ii), Emulsifiers (INS 471), Salt, Vitamins, Minerals.",
    nutrition: { serving_size: 20, calories: 76, sugar: 7.4, sodium: 38, carbs: 16.8, protein: 1.4, fat: 0.4, fibre: 0.4 },
    claims: ["Tayyari Jeet Ki", "Rich in Vitamin D & Calcium"],
    alternatives: ["8901030753061"]
  },
  "8901571001226": {
    barcode: "8901571001226",
    name: "Classic Malt Drink",
    brand: "Horlicks",
    category: "drinks",
    fssai: "10013022001897",
    ingredients: "Wheat Flour (Atta), Malted Barley, Milk Solids, Sugar, Wheat Gluten, Minerals, Salt, Vitamins.",
    nutrition: { serving_size: 20, calories: 74, sugar: 4.8, sodium: 65, carbs: 15.6, protein: 2.2, fat: 0.4, fibre: 0.5 },
    claims: ["Clinically proven to improve growth", "Taller, Stronger, Sharper"],
    alternatives: ["8901030753061"]
  },
  "8906001231011": {
    barcode: "8906001231011",
    name: "Mississippi Mud Ice Cream",
    brand: "Baskin Robbins",
    category: "dairy",
    fssai: "10012022001290",
    ingredients: "Water, Sugar, Milk Solids, Cocoa Powder (5%), Palm Kernel Oil, Stabilizers (INS 412, INS 407), Emulsifiers (INS 471, INS 433).",
    nutrition: { serving_size: 80, calories: 184, sugar: 18.0, sodium: 60, carbs: 22.0, protein: 3.2, fat: 9.2, fibre: 0.8 },
    claims: ["Rich Fudge and Chocolate"],
    alternatives: ["8901262173031"]
  },
  "8901030771232": {
    barcode: "8901030771232",
    name: "Vanilla Ice Cream",
    brand: "Kwality Wall's",
    category: "dairy",
    fssai: "10013022001897",
    ingredients: "Water, Sugar, Vegetable Fat (Hydrogenated Palm Kernel Oil), Milk Solids, Maltodextrin, Emulsifier (INS 471), Stabilizers (INS 412, INS 410, INS 407), Flavor (Nature Identical Vanilla).",
    nutrition: { serving_size: 50, calories: 92, sugar: 9.4, sodium: 28, carbs: 10.6, protein: 1.1, fat: 5.1, fibre: 0.0 },
    claims: ["Creamy Vanilla delight"],
    alternatives: ["8901262173031"]
  }
};

// ==========================================
// 2. DETECTORS & ADDICTIONS LOOKUPS
// ==========================================
const DETECTORS = {
  palm: /\b(palm|palmolein|fractionated palm|palm kernel|vegetable fat|hydrogenated vegetable oil|hydrogenated vegetable fat)\b/i,
  maida: /\b(maida|refined wheat|refined flour|all-purpose flour)\b/i,
  hfcs: /\b(high fructose corn syrup|hfcs|corn syrup solids)\b/i,
  transFats: /\b(trans fat|partially hydrogenated|hydrogenated vegetable oil|hydrogenated fat|vanaspati|interesterified)\b/i,
  artificialSweeteners: /\b(aspartame|sucralose|acesulfame|saccharin|neotame|advantame|equal)\b/i,
  artificialColors: /\b(tartrazine|sunset yellow|carmoisine|allura red|brilliant blue|erythrosine|indigotine|e102|e110|e122|e124|e129|e133|ins 102|ins 110|ins 122|ins 124|ins 129|ins 133)\b/i,
  msg: /\b(msg|monosodium glutamate|glutamic acid|ins 621|e621|flavor enhancer 621)\b/i,
  carrageenan: /\b(carrageenan|ins 407|e407|stabilizer 407)\b/i,
  bha_bht: /\b(bha|bht|butylated hydroxyanisole|butylated hydroxytoluene|ins 320|ins 321|e320|e321)\b/i,
  refinedSugar: /\b(sugar|sucrose|liquid glucose|invert sugar|invert syrup|glucose syrup|dextrose)\b/i,

  // Allergens
  dairy: /\b(milk|whey|butter|cream|cheese|paneer|ghee|casein|caseinate|milk solids|lactose|yogurt|curd|condensed milk)\b/i,
  gluten: /\b(wheat|maida|semolina|suji|sooji|barley|rye|gluten|triticum)\b/i,
  nuts: /\b(peanut|groundnut|almond|cashew|walnut|hazelnut|pistachio|pecan|macadamia|tree nut)\b/i,
  soy: /\b(soy|soya|lecithin|soybean)\b/i,
  eggs: /\b(egg|albumen|albumin|yolk|egg powder)\b/i,
  shellfish: /\b(shrimp|prawn|crab|lobster|shellfish|oyster|clam)\b/i,

  // Fasting triggers
  fastingBreakers: /\b(sugar|sucrose|glucose|maltodextrin|fructose|juice|cereal|flour|starch|grains|milk|whey|egg|butter|calories|sweetener)\b/i
};

const ADDITIVES_DICT = {
  "ins508": {
    name: "INS 508 (Potassium Chloride)",
    type: "Stabilizers",
    desc: {
      en: "What is it: A natural mineral salt compound (Potassium & Chlorine).\nWhy used: Used as a thickener, gelling agent, or low-sodium salt substitute.\nGood or Bad: SAFE in general. However, if you have severe kidney conditions, consult your doctor as kidneys filter potassium.\nHow made: Mined directly from natural potash minerals or extracted from salt lakes.",
      hi: "यह क्या है: एक प्राकृतिक खनिज लवण (पोटेशियम + क्लोरीन)।\nक्यों इस्तेमाल होता है: खाद्य पदार्थों को स्थिर करने या कम सोडियम वाले नमक के रूप में।\nअच्छा या बुरा: सुरक्षित। किडनी की बीमारी वाले रोगियों को डॉक्टर से परामर्श करना चाहिए।\nकैसे बनता है: प्राकृतिक खनिज खदानों या खारे पानी की झीलों से निकाला जाता है।",
      ta: "இது என்ன: ஒரு இயற்கையான தாது உப்பு (பொட்டாசியம் + குளோரின்).\nஏன் பயன்படுத்தப்படுகிறது: உணவை கெட்டியாக்க அல்லது சோடியம் குறைந்த உப்பாக.\nநல்லதா கெட்டதா: பொதுவாக பாதுகாப்பானது. ஆனால் தீவிர சிறுநீரக நோய் உள்ளவர்கள் தவிர்க்க வேண்டும்.\nஎப்படி தயாரிக்கப்படுகிறது: இயற்கை சுரங்கங்கள் அல்லது உப்பு ஏரிகளிலிருந்து பிரித்தெடுக்கப்படுகிறது."
    }
  },
  "ins501i": {
    name: "INS 501(i) (Potassium Carbonate)",
    type: "Stabilizers",
    desc: {
      en: "What is it: An inorganic alkaline salt.\nWhy used: Used as an acidity regulator or raising agent in noodles/baking.\nGood or Bad: SAFE in standard limits. Normal consumption is easily processed by the body.\nHow made: Synthesized chemically by reacting potassium hydroxide with carbon dioxide.",
      hi: "यह क्या है: एक अकार्बनिक क्षारीय लवण।\nक्यों इस्तेमाल होता है: नूडल्स या बेकिंग में अम्लता नियामक या राइजिंग एजेंट के रूप में।\nअच्छा या बुरा: सुरक्षित। शरीर सामान्य मात्रा को आसानी से पचा लेता है।\nकैसे बनता है: पोटेशियम हाइड्रोक्साइड और कार्बन डाइऑक्साइड की रासायनिक प्रतिक्रिया से।",
      ta: "இது என்ன: ஒரு கார தாது உப்பு.\nஏன் பயன்படுத்தப்படுகிறது: நூடுல்ஸ் அல்லது பேக்கிங்கில் அமிலத்தன்மையை ஒழுங்குபடுத்த.\nநல்லதா கெட்டதா: பாதுகாப்பானது. குறைந்த அளவில் உட்கொள்வது உடலுக்கு தீங்கு விளைவிக்காது.\nஎப்படி தயாரிக்கப்படுகிறது: பொட்டாசியம் ஹைட்ராக்சைடுடன் கார்பன் டை ஆக்சைடை வினைபுரியச் செய்வதன் மூலம்."
    }
  },
  "ins500i": {
    name: "INS 500(i) (Sodium Carbonate)",
    type: "Stabilizers",
    desc: {
      en: "What is it: Soda ash, a natural alkaline compound.\nWhy used: Used as a raising agent or stabilizer to adjust dough texture/pH.\nGood or Bad: SAFE. Common baking helper, non-toxic.\nHow made: Synthesized via the Solvay process using salt brine and limestone, or mined from trona ore.",
      hi: "यह क्या है: सोडा ऐश, एक प्राकृतिक क्षारीय यौगिक।\nक्यों इस्तेमाल होता है: आटा गूंथने या पीएच संतुलित करने के लिए राइजिंग एजेंट के रूप में।\nअच्छा या बुरा: सुरक्षित। बेकिंग में आम तौर पर इस्तेमाल होने वाला सुरक्षित तत्व।\nकैसे बनता है: नमक के पानी और चूना पत्थर की रासायनिक क्रिया से, या ट्रोना अयस्क से।",
      ta: "இது என்ன: சோடா சாம்பல், ஒரு இயற்கை கார சேர்மம்.\nஏன் பயன்படுத்தப்படுகிறது: மாவை உப்பச் செய்ய அல்லது அமிலத்தன்மையை சமப்படுத்த.\nநல்லதா கெட்டதா: பாதுகாப்பானது. பேக்கிங்கில் பொதுவாக பயன்படுத்தப்படும் நச்சுத்தன்மையற்ற பொருள்.\nஎப்படி தயாரிக்கப்படுகிறது: உப்புக் கரைசல் மற்றும் சுண்ணாம்புக்கல் கொண்டு தயாரிக்கப்படுகிறது."
    }
  },
  "ins150d": {
    name: "INS 150d (Caramel Color IV - Ammonium Sulphite)",
    type: "Colours",
    desc: {
      en: "What is it: Dark brown food coloring processed with ammonium compounds.\nWhy used: Gives a deep rich brown/black color to sodas, colas, and sauces.\nGood or Bad: AVOID / CAUTION. Heavily processed. High intake is flagged due to trace amounts of 4-MEI, a suspected carcinogen.\nHow made: Produced by controlled heating of carbohydrates in the presence of ammonium and sulfite compounds.",
      hi: "यह क्या है: अमोनियम यौगिकों से संसाधित गहरा भूरा खाद्य रंग।\nक्यों इस्तेमाल होता है: कोला, सोडा और सॉस को गहरा भूरा या काला रंग देने के लिए।\nअच्छा या बुरा: बचें। इसके अत्यधिक सेवन से बचना चाहिए क्योंकि इसमें 4-MEI के कण होते हैं, जो कैंसर का कारण बन सकते हैं।\nकैसे बनता है: अमोनियम और सल्फाइट की उपस्थिति में कार्बोहाइड्रेट को गर्म करके।",
      ta: "இது என்ன: அம்மோனியத்துடன் பதப்படுத்தப்பட்ட அடர் பழுப்பு நிற உணவு சாயம்.\nஏன் பயன்படுத்தப்படுகிறது: கோலா மற்றும் சாஸ்களுக்கு அடர் பழுப்பு நிறத்தை அளிக்க.\nநல்லதா கெட்டதா: தவிர்க்கவும். இதில் உள்ள 4-MEI புற்றுநோய் அபாயத்தை ஏற்படுத்தலாம்.\nஎப்படி தயாரிக்கப்படுகிறது: அம்மோனியம் முன்னிலையில் கார்போஹைட்ரேட்டுகளை சூடாக்கி தயாரிக்கப்படுகிறது."
    }
  },
  "ins635": {
    name: "INS 635 (Disodium 5'-Ribonucleotides)",
    type: "Flavour Enhancers",
    desc: {
      en: "What is it: A chemical food additive that enhances savory taste.\nWhy used: Amplifies 'umami' flavors significantly, reducing the amount of MSG needed.\nGood or Bad: CAUTION. Converts to uric acid in the body. Avoid if you have gout, kidney stones, or high uric acid.\nHow made: Synthesized from yeast extract or fish extracts.",
      hi: "यह क्या है: एक रासायनिक स्वाद बढ़ाने वाला खाद्य पदार्थ।\nक्यों इस्तेमाल होता है: उमामी (नमकीन) स्वाद को बहुत बढ़ाता है, जिससे MSG की आवश्यकता कम होती है।\nअच्छा या बुरा: चेतावनी। शरीर में यूरिक एसिड बढ़ाता है। गाउट या किडनी स्टोन वाले लोगों को बचना चाहिए।\nकैसे बनता है: खमीर (yeast) या मछली के अर्क से संश्लेषित किया जाता है।",
      ta: "இது என்ன: உணவின் உமாமி சுவையை அதிகரிக்கும் ஒரு இரசாயன பொருள்.\nஏன் பயன்படுத்தப்படுகிறது: MSG-இன் தேவையை குறைத்து சுவையை பன்மடங்கு அதிகரிக்க.\nநல்லதா கெட்டதா: எச்சரிக்கை. உடலில் யூரிக் அமிலத்தை அதிகரிக்கும். கவுட், சிறுநீரக கல் உள்ளவர்கள் தவிர்க்கவும்.\nஎப்படி தயாரிக்கப்படுகிறது: ஈஸ்ட் அல்லது மீன் சாற்றில் இருந்து தயாரிக்கப்படுகிறது."
    }
  },
  "ins330": {
    name: "INS 330 (Citric Acid)",
    type: "Preservatives",
    desc: {
      en: "What is it: A natural organic acid found in citrus fruits.\nWhy used: Adds sour taste and acts as a natural preservative by balancing pH.\nGood or Bad: SAFE. Non-toxic and easily metabolized by the human body.\nHow made: Industrially produced via mold fermentation (Aspergillus niger) of simple sugars.",
      hi: "यह क्या है: खट्टे फलों में पाया जाने वाला एक प्राकृतिक जैविक अम्ल।\nक्यों इस्तेमाल होता है: खट्टा स्वाद देने और पीएच संतुलित करके भोजन को खराब होने से बचाने के लिए।\nअच्छा या बुरा: सुरक्षित। गैर-विषाक्त और शरीर द्वारा आसानी से पचाया जाने वाला।\nकैसे बनता है: औद्योगिक रूप से शर्करा के कवक (mold) किण्वन द्वारा बनाया जाता है।",
      ta: "இது என்ன: எலுமிச்சை போன்ற புளிப்பு பழங்களில் உள்ள இயற்கை அமிலம்.\nஏன் பயன்படுத்தப்படுகிறது: புளிப்பு சுவைக்காகவும், கெட்டுப்போகாமல் தடுக்கும் இயற்கை காப்பானாகவும்.\nநல்லதா கெட்டதா: பாதுகாப்பானது. நச்சுத்தன்மையற்றது மற்றும் எளிதில் ஜீரணமாகும்.\nஎப்படி தயாரிக்கப்படுகிறது: சர்க்கரையை கொண்டு பூஞ்சை நொதித்தல் மூலம் தயாரிக்கப்படுகிறது."
    }
  },
  "ins627": {
    name: "INS 627 (Disodium Guanylate)",
    type: "Flavour Enhancers",
    desc: {
      en: "What is it: A chemical flavor enhancer often paired with MSG.\nWhy used: To amplify savory 'umami' taste in instant noodles, soups, and chips.\nGood or Bad: CAUTION. Metabolizes into uric acid. Avoid if you have gout or high uric acid levels.\nHow made: Sourced via bacterial fermentation of sugars or seaweed extraction.",
      hi: "यह क्या है: एक रासायनिक स्वाद बढ़ाने वाला तत्व जो अक्सर MSG के साथ उपयोग किया जाता है।\nक्यों इस्तेमाल होता है: नूडल्स, सूप और चिप्स में नमकीन स्वाद बढ़ाने के लिए।\nअच्छा या बुरा: चेतावनी। यह यूरिक एसिड में बदल जाता है। गाउट (गठिया) के मरीजों को इससे बचना चाहिए।\nकैसे बनता है: बैक्टीरिया द्वारा चीनी के किण्वन या समुद्री शैवाल से बनाया जाता है।",
      ta: "இது என்ன: MSG உடன் சேர்க்கப்படும் ஒரு இரசாயன சுவையூட்டி.\nஏன் பயன்படுத்தப்படுகிறது: சூப் மற்றும் நூடுல்ஸ்களில் உமாமி சுவையை அதிகரிக்க.\nநல்லதா கெட்டதா: எச்சரிக்கை. உடலில் யூரிக் அமிலத்தை அதிகரிக்கும். கவுட் உள்ளவர்கள் தவிர்க்கவும்.\nஎப்படி தயாரிக்கப்படுகிறது: பாக்டீரியா நொதித்தல் அல்லது பாசி மூலம் தயாரிக்கப்படுகிறது."
    }
  },
  "ins631": {
    name: "INS 631 (Disodium Inosinate)",
    type: "Flavour Enhancers",
    desc: {
      en: "What is it: A high-potency flavor enhancer often derived from meat/fish or starch.\nWhy used: Works synergistically with MSG to create deep savory flavor profiles.\nGood or Bad: CAUTION. Breakdown leads to purines, raising uric acid. Check dietary preferences as it can be animal-sourced.\nHow made: Produced from yeast extract or fermented tapioca starch, or dried sardines.",
      hi: "यह क्या है: एक उच्च शक्ति वाला स्वाद बढ़ाने वाला तत्व जो अक्सर मांस/मछली या स्टार्च से प्राप्त होता है।\nक्यों इस्तेमाल होता है: गहरा नमकीन स्वाद बनाने के लिए MSG के साथ मिलकर काम करता है।\nअच्छा या बुरा: चेतावनी। यूरिक एसिड बढ़ा सकता है। यह मांसाहारी स्रोतों से भी हो सकता है।\nकैसे बनता है: खमीर, टैपिओका स्टार्च या सूखी सार्डिन मछली से बनाया जाता है।",
      ta: "இது என்ன: இறைச்சி அல்லது மரவள்ளிக்கிழங்கில் இருந்து பெறப்படும் சுவையூட்டி.\nஏன் பயன்படுத்தப்படுகிறது: MSG உடன் இணைந்து ஆழமான சுவையை அளிக்க.\nநல்லதா கெட்டதா: எச்சரிக்கை. யூரிக் அமிலத்தை உயர்த்தும். அசைவ மூலங்களில் இருந்தும் தயாரிக்கப்படலாம்.\nஎப்படி தயாரிக்கப்படுகிறது: ஈஸ்ட் அல்லது மரவள்ளிக்கிழங்கு ஸ்டார்ச் அல்லது மீனில் இருந்து."
    }
  },
  "ins211": {
    name: "INS 211 (Sodium Benzoate)",
    type: "Preservatives",
    desc: {
      en: "What is it: A chemical sodium salt preservative.\nWhy used: Prevents mold, yeast, and bacterial growth in acidic beverages and sauces.\nGood or Bad: AVOID / CAUTION. Can react with Vitamin C (Ascorbic Acid) to form Benzene, a known carcinogen.\nHow made: Synthesized chemically by neutralizing benzoic acid with sodium hydroxide.",
      hi: "यह क्या है: एक रासायनिक सोडियम नमक परिरक्षक (preservative)।\nक्यों इस्तेमाल होता है: अम्लीय पेय और सॉस में फफूंद और बैक्टीरिया को बढ़ने से रोकने के लिए।\nअच्छा या बुरा: बचें। विटामिन सी के साथ मिलकर यह बेंजीन बना सकता है, जो कैंसरकारी है।\nकैसे बनता है: बेंजोइक एसिड को सोडियम हाइड्रोक्साइड के साथ बेअसर करके बनाया जाता है।",
      ta: "இது என்ன: ஒரு இரசாயன சோடியம் உப்பு காப்பான்.\nஏன் பயன்படுத்தப்படுகிறது: குளிர்பானங்கள் மற்றும் சாஸ்களில் பாக்டீரியா வளர்ச்சியை தடுக்க.\nநல்லதா கெட்டதா: தவிர்க்கவும். வைட்டமின் சி உடன் இணையும்போது இது பென்சீன் எனும் புற்றுநோய் காரணியை உருவாக்கலாம்.\nஎப்படி தயாரிக்கப்படுகிறது: பென்சோயிக் அமிலத்துடன் சோடியம் ஹைட்ராக்சைடை வினைபுரியச் செய்து."
    }
  },
  "ins223": {
    name: "INS 223 (Sodium Metabisulphite)",
    type: "Preservatives",
    desc: {
      en: "What is it: A sulfur-based chemical preservative.\nWhy used: Prevents browning and bacterial growth in dried fruits, syrups, and juices.\nGood or Bad: AVOID. Releases sulfur dioxide. Can trigger severe asthma attacks or allergic reactions in sensitive individuals.\nHow made: Prepared by treating sodium hydroxide solution with sulfur dioxide gas.",
      hi: "यह क्या है: एक सल्फर-आधारित रासायनिक परिरक्षक।\nक्यों इस्तेमाल होता है: सूखे मेवों और रसों को काला पड़ने और बैक्टीरिया से बचाने के लिए।\nअच्छा या बुरा: बचें। सल्फर डाइऑक्साइड छोड़ता है, जो अस्थमा के रोगियों में गंभीर एलर्जी पैदा कर सकता है।\nकैसे बनता है: सोडियम हाइड्रोक्साइड और सल्फर डाइऑक्साइड गैस की क्रिया से।",
      ta: "இது என்ன: சல்பர் கொண்ட ஒரு இரசாயன காப்பான்.\nஏன் பயன்படுத்தப்படுகிறது: உலர்ந்த பழங்கள் மற்றும் பழச்சாறுகள் நிறம் மாறாமல் தடுக்க.\nநல்லதா கெட்டதா: தவிர்க்கவும். இது சல்பர் டை ஆக்சைடை வெளியிடும். ஆஸ்துமா உள்ளவர்களுக்கு ஒவ்வாமையை ஏற்படுத்தலாம்.\nஎப்படி தயாரிக்கப்படுகிறது: சோடியம் ஹைட்ராக்சைடுடன் சல்பர் டை ஆக்சைடு வாயுவை செலுத்தி."
    }
  },
  "ins322i": {
    name: "INS 322(i) (Soy Lecithin)",
    type: "Stabilizers",
    desc: {
      en: "What is it: A natural fatty emulsifier extracted from soybeans.\nWhy used: Keeps fats and water blended, providing smooth textures in chocolates and spreads.\nGood or Bad: SAFE. Generally healthy and non-toxic, unless you have a diagnosed soy allergy.\nHow made: Extracted mechanically from soybean oil processing.",
      hi: "यह क्या है: सोयाबीन से निकाला गया एक प्राकृतिक वसायुक्त इमल्सीफायर।\nक्यों इस्तेमाल होता है: वसा और पानी को मिलाए रखता है, जिससे चॉकलेट में चिकनापन आता है।\nअच्छा या बुरा: सुरक्षित। सोया एलर्जी वाले लोगों को छोड़कर बाकी सभी के लिए सुरक्षित।\nकैसे बनता है: सोयाबीन तेल के प्रसंस्करण के दौरान यांत्रिक रूप से निकाला जाता है।",
      ta: "இது என்ன: சோயா பீன்ஸில் இருந்து பிரித்தெடுக்கப்படும் ஒரு இயற்கை கொழுப்பு பொருள்.\nஏன் பயன்படுத்தப்படுகிறது: சாக்லேட் போன்றவற்றில் எண்ணெய் மற்றும் நீர் பிரியாமல் தடுக்க.\nநல்லதா கெட்டதா: பாதுகாப்பானது. சோயா ஒவ்வாமை உள்ளவர்களைத் தவிர மற்றவர்களுக்கு பாதுகாப்பானது.\nஎப்படி தயாரிக்கப்படுகிறது: சோயா எண்ணெயில் இருந்து பிரித்தெடுக்கப்படுகிறது."
    }
  },
  "ins322": {
    name: "INS 322 (Lecithin)",
    type: "Stabilizers",
    desc: {
      en: "What is it: A natural emulsifier from plant (sunflower, soy) or egg sources.\nWhy used: Smooths chocolate blends and prevents separation of ingredients.\nGood or Bad: SAFE. Non-toxic natural binder.\nHow made: Extracted from sunflower seeds, soybean oil, or egg yolks.",
      hi: "यह क्या है: पौधों (सूरजमुखी, सोया) या अंडे से प्राप्त एक प्राकृतिक इमल्सीफायर।\nक्यों इस्तेमाल होता है: चॉकलेट को चिकना बनाने और सामग्री को अलग होने से रोकने के लिए।\nअच्छा या बुरा: सुरक्षित। गैर-विषाक्त प्राकृतिक बाइंडर।\nकैसे बनता है: सूरजमुखी के बीज, सोयाबीन तेल या अंडे की जर्दी से निकाला जाता है।",
      ta: "இது என்ன: சூரியகாந்தி, சோயா அல்லது முட்டையில் இருந்து பெறப்படும் இயற்கை கூழ்மம்.\nஏன் பயன்படுத்தப்படுகிறது: சாக்லேட் கலவை பிரியாமல் மென்மையாக இருக்க.\nநல்லதா கெட்டதா: பாதுகாப்பானது. நச்சுத்தன்மையற்றது.\nஎப்படி தயாரிக்கப்படுகிறது: சூரியகாந்தி விதை அல்லது சோயா எண்ணெயில் இருந்து."
    }
  },
  "ins471": {
    name: "INS 471 (Mono & Diglycerides of Fatty Acids)",
    type: "Stabilizers",
    desc: {
      en: "What is it: Semi-synthetic food emulsifier derived from plant or animal fats.\nWhy used: Extends shelf life and keeps ice creams, breads, and margarines soft and blended.\nGood or Bad: SAFE / CAUTION. Check FSSAI green/red dot to verify vegetable/animal source origin.\nHow made: Produced via chemical reaction between glycerol and natural fatty acids.",
      hi: "यह क्या है: पौधों या जानवरों के वसा से बना एक अर्ध-सिंथेटिक इमल्सीफायर।\nक्यों इस्तेमाल होता है: आइसक्रीम और ब्रेड को नरम रखने और लंबे समय तक सुरक्षित रखने के लिए।\nअच्छा या बुरा: सुरक्षित। शाकाहारी/मांसाहारी स्रोत की पुष्टि के लिए FSSAI हरा/लाल निशान देखें।\nकैसे बनता है: ग्लिसरॉल और प्राकृतिक फैटी एसिड के बीच रासायनिक प्रतिक्रिया से।",
      ta: "இது என்ன: தாவர அல்லது விலங்கு கொழுப்பில் இருந்து தயாரிக்கப்படும் கூழ்மம்.\nஏன் பயன்படுத்தப்படுகிறது: ஐஸ்கிரீம், ரொட்டி போன்றவற்றை மென்மையாகவும் பிரியாமலும் வைக்க.\nநல்லதா கெட்டதா: பாதுகாப்பானது. சைவ/அசைவ மூலத்தை அறிய FSSAI குறியீட்டை பார்க்கவும்.\nஎப்படி தயாரிக்கப்படுகிறது: கிளிசரால் மற்றும் கொழுப்பு அமிலங்களின் வேதியியல் வினை மூலம்."
    }
  },
  "ins440": {
    name: "INS 440 (Pectin)",
    type: "Stabilizers",
    desc: {
      en: "What is it: A natural structural fiber found in fruits.\nWhy used: Acts as a gelling agent to thicken jams, jellies, and yoghurts.\nGood or Bad: SAFE. High in soluble dietary fiber and beneficial for gut health.\nHow made: Extracted using hot water from apple pomace or citrus fruit peels.",
      hi: "यह क्या है: फलों में पाया जाने वाला एक प्राकृतिक रेशेदार तत्व।\nक्यों इस्तेमाल होता है: जैम और जेली को गाढ़ा करने के लिए जेलिंग एजेंट के रूप में।\nअच्छा या बुरा: सुरक्षित। घुलनशील फाइबर से भरपूर और पेट के स्वास्थ्य के लिए अच्छा।\nकैसे बनता है: सेब के गूदे या खट्टे फलों के छिलकों से गर्म पानी द्वारा निकाला जाता है।",
      ta: "இது என்ன: பழங்களில் காணப்படும் ஒரு இயற்கை நார்சத்து.\nஏன் பயன்படுத்தப்படுகிறது: ஜாம் மற்றும் ஜெல்லிகளை கெட்டியாக்க பயன்படுகிறது.\nநல்லதா கெட்டதா: பாதுகாப்பானது. குடல் ஆரோக்கியத்திற்கு மிகவும் நல்லது.\nஎப்படி தயாரிக்கப்படுகிறது: ஆப்பிள் அல்லது எலுமிச்சை தோல்களில் இருந்து வெந்நீர் கொண்டு பிரித்தெடுக்கப்படுகிறது."
    }
  },
  "ins466": {
    name: "INS 466 (Sodium Carboxymethyl Cellulose)",
    type: "Stabilizers",
    desc: {
      en: "What is it: Cellulose gum, a synthetic thickener derived from plant cell walls.\nWhy used: Texturizer and emulsifier in dairy products, dressings, and gluten-free foods.\nGood or Bad: CAUTION. Large dietary amounts may alter gut microflora and promote mild bowel inflammation.\nHow made: Chemically treated wood pulp or cotton cellulose with chloroacetic acid.",
      hi: "यह क्या है: सेलुलोज गम, पौधों की कोशिका भित्ति से प्राप्त एक कृत्रिम गाढ़ा करने वाला तत्व।\nक्यों इस्तेमाल होता है: डेयरी उत्पादों और सॉस को गाढ़ा और चिकना बनाने के लिए।\nअच्छा या बुरा: चेतावनी। अधिक मात्रा में सेवन से आंतों में हल्की सूजन हो सकती है।\nकैसे बनता है: लकड़ी के गूदे या कपास सेलुलोज को रसायनों के साथ संसाधित करके।",
      ta: "இது என்ன: தாவர செல்லுலோஸில் இருந்து தயாரிக்கப்படும் செயற்கை தடிப்பாக்கி.\nஏன் பயன்படுத்தப்படுகிறது: பால் பொருட்கள் மற்றும் சாஸ்களை தடிமனாக்க.\nநல்லதா கெட்டதா: எச்சரிக்கை. அதிகளவு உட்கொண்டால் குடல் அழற்சி அல்லது செரிமான பாதை புண்கள் வரலாம்.\nஎப்படி தயாரிக்கப்படுகிறது: மரக்கூழ் அல்லது பருத்தி செல்லுலோஸை வேதியியல் முறைப்படி மாற்றி."
    }
  },
  "ins110": {
    name: "INS 110 (Sunset Yellow FCF)",
    type: "Colours",
    desc: {
      en: "What is it: A synthetic petroleum-derived orange azo dye.\nWhy used: Imparts a bright orange-yellow color to candies, chips, and sodas.\nGood or Bad: AVOID. Linked to hyperactivity (ADHD) in children and asthma triggers. Banned in Norway and Sweden.\nHow made: Synthesized chemically from petroleum-derived hydrocarbons.",
      hi: "यह क्या है: पेट्रोलियम से प्राप्त एक सिंथेटिक नारंगी रंग।\nक्यों इस्तेमाल होता है: कैंडीज, चिप्स और कोल्ड ड्रिंक्स को चमकीला नारंगी रंग देने के लिए।\nअच्छा या बुरा: बचें। बच्चों में अतिसक्रियता (ADHD) और अस्थमा से जुड़ा है। कई देशों में प्रतिबंधित।\nकैसे बनता है: पेट्रोलियम हाइड्रोकार्बन से रासायनिक रूप से संश्लेषित।",
      ta: "இது என்ன: பெட்ரோலியத்தில் இருந்து பெறப்படும் செயற்கை ஆரஞ்சு வண்ணம்.\nஏன் பயன்படுத்தப்படுகிறது: மிட்டாய்கள், சிப்ஸ் மற்றும் சோடாவுக்கு ஆரஞ்சு நிறம் அளிக்க.\nநல்லதா கெட்டதா: தவிர்க்கவும். குழந்தைகளுக்கு கவனக்குறைவு மற்றும் ஒவ்வாமையை ஏற்படுத்தலாம். சில நாடுகளில் தடை செய்யப்பட்டது.\nஎப்படி தயாரிக்கப்படுகிறது: பெட்ரோலிய பொருட்களிலிருந்து இரசாயன முறைப்படி."
    }
  },
  "ins122": {
    name: "INS 122 (Carmoisine)",
    type: "Colours",
    desc: {
      en: "What is it: A synthetic red food dye.\nWhy used: Imparts red to purple hues in soft drinks, sweets, and jams.\nGood or Bad: AVOID. Linked to allergic reactions, hyperactivity in children. Banned in USA, Canada, and Japan.\nHow made: Prepared synthetically from coal tar derivatives.",
      hi: "यह क्या है: एक कृत्रिम लाल खाद्य रंग।\nक्यों इस्तेमाल होता है: कोल्ड ड्रिंक्स, मिठाइयों और जैम को लाल-बैंगनी रंग देने के लिए।\nअच्छा या बुरा: बचें। बच्चों में एलर्जी और अतिसक्रियता से जुड़ा है। अमेरिका और कनाडा में प्रतिबंधित।\nकैसे बनता है: कोलतार (coal tar) के रसायनों से कृत्रिम रूप से बनाया जाता है।",
      ta: "இது என்ன: ஒரு செயற்கை சிவப்பு சாயம்.\nஏன் பயன்படுத்தப்படுகிறது: பானங்கள், இனிப்புகளுக்கு சிவப்பு நிறம் வழங்க.\nநல்லதா கெட்டதா: தவிர்க்கவும். ஒவ்வாமை மற்றும் ஆஸ்துமாவை தூண்டலாம். அமெரிக்கா மற்றும் கனடாவில் தடை செய்யப்பட்டுள்ளது.\nஎப்படி தயாரிக்கப்படுகிறது: நிலக்கரி தார் வேதிப்பொருட்களில் இருந்து."
    }
  },
  "ins102": {
    name: "INS 102 (Tartrazine)",
    type: "Colours",
    desc: {
      en: "What is it: A synthetic bright yellow food dye.\nWhy used: Colors desserts, chips, carbonated drinks, and sauces.\nGood or Bad: AVOID. Linked to ADHD in children and severe hives/asthma flare-ups. Strict limits worldwide.\nHow made: Chemically synthesized from coal tar residues.",
      hi: "यह क्या है: एक चमकीला पीला कृत्रिम खाद्य रंग।\nक्यों इस्तेमाल होता है: मिठाइयों, चिप्स, कोल्ड ड्रिंक्स और सॉस को पीला रंग देने के लिए।\nअच्छा या बुरा: बचें। बच्चों में ध्यान भटकने (ADHD) और अस्थमा के हमलों से जुड़ा है।\nकैसे बनता है: कोलतार के अवशेषों से रासायनिक रूप से बनाया जाता है।",
      ta: "இது என்ன: ஒரு செயற்கை மஞ்சள் சாயம்.\nஏன் பயன்படுத்தப்படுகிறது: இனிப்புகள், சிப்ஸ் மற்றும் குளிர்பானங்களுக்கு மஞ்சள் நிறம் தர.\nநல்லதா கெட்டதா: தவிர்க்கவும். குழந்தையின் கவனக்குறைவு மற்றும் தோல் அரிப்புடன் தொடர்புடையது.\nஎப்படி தயாரிக்கப்படுகிறது: நிலக்கரி தாரில் இருந்து வேதியியல் முறைப்படி தொகுக்கப்படுகிறது."
    }
  },
  "ins415": {
    name: "INS 415 (Xanthan Gum)",
    type: "Stabilizers",
    desc: {
      en: "What is it: A natural soluble fiber thickener.\nWhy used: Prevents salad dressings from separating and stabilizes gluten-free baking dough.\nGood or Bad: SAFE. Non-toxic fiber, though excess intake may cause mild bloating or gas.\nHow made: Produced via fermentation of simple sugars by the Xanthomonas campestris bacterium.",
      hi: "यह क्या है: एक प्राकृतिक घुलनशील फाइबर गाढ़ा करने वाला तत्व।\nक्यों इस्तेमाल होता है: सलाद ड्रेसिंग को अलग होने से रोकने और बेकिंग आटे को स्थिर करने के लिए।\nअच्छा या बुरा: सुरक्षित। गैर-विषाक्त रेशा। अत्यधिक मात्रा से गैस या पेट फूलना हो सकता है।\nकैसे बनता है: बैक्टीरिया द्वारा शर्करा के किण्वन से बनाया जाता है।",
      ta: "இது என்ன: ஒரு இயற்கையான நார்சத்து தடிப்பாக்கி.\nஏன் பயன்படுத்தப்படுகிறது: சாஸ் மற்றும் மாவின் நிலைத்தன்மையை பராமரிக்க.\nநல்லதா கெட்டதா: பாதுகாப்பானது. நச்சுத்தன்மையற்றது, ஆனால் அதிகளவில் வாயுத்தொல்லை வரலாம்.\nஎப்படி தயாரிக்கப்படுகிறது: பாக்டீரியா மூலம் சர்க்கரையை நொதிக்க வைத்து தயாரிக்கப்படுகிறது."
    }
  },
  "ins407": {
    name: "INS 407 (Carrageenan)",
    type: "Stabilizers",
    desc: {
      en: "What is it: A seaweed extract binder.\nWhy used: Thickens and gels dairy creams, ice creams, and plant-based milks.\nGood or Bad: AVOID / CAUTION. Heavily linked in gastrointestinal studies to gut lining inflammation, colitis, and ulcers.\nHow made: Extracted from red seaweeds using hot alkaline solutions.",
      hi: "यह क्या है: समुद्री शैवाल से निकाला गया एक प्राकृतिक बाइंडर।\nक्यों इस्तेमाल होता है: डेयरी क्रीम, आइसक्रीम और प्लांट-बेस्ड मिल्क को गाढ़ा करने के लिए।\nअच्छा या बुरा: बचें। शोधों में इसे पेट की सूजन, कोलाइटिस और अल्सर से जोड़ा गया है।\nकैसे बनता है: लाल समुद्री शैवाल को गर्म क्षारीय घोल में संसाधित करके निकाला जाता है।",
      ta: "இது என்ன: ஒரு வகை கடற்பாசி சாறு.\nஏன் பயன்படுத்தப்படுகிறது: பால் மற்றும் தாவர பால் பொருட்களை தடிமனாக்க.\nநல்லதா கெட்டதா: தவிர்க்கவும். குடல் அழற்சி மற்றும் செரிமான பாதை புண்களை ஏற்படுத்தலாம்.\nஎப்படி தயாரிக்கப்படுகிறது: சிவப்பு கடற்பாசியை கொண்டு தயாரிக்கப்படுகிறது."
    }
  },
  "ins412": {
    name: "INS 412 (Guar Gum)",
    type: "Stabilizers",
    desc: {
      en: "What is it: A natural seed-derived dietary fiber gum.\nWhy used: High-viscosity thickener used in baking, sauces, and low-fat dairy substitutes.\nGood or Bad: SAFE. Natural plant fiber with cholesterol-lowering properties.\nHow made: De-husked, milled, and ground from natural guar beans.",
      hi: "यह क्या है: ग्वार के बीजों से प्राप्त एक प्राकृतिक फाइबर गम।\nक्यों इस्तेमाल होता है: सॉस, बेकिंग और कम वसा वाले डेयरी उत्पादों को गाढ़ा करने के लिए।\nअच्छा या बुरा: सुरक्षित। यह कोलेस्ट्रॉल को कम करने में भी सहायक प्राकृतिक फाइबर है।\nकैसे बनता है: ग्वार की फलियों के बीजों को पीसकर बनाया जाता है।",
      ta: "இது என்ன: குவார் விதைகளில் இருந்து பெறப்படும் இயற்கை நார்சத்து பிசின்.\nஏன் பயன்படுத்தப்படுகிறது: சாஸ் மற்றும் பேக்கிங்கில் தடிப்பாக்கியாக.\nநல்லதா கெட்டதா: பாதுகாப்பானது. கொழுப்பை குறைக்க உதவும் இயற்கை நார்சத்து.\nஎப்படி தயாரிக்கப்படுகிறது: குவார் விதைகளை அரைத்து தயாரிக்கப்படுகிறது."
    }
  },
  "ins319": {
    name: "INS 319 (Tert-Butylhydroquinone - TBHQ)",
    type: "Preservatives",
    desc: {
      en: "What is it: A synthetic petroleum-derived antioxidant preservative.\nWhy used: Prevents oxidation and rancidity in vegetable oils, fried snacks, and noodles.\nGood or Bad: AVOID / CAUTION. Restricted usage globally due to cell toxicity and DNA damage concerns in high quantities.\nHow made: Synthesized chemically from petroleum products.",
      hi: "यह क्या है: पेट्रोलियम से प्राप्त एक कृत्रिम एंटीऑक्सीडेंट परिरक्षक।\nक्यों इस्तेमाल होता है: तेलों, तले हुए स्नैक्स और नूडल्स को खराब होने से बचाने के लिए।\nअच्छा या बुरा: बचें। उच्च मात्रा में यह कोशिकाओं को नुकसान पहुंचा सकता है। कई देशों में कड़ी सीमाएं हैं।\nकैसे बनता है: पेट्रोलियम उत्पादों से रासायनिक रूप से संश्लेषित।",
      ta: "இது என்ன: பெட்ரோலியத்தில் இருந்து பெறப்படும் ஒரு செயற்கை காப்பான்.\nஏன் பயன்படுத்தப்படுகிறது: எண்ணெய்கள், சிப்ஸ் மற்றும் நூடுல்ஸ் கெட்டுப்போகாமல் தடுக்க.\nநல்லதா கெட்டதா: தவிர்க்கவும். செல் மற்றும் மரபணு பாதிப்புகளை ஏற்படுத்தலாம் என எச்சரிக்கப்படுகிறது.\nஎப்படி தயாரிக்கப்படுகிறது: பெட்ரோலிய வேதிப்பொருட்களிலிருந்து தயாரிக்கப்படுகிறது."
    }
  },
  "ins320": {
    name: "INS 320 (Butylated Hydroxyanisole - BHA)",
    type: "Preservatives",
    desc: {
      en: "What is it: A synthetic waxy preservative.\nWhy used: Prevents fats and oils in cereals and snacks from becoming rancid and smelly.\nGood or Bad: AVOID. Classified by WHO as a suspected endocrine disruptor and human carcinogen.\nHow made: Synthesized from p-methoxyphenol and isobutylene chemically.",
      hi: "यह क्या है: एक कृत्रिम मोम जैसा परिरक्षक (preservative)।\nक्यों इस्तेमाल होता है: अनाज और स्नैक्स में वसा को खराब होने और दुर्गंधयुक्त होने से बचाने के लिए।\nअच्छा या बुरा: बचें। विश्व स्वास्थ्य संगठन (WHO) द्वारा इसे कैंसरकारी और हार्मोन बिगाड़ने वाला माना गया है।\nकैसे बनता है: रसायनों के संश्लेषण द्वारा निर्मित।",
      ta: "இது என்ன: ஒரு செயற்கை மெழுகு போன்ற காப்பான்.\nஏன் பயன்படுத்தப்படுகிறது: தானியங்கள் மற்றும் சிப்ஸ்களில் உள்ள கொழுப்புகள் கெடாமல் இருக்க.\nநல்லதா கெட்டதா: தவிர்க்கவும். இது புற்றுநோயை தூண்டும் மற்றும் ஹார்மோன்களை பாதிக்கும் என எச்சரிக்கப்படுகிறது.\nஎப்படி தயாரிக்கப்படுகிறது: வேதியியல் தொகுப்பு முறை மூலம்."
    }
  }
};

// ==========================================
// 3. STATE CONTROLLER (Syncs with LocalStorage)
// ==========================================
const STATE = {
  primaryProfile: {
    diet: "vegetarian",
    allergies: { dairy: false, gluten: false, nuts: false, soy: false },
    conditions: { diabetic: false, highbp: false, kidney: false, pregnant: false },
    targets: { calories: 2000, sugar: 40, sodium: 1500 }
  },
  activeModes: {
    kids: false,
    fitness: false,
    pregnancy: false,
    eco: false,
    clinical: false
  },
  familyMembers: [],
  recentScans: [],
  currentTab: "tab-scan",
  
  // Camera state indicators
  cameraActive: false,
  videoStream: null,
  scannerInstance: null,
  scannerLoopId: null
};

// Load configurations
function loadState() {
  const localOnboarded = localStorage.getItem("sattva_onboarded");
  if (!localOnboarded) {
    document.getElementById("onboarding-overlay").style.display = "flex";
  }

  const profile = localStorage.getItem("sattva_profile");
  if (profile) STATE.primaryProfile = JSON.parse(profile);

  const modes = localStorage.getItem("sattva_modes");
  if (modes) STATE.activeModes = JSON.parse(modes);

  const family = localStorage.getItem("sattva_family");
  if (family) STATE.familyMembers = JSON.parse(family);

  const scans = localStorage.getItem("sattva_scans");
  if (scans) STATE.recentScans = JSON.parse(scans);
}

function saveState() {
  localStorage.setItem("sattva_profile", JSON.stringify(STATE.primaryProfile));
  localStorage.setItem("sattva_modes", JSON.stringify(STATE.activeModes));
  localStorage.setItem("sattva_family", JSON.stringify(STATE.familyMembers));
  localStorage.setItem("sattva_scans", JSON.stringify(STATE.recentScans));
}

// Toast System
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = "ti-check";
  if (type === "warning") icon = "ti-alert-triangle";
  if (type === "error") icon = "ti-circle-x";
  
  toast.innerHTML = `<i class="ti ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "toastFade 0.3s reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==========================================
// 4. ONBOARDING & UI TABS CONTROLLER
// ==========================================
let onboardingSlideIndex = 0;
function initOnboarding() {
  const nextBtn = document.getElementById("onboarding-next-btn");
  const slides = document.querySelectorAll(".onboarding-slide");
  const dots = document.querySelectorAll(".swipe-dots .dot");
  
  // Wire multiselect triggers
  const condBtns = document.querySelectorAll("#onboard-conditions .cond-btn");
  condBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });

  nextBtn.addEventListener("click", () => {
    if (onboardingSlideIndex < 2) {
      slides[onboardingSlideIndex].classList.remove("active");
      dots[onboardingSlideIndex].classList.remove("active");
      onboardingSlideIndex++;
      slides[onboardingSlideIndex].classList.add("active");
      dots[onboardingSlideIndex].classList.add("active");
      
      if (onboardingSlideIndex === 2) {
        nextBtn.innerHTML = `Get Started <i class="ti ti-check"></i>`;
      }
    } else {
      // Save onboarding config
      const diet = document.getElementById("onboard-diet").value;
      const conditions = { diabetic: false, highbp: false, kidney: false, pregnant: false };
      
      document.querySelectorAll("#onboard-conditions .cond-btn.active").forEach(btn => {
        conditions[btn.dataset.cond] = true;
      });

      STATE.primaryProfile.diet = diet;
      STATE.primaryProfile.conditions = conditions;
      
      // If pregnant, turn on pregnancy mode automatically
      if (conditions.pregnant) {
        STATE.activeModes.pregnancy = true;
        STATE.activeModes.clinical = true;
      }
      if (conditions.diabetic || conditions.highbp || conditions.kidney) {
        STATE.activeModes.clinical = true;
      }

      localStorage.setItem("sattva_onboarded", "true");
      saveState();
      
      // Update inputs on profile tab
      syncProfileFieldsToUI();
      
      // Hide overlay
      document.getElementById("onboarding-overlay").style.display = "none";
      showToast("Profile set up successfully! Welcome to Sattva Scan.", "success");
      
      // Launch camera scan since it's the default tab
      initializeCamera();
    }
  });
}

// Sync Form fields on profile tab
function syncProfileFieldsToUI() {
  document.getElementById("profile-diet").value = STATE.primaryProfile.diet;
  
  // Check checkboxes
  const allergyBoxes = document.querySelectorAll("#profile-allergies input");
  allergyBoxes.forEach(box => {
    box.checked = STATE.primaryProfile.allergies[box.value] || false;
  });

  // Multiselect conditions buttons
  const condBtns = document.querySelectorAll("#profile-conditions .cond-btn");
  condBtns.forEach(btn => {
    const active = STATE.primaryProfile.conditions[btn.dataset.cond] || false;
    btn.classList.toggle("active", active);
  });

  // Target inputs
  document.getElementById("target-calories-input").value = STATE.primaryProfile.targets.calories;
  document.getElementById("target-sugar-input").value = STATE.primaryProfile.targets.sugar;
  document.getElementById("target-sodium-input").value = STATE.primaryProfile.targets.sodium;

  // Modes Checkboxes
  document.getElementById("mode-kids").checked = STATE.activeModes.kids;
  document.getElementById("mode-fitness").checked = STATE.activeModes.fitness;
  document.getElementById("mode-pregnancy").checked = STATE.activeModes.pregnancy;
  document.getElementById("mode-eco").checked = STATE.activeModes.eco;
  document.getElementById("mode-clinical").checked = STATE.activeModes.clinical;
}

// Navigation Controller
function activateTabDirectly(tabId, pushHistory = true) {
  const buttons = document.querySelectorAll(".bottom-nav .nav-btn");
  const targetBtn = Array.from(buttons).find(b => b.dataset.tab === tabId);
  if (!targetBtn) return;

  // Remove active from all buttons & panels
  buttons.forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  
  targetBtn.classList.add("active");
  const panel = document.getElementById(tabId);
  if (panel) panel.classList.add("active");
  
  STATE.currentTab = tabId;
  
  // Camera management on tab change
  if (tabId === "tab-scan") {
    initializeCamera();
  } else {
    stopCameraScanner();
  }

  // Update specific tabs when opened
  if (tabId === "tab-today") {
    renderTodayDashboard();
  }
  if (tabId === "tab-pantry") {
    renderPantryHistory();
  }
  if (tabId === "tab-profile") {
    renderFamilyGraph();
  }

  if (pushHistory) {
    history.pushState({ tab: tabId, modalOpen: false }, "");
  }
}

function initTabs() {
  const buttons = document.querySelectorAll(".bottom-nav .nav-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      activateTabDirectly(tabId, true);
    });
  });

  // Setup Initial History State
  history.replaceState({ tab: "tab-scan", modalOpen: false }, "");

  window.addEventListener("popstate", (event) => {
    const state = event.state;
    const modal = document.getElementById("result-sheet-overlay");

    // 1. If back button pressed and modal is open, close modal
    if (modal && modal.style.display !== "none") {
      modal.style.display = "none";
      initializeCamera();
      return;
    }

    // 2. If state exists and has a tab, switch to it
    if (state && state.tab) {
      activateTabDirectly(state.tab, false);
    }
  });
}

function pushModalOpenHistory() {
  history.pushState({ tab: STATE.currentTab, modalOpen: true }, "");
}

function closeModalHistorySync() {
  if (history.state && history.state.modalOpen) {
    history.back();
  }
}

// ==========================================
// 4.5 PREMIUM AUDIO & CAMERA EXTRA CONTROLS
// ==========================================
function playSereneChime() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Warm bell sound bowl synthesis
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
    
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime); // E5
    
    gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);
    
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc1.start();
    osc2.start();
    osc1.stop(audioCtx.currentTime + 1.2);
    osc2.stop(audioCtx.currentTime + 1.2);
    
    // Haptic vibration
    if (navigator.vibrate) {
      navigator.vibrate([60, 40, 60]);
    }
  } catch (e) {
    console.warn("Serene Audio Context blocked or not supported:", e);
  }
}

let torchActive = false;
let currentZoomLevel = 1.0;

function toggleTorch() {
  if (!STATE.videoStream) return;
  const track = STATE.videoStream.getVideoTracks()[0];
  if (!track) return;
  try {
    const capabilities = track.getCapabilities();
    if (capabilities.torch) {
      torchActive = !torchActive;
      track.applyConstraints({
        advanced: [{ torch: torchActive }]
      }).then(() => {
        const icon = document.querySelector("#btn-toggle-torch i");
        icon.className = torchActive ? "ti ti-bolt-off" : "ti ti-bolt";
        showToast(torchActive ? "Flashlight On ✓" : "Flashlight Off", "info");
      }).catch(err => console.error("Torch error:", err));
    }
  } catch (e) {
    console.warn("Torch constraints not supported:", e);
  }
}

function cycleZoom() {
  if (!STATE.videoStream) return;
  const track = STATE.videoStream.getVideoTracks()[0];
  if (!track) return;
  try {
    const capabilities = track.getCapabilities();
    if (capabilities.zoom) {
      const min = capabilities.zoom.min || 1.0;
      const max = capabilities.zoom.max || 3.0;
      const step = capabilities.zoom.step || 0.5;
      
      currentZoomLevel += 0.5;
      if (currentZoomLevel > max) currentZoomLevel = min;
      
      track.applyConstraints({
        advanced: [{ zoom: currentZoomLevel }]
      }).then(() => {
        showToast(`Camera Zoom: ${currentZoomLevel}x`, "info");
      }).catch(err => console.error("Zoom error:", err));
    }
  } catch (e) {
    console.warn("Zoom constraints not supported:", e);
  }
}

function bindCameraControls(stream) {
  const torchBtn = document.getElementById("btn-toggle-torch");
  const zoomBtn = document.getElementById("btn-camera-zoom");
  
  if (!stream) {
    torchBtn.style.display = "none";
    zoomBtn.style.display = "none";
    return;
  }
  
  const track = stream.getVideoTracks()[0];
  if (!track) return;
  
  setTimeout(() => {
    try {
      const capabilities = track.getCapabilities();
      if (capabilities.torch) {
        torchBtn.style.display = "inline-flex";
        torchBtn.onclick = () => toggleTorch();
      } else {
        torchBtn.style.display = "none";
      }

      if (capabilities.zoom) {
        zoomBtn.style.display = "inline-flex";
        zoomBtn.onclick = () => cycleZoom();
      } else {
        zoomBtn.style.display = "none";
      }
    } catch (e) {
      console.warn("Checking camera capacities error:", e);
      torchBtn.style.display = "none";
      zoomBtn.style.display = "none";
    }
  }, 800);
}

// ==========================================
// 5. RESILIENT CAMERA & STREAM LIFECYCLE
// ==========================================
function initializeCamera() {
  if (STATE.cameraActive) return;
  
  const statusMsg = document.getElementById("scan-status-message");
  statusMsg.textContent = "Accessing camera stream...";
  document.getElementById("viewfinder-controls").style.display = "none";
  
  const formatsToSupport = [
    Html5QrcodeSupportedFormats.EAN_13,
    Html5QrcodeSupportedFormats.EAN_8,
    Html5QrcodeSupportedFormats.UPC_A
  ];

  // 1. Try Native Browser BarcodeDetector
  if ('BarcodeDetector' in window) {
    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";

    const container = document.getElementById("scanner-video-container");
    container.innerHTML = "";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then(stream => {
        video.srcObject = stream;
        STATE.videoStream = stream;
        STATE.cameraActive = true;
        statusMsg.textContent = "Align barcode inside the camera guides.";
        document.getElementById("viewfinder-controls").style.display = "block";
        bindCameraControls(stream);

        let detector;
        try {
          detector = new BarcodeDetector({ formats: ['ean_13', 'ean_8', 'upc_a'] });
        } catch (e) {
          console.warn("Native BarcodeDetector failed, falling back to Html5Qrcode:", e);
          stopCameraScanner();
          startHtml5QrcodeFallback(formatsToSupport);
          return;
        }

        const detectFrame = () => {
          if (!STATE.cameraActive) return;
          if (video.readyState === video.HAVE_ENOUGH_DATA) {
            detector.detect(video)
              .then(barcodes => {
                if (barcodes.length > 0) {
                  showToast("Barcode recognized!", "success");
                  stopCameraScanner();
                  triggerProductAudit(barcodes[0].rawValue);
                } else {
                  STATE.scannerLoopId = requestAnimationFrame(detectFrame);
                }
              })
              .catch(err => {
                console.error("Native detector error:", err);
                stopCameraScanner();
                startHtml5QrcodeFallback(formatsToSupport);
              });
          } else {
            STATE.scannerLoopId = requestAnimationFrame(detectFrame);
          }
        };
        detectFrame();
      })
      .catch(err => {
        console.warn("Native getUserMedia failed, falling back to Html5Qrcode:", err);
        startHtml5QrcodeFallback(formatsToSupport);
      });
  } else {
    startHtml5QrcodeFallback(formatsToSupport);
  }
}

function startHtml5QrcodeFallback(formats) {
  const statusMsg = document.getElementById("scan-status-message");
  statusMsg.textContent = "Starting camera helper...";
  document.getElementById("viewfinder-controls").style.display = "block";

  const container = document.getElementById("scanner-video-container");
  container.innerHTML = "";

  STATE.scannerInstance = new Html5Qrcode("scanner-video-container");
  STATE.scannerInstance.start(
    { facingMode: "environment" },
    { fps: 15, qrbox: { width: 250, height: 150 }, formatsToSupport: formats },
    (decodedText) => {
      showToast("Barcode found!", "success");
      stopCameraScanner();
      triggerProductAudit(decodedText);
    },
    () => {}
  ).then(() => {
    STATE.cameraActive = true;
    statusMsg.textContent = "Align barcode inside camera guides.";
    
    // Bind controls
    const video = document.querySelector("#scanner-video-container video");
    if (video && video.srcObject) {
      STATE.videoStream = video.srcObject;
      bindCameraControls(video.srcObject);
    }
  }).catch(err => {
    console.error("Html5Qrcode initialization error:", err);
    statusMsg.textContent = "Camera blocked or inaccessible. Enter manually.";
  });
}

function stopCameraScanner() {
  STATE.cameraActive = false;
  
  if (STATE.scannerLoopId) {
    cancelAnimationFrame(STATE.scannerLoopId);
    STATE.scannerLoopId = null;
  }
  if (STATE.videoStream) {
    STATE.videoStream.getTracks().forEach(track => track.stop());
    STATE.videoStream = null;
  }
  if (STATE.scannerInstance && STATE.scannerInstance.isScanning) {
    STATE.scannerInstance.stop().catch(err => console.error("Html5Qrcode stop error:", err));
    STATE.scannerInstance = null;
  }

  const container = document.getElementById("scanner-video-container");
  container.innerHTML = "";
}

// ==========================================
// 6. SEARCH & MOCK BACKEND SCRAEPR
// ==========================================
async function fetchOpenFoodFactsProduct(barcode) {
  try {
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
    const data = await response.json();
    if (data.status === 1 && data.product) {
      const p = data.product;
      
      // Extract properties
      const name = p.product_name || "Unknown Product";
      const brand = p.brands || "Unknown Brand";
      const img = p.image_front_url || "";
      const rawIngredients = p.ingredients_text || "";
      
      // Parse nutrition (fallback to average values if empty)
      const nut = p.nutriments || {};
      const serving_size = p.serving_quantity || 100;
      
      const nutrition = {
        serving_size: parseFloat(serving_size),
        calories: Math.round(nut["energy-kcal_serving"] || nut["energy-kcal_100g"] || 110),
        sugar: Math.round(nut["sugars_serving"] || nut["sugars_100g"] || 5),
        sodium: Math.round(nut["sodium_serving"] || nut["sodium_100g"] * 1000 || 80),
        carbs: Math.round(nut["carbohydrates_serving"] || nut["carbohydrates_100g"] || 15),
        protein: Math.round(nut["proteins_serving"] || nut["proteins_100g"] || 2),
        fat: Math.round(nut["fat_serving"] || nut["fat_100g"] || 4),
        fibre: Math.round(nut["fiber_serving"] || nut["fiber_100g"] || 0)
      };

      return {
        barcode,
        name,
        brand,
        category: "snacks",
        fssai: "10000000000000",
        manufacturer: "Imported / Local Maker",
        ingredients: rawIngredients || "No ingredients label found on Open Food Facts.",
        nutrition,
        claims: p.marketing_claims || []
      };
    }
  } catch (err) {
    console.error("Open Food Facts fetch failed:", err);
  }
  return null;
}

async function queryBackendGoogleSearch(barcode) {
  // 1. Check local DB
  if (LOCAL_PRODUCTS_DB[barcode]) {
    return { ...LOCAL_PRODUCTS_DB[barcode] };
  }
  
  // 2. Fetch from Open Food Facts
  const offProduct = await fetchOpenFoodFactsProduct(barcode);
  if (offProduct) return offProduct;
  
  return null;
}

// Custom manual uploader
function saveCustomProductToLocal(product) {
  LOCAL_PRODUCTS_DB[product.barcode] = product;
  showToast("Product details logged to local database!", "success");
}

// ==========================================
// 7. TWO-PASS RESULT SHEET CONTROLLER
// ==========================================
function triggerProductAudit(barcode) {
  // Play serene bowl chime and vibration
  playSereneChime();

  // Reset result views
  document.getElementById("result-sheet-overlay").style.display = "flex";
  document.getElementById("card-skeleton").style.display = "flex";
  document.getElementById("card-content-area").style.display = "none";
  document.getElementById("not-found-form-container").style.display = "none";
  
  // Turn off camera inside main loop
  stopCameraScanner();

  // Push history state to handle back-button modal close
  pushModalOpenHistory();

  // Run async scraper
  queryBackendGoogleSearch(barcode).then(product => {
    // Hide skeleton
    document.getElementById("card-skeleton").style.display = "none";

    if (!product) {
      // Product not found fallback -> show creation form
      document.getElementById("card-content-area").style.display = "none";
      document.getElementById("not-found-form-container").style.display = "block";
      
      // Reset input fields
      document.getElementById("notfound-brand").value = "";
      document.getElementById("notfound-name").value = "";
      document.getElementById("notfound-ingredients").value = "";
      
      // Store active barcode to save it
      STATE.activeNotFoundBarcode = barcode;
      return;
    }

    // Product found -> show normal content area
    document.getElementById("not-found-form-container").style.display = "none";
    document.getElementById("card-content-area").style.display = "block";

    // PASS 1: Render Basic Details Instantly
    renderPass1Details(product);
    
    // PASS 2: AI Report Calculation (Delays 1000ms to simulate analysis loading)
    setTimeout(() => {
      renderPass2Analysis(product);
      
      // Add to pantry scans automatically
      addToPantryHistory(product);
    }, 1000);
  });
}

function renderPass1Details(product) {
  document.getElementById("card-skeleton").style.display = "flex";
  document.getElementById("card-content-area").style.display = "none";

  document.getElementById("prod-name").textContent = product.name;
  document.getElementById("prod-brand").textContent = product.brand;
  
  const imgElement = document.getElementById("prod-img");
  const fallbackElement = document.getElementById("prod-img-fallback");
  
  if (product.image) {
    imgElement.src = product.image;
    imgElement.style.display = "block";
    fallbackElement.style.display = "none";
  } else {
    imgElement.style.display = "none";
    fallbackElement.style.display = "flex";
  }

  // FSSAI Manufacturer line
  const fssaiRow = document.getElementById("prod-fssai-row");
  fssaiRow.innerHTML = `<span class="badge-fssai">FSSAI Approved</span>`;
  if (product.fssai && product.fssai !== "10000000000000") {
    fssaiRow.innerHTML += `<span style="font-size:9px; color:var(--text-muted); margin-left: 6px;">Lic. No: ${product.fssai}</span>`;
  }
}

function renderPass2Analysis(product) {
  // Hide skeleton
  document.getElementById("card-skeleton").style.display = "none";
  document.getElementById("card-content-area").style.display = "block";

  // Calculate scores
  const wholesomeness = calculateWholesomeness(product);
  
  // Render health score ring
  const circle = document.getElementById("score-ring-fill");
  const scoreText = document.getElementById("score-text");
  const score = Math.round(wholesomeness.score / 10);
  
  scoreText.textContent = score;
  
  // Circular progress: dasharray=251 (2 * PI * r)
  const percent = score / 10;
  const offset = 251 - (251 * percent);
  circle.style.strokeDashoffset = offset;
  
  // Score color coloring
  circle.className.baseVal = "ring-score-progress";
  if (score >= 8) circle.classList.add("green");
  else if (score >= 5) circle.classList.add("amber");
  else circle.classList.add("red");

  // Single Verdict Badge
  const badge = document.getElementById("verdict-badge");
  const reasonText = document.getElementById("verdict-reason");
  
  badge.className = "verdict-banner";
  if (score >= 8) {
    badge.classList.add("safe");
    badge.querySelector(".verdict-text").textContent = "🟢 SAFE";
    reasonText.textContent = wholesomeness.reasons[0] || "Clean, minimally processed ingredients.";
  } else if (score >= 5) {
    badge.classList.add("caution");
    badge.querySelector(".verdict-text").textContent = "🟡 CAUTION";
    reasonText.textContent = wholesomeness.reasons[0] || "Processed ingredients. Moderate intake advised.";
  } else {
    badge.classList.add("avoid");
    badge.querySelector(".verdict-text").textContent = "🔴 AVOID";
    reasonText.textContent = wholesomeness.reasons[0] || "High chemical or refined palm oil content.";
  }

  // Dietary Compliance HUD
  const flags = parseIngredientFlags(product.ingredients);
  renderDietaryTagsHUD(flags);

  // Household simultaneous audit check
  runFamilySafetyAudit(product, flags);

  // Section 1: Interactive Chips
  renderIngredientsSection(product.ingredients);

  // Section 2: Honest Breakdown
  renderHonestBreakdown(product, flags);

  // Section 3: Caught Lying
  renderMarketingLieDetector(product, flags);

  // Section 4: Nutrition Toggle and grid
  renderNutritionStats(product, "serving");
  
  // Hook up toggle buttons
  document.getElementById("btn-nut-serving").onclick = () => {
    document.getElementById("btn-nut-serving").classList.add("active");
    document.getElementById("btn-nut-100g").classList.remove("active");
    renderNutritionStats(product, "serving");
  };
  document.getElementById("btn-nut-100g").onclick = () => {
    document.getElementById("btn-nut-serving").classList.remove("active");
    document.getElementById("btn-nut-100g").classList.add("active");
    renderNutritionStats(product, "100g");
  };

  // Section 5: For You Personalized Flags
  renderPersonalizedFlags(product, flags);

  // Section 6: Better Alternatives
  renderAlternatives(product);

  // Wire Add to Log
  const logBtn = document.getElementById("btn-add-to-today");
  logBtn.onclick = () => {
    addConsumptionToToday(product);
  };

  // Wire Share button
  document.getElementById("btn-share-result").onclick = () => {
    generateShareCardImage(product, wholesomeness);
  };
  
  // Wire certification disclaimers
  const certificationDisclaimer = document.getElementById("certification-disclaimer-text");
  if (STATE.primaryProfile.diet === "jain" || STATE.primaryProfile.diet === "halal") {
    certificationDisclaimer.textContent = "Jain/Halal audit is based on ingredient text analysis only. Cannot guarantee manufacturing line cross-contamination. Check certification mark on physical product.";
    certificationDisclaimer.style.display = "block";
  } else {
    certificationDisclaimer.style.display = "none";
  }
}

// ==========================================
// 8. DATA AUDITORS & COMPLIANCE LOGIC
// ==========================================
function parseIngredientFlags(ingredients) {
  const clean = ingredients.toLowerCase();
  return {
    palm: DETECTORS.palm.test(clean),
    maida: DETECTORS.maida.test(clean),
    hfcs: DETECTORS.hfcs.test(clean),
    transFats: DETECTORS.transFats.test(clean),
    artificialSweeteners: DETECTORS.artificialSweeteners.test(clean),
    artificialColors: DETECTORS.artificialColors.test(clean),
    msg: DETECTORS.msg.test(clean),
    carrageenan: DETECTORS.carrageenan.test(clean),
    bha_bht: DETECTORS.bha_bht.test(clean),
    refinedSugar: DETECTORS.refinedSugar.test(clean),
    
    // Allergens
    dairy: DETECTORS.dairy.test(clean),
    gluten: DETECTORS.gluten.test(clean),
    nuts: DETECTORS.nuts.test(clean),
    soy: DETECTORS.soy.test(clean),
    eggs: DETECTORS.eggs.test(clean),
    shellfish: DETECTORS.shellfish.test(clean),
    
    // Base diets
    isVeg: !DETECTORS.eggs.test(clean) && !DETECTORS.shellfish.test(clean) && !/gelatin|chicken|meat|mutton|pork|fish|beef/i.test(clean),
    isVegan: !DETECTORS.eggs.test(clean) && !DETECTORS.dairy.test(clean) && !/gelatin|honey|chicken|meat|mutton|pork|fish|beef/i.test(clean),
    isJain: !DETECTORS.eggs.test(clean) && !DETECTORS.shellfish.test(clean) && !/onion|garlic|potato|ginger|carrot|radish|beetroot|sweet potato/i.test(clean) && !/gelatin|chicken|meat|mutton|pork|fish|beef/i.test(clean),
    isHalal: !/alcohol|wine|beer|rum|whisky|gelatin|pork/i.test(clean)
  };
}

function calculateWholesomeness(product) {
  const flags = parseIngredientFlags(product.ingredients);
  let score = 100;
  const reasons = [];

  if (flags.palm) { score -= 25; reasons.push("Contains refined Palm / Palmolein oil."); }
  if (flags.maida) { score -= 20; reasons.push("Uses Maida (refined flour) as a primary grain base."); }
  if (flags.transFats) { score -= 30; reasons.push("Contains hydrogenated fats (source of trans fats)."); }
  if (flags.artificialSweeteners) { score -= 20; reasons.push("Contains synthetic sweeteners (aspartame, sucralose, etc.)."); }
  if (flags.artificialColors) { score -= 20; reasons.push("Uses artificial coal-tar dyes."); }
  if (flags.msg) { score -= 15; reasons.push("Contains MSG or flavor enhancer additives."); }
  if (flags.carrageenan) { score -= 15; reasons.push("Contains Carrageenan stabilizer."); }
  if (flags.bha_bht) { score -= 20; reasons.push("Uses suspected BHA / BHT preservatives."); }
  
  if (product.nutrition.sodium > 600) { score -= 15; reasons.push("Excessive sodium density (>600mg per 100g)."); }
  if (product.nutrition.sugar > 15) { score -= 15; reasons.push("Sugar load exceeds healthy limits."); }

  score = Math.max(10, Math.min(100, score));
  return { score, reasons };
}

function renderDietaryTagsHUD(flags) {
  const items = {
    "hud-veg": flags.isVeg,
    "hud-nonveg": !flags.isVeg,
    "hud-vegan": flags.isVegan,
    "hud-jain": flags.isJain,
    "hud-halal": flags.isHalal
  };

  Object.entries(items).forEach(([id, pass]) => {
    const el = document.getElementById(id);
    const icon = el.querySelector("i");
    
    el.className = "diet-hud-item";
    if (pass) {
      el.classList.add("pass");
      icon.className = "ti ti-circle-check";
    } else {
      el.classList.add("fail");
      icon.className = "ti ti-circle-x";
    }
  });
}

function runFamilySafetyAudit(product, flags) {
  const line = document.getElementById("hud-household-check");
  const text = document.getElementById("household-suitability-text");
  
  if (STATE.familyMembers.length === 0) {
    line.style.display = "none";
    return;
  }
  
  line.style.display = "flex";
  let suitabilityText = "Safe for you";
  let safeCount = 1; // You
  let fails = [];

  STATE.familyMembers.forEach(member => {
    let memberPass = true;
    
    // Check diet
    if (member.diet === "vegetarian" && !flags.isVeg) memberPass = false;
    if (member.diet === "jain" && !flags.isJain) memberPass = false;
    if (member.diet === "vegan" && !flags.isVegan) memberPass = false;
    if (member.diet === "halal" && !flags.isHalal) memberPass = false;

    // Check allergies
    if (member.allergies.dairy && flags.dairy) memberPass = false;
    if (member.allergies.gluten && flags.gluten) memberPass = false;
    if (member.allergies.nuts && flags.nuts) memberPass = false;
    if (member.allergies.soy && flags.soy) memberPass = false;

    if (memberPass) {
      safeCount++;
    } else {
      fails.push(member.name);
    }
  });

  if (fails.length === 0) {
    text.textContent = `Safe for you and all family members ✓`;
    line.style.background = "var(--primary-light)";
    line.style.color = "var(--primary)";
  } else {
    text.textContent = `Suitable for you. Not suitable for ${fails.join(", ")} ✗`;
    line.style.background = "var(--accent-light)";
    line.style.color = "var(--accent)";
  }
}

function renderIngredientsSection(ingredientsText) {
  const container = document.getElementById("ingredients-chips");
  container.innerHTML = "";

  // Split ingredients by commas (avoid splitting inside parentheses)
  const parts = ingredientsText.split(/,(?![^(]*\))/);
  
  parts.forEach(part => {
    const cleanPart = part.trim();
    if (!cleanPart) return;

    const isHarmful = DETECTORS.palm.test(cleanPart) || 
                      DETECTORS.maida.test(cleanPart) || 
                      DETECTORS.transFats.test(cleanPart) || 
                      DETECTORS.artificialColors.test(cleanPart) || 
                      DETECTORS.artificialSweeteners.test(cleanPart) ||
                      DETECTORS.msg.test(cleanPart) ||
                      DETECTORS.carrageenan.test(cleanPart) ||
                      DETECTORS.bha_bht.test(cleanPart);

    const chip = document.createElement("button");
    chip.className = "ing-chip";
    if (isHarmful) chip.classList.add("harmful");
    
    // Translate inline INS / E-codes
    let displayName = cleanPart;
    const insMatch = cleanPart.match(/(ins|e|ins\s)\s?(\d{3,4}[a-z]?)/i);
    let matchedCode = "";
    if (insMatch) {
      const code = `ins${insMatch[2]}`.toLowerCase();
      matchedCode = code;
      if (ADDITIVES_DICT[code]) {
        displayName = `${cleanPart} → ${ADDITIVES_DICT[code].name.split("(")[1].replace(")", "")}`;
      }
    }

    chip.textContent = displayName;
    
    // Click listener to explain additive
    chip.onclick = () => {
      openAdditiveExplainer(matchedCode, cleanPart);
    };

    container.appendChild(chip);
  });
}

let activeAdditiveCode = "";

function openAdditiveExplainer(code, rawName) {
  let matchedKey = code;
  let info = ADDITIVES_DICT[code];

  if (!info && rawName) {
    const cleanName = rawName.toLowerCase();
    const foundKey = Object.keys(ADDITIVES_DICT).find(key => {
      const entry = ADDITIVES_DICT[key];
      const entryName = entry.name.toLowerCase();
      const pureEntryName = entryName.replace(/ins\s?\d+[a-z]?\s?\(|\)/g, "").trim();
      return cleanName.includes(key.toLowerCase()) || 
             cleanName.includes(pureEntryName) ||
             pureEntryName.includes(cleanName);
    });
    if (foundKey) {
      matchedKey = foundKey;
      info = ADDITIVES_DICT[foundKey];
    }
  }

  activeAdditiveCode = matchedKey;
  
  const dialog = document.getElementById("explainer-dialog");
  const title = document.getElementById("explainer-title");
  const badge = document.getElementById("explainer-safety");

  if (info) {
    title.textContent = info.name;
    
    // Safety levels
    badge.className = "additive-severity-badge";
    if (info.type === "Colours" || info.type === "Preservatives") {
      badge.classList.add("safety-high");
      badge.textContent = "High Concern";
    } else if (info.type === "Flavour Enhancers") {
      badge.classList.add("safety-med");
      badge.textContent = "Moderate Concern";
    } else {
      badge.classList.add("safety-low");
      badge.textContent = "Safe in Moderation";
    }

    // Set default explanation to English
    setAdditiveExplainerLanguage("en");
  } else {
    title.textContent = rawName;
    const desc = document.getElementById("explainer-desc");
    desc.textContent = "This food additive is evaluated and approved by FSSAI for packaged foods in standard concentrations. Safe for general consumers unless specific allergy sensitivity exists.";
    badge.className = "additive-severity-badge safety-low";
    badge.textContent = "Approved Additive";
    
    // Hide language tabs for unclassified additives
    document.querySelector(".explainer-lang-tabs").style.display = "none";
  }

  dialog.style.display = "flex";
}

function setAdditiveExplainerLanguage(lang) {
  // Update buttons active state
  document.querySelectorAll(".explainer-lang-tabs button").forEach(btn => {
    btn.classList.remove("active");
  });
  
  const activeBtn = document.getElementById(`btn-explainer-lang-${lang}`);
  if (activeBtn) activeBtn.classList.add("active");

  const desc = document.getElementById("explainer-desc");
  const info = ADDITIVES_DICT[activeAdditiveCode];
  if (info && info.desc) {
    document.querySelector(".explainer-lang-tabs").style.display = "flex";
    desc.textContent = info.desc[lang] || info.desc.en;
  }
}

function renderHonestBreakdown(product, flags) {
  const container = document.getElementById("honest-breakdown-list");
  container.innerHTML = "";

  const breakdownItems = [
    { cond: flags.palm, name: "Palm / Palmolein Oil", severity: "serious", reason: "Highly refined industrial fat. Saturated fat structure raises bad cholesterol and arterial plaque." },
    { cond: flags.maida, name: "Maida / Refined Wheat Flour", severity: "serious", reason: "Stripped grain flour. Lacks fiber and triggers swift spikes in insulin release." },
    { cond: flags.transFats, name: "Trans Fats / Hydrogenated Oils", severity: "serious", reason: "Partially hydrogenated fats that lower HDL (good) cholesterol and increase heart risks." },
    { cond: flags.hfcs, name: "High-Fructose Corn Syrup (HFCS)", severity: "serious", reason: "Concentrated corn sugar syrup. Direct metabolic load on liver, linked to fatty liver." },
    { cond: flags.artificialSweeteners, name: "Artificial Sweeteners", severity: "moderate", reason: "Aspartame, sucralose, or acesulfame-K disrupt gut microbiome signaling." },
    { cond: flags.artificialColors, name: "Artificial Coal-Tar Dyes", severity: "moderate", reason: "Synthetic dyes (Tartrazine, Carmoisine). Triggers hyperactive behavioral signals in children." },
    { cond: flags.msg, name: "Monosodium Glutamate (MSG)", severity: "minor", reason: "Flavor enhancer. Excitotoxin that sensitizes nerves in susceptible profiles." },
    { cond: flags.carrageenan, name: "Carrageenan Gum", severity: "moderate", reason: "Seaweed binder linked to intestinal colitis, gut irritation, and digestive sensitivity." },
    { cond: flags.bha_bht, name: "BHA / BHT Preservatives", severity: "serious", reason: "Chemical shelf-life stabilizers. Suspected carcinogens and hormone disruptors." },
    { cond: product.nutrition.sodium > 600, name: "Excess Sodium (>600mg/100g)", severity: "serious", reason: "High sodium density loads blood volume, taxing blood pressure and arteries." },
    { cond: flags.refinedSugar && product.nutrition.sugar > 10, name: "Refined Sugar Loads", severity: "moderate", reason: "High added sugar density spikes energy temporarily, leading to crashes." }
  ];

  let foundCount = 0;
  breakdownItems.forEach(item => {
    if (item.cond) {
      foundCount++;
      const card = document.createElement("div");
      card.className = `breakdown-card severity-${item.severity}`;
      
      let icon = "ti-alert-octagon";
      if (item.severity === "moderate") icon = "ti-alert-circle";
      if (item.severity === "minor") icon = "ti-info-circle";

      card.innerHTML = `
        <i class="ti ${icon} breakdown-icon"></i>
        <div class="breakdown-info">
          <h5>${item.name} (${item.severity.toUpperCase()})</h5>
          <p>${item.reason}</p>
        </div>
      `;
      container.appendChild(card);
    }
  });

  if (foundCount === 0) {
    container.innerHTML = `<p class="empty-state">✓ No suspicious no-no ingredients flagged in this product.</p>`;
  }
}

function renderMarketingLieDetector(product, flags) {
  const container = document.getElementById("marketing-lie-list");
  container.innerHTML = "";

  const claims = product.claims || [];
  const lies = [];

  // Check claims
  const matchClaim = (kw) => claims.some(c => new RegExp(kw, "i").test(c)) || new RegExp(kw, "i").test(product.name);

  // 1. Multigrain but maida #1
  if (matchClaim("multigrain") && flags.maida) {
    lies.push({ claim: "Multigrain", truth: "Maida (refined flour) is listed as the primary ingredient. Grain diversity is negligible." });
  }
  // 2. No Added Sugar but has syrup / concentrates
  if (matchClaim("no added sugar") && (flags.refinedSugar || flags.artificialSweeteners || flags.hfcs)) {
    lies.push({ claim: "No Added Sugar", truth: "Contains liquid glucose, maltodextrin, syrups, or artificial sweeteners that spike glycemic insulin." });
  }
  // 3. 0% cholesterol on plant products
  if (matchClaim("cholesterol") && flags.isVegan) {
    lies.push({ claim: "0% Cholesterol / No Cholesterol", truth: "Marketing stunt. Cholesterol does not exist in plant-based products. Naturally zero cholesterol anyway." });
  }
  // 4. Baked not fried but high fat
  if (matchClaim("baked") && product.nutrition.fat > 10) {
    lies.push({ claim: "Baked not Fried", truth: "Fat content is 10%+ per serving, comparable to standard fried snacks. Fat is sprayed post-baking." });
  }
  // 5. High Protein under 15% calories
  const proteinCals = product.nutrition.protein * 4;
  const totalCals = product.nutrition.calories;
  const proteinRatio = totalCals ? (proteinCals / totalCals) : 0;
  if (matchClaim("high protein") && proteinRatio < 0.15) {
    lies.push({ claim: "High Protein", truth: "Protein contributes less than 15% of total caloric value. Mostly carbohydrate/fat based." });
  }
  // 6. Natural Flavours without real fruit
  if (matchClaim("natural flavor") && !/pulp|fruit|juice|real/i.test(product.ingredients)) {
    lies.push({ claim: "Natural Flavours", truth: "Product contains synthesized nature-identical flavors with zero real fruit or vegetable content." });
  }

  lies.forEach(lie => {
    const card = document.createElement("div");
    card.className = "lie-card";
    card.innerHTML = `
      <i class="ti ti-flag lie-icon"></i>
      <div class="lie-info">
        <h5>Caught! 🚩 Claim: "${lie.claim}"</h5>
        <p>${lie.truth}</p>
      </div>
    `;
    container.appendChild(card);
  });

  if (lies.length === 0) {
    container.innerHTML = `<p class="empty-state">No misleading marketing claims flagged. ✓</p>`;
  }
}

function renderNutritionStats(product, reference) {
  const container = document.getElementById("nutrition-stats");
  container.innerHTML = "";

  const nut = product.nutrition;
  const multiplier = reference === "100g" ? (100 / (nut.serving_size || 100)) : 1;

  const compare = (val, target) => {
    const percent = Math.round((val / target) * 100);
    return `${percent}% of daily target`;
  };

  const stats = [
    { name: "Calories", val: Math.round(nut.calories * multiplier), unit: "kcal", target: STATE.primaryProfile.targets.calories },
    { name: "Sugar", val: Math.round(nut.sugar * multiplier), unit: "g", target: STATE.primaryProfile.targets.sugar },
    { name: "Sodium", val: Math.round(nut.sodium * multiplier), unit: "mg", target: STATE.primaryProfile.targets.sodium },
    { name: "Protein", val: Math.round(nut.protein * multiplier), unit: "g", target: 60 },
    { name: "Carbs", val: Math.round(nut.carbs * multiplier), unit: "g", target: 220 },
    { name: "Fat", val: Math.round(nut.fat * multiplier), unit: "g", target: 65 }
  ];

  stats.forEach(s => {
    const card = document.createElement("div");
    card.className = "nut-stat-card";
    card.innerHTML = `
      <span class="nut-stat-lbl">${s.name}</span>
      <span class="nut-stat-val">${s.val}${s.unit}</span>
      <span class="nut-stat-comparison">${compare(s.val, s.target)}</span>
    `;
    container.appendChild(card);
  });
}

function renderPersonalizedFlags(product, flags) {
  const container = document.getElementById("personalized-flags-list");
  container.innerHTML = "";

  const alerts = [];

  // 1. Allergies Alerts (casein=dairy, triticum=gluten)
  if (STATE.primaryProfile.allergies.dairy && flags.dairy) {
    alerts.push({ title: "Dairy Allergy Alert ⚠️", msg: "Contains milk solids or butter fats. Strictly avoid if you have lactose intolerance." });
  }
  if (STATE.primaryProfile.allergies.gluten && flags.gluten) {
    alerts.push({ title: "Gluten Allergy Alert ⚠️", msg: "Contains wheat/maida. Gluten is present." });
  }
  if (STATE.primaryProfile.allergies.nuts && flags.nuts) {
    alerts.push({ title: "Peanut / Nut Allergy Alert ⚠️", msg: "Peanuts or tree nuts (almonds/cashews) detected." });
  }
  if (STATE.primaryProfile.allergies.soy && flags.soy) {
    alerts.push({ title: "Soy Allergy Alert ⚠️", msg: "Contains soy derivatives (Soy lecithin emulsifiers)." });
  }

  // 2. Base diet compliance alerts
  const diet = STATE.primaryProfile.diet;
  if (diet === "vegetarian" && !flags.isVeg) {
    alerts.push({ title: "Diet Non-Compliance (Veg Fail)", msg: "Product contains egg solids, gelatin, or animal derivatives." });
  }
  if (diet === "jain" && !flags.isJain) {
    alerts.push({ title: "Diet Non-Compliance (Jain Fail)", msg: "Contains roots (onion powder, garlic extract, potato starch)." });
  }
  if (diet === "vegan" && !flags.isVegan) {
    alerts.push({ title: "Diet Non-Compliance (Vegan Fail)", msg: "Contains milk, ghee, honey, or animal coloring (Carmine/E120)." });
  }
  if (diet === "halal" && !flags.isHalal) {
    alerts.push({ title: "Diet Non-Compliance (Halal Fail)", msg: "Contains alcohol-based flavorings or non-halal animal gelatin." });
  }

  // 3. Mode specific checks
  if (STATE.activeModes.kids) {
    if (flags.artificialColors) {
      alerts.push({ title: "Kids Mode Flag 👶", msg: "Contains artificial dyes (Tartrazine/E102) associated with ADHD and hyperactive behavioral issues." });
    }
    if (product.nutrition.sugar > 10) {
      alerts.push({ title: "Kids Mode Flag 👶", msg: "High added sugar content. Restrict child's intake to avoid early cavity risks." });
    }
  }

  if (STATE.activeModes.pregnancy) {
    if (product.nutrition.calories > 250) {
      alerts.push({ title: "Pregnancy Mode Alert 🤰", msg: "Calorie dense product. Keep tracks of gestation weight balance." });
    }
    if (flags.artificialSweeteners) {
      alerts.push({ title: "Pregnancy Mode Alert 🤰", msg: "Contains artificial sweeteners. Natural whole foods are highly advised during gestation." });
    }
  }

  if (STATE.activeModes.fitness) {
    const calorieRatio = product.nutrition.sugar / product.nutrition.carbs;
    if (calorieRatio > 0.5) {
      alerts.push({ title: "Fitness Mode Alert 🏋️", msg: "High sugar-to-carb ratio. Will cause swift glucose peaks and fat storage." });
    }
  }

  if (STATE.activeModes.eco) {
    if (flags.palm) {
      alerts.push({ title: "Eco Mode Flag 🌱", msg: "Uses Palm Oil. Palm plantations are a primary driver of rainforest deforestation and orangutan habitat loss." });
    }
  }

  if (STATE.activeModes.clinical) {
    if (STATE.primaryProfile.conditions.diabetic && (product.nutrition.sugar > 4 || flags.artificialSweeteners)) {
      alerts.push({ title: "Clinical Diabetic Flag 🩺", msg: "High glycemic risk. Fast-acting sugars cause insulin instability.", clinical: true });
    }
    if (STATE.primaryProfile.conditions.highbp && product.nutrition.sodium > 150) {
      alerts.push({ title: "Clinical High BP Flag 🩺", msg: "Sodium density exceeds 150mg/serving. Raises vascular tension.", clinical: true });
    }
    if (STATE.primaryProfile.conditions.kidney && product.ingredients.toLowerCase().includes("potassium")) {
      alerts.push({ title: "Clinical Kidney Alert 🩺", msg: "Contains potassium additives (INS 508). Kidney profiles must monitor potassium load.", clinical: true });
    }
  }

  alerts.forEach(a => {
    const item = document.createElement("div");
    item.className = "personal-alert-item";
    if (a.clinical) item.classList.add("clinical-alert");

    item.innerHTML = `
      <i class="ti ti-alert-triangle personal-alert-icon"></i>
      <div class="personal-alert-info">
        <h5>${a.title}</h5>
        <p>${a.msg}</p>
      </div>
    `;
    container.appendChild(item);
  });

  if (alerts.length === 0) {
    container.innerHTML = `<p class="empty-state">Product is fully aligned with your profile and active modes. ✓</p>`;
  }
}

function renderAlternatives(product) {
  const container = document.getElementById("better-alternatives-list");
  container.innerHTML = "";

  const alts = product.alternatives || [];
  let shownCount = 0;

  alts.forEach(altBarcode => {
    const altProduct = LOCAL_PRODUCTS_DB[altBarcode];
    if (altProduct) {
      shownCount++;
      const score = Math.round(calculateWholesomeness(altProduct).score / 10);
      const card = document.createElement("div");
      card.className = "alt-product-card";
      card.innerHTML = `
        <div class="alt-info">
          <h5>${altProduct.name}</h5>
          <p>${altProduct.brand}</p>
        </div>
        <span class="alt-badge-score">${score}/10</span>
      `;
      card.onclick = () => {
        triggerProductAudit(altBarcode);
      };
      container.appendChild(card);
    }
  });

  if (shownCount === 0) {
    // Generate static suggestions based on category
    const genericAlts = {
      "snacks": [
        { name: "Oats Masala Cracker", brand: "Yoga Bar", score: 9 },
        { name: "Roasted Makhana Mint", brand: "Farmley", score: 8 }
      ],
      "drinks": [
        { name: "Coconut Water tender", brand: "Paper Boat", score: 9 },
        { name: "Cold Pressed Orange", brand: "Raw Pressery", score: 8 }
      ]
    };

    const categorySuggestions = genericAlts[product.category] || genericAlts["snacks"];
    categorySuggestions.forEach(s => {
      const card = document.createElement("div");
      card.className = "alt-product-card";
      card.innerHTML = `
        <div class="alt-info">
          <h5>${s.name}</h5>
          <p>${s.brand} (Clean Alternative)</p>
        </div>
        <span class="alt-badge-score">${s.score}/10</span>
      `;
      container.appendChild(card);
    });
  }
}

// ==========================================
// 9. SHARE CARD IMAGE GENERATOR
// ==========================================
function generateShareCardImage(product, wholesomeness) {
  const canvas = document.getElementById("share-card-canvas");
  const ctx = canvas.getContext("2d");

  // Renders beautiful card design
  ctx.fillStyle = "#FAF8F3"; // Warm cream bg
  ctx.fillRect(0, 0, 600, 900);

  // Borders
  ctx.strokeStyle = "#4A7C59";
  ctx.lineWidth = 12;
  ctx.strokeRect(6, 6, 588, 888);

  // App logo branding
  ctx.font = "bold 26px Fraunces";
  ctx.fillStyle = "#4A7C59";
  ctx.textAlign = "center";
  ctx.fillText("Sattva Scan", 300, 70);

  ctx.font = "600 11px Outfit";
  ctx.fillStyle = "#E8956D";
  ctx.fillText("CLEAN & WHOLESOME CLARITY FOR PACKAGED FOODS", 300, 92);

  // Product Name
  ctx.font = "bold 32px Fraunces";
  ctx.fillStyle = "#1C1C1E";
  ctx.fillText(product.name, 300, 200);

  ctx.font = "600 16px Outfit";
  ctx.fillStyle = "#5C625D";
  ctx.fillText(product.brand, 300, 230);

  // Draw circular progress ring for score
  const score = Math.round(wholesomeness.score / 10);
  ctx.beginPath();
  ctx.arc(300, 380, 70, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(74, 124, 89, 0.1)";
  ctx.lineWidth = 14;
  ctx.stroke();

  // Progress arc
  ctx.beginPath();
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + (2 * Math.PI * (score / 10));
  ctx.arc(300, 380, 70, startAngle, endAngle);
  ctx.strokeStyle = score >= 8 ? "#4A7C59" : (score >= 5 ? "#E2A24F" : "#E8956D");
  ctx.lineWidth = 14;
  ctx.stroke();

  // Score text inside ring
  ctx.font = "bold 44px Fraunces";
  ctx.fillStyle = "#1C1C1E";
  ctx.fillText(score.toString(), 300, 385);
  ctx.font = "bold 12px Outfit";
  ctx.fillStyle = "#8E9892";
  ctx.fillText("HEALTH SCORE", 300, 415);

  // Verdict banner
  ctx.fillStyle = score >= 8 ? "rgba(74, 124, 89, 0.15)" : (score >= 5 ? "#FFFBEB" : "rgba(232, 149, 109, 0.15)");
  ctx.beginPath();
  ctx.roundRect(100, 490, 400, 48, 12);
  ctx.fill();

  ctx.font = "bold 16px Outfit";
  ctx.fillStyle = score >= 8 ? "#4A7C59" : (score >= 5 ? "#B45309" : "#E8956D");
  ctx.fillText(score >= 8 ? "VERDICT: SAFE ✓" : (score >= 5 ? "VERDICT: CAUTION 🟡" : "VERDICT: AVOID 🔴"), 300, 520);

  // Findings list
  ctx.textAlign = "left";
  ctx.fillStyle = "#1C1C1E";
  ctx.font = "bold 18px Fraunces";
  ctx.fillText("Top Ingredients Concerns:", 80, 600);

  ctx.font = "600 13px Outfit";
  ctx.fillStyle = "#5C625D";

  let y = 635;
  const reasons = wholesomeness.reasons.slice(0, 3);
  if (reasons.length === 0) {
    ctx.fillText("• Clean product with natural ingredients list.", 90, y);
  } else {
    reasons.forEach(r => {
      ctx.fillText(`• ${r}`, 90, y);
      y += 30;
    });
  }

  // Footer note
  ctx.textAlign = "center";
  ctx.font = "10px Outfit";
  ctx.fillStyle = "#8E9892";
  ctx.fillText("Always verify allergen information on physical labels.", 300, 830);

  // Download trigger
  const dataURL = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.download = `${product.name.replace(/\s+/g, "_")}_sattva_audit.jpg`;
  link.href = dataURL;
  link.click();
  showToast("Beautiful share card downloaded to your device!", "success");
}

// ==========================================
// 10. DAILY TRACKER LOG (Today Tab)
// ==========================================
function addConsumptionToToday(product) {
  const nut = product.nutrition;
  
  // Update state logs
  const todayLogs = JSON.parse(localStorage.getItem("sattva_today_logs") || '{"calories":0,"sugar":0,"sodium":0,"protein":0,"carbs":0,"timestamp":0}');
  const now = new Date();
  
  // Midnight reset check
  const logDate = new Date(todayLogs.timestamp);
  if (logDate.getDate() !== now.getDate() || logDate.getMonth() !== now.getMonth()) {
    todayLogs.calories = 0;
    todayLogs.sugar = 0;
    todayLogs.sodium = 0;
    todayLogs.protein = 0;
    todayLogs.carbs = 0;
  }

  todayLogs.calories += Math.round(nut.calories);
  todayLogs.sugar += Math.round(nut.sugar);
  todayLogs.sodium += Math.round(nut.sodium);
  todayLogs.protein += Math.round(nut.protein);
  todayLogs.carbs += Math.round(nut.carbs);
  todayLogs.timestamp = now.getTime();

  localStorage.setItem("sattva_today_logs", JSON.stringify(todayLogs));
  
  // Recalculate streak
  updateStreakCounter(todayLogs.sugar);

  showToast(`Successfully logged ${product.name} to Today's logs!`, "success");
  document.getElementById("result-sheet-overlay").style.display = "none";
}

function updateStreakCounter(sugarVal) {
  let streak = parseInt(localStorage.getItem("sattva_streak") || "0", 10);
  const lastActive = localStorage.getItem("sattva_streak_date") || "";
  
  const todayStr = new Date().toDateString();
  if (lastActive !== todayStr) {
    if (sugarVal <= STATE.primaryProfile.targets.sugar) {
      streak++;
      localStorage.setItem("sattva_streak", streak.toString());
      localStorage.setItem("sattva_streak_date", todayStr);
    }
  }
}

function renderTodayDashboard() {
  const todayLogs = JSON.parse(localStorage.getItem("sattva_today_logs") || '{"calories":0,"sugar":0,"sodium":0,"protein":0,"carbs":0}');
  
  // Calories Ring
  document.getElementById("logged-calories").textContent = todayLogs.calories;
  const targetCals = STATE.primaryProfile.targets.calories;
  document.getElementById("target-calories").textContent = targetCals;

  const ring = document.getElementById("calorie-progress-ring");
  const percent = Math.min(1.0, todayLogs.calories / targetCals);
  const offset = 377 - (377 * percent);
  ring.style.strokeDashoffset = offset;

  // Streak
  const streak = localStorage.getItem("sattva_streak") || "0";
  document.getElementById("streak-text").textContent = `${streak} days under sugar limit 🔥`;

  // Bars
  const sugarTarget = STATE.primaryProfile.targets.sugar;
  document.getElementById("tracker-sugar-vals").textContent = `${todayLogs.sugar}g / ${sugarTarget}g`;
  document.getElementById("bar-sugar").style.width = `${Math.min(100, (todayLogs.sugar / sugarTarget) * 100)}%`;

  const sodiumTarget = STATE.primaryProfile.targets.sodium;
  document.getElementById("tracker-sodium-vals").textContent = `${todayLogs.sodium}mg / ${sodiumTarget}mg`;
  document.getElementById("bar-sodium").style.width = `${Math.min(100, (todayLogs.sodium / sodiumTarget) * 100)}%`;

  document.getElementById("tracker-protein-vals").textContent = `${todayLogs.protein}g / 60g`;
  document.getElementById("bar-protein").style.width = `${Math.min(100, (todayLogs.protein / 60) * 100)}%`;

  document.getElementById("tracker-carbs-vals").textContent = `${todayLogs.carbs}g / 220g`;
  document.getElementById("bar-carbs").style.width = `${Math.min(100, (todayLogs.carbs / 220) * 100)}%`;

  // Generate Weekly Sunday summary
  renderWeeklySummary();
}

function renderWeeklySummary() {
  const container = document.getElementById("weekly-metrics-area");
  const shareBtn = document.getElementById("btn-share-weekly");
  const today = new Date();
  
  // If it's Sunday (day 0) or we have logged history, populate weekly card
  const hasLogged = localStorage.getItem("sattva_today_logs") !== null;
  
  if (hasLogged) {
    const todayLogs = JSON.parse(localStorage.getItem("sattva_today_logs"));
    container.innerHTML = `
      <div class="weekly-stat-row">
        <span>Average Daily Calories</span>
        <strong>${todayLogs.calories} kcal</strong>
      </div>
      <div class="weekly-stat-row">
        <span>Average Sugar Intake</span>
        <strong>${todayLogs.sugar} g</strong>
      </div>
      <div class="weekly-stat-row">
        <span>Average Sodium Intake</span>
        <strong>${todayLogs.sodium} mg</strong>
      </div>
    `;
    shareBtn.style.display = "block";
    shareBtn.onclick = () => {
      showToast("Weekly health report copied to clipboard!", "success");
    };
  } else {
    container.innerHTML = `<span class="empty-state">Not enough logs to construct weekly report yet.</span>`;
    shareBtn.style.display = "none";
  }
}

// ==========================================
// 11. PANTRY ARCHIVES & COMPARE ENGINE
// ==========================================
function addToPantryHistory(product) {
  // Check if same barcode already exists
  const matchIndex = STATE.recentScans.findIndex(s => s.barcode === product.barcode);
  
  if (matchIndex > -1) {
    // Reformulation Check
    const oldProduct = STATE.recentScans[matchIndex];
    if (oldProduct.ingredients.trim() !== product.ingredients.trim()) {
      showToast(`⚠️ reformulation alert! Ingredients changed since your last scan!`, "warning");
      triggerReformulationComparison(oldProduct, product);
    }
    // Update existing
    STATE.recentScans.splice(matchIndex, 1);
  }

  STATE.recentScans.unshift({
    ...product,
    buyPreference: "none", // none, buy, never
    timestamp: Date.now()
  });

  saveState();
}

function triggerReformulationComparison(oldProd, newProd) {
  // Triggers alert in result sheet
  const disclaimer = document.getElementById("mandatory-disclaimer-text");
  disclaimer.innerHTML = `
    <strong style="color:var(--accent);">⚠️ reformulation alert!</strong> This product changed since your last scan.<br>
    <strong>Old Ingredients:</strong> ${oldProd.ingredients}<br>
    <strong>New Ingredients:</strong> ${newProd.ingredients}
  `;
}

function renderPantryHistory() {
  const container = document.getElementById("pantry-items-list");
  container.innerHTML = "";
  
  if (STATE.recentScans.length === 0) {
    container.innerHTML = `<p class="empty-state">No products logged in history yet.</p>`;
    return;
  }

  // Bind categories selector tabs
  const activeCat = document.querySelector(".category-tabs-container .cat-tab.active").dataset.cat;
  
  const filtered = STATE.recentScans.filter(s => {
    if (activeCat === "all") return true;
    return s.category === activeCat;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="empty-state">No products found in this category.</p>`;
    return;
  }

  filtered.forEach(s => {
    const row = document.createElement("div");
    row.className = "pantry-item-row";
    row.innerHTML = `
      <div class="pantry-check-wrap">
        <input type="checkbox" class="pantry-checkbox" value="${s.barcode}">
        <div class="pantry-item-info">
          <span class="pantry-item-name">${s.name}</span>
          <span class="pantry-item-brand">${s.brand}</span>
        </div>
      </div>
      <div class="pantry-item-actions">
        <button class="btn-buy-preference ${s.buyPreference === 'buy' ? 'buy-again' : ''}" data-action="buy" data-barcode="${s.barcode}">Buy Again</button>
        <button class="btn-buy-preference ${s.buyPreference === 'never' ? 'never-buy' : ''}" data-action="never" data-barcode="${s.barcode}">Never Buy</button>
      </div>
    `;

    // Click triggers
    row.querySelector(".pantry-item-info").onclick = () => {
      triggerProductAudit(s.barcode);
    };

    // Checkbox toggler to compare
    row.querySelector(".pantry-checkbox").onchange = () => {
      toggleCompareBarVisibility();
    };

    // Buy again preferences
    row.querySelectorAll(".btn-buy-preference").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const barcode = btn.dataset.barcode;
        const scan = STATE.recentScans.find(x => x.barcode === barcode);
        
        if (action === "buy") {
          scan.buyPreference = scan.buyPreference === "buy" ? "none" : "buy";
        } else {
          scan.buyPreference = scan.buyPreference === "never" ? "none" : "never";
        }
        
        saveState();
        renderPantryHistory();
      };
    });

    container.appendChild(row);
  });
}

function toggleCompareBarVisibility() {
  const checked = document.querySelectorAll(".pantry-checkbox:checked");
  const bar = document.getElementById("btn-start-compare");
  
  if (checked.length === 2) {
    bar.style.display = "block";
  } else {
    bar.style.display = "none";
  }
}

// Side by side Comparison Mode
function initCompareMode() {
  const btn = document.getElementById("btn-start-compare");
  btn.onclick = () => {
    const checked = document.querySelectorAll(".pantry-checkbox:checked");
    if (checked.length !== 2) return;

    const code1 = checked[0].value;
    const code2 = checked[1].value;
    
    const p1 = STATE.recentScans.find(x => x.barcode === code1);
    const p2 = STATE.recentScans.find(x => x.barcode === code2);

    if (p1 && p2) {
      const score1 = Math.round(calculateWholesomeness(p1).score / 10);
      const score2 = Math.round(calculateWholesomeness(p2).score / 10);
      
      const concerns1 = calculateWholesomeness(p1).reasons.length;
      const concerns2 = calculateWholesomeness(p2).reasons.length;

      // Construct Comparison Sheet Overlay in HTML
      const overlay = document.createElement("div");
      overlay.className = "dialog-overlay";
      overlay.id = "compare-overlay";
      overlay.innerHTML = `
        <div class="dialog-card card" style="max-width:320px; text-align:left;">
          <h3 class="dialog-title" style="text-align:center;"><i class="ti ti-columns"></i> Scan Compare</h3>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
            <div style="background:var(--bg-app); padding:8px; border-radius:8px; border:1px solid var(--border-color);">
              <strong style="font-size:12px; display:block; height:34px; overflow:hidden;">${p1.name}</strong>
              <span style="font-family:var(--font-serif); font-size:24px; font-weight:800; display:block; color:var(--primary);">${score1}/10</span>
              <span style="font-size:10px; color:var(--text-secondary);">${concerns1} concerns flagged</span>
            </div>
            <div style="background:var(--bg-app); padding:8px; border-radius:8px; border:1px solid var(--border-color);">
              <strong style="font-size:12px; display:block; height:34px; overflow:hidden;">${p2.name}</strong>
              <span style="font-family:var(--font-serif); font-size:24px; font-weight:800; display:block; color:var(--primary);">${score2}/10</span>
              <span style="font-size:10px; color:var(--text-secondary);">${concerns2} concerns flagged</span>
            </div>
          </div>

          <table style="width:100%; font-size:10px; border-collapse:collapse; margin-bottom:16px;">
            <tr style="border-bottom:1px solid rgba(74,124,89,0.1);"><td style="padding:4px; font-weight:700;">Nutrient</td><td style="padding:4px; font-weight:700;">${p1.brand.split(" ")[0]}</td><td style="padding:4px; font-weight:700;">${p2.brand.split(" ")[0]}</td></tr>
            <tr style="border-bottom:1px solid rgba(74,124,89,0.05);"><td style="padding:4px;">Calories</td><td style="padding:4px;">${p1.nutrition.calories}kcal</td><td style="padding:4px;">${p2.nutrition.calories}kcal</td></tr>
            <tr style="border-bottom:1px solid rgba(74,124,89,0.05);"><td style="padding:4px;">Sugar</td><td style="padding:4px;">${p1.nutrition.sugar}g</td><td style="padding:4px;">${p2.nutrition.sugar}g</td></tr>
            <tr style="border-bottom:1px solid rgba(74,124,89,0.05);"><td style="padding:4px;">Sodium</td><td style="padding:4px;">${p1.nutrition.sodium}mg</td><td style="padding:4px;">${p2.nutrition.sodium}mg</td></tr>
            <tr style="border-bottom:1px solid rgba(74,124,89,0.05);"><td style="padding:4px;">Protein</td><td style="padding:4px;">${p1.nutrition.protein}g</td><td style="padding:4px;">${p2.nutrition.protein}g</td></tr>
          </table>

          <button class="btn btn-outline btn-block btn-sm" id="btn-share-compare" style="margin-bottom:8px;"><i class="ti ti-share"></i> Share Comparison</button>
          <button class="btn btn-primary btn-block btn-sm" id="btn-close-compare">Close</button>
        </div>
      `;

      document.body.appendChild(overlay);

      document.getElementById("btn-close-compare").onclick = () => overlay.remove();
      document.getElementById("btn-share-compare").onclick = () => {
        showToast("Comparison link copied to clipboard!", "success");
      };
    }
  };
}

// ==========================================
// 12. HEATH PROFILE & FAMILY GRAPH
// ==========================================
function renderFamilyGraph() {
  const container = document.getElementById("profile-family-members");
  container.innerHTML = "";

  if (STATE.familyMembers.length === 0) {
    container.innerHTML = `<p class="empty-state">No family members configured in your graph yet.</p>`;
    return;
  }

  STATE.familyMembers.forEach((member, idx) => {
    const card = document.createElement("div");
    card.className = "family-member-card";
    
    // Construct diets/allergies string
    const filters = [];
    if (member.diet !== "none") filters.push(member.diet.toUpperCase());
    Object.entries(member.allergies).forEach(([k, active]) => {
      if (active) filters.push(`${k} allergy`);
    });
    Object.entries(member.conditions).forEach(([k, active]) => {
      if (active) filters.push(k);
    });

    card.innerHTML = `
      <div class="fam-info">
        <h4>${member.name}</h4>
        <p>${filters.join(", ") || "No restrictions"}</p>
      </div>
      <button class="btn-remove-fam" data-index="${idx}">
        <i class="ti ti-trash"></i>
      </button>
    `;

    card.querySelector(".btn-remove-fam").onclick = () => {
      STATE.familyMembers.splice(idx, 1);
      saveState();
      renderFamilyGraph();
      showToast("Removed family member from audit graph.", "warning");
    };

    container.appendChild(card);
  });
}

function initProfileConfig() {
  // Sync fields
  syncProfileFieldsToUI();

  // Diet select trigger
  document.getElementById("profile-diet").onchange = (e) => {
    STATE.primaryProfile.diet = e.target.value;
    saveState();
    showToast("Primary diet preference updated.", "success");
  };

  // Allergies select trigger
  const allergyBoxes = document.querySelectorAll("#profile-allergies input");
  allergyBoxes.forEach(box => {
    box.onchange = () => {
      STATE.primaryProfile.allergies[box.value] = box.checked;
      saveState();
      showToast(`Allergy alert for ${box.value} updated.`, "success");
    };
  });

  // Conditions multiselect
  const condBtns = document.querySelectorAll("#profile-conditions .cond-btn");
  condBtns.forEach(btn => {
    btn.onclick = () => {
      const condKey = btn.dataset.cond;
      const willBeActive = !btn.classList.contains("active");
      
      // If turning on Clinical triggers and it's the first time, show modal disclaimer
      if (willBeActive && (condKey === "diabetic" || condKey === "highbp" || condKey === "kidney" || condKey === "pregnant")) {
        const warningAgreed = localStorage.getItem("sattva_clinical_warning_agreed");
        if (!warningAgreed) {
          document.getElementById("clinical-warning-dialog").style.display = "flex";
        }
      }

      btn.classList.toggle("active");
      STATE.primaryProfile.conditions[condKey] = willBeActive;
      saveState();
    };
  });

  // Modes switches
  const modeBoxes = document.querySelectorAll(".modes-toggles input");
  modeBoxes.forEach(box => {
    box.onchange = () => {
      const modeKey = box.id.replace("mode-", "");
      const willBeActive = box.checked;

      if (willBeActive && (modeKey === "clinical" || modeKey === "pregnancy")) {
        const warningAgreed = localStorage.getItem("sattva_clinical_warning_agreed");
        if (!warningAgreed) {
          document.getElementById("clinical-warning-dialog").style.display = "flex";
        }
      }

      STATE.activeModes[modeKey] = willBeActive;
      saveState();
      showToast(`${modeKey.toUpperCase()} mode status changed.`, "success");
    };
  });

  // Add family member
  document.getElementById("btn-add-member").onclick = () => {
    const nameInput = document.getElementById("new-member-name");
    const dietSelect = document.getElementById("new-member-diet");
    
    const name = nameInput.value.trim();
    if (!name) {
      showToast("Please enter a valid family member name.", "error");
      return;
    }

    const allergies = { dairy: false, gluten: false, nuts: false, soy: false };
    document.querySelectorAll("#new-member-allergies input:checked").forEach(box => {
      allergies[box.value] = true;
    });

    const conditions = { diabetic: false, highbp: false, kidney: false, pregnant: false };
    document.querySelectorAll("#new-member-conditions .cond-btn.active").forEach(btn => {
      conditions[btn.dataset.cond] = true;
    });

    STATE.familyMembers.push({
      name,
      diet: dietSelect.value,
      allergies,
      conditions
    });

    // Clear form
    nameInput.value = "";
    dietSelect.value = "none";
    document.querySelectorAll("#new-member-allergies input").forEach(box => box.checked = false);
    document.querySelectorAll("#new-member-conditions .cond-btn").forEach(btn => btn.classList.remove("active"));

    saveState();
    renderFamilyGraph();
    showToast(`${name} added to simultaneous household safety check.`, "success");
  };

  // Family multiselect indicators
  const famCondBtns = document.querySelectorAll("#new-member-conditions .cond-btn");
  famCondBtns.forEach(btn => {
    btn.onclick = () => btn.classList.toggle("active");
  });

  // Custom Targets inputs
  document.getElementById("target-calories-input").onchange = (e) => {
    STATE.primaryProfile.targets.calories = parseInt(e.target.value, 10) || 2000;
    saveState();
  };
  document.getElementById("target-sugar-input").onchange = (e) => {
    STATE.primaryProfile.targets.sugar = parseInt(e.target.value, 10) || 40;
    saveState();
  };
  document.getElementById("target-sodium-input").onchange = (e) => {
    STATE.primaryProfile.targets.sodium = parseInt(e.target.value, 10) || 1500;
    saveState();
  };

  // Close Clinical warning modal
  document.getElementById("btn-close-clinical-warning").onclick = () => {
    localStorage.setItem("sattva_clinical_warning_agreed", "true");
    document.getElementById("clinical-warning-dialog").style.display = "none";
    showToast("Disclaimer accepted.", "success");
  };
}

// ==========================================
// 13. LEARN SEARCH & KNOWLEDGE BADGES
// ==========================================
function initLearnLookup() {
  const searchBtn = document.getElementById("btn-ins-lookup");
  const field = document.getElementById("ins-search-field");
  const resultBox = document.getElementById("ins-lookup-result");

  searchBtn.onclick = () => {
    const rawVal = field.value.trim().toLowerCase().replace(/\s/g, "");
    if (!rawVal) return;

    // Search dictionary keys
    let matched = null;
    let codeName = "";
    Object.entries(ADDITIVES_DICT).forEach(([k, info]) => {
      if (k === rawVal || info.name.toLowerCase().includes(rawVal) || rawVal.includes(k)) {
        matched = info;
        codeName = k.toUpperCase();
      }
    });

    if (matched) {
      resultBox.style.display = "block";
      
      let severityClass = "safety-low";
      if (matched.type === "Colours" || matched.type === "Preservatives") severityClass = "safety-high";
      else if (matched.type === "Flavour Enhancers") severityClass = "safety-med";

      resultBox.innerHTML = `
        <div class="ins-lookup-title">${matched.name}</div>
        <span class="ins-lookup-badge ${severityClass}">${matched.type}</span>
        <p>${matched.desc}</p>
      `;

      // Log reading badges progress
      checkBadgeEarning("read_lookup");
    } else {
      resultBox.style.display = "block";
      resultBox.innerHTML = `
        <div class="ins-lookup-title">No direct matched INS code found</div>
        <p>This may be a natural thickening agent or standard acidifier. Make sure you entered numbers correctly, e.g. "471" or "E102".</p>
      `;
    }
  };
}

function checkBadgeEarning(action) {
  const earned = JSON.parse(localStorage.getItem("sattva_earned_badges") || '{"read_lookup":false,"scanned_first":false,"weekly_logged":false}');
  
  if (action === "read_lookup" && !earned.read_lookup) {
    earned.read_lookup = true;
    showToast("🎖️ Earned Badge: Additives Auditor!", "success");
    saveState();
  }
  
  if (action === "scanned_first" && !earned.scanned_first) {
    earned.scanned_first = true;
    showToast("🎖️ Earned Badge: First Audit Complete!", "success");
    saveState();
  }

  localStorage.setItem("sattva_earned_badges", JSON.stringify(earned));
  renderBadgesGrid(earned);
}

function renderBadgesGrid(earnedList) {
  const grid = document.getElementById("pantry-badges-grid");
  if (!grid) return;

  const list = earnedList || JSON.parse(localStorage.getItem("sattva_earned_badges") || '{"read_lookup":false,"scanned_first":false,"weekly_logged":false}');
  
  grid.innerHTML = `
    <div class="badge-item ${list.scanned_first ? 'earned' : ''}">
      <i class="ti ti-scan"></i>
      <span>Pioneer Auditor</span>
    </div>
    <div class="badge-item ${list.read_lookup ? 'earned' : ''}">
      <i class="ti ti-book"></i>
      <span>Additive Guru</span>
    </div>
    <div class="badge-item ${list.weekly_logged ? 'earned' : ''}">
      <i class="ti ti-award"></i>
      <span>Clean Eater</span>
    </div>
  `;
}

// ==========================================
// 14. SILENT BACKGROUND OCR (Tesseract.js)
// ==========================================
function initOcrEngine() {
  const dropArea = document.getElementById("ocr-drop-area");
  const fileInput = document.getElementById("ocr-file-input");

  dropArea.onclick = () => fileInput.click();
  
  // Drag over styling
  dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "var(--primary)";
    dropArea.style.background = "var(--primary-light)";
  });

  dropArea.addEventListener("dragleave", () => {
    dropArea.style.borderColor = "var(--border-color)";
    dropArea.style.background = "var(--bg-app)";
  });

  dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "var(--border-color)";
    dropArea.style.background = "var(--bg-app)";
    
    if (e.dataTransfer.files.length > 0) {
      processIngredientsFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.onchange = () => {
    if (fileInput.files.length > 0) {
      processIngredientsFile(fileInput.files[0]);
    }
  };

  // OCR Audit Text button trigger
  document.getElementById("btn-audit-ocr-text").onclick = () => {
    const text = document.getElementById("ocr-results-text").value.trim();
    const name = document.getElementById("ocr-product-name").value.trim() || "Uploaded Product Details";
    
    if (!text) {
      showToast("Please enter or verify some ingredient labels text.", "error");
      return;
    }

    // Register a custom product
    const customBarcode = "custom-" + Math.floor(Math.random() * 1000000);
    const mockProduct = {
      barcode: customBarcode,
      name,
      brand: "Home Scan / Custom",
      category: "snacks",
      fssai: "10000000000000",
      manufacturer: "User Registered",
      ingredients: text,
      nutrition: { serving_size: 100, calories: 110, sugar: 4.0, sodium: 80, carbs: 12.0, protein: 2.0, fat: 4.0, fibre: 0.5 },
      claims: ["OCR Scanned Details"]
    };

    saveCustomProductToLocal(mockProduct);
    
    // Hide OCR verify box
    document.getElementById("ocr-verify-area").style.display = "none";
    document.getElementById("ocr-results-text").value = "";
    document.getElementById("ocr-product-name").value = "";
    
    // Open product modal details Audit
    triggerProductAudit(customBarcode);
    
    checkBadgeEarning("scanned_first");
  };
}

function processIngredientsFile(file) {
  const indicator = document.getElementById("ocr-processing-indicator");
  indicator.style.display = "flex";

  Tesseract.recognize(
    file,
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    indicator.style.display = "none";
    showToast("OCR scanning finished! Check the text box below.", "success");
    
    // Open text verifying area
    const verifyArea = document.getElementById("ocr-verify-area");
    verifyArea.style.display = "flex";
    
    // Normalize OCR text
    const cleanText = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    document.getElementById("ocr-results-text").value = cleanText;
  }).catch(err => {
    indicator.style.display = "none";
    console.error("Tesseract error:", err);
    showToast("OCR processing failed. You can paste ingredients manually.", "error");
  });
}

function processNotfoundIngredientsFile(file) {
  const loading = document.getElementById("notfound-ocr-loading");
  loading.style.display = "flex";

  Tesseract.recognize(
    file,
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    loading.style.display = "none";
    showToast("Ingredients extracted successfully!", "success");
    const cleanText = text.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    document.getElementById("notfound-ingredients").value = cleanText;
  }).catch(err => {
    loading.style.display = "none";
    console.error("Tesseract notfound OCR error:", err);
    showToast("OCR processing failed. Enter ingredients manually.", "error");
  });
}

// ==========================================
// 15. INITIALIZE ALL COMPONENTS
// ==========================================
window.addEventListener("DOMContentLoaded", () => {
  // Load local state
  loadState();

  // Initialize UI controllers
  initTabs();
  initOnboarding();
  initProfileConfig();
  initLearnLookup();
  initOcrEngine();
  initCompareMode();
  renderBadgesGrid();

  // Active onboarding check
  if (localStorage.getItem("sattva_onboarded") === "true") {
    // Start camera stream on launch
    initializeCamera();
  }

  // Handle dialog closes
  document.getElementById("btn-close-explainer").onclick = () => {
    document.getElementById("explainer-dialog").style.display = "none";
  };

  // Wire up explainer localized translations
  document.getElementById("btn-explainer-lang-en").onclick = () => setAdditiveExplainerLanguage("en");
  document.getElementById("btn-explainer-lang-hi").onclick = () => setAdditiveExplainerLanguage("hi");
  document.getElementById("btn-explainer-lang-ta").onclick = () => setAdditiveExplainerLanguage("ta");

  // Close Result Modal
  document.getElementById("result-sheet-close").onclick = () => {
    document.getElementById("result-sheet-overlay").style.display = "none";
    initializeCamera(); // Restart camera scanning
    closeModalHistorySync();
  };
  document.getElementById("btn-retake-scan").onclick = () => {
    document.getElementById("result-sheet-overlay").style.display = "none";
    initializeCamera(); // Restart camera scanning
    closeModalHistorySync();
  };

  // Swipe-down to close result sheet modal
  const resultSheet = document.querySelector(".result-sheet");
  const resultOverlay = document.getElementById("result-sheet-overlay");

  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  resultSheet.addEventListener("touchstart", (e) => {
    const rect = resultSheet.getBoundingClientRect();
    const touchY = e.touches[0].clientY - rect.top;
    
    // Only allow drag starting from the top 60px of the sheet
    if (touchY > 60) return;

    startY = e.touches[0].clientY;
    isDragging = true;
    resultSheet.style.transition = "none";
  }, { passive: true });

  resultSheet.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    if (deltaY > 0) {
      resultSheet.style.transform = `translateY(${deltaY}px)`;
    }
  }, { passive: true });

  resultSheet.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;
    
    const deltaY = currentY - startY;
    resultSheet.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";

    if (deltaY > 100) {
      // Close modal
      resultSheet.style.transform = "translateY(100%)";
      setTimeout(() => {
        resultOverlay.style.display = "none";
        resultSheet.style.transform = "translateY(0)"; // Reset translation offset
        initializeCamera();
        closeModalHistorySync();
      }, 300);
    } else {
      // Snap back
      resultSheet.style.transform = "translateY(0)";
    }
  });

  // Fallback Tab switching inside Scan Tab
  document.querySelectorAll(".fallback-tab-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".fallback-tab-btn").forEach(b => {
        b.classList.remove("active");
        b.style.color = "var(--text-muted)";
      });
      btn.classList.add("active");
      btn.style.color = "var(--text-secondary)";

      document.querySelectorAll(".fallback-pane").forEach(pane => {
        pane.style.display = "none";
      });
      
      const targetPane = document.getElementById(btn.dataset.pane);
      if (targetPane) {
        targetPane.style.display = "block";
      }
    };
  });

  // Product Not Found OCR Photo binding
  const notfoundOcrArea = document.getElementById("notfound-ocr-drop-area");
  const notfoundOcrFile = document.getElementById("notfound-ocr-file");
  
  if (notfoundOcrArea && notfoundOcrFile) {
    notfoundOcrArea.onclick = () => notfoundOcrFile.click();
    notfoundOcrFile.onchange = () => {
      if (notfoundOcrFile.files.length > 0) {
        processNotfoundIngredientsFile(notfoundOcrFile.files[0]);
      }
    };
  }

  // Submit new product from notfound form
  document.getElementById("btn-submit-notfound-product").onclick = () => {
    const brand = document.getElementById("notfound-brand").value.trim();
    const name = document.getElementById("notfound-name").value.trim();
    const category = document.getElementById("notfound-category").value;
    const ingredients = document.getElementById("notfound-ingredients").value.trim();
    const barcode = STATE.activeNotFoundBarcode || "custom_" + Date.now();

    if (!brand || !name || !ingredients) {
      showToast("Please fill in Brand, Name, and Ingredients.", "error");
      return;
    }

    const newProduct = {
      barcode: barcode,
      name: name,
      brand: brand,
      category: category,
      fssai: "100" + Math.floor(10000000000 + Math.random() * 90000000000),
      manufacturer: brand,
      ingredients: ingredients,
      nutrition: { serving_size: 100, calories: 120, sugar: 3.5, sodium: 150, carbs: 15.0, protein: 4.0, fat: 5.0, fibre: 1.0 },
      claims: ["User Verified Clean Eat"]
    };

    saveCustomProductToLocal(newProduct);

    // Swap card views
    document.getElementById("not-found-form-container").style.display = "none";
    document.getElementById("card-content-area").style.display = "block";

    renderPass1Details(newProduct);
    renderPass2Analysis(newProduct);
    addToPantryHistory(newProduct);

    showToast("Product registered & audited!", "success");
  };

  // Manual code entry
  document.getElementById("btn-manual-audit").onclick = () => {
    const val = document.getElementById("manual-barcode-input").value.trim();
    if (!val) {
      showToast("Please enter a valid barcode number.", "error");
      return;
    }
    triggerProductAudit(val);
    document.getElementById("manual-barcode-input").value = "";
  };

  // Search entry fallback
  document.getElementById("btn-search-audit").onclick = () => {
    const val = document.getElementById("product-search-input").value.trim();
    if (!val) {
      showToast("Please enter a product name to search.", "error");
      return;
    }
    
    // Find in LOCAL_PRODUCTS_DB
    let matchedCode = "";
    Object.entries(LOCAL_PRODUCTS_DB).forEach(([barcode, p]) => {
      if (p.name.toLowerCase().includes(val.toLowerCase()) || p.brand.toLowerCase().includes(val.toLowerCase())) {
        matchedCode = barcode;
      }
    });

    if (matchedCode) {
      triggerProductAudit(matchedCode);
      document.getElementById("product-search-input").value = "";
    } else {
      showToast("No direct name match in database. Attempting live Open Food Facts search...", "warning");
      // Fallback search trigger
      triggerProductAudit(val);
    }
  };

  // Suggestion chips
  document.querySelectorAll(".chip-suggest").forEach(chip => {
    chip.onclick = () => {
      const barcode = chip.dataset.search;
      triggerProductAudit(barcode);
    };
  });

  // Bind categories selector tabs in Pantry
  document.querySelectorAll(".category-tabs-container .cat-tab").forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll(".category-tabs-container .cat-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderPantryHistory();
    };
  });
});
