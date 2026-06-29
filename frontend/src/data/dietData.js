// Researcher-backed diet recommendations, avoid lists, raw foods, and day-wise meal schedules.
export const diseaseDiets = {
  pcos: {
    name: "PCOS (Polycystic Ovary Syndrome)",
    description: "Focuses on low-glycemic, anti-inflammatory whole foods to manage insulin resistance and hormone balance.",
    rawFoods: ["Flaxseeds", "Spearmint leaves (tea)", "Walnuts", "Pumpkin seeds", "Cucumber", "Berries"],
    avoidFoods: ["Refined carbs (white bread/pasta)", "Sugary drinks & desserts", "Processed meats", "Soy isolates", "Excessive dairy"],
    lifestyle: [
      "Incorporate 30 minutes of strength training to improve insulin sensitivity.",
      "Maintain a consistent sleep-wake cycle to support cortisol and melatonin regulation.",
      "Drink spearmint tea twice daily to help reduce excess androgen levels."
    ],
    meals: {
      veg: {
        breakfast: {
          title: "Chia & Raspberry Flax Pudding",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
          desc: "Rich in soluble fiber and omega-3s to support glycemic control and combat insulin resistance.",
          macros: { calories: 340, protein: "12g", carbs: "22g", fats: "14g" },
          steps: [
            "Combine 3 tbsp of chia seeds with 1 cup of unsweetened almond milk in a jar.",
            "Stir in 1 tbsp of ground flaxseeds and a drop of vanilla extract.",
            "Refrigerate for at least 4 hours (or overnight) to let it set into a thick gel.",
            "Top with fresh organic raspberries and crushed walnuts before serving."
          ]
        },
        lunch: {
          title: "Spiced Quinoa & Chickpea Bowl",
          image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
          desc: "High protein, low GI legume bowl designed to keep blood sugar levels stable throughout the afternoon.",
          macros: { calories: 480, protein: "18g", carbs: "45g", fats: "12g" },
          steps: [
            "Rinse and boil 1/2 cup of quinoa in 1 cup of vegetable broth for 15 minutes.",
            "Toss cooked quinoa with 1/2 cup of rinsed canned chickpeas.",
            "Add diced cucumbers, halved cherry tomatoes, and a handful of baby spinach.",
            "Drizzle with 1 tbsp of extra virgin olive oil and a squeeze of fresh lemon juice."
          ]
        },
        dinner: {
          title: "Grilled Tofu & Sesame Broccoli",
          image: "https://images.unsplash.com/photo-1546069901-5ec6a28ee9ce?auto=format&fit=crop&q=80&w=600",
          desc: "Lean plant protein combined with cruciferous vegetables to aid estrogen detoxification processes.",
          macros: { calories: 380, protein: "24g", carbs: "15g", fats: "18g" },
          steps: [
            "Press firm tofu block to drain water, then slice into 1-inch thick slabs.",
            "Marinate tofu in a mixture of low-sodium tamari, minced ginger, and garlic.",
            "Pan-sear tofu on a hot skillet for 5 minutes on each side until golden brown.",
            "Steam broccoli florets for 4 minutes, toss with sesame oil, and serve next to the tofu."
          ]
        }
      },
      nonVeg: {
        breakfast: {
          title: "Egg White & Avocado Scramble",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
          desc: "Lean protein load with healthy fats to keep insulin curves flat in the morning.",
          macros: { calories: 310, protein: "22g", carbs: "8g", fats: "16g" },
          steps: [
            "Whisk 3 egg whites with 1 whole egg in a small bowl.",
            "Heat 1 tsp of olive oil in a non-stick pan over medium heat.",
            "Add a handful of fresh spinach leaves and sliced mushrooms, sautéing until soft.",
            "Pour in eggs and scramble gently. Serve alongside 1/2 sliced ripe avocado."
          ]
        },
        lunch: {
          title: "Mediterranean Chicken Spinach Wrap",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
          desc: "Lean poultry with high-iron leafy greens. Controls glycemic spikes and fuels recovery.",
          macros: { calories: 420, protein: "32g", carbs: "18g", fats: "11g" },
          steps: [
            "Season 150g of chicken breast with oregano, garlic powder, and black pepper.",
            "Grill or pan-sear chicken breast until fully cooked, then slice into strips.",
            "Warm a low-carb sprouted grain tortilla wrap on a skillet.",
            "Layer wrap with baby spinach, shredded carrots, chicken strips, and 1 tbsp of hummus, then roll up."
          ]
        },
        dinner: {
          title: "Mix Fresh Salmon with Rice",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600",
          desc: "Rich in omega-3 fatty acids to lower system inflammation and support metabolic processes.",
          macros: { calories: 520, protein: "36g", carbs: "28g", fats: "22g" },
          steps: [
            "Preheat oven to 400°F (200°C). Place salmon fillet on a baking sheet lined with foil.",
            "Brush salmon with olive oil, then top with lemon slices and minced dill.",
            "Bake salmon for 12-15 minutes until it flakes easily with a fork.",
            "Serve salmon with 1/2 cup of steamed wild rice and a side of roasted asparagus."
          ]
        }
      }
    }
  },
  hairThinning: {
    name: "Hair Thinning / Alopecia Prevention",
    description: "Rich in silica, iron, zinc, biotin, and antioxidants to strengthen hair follicles and improve scalp health.",
    rawFoods: ["Pumpkin seeds (high zinc)", "Almonds (Vitamin E)", "Carrots (Vitamin A)", "Chia seeds"],
    avoidFoods: ["High-mercury fish (swordfish/king mackerel)", "Refined sugar (causes inflammation)", "Alcohol", "Deep-fried foods"],
    lifestyle: [
      "Massage the scalp with rosemary oil to stimulate microcirculation in hair follicles.",
      "Avoid high-heat styling tools and tight hairstyles that cause traction.",
      "Ensure adequate hydration (2.5L+ water daily) to keep hair shafts lubricated."
    ],
    meals: {
      veg: {
        breakfast: {
          title: "Biotin Oats with Almonds & Seeds",
          image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=600",
          desc: "Oatmeal fortified with high-silica grains, raw almonds, and zinc-rich pumpkin seeds.",
          macros: { calories: 390, protein: "14g", carbs: "48g", fats: "15g" },
          steps: [
            "Cook 1/2 cup of steel-cut oats in 1 cup of almond milk on medium-low heat.",
            "Stir in 1 tbsp of pumpkin seeds and 1 tbsp of ground flaxseeds.",
            "Top with 10 sliced raw almonds and a handful of antioxidant-rich blueberries.",
            "Drizzle with 1 tsp of pure maple syrup if desired."
          ]
        },
        lunch: {
          title: "Iron-Rich Lentil & Spinach Stew",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600",
          desc: "Fleshy legume protein paired with Vitamin C (lemon juice) to enhance absorption of plant-based iron.",
          macros: { calories: 410, protein: "22g", carbs: "52g", fats: "8g" },
          steps: [
            "Sauté chopped onions, carrots, and celery in a pot with 1 tsp of olive oil.",
            "Add 1/2 cup of rinsed brown lentils and 2 cups of vegetable broth.",
            "Simmer for 25 minutes until the lentils are tender.",
            "Stir in 2 cups of fresh baby spinach leaves until wilted, and finish with fresh lemon juice."
          ]
        },
        dinner: {
          title: "Paneer & Green Peas Stir-Fry",
          image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
          desc: "High protein, calcium-binding profile to strengthen the keratin matrix structure in hair shafts.",
          macros: { calories: 440, protein: "20g", carbs: "22g", fats: "24g" },
          steps: [
            "Cut 100g of fresh paneer into cubes and lightly brown them in a skillet.",
            "Add chopped red bell peppers, ginger strips, and 1/2 cup of green peas.",
            "Season with turmeric, cumin, and a pinch of black pepper.",
            "Stir-fry for 6 minutes, garnish with fresh coriander, and serve with a small side of brown rice."
          ]
        }
      },
      nonVeg: {
        breakfast: {
          title: "Hard-Boiled Eggs with Avocado Toast",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
          desc: "Biotin-packed whole eggs served alongside healthy monounsaturated fatty acids.",
          macros: { calories: 360, protein: "18g", carbs: "16g", fats: "22g" },
          steps: [
            "Boil 2 large eggs for 9 minutes, then peel and slice them in half.",
            "Toast 1 slice of whole-grain sprouted bread.",
            "Mash 1/2 ripe avocado with lime juice, salt, and pepper, then spread on the toast.",
            "Top the avocado toast with sliced boiled eggs and a sprinkle of red pepper flakes."
          ]
        },
        lunch: {
          title: "Iron-Boost Turkey Wrap",
          image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=600",
          desc: "Lean turkey protein containing zinc and iron, loaded inside a fiber wrap.",
          macros: { calories: 380, protein: "28g", carbs: "24g", fats: "12g" },
          steps: [
            "Lay 1 whole-wheat wrap flat and spread with 1 tbsp of low-fat Greek yogurt spread.",
            "Layer with 4 slices of lean turkey breast.",
            "Add shredded carrots, cucumber slices, and 1 cup of baby spinach leaves.",
            "Roll wrap tightly and cut diagonally. Serve with a handful of raw almonds."
          ]
        },
        dinner: {
          title: "Pan-Seared Mackerel & Greens",
          image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600",
          desc: "A rich source of selenium, Vitamin D3, and omega-3s to decrease follicular inflammation.",
          macros: { calories: 490, protein: "32g", carbs: "12g", fats: "28g" },
          steps: [
            "Season mackerel fillet with sea salt, ground black pepper, and lemon zest.",
            "Heat 1 tsp of olive oil in a skillet, place fish skin-side down, and sear for 4 minutes.",
            "Flip and cook for another 3 minutes until flesh is opaque.",
            "Serve fish alongside a roasted sweet potato mash and sautéed green beans."
          ]
        }
      }
    }
  },
  d3: {
    name: "Vitamin D3 Deficiency",
    description: "Focuses on Vitamin D-fortified foods and natural calcium-binding factors to enhance bone mineral density.",
    rawFoods: ["Sun-exposed shiitake mushrooms", "Sprouted seeds", "Almond butter"],
    avoidFoods: ["Excessive caffeine (interferes with calcium absorption)", "Carbonated sodas", "Alcohol"],
    lifestyle: [
      "Get 15-20 minutes of midday sunlight exposure (arms and legs exposed, no sunscreen).",
      "Pair Vitamin D rich foods with healthy fats (avocado, nuts) to enhance fat-soluble absorption.",
      "Consider testing bone density if deficiency is severe and chronic."
    ],
    meals: {
      veg: {
        breakfast: {
          title: "Fortified Almond Milk Oatmeal",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
          desc: "Creamy oatmeal cooked in D3-fortified milk and loaded with magnesium-rich almonds.",
          macros: { calories: 330, protein: "11g", carbs: "42g", fats: "12g" },
          steps: [
            "Bring 1 cup of fortified almond milk to a boil in a small pot.",
            "Stir in 1/2 cup of rolled oats and cook for 5 minutes, stirring occasionally.",
            "Remove from heat, cover, and let stand for 2 minutes.",
            "Top with 1 tbsp of almond butter, sliced bananas, and a dash of cinnamon."
          ]
        },
        lunch: {
          title: "Shiitake Mushroom & Tofu Stir-Fry",
          image: "https://images.unsplash.com/photo-1546069901-5ec6a28ee9ce?auto=format&fit=crop&q=80&w=600",
          desc: "Sun-exposed shiitake mushrooms containing natural ergocalciferol (Vitamin D2).",
          macros: { calories: 390, protein: "20g", carbs: "18g", fats: "16g" },
          steps: [
            "Slice 1 cup of fresh shiitake mushrooms and cube 100g of firm tofu.",
            "Heat 1 tbsp of sesame oil in a wok over high heat.",
            "Add mushrooms, tofu, snap peas, and grated ginger, stir-frying for 5 minutes.",
            "Drizzle with 1 tbsp of low-sodium soy sauce and serve over quinoa."
          ]
        },
        dinner: {
          title: "Tempeh & Coconut Spinach Curry",
          image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=600",
          desc: "Fermented tempeh containing active micro-factors, cooked in a fat-rich coconut base.",
          macros: { calories: 480, protein: "22g", carbs: "26g", fats: "24g" },
          steps: [
            "Cut 120g of tempeh into small cubes and bake or pan-sear until crispy.",
            "In a pot, simmer 1/2 cup of light coconut milk with 1 tbsp of yellow curry paste.",
            "Add baked tempeh cubes, chopped sweet potatoes, and 2 cups of fresh spinach.",
            "Simmer for 15 minutes until potatoes are soft, and serve hot."
          ]
        }
      },
      nonVeg: {
        breakfast: {
          title: "Whole Egg & Cheese Omelette",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
          desc: "Eggs yolks are rich in natural bioavailable D3. Paired with calcium-rich cheddar.",
          macros: { calories: 390, protein: "24g", carbs: "4g", fats: "28g" },
          steps: [
            "Whisk 2 whole organic pasture-raised eggs with 1 tbsp of water.",
            "Melt 1 tsp of butter in a skillet, pour in eggs, and cook over medium heat.",
            "Sprinkle 1/4 cup of shredded sharp cheddar cheese onto one half.",
            "Fold omelette in half once cheese starts melting, cook for 1 minute, and serve."
          ]
        },
        lunch: {
          title: "Sardine & Mixed Leaf Salad",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
          desc: "Canned sardines with bones are incredibly rich sources of Vitamin D and calcium.",
          macros: { calories: 420, protein: "28g", carbs: "12g", fats: "26g" },
          steps: [
            "In a large bowl, place 3 cups of mixed organic baby greens.",
            "Add sliced cucumbers, cherry tomatoes, and red onion rings.",
            "Open 1 can of sardines in olive oil, drain slightly, and place sardines on top.",
            "Drizzle with 1 tbsp of fresh lemon juice, 1 tbsp of olive oil, and toss."
          ]
        },
        dinner: {
          title: "Baked Wild Salmon with Broccoli",
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600",
          desc: "Wild-caught salmon provides over 100% of the daily recommended Vitamin D3 intake.",
          macros: { calories: 510, protein: "38g", carbs: "14g", fats: "24g" },
          steps: [
            "Preheat oven to 370°F (190°C). Season salmon fillet with salt, pepper, and lemon juice.",
            "Place salmon on a baking sheet surrounded by fresh broccoli florets.",
            "Drizzle broccoli with olive oil and sprinkle with garlic powder.",
            "Bake for 14 minutes until salmon flakes and broccoli tips are slightly charred."
          ]
        }
      }
    }
  },
  b12: {
    name: "Vitamin B12 Deficiency",
    description: "Emphasizes animal proteins or high-potency fortified plant products to support nerve function and red blood cell production.",
    rawFoods: ["Nutritional yeast (unheated over hot dishes)", "Sprouts"],
    avoidFoods: ["Antacids / PPIs close to meals (decreases stomach acid required for B12 extraction)", "Excessive alcohol"],
    lifestyle: [
      "If vegan/vegetarian, ensure daily consumption of fortified foods or consult for a sublingual methylcobalamin supplement.",
      "Monitor for symptoms like tingling in hands/feet or cognitive fatigue.",
      "Maintain a healthy gut lining by consuming prebiotic foods (leeks, garlic, onions)."
    ],
    meals: {
      veg: {
        breakfast: {
          title: "Yeast-Fortified Sprouted Toast",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
          desc: "Fortified yeast provides high concentrations of bioavailable cyanocobalamin.",
          macros: { calories: 320, protein: "16g", carbs: "38g", fats: "8g" },
          steps: [
            "Toast 2 slices of high-protein sprouted grain bread.",
            "Spread 1 tbsp of hummus or light avocado spread on each toast.",
            "Sprinkle 1.5 tbsp of fortified nutritional yeast evenly over the spread.",
            "Top with sliced cherry tomatoes and pumpkin seeds before enjoying."
          ]
        },
        lunch: {
          title: "Tempeh Grain Wrap with Hummus",
          image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=600",
          desc: "Fermented tempeh provides trace Vitamin B12, loaded with fibrous fresh greens.",
          macros: { calories: 430, protein: "24g", carbs: "32g", fats: "15g" },
          steps: [
            "Pan-sear 100g of sliced tempeh on a medium-hot skillet with a splash of tamari.",
            "Lay a whole-wheat flatbread wrap flat and spread with 2 tbsp of organic hummus.",
            "Add cooked tempeh strips, grated carrots, cucumbers, and romaine lettuce.",
            "Roll up tightly and serve with a side of mixed pickles."
          ]
        },
        dinner: {
          title: "Nutritional Yeast Creamy Pasta",
          image: "https://images.unsplash.com/photo-1546069901-5ec6a28ee9ce?auto=format&fit=crop&q=80&w=600",
          desc: "Whole-wheat noodles tossed in a rich, fortified dairy-free cheesy yeast sauce.",
          macros: { calories: 490, protein: "21g", carbs: "62g", fats: "11g" },
          steps: [
            "Boil 1 cup of whole-wheat penne according to package directions.",
            "In a blender, mix 1/2 cup of fortified soy milk, 3 tbsp of nutritional yeast, garlic powder, and salt.",
            "Drain pasta, toss back into the pot, and pour the blended sauce over it on low heat.",
            "Add steamed broccoli florets and stir until creamy and warm."
          ]
        }
      },
      nonVeg: {
        breakfast: {
          title: "Greek Yogurt Berry Bowl",
          image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
          desc: "Dairy products are natural animal-based B12 sources. Boosts cognitive wakefulness.",
          macros: { calories: 290, protein: "20g", carbs: "22g", fats: "6g" },
          steps: [
            "Scoop 1 cup of unsweetened plain Greek yogurt into a bowl.",
            "Top with 1/2 cup of organic mixed berries (strawberries, blueberries).",
            "Sprinkle with 1 tbsp of chia seeds and 1 tbsp of hemp hearts.",
            "Drizzle with 1 tsp of raw organic honey."
          ]
        },
        lunch: {
          title: "Grilled Chicken & Quinoa Plate",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
          desc: "Chicken breasts hold high B12 concentrations. Quinoa provides magnesium co-factors.",
          macros: { calories: 450, protein: "34g", carbs: "30g", fats: "12g" },
          steps: [
            "Grill 150g of sliced chicken breast seasoned with lemon pepper and garlic.",
            "Place 1/2 cup of cooked quinoa on a plate.",
            "Add chicken breast strips next to the quinoa.",
            "Serve with a side of steamed spinach and 1 tbsp of Tzatziki sauce."
          ]
        },
        dinner: {
          title: "Baked Beef Sirloin & Asparagus",
          image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80&w=600",
          desc: "Lean beef sirloin is one of the highest natural sources of cobalamin B12.",
          macros: { calories: 530, protein: "42g", carbs: "12g", fats: "22g" },
          steps: [
            "Season 180g of beef sirloin steak with coarse salt, black pepper, and rosemary.",
            "Sear steak in a hot cast-iron skillet for 3 minutes on each side.",
            "Transfer steak to oven and bake at 350°F (175°C) for 8 minutes.",
            "Roast asparagus spears alongside the steak, and serve with sweet potato."
          ]
        }
      }
    }
  },
  heartProblems: {
    name: "Heart Related Problems",
    description: "Focuses on cardioprotective Omega-3 fatty acids, high fiber, and low sodium to manage blood pressure and cholesterol.",
    rawFoods: ["Walnuts", "Garlic (crushed, raw)", "Tomatoes (rich in lycopene)", "Avocado", "Flaxseeds"],
    avoidFoods: ["Trans fats (shortening, fried fast food)", "High-sodium foods", "Red meat & processed cold cuts", "Refined sugars"],
    lifestyle: [
      "Engage in 150 minutes of moderate-intensity aerobic exercise (like brisk walking) per week.",
      "Practice stress-relief techniques like deep breathing or meditation to lower blood pressure.",
      "Limit sodium intake to under 1,500 mg per day."
    ],
    meals: {
      veg: {
        breakfast: {
          title: "Steel-Cut Oats with Walnuts",
          image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=600",
          desc: "Beta-glucan soluble fiber lowers LDL cholesterol levels. Walnuts support arterial health.",
          macros: { calories: 350, protein: "12g", carbs: "48g", fats: "11g" },
          steps: [
            "Cook 1/2 cup of steel-cut oats in 1 cup of water on medium-low heat for 10 minutes.",
            "Stir in 1 tbsp of ground flaxseeds.",
            "Top with 8 whole halves of organic walnuts.",
            "Add fresh sliced strawberries and a pinch of ground cinnamon."
          ]
        },
        lunch: {
          title: "Black Bean & Avocado Salsa Bowl",
          image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
          desc: "Potassium-rich avocado controls pressure metrics. Black beans load soluble fibers.",
          macros: { calories: 440, protein: "16g", carbs: "42g", fats: "15g" },
          steps: [
            "Toss 1/2 cup of rinsed low-sodium black beans with 1/2 cup of corn kernels.",
            "Add diced red bell peppers, cherry tomatoes, and red onions.",
            "Mix in 1/2 diced avocado.",
            "Dress with 1 tbsp of olive oil, fresh cilantro, lime juice, and a pinch of cumin."
          ]
        },
        dinner: {
          title: "Lentil Dahl & Low-Sodium Spinach",
          image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=600",
          desc: "Lentils contain key nitrates that help expand blood vessel pathways.",
          macros: { calories: 410, protein: "20g", carbs: "54g", fats: "6g" },
          steps: [
            "Sauté minced garlic, onions, and grated ginger in a pot with 1 tsp of olive oil.",
            "Add 1/2 cup of red split lentils, turmeric, and 1.5 cups of low-sodium broth.",
            "Simmer for 20 minutes until creamy.",
            "Serve next to steamed baby spinach and a small portion of brown rice."
          ]
        }
      },
      nonVeg: {
        breakfast: {
          title: "Smoked Salmon & Avocado Toast",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
          desc: "Omega-3 rich salmon supports cardiac rhythm stability and reduces triglycerides.",
          macros: { calories: 340, protein: "20g", carbs: "18g", fats: "16g" },
          steps: [
            "Toast 1 slice of 100% whole grain rye or sprouted bread.",
            "Mash 1/3 ripe avocado and spread it over the warm toast.",
            "Drape 60g of wild smoked salmon slices over the avocado.",
            "Top with red onion slices, capers, and a pinch of black pepper."
          ]
        },
        lunch: {
          title: "Mediterranean Tuna & Lemon Salad",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
          desc: "Low sodium, magnesium-loaded cardiotonic green bowl with heart-healthy olive oil.",
          macros: { calories: 390, protein: "30g", carbs: "10g", fats: "18g" },
          steps: [
            "Combine 1 can of flaked white tuna in water (drained) with diced cucumber and celery.",
            "Add halved kalamata olives (low sodium) and chopped fresh parsley.",
            "Toss in a bowl with 1 tbsp of extra virgin olive oil.",
            "Squeeze fresh lemon juice over the salad and toss gently."
          ]
        },
        dinner: {
          title: "Grilled Sea Bass & Asparagus",
          image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600",
          desc: "Lean sea bass delivers cardiac structural proteins with minimal saturated fats.",
          macros: { calories: 430, protein: "36g", carbs: "12g", fats: "15g" },
          steps: [
            "Season sea bass fillet with lemon juice, black pepper, and dill.",
            "Grill or bake at 380°F (190°C) for 12 minutes until flaky.",
            "Toss asparagus spears in 1 tsp of olive oil and roast alongside the fish.",
            "Serve with a small side of potassium-rich roasted sweet potatoes."
          ]
        }
      }
    }
  },
  proteinDeficiency: {
    name: "Protein Deficiency",
    description: "High-nitrogen, amino-acid rich meal structure designed to optimize muscle repair, enzyme production, and immune response.",
    rawFoods: ["Hemp seeds", "Pumpkin seeds", "Sprouted mung beans", "Almonds"],
    avoidFoods: ["Empty-calorie junk food (soda, chips) which crowd out protein intake", "Highly refined starches"],
    lifestyle: [
      "Engage in resistance training to promote muscle protein synthesis.",
      "Spread protein intake evenly across all meals (aim for 20-30g per meal).",
      "Monitor muscle mass and physical strength levels."
    ],
    meals: {
      veg: {
        breakfast: {
          title: "Scrambled Yeast Tofu & Hemp",
          image: "https://images.unsplash.com/photo-1546069901-5ec6a28ee9ce?auto=format&fit=crop&q=80&w=600",
          desc: "Tofu, nutritional yeast, and hemp seeds combine to deliver a complete amino profile.",
          macros: { calories: 380, protein: "28g", carbs: "12g", fats: "22g" },
          steps: [
            "Crumble 150g of firm tofu into a hot skillet with 1 tsp of olive oil.",
            "Stir-fry for 3 minutes, then add 2 tbsp of nutritional yeast and turmeric.",
            "Stir in 1 cup of chopped baby spinach until wilted.",
            "Remove from heat, transfer to a plate, and sprinkle with 1.5 tbsp of raw hemp seeds."
          ]
        },
        lunch: {
          title: "High-Protein Lentil & Edamame Bowl",
          image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
          desc: "Concentrated legume nitrogen loads to assist body tissue rebuilding.",
          macros: { calories: 490, protein: "30g", carbs: "52g", fats: "10g" },
          steps: [
            "Boil 1/2 cup of green split lentils in vegetable stock for 20 minutes.",
            "Steam 1/2 cup of shelled edamame pods.",
            "Combine cooked lentils, edamame, and diced red bell peppers in a bowl.",
            "Toss with 1 tbsp of tahini dressing and serve over quinoa."
          ]
        },
        dinner: {
          title: "Seitan Steak with Roasted Greens",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
          desc: "Seitan provides the highest protein density among all vegan macro replacements.",
          macros: { calories: 510, protein: "38g", carbs: "22g", fats: "16g" },
          steps: [
            "Slice 120g of seitan block into thin steaks.",
            "Sauté seitan in a pan with garlic, soy sauce, and rosemary for 4 minutes per side.",
            "Bake broccoli florets and green beans at 400°F (200°C) until tender.",
            "Serve seitan steak next to the roasted greens with a drizzle of peanut sauce."
          ]
        }
      },
      nonVeg: {
        breakfast: {
          title: "Double Egg Scramble & Yogurt",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
          desc: "Rapidly absorbed egg white albumin paired with whey-casein yogurt proteins.",
          macros: { calories: 380, protein: "32g", carbs: "8g", fats: "18g" },
          steps: [
            "Scramble 3 egg whites and 1 whole egg in a pan with 1 tsp of butter.",
            "Serve scramble next to 1/2 cup of plain, unsweetened Greek yogurt.",
            "Sprinkle yogurt with pumpkin seeds and raw almonds.",
            "Add a side of sliced tomatoes for freshness."
          ]
        },
        lunch: {
          title: "Lean Chicken Breast & Quinoa",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
          desc: "The clinical standard for fast muscular recovery. High essential amino acids.",
          macros: { calories: 470, protein: "44g", carbs: "32g", fats: "8g" },
          steps: [
            "Season 180g of chicken breast with salt, pepper, and lemon juice.",
            "Grill or pan-sear until the internal temperature reaches 165°F (74°C).",
            "Serve sliced chicken over 1/2 cup of cooked organic quinoa.",
            "Add a side of steamed spinach or broccoli."
          ]
        },
        dinner: {
          title: "Turkey Cutlet with Black Beans",
          image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=600",
          desc: "Lean turkey cutlet loaded with potassium-rich fibers and slow-release proteins.",
          macros: { calories: 490, protein: "38g", carbs: "34g", fats: "12g" },
          steps: [
            "Sear 150g of turkey cutlet on a high skillet with olive oil.",
            "Simmer 1/2 cup of low-sodium black beans with cumin and garlic.",
            "Slice cooked turkey, place next to the black beans on a plate.",
            "Serve with a large side of roasted Brussels sprouts."
          ]
        }
      }
    }
  },
  diabetes: {
    name: "Diabetes Management",
    description: "Prioritizes high soluble fiber, low glycemic index carbs, and healthy fats to prevent glucose spikes and support insulin response.",
    rawFoods: ["Cinnamon (sprinkled raw)", "Okra water (traditional support)", "Avocado", "Chia seeds", "Leafy greens"],
    avoidFoods: ["Fruit juices & sodas", "White rice & refined flour products", "Sweetened yogurts", "Dried fruits", "Trans fats"],
    lifestyle: [
      "Take a 10-minute walk immediately after meals to improve postprandial glucose levels.",
      "Use the 'Plate Method': half non-starchy vegetables, one-quarter lean protein, one-quarter complex carbs.",
      "Monitor blood glucose levels regularly, especially when modifying diet patterns."
    ],
    meals: {
      veg: {
        breakfast: {
          title: "Chia Flax Pudding with Cinnamon",
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
          desc: "Low-carb morning starter. Cinnamon supports insulin receptor sensitivity.",
          macros: { calories: 290, protein: "11g", carbs: "16g", fats: "15g" },
          steps: [
            "Mix 3 tbsp of chia seeds and 1 tbsp of ground flaxseeds in a cup of almond milk.",
            "Add 1/2 tsp of ground cinnamon and a drop of liquid stevia.",
            "Refrigerate overnight to thicken.",
            "Top with 10 crushed walnuts and serve chilled."
          ]
        },
        lunch: {
          title: "Insulin-Balancing Salad Bowl",
          image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
          desc: "High fiber leafy greens with tofu and healthy avocado monounsaturated lipids.",
          macros: { calories: 420, protein: "18g", carbs: "22g", fats: "24g" },
          steps: [
            "Combine 3 cups of fresh baby spinach and arugula in a large bowl.",
            "Cube 100g of firm tofu and pan-sear with a splash of tamari.",
            "Add seared tofu, 1/2 sliced avocado, and cucumber slices to the bowl.",
            "Drizzle with 1 tbsp of extra virgin olive oil and apple cider vinegar."
          ]
        },
        dinner: {
          title: "Roasted Cauliflower & Paneer Bake",
          image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600",
          desc: "Glucolytic-stable non-starchy cruciferous bake with low-GI paneer cubes.",
          macros: { calories: 430, protein: "22g", carbs: "18g", fats: "26g" },
          steps: [
            "Cut cauliflower into florets and cube 100g of paneer.",
            "Toss cauliflower and paneer in 1 tbsp of olive oil, turmeric, and cumin.",
            "Spread on a baking sheet and roast at 400°F (200°C) for 20 minutes.",
            "Serve hot with a side of steamed spinach."
          ]
        }
      },
      nonVeg: {
        breakfast: {
          title: "Feta & Mushroom Egg Scramble",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
          desc: "Low insulin response egg scramble with antioxidant rich mushrooms.",
          macros: { calories: 320, protein: "22g", carbs: "6g", fats: "20g" },
          steps: [
            "Whisk 3 egg whites and 1 whole egg in a bowl.",
            "Sauté sliced button mushrooms and baby spinach in 1 tsp of olive oil.",
            "Pour in eggs and scramble gently.",
            "Top with 2 tbsp of crumbled feta cheese right before serving."
          ]
        },
        lunch: {
          title: "Grilled Chicken Spinach Salad",
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
          desc: "High protein, fiber rich plate. Slows down glycemic transit rates.",
          macros: { calories: 390, protein: "34g", carbs: "11g", fats: "14g" },
          steps: [
            "Grill 150g of seasoned chicken breast, then slice into thin strips.",
            "Arrange a bed of baby spinach, sliced cucumbers, and olives in a bowl.",
            "Add chicken breast strips, drizzle with extra virgin olive oil and lemon juice.",
            "Garnish with pumpkin seeds and a pinch of black pepper."
          ]
        },
        dinner: {
          title: "Baked Halibut & Roasted Lentils",
          image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600",
          desc: "Excellent omega-3 structure paired with low-glycemic high-fiber lentils.",
          macros: { calories: 450, protein: "38g", carbs: "28g", fats: "15g" },
          steps: [
            "Season halibut fillet with fresh herbs, salt, and pepper, then bake for 12 minutes.",
            "Simmer 1/2 cup of brown lentils with onions, garlic, and celery.",
            "Serve baked fish over the warm lentils on a plate.",
            "Accompany with roasted zucchini and bell pepper slices."
          ]
        }
      }
    }
  }
};

// Cross-disease food conflicts: when one food is good for A but harmful/problematic for B.
export const foodConflicts = [
  {
    diseases: ["pcos", "proteinDeficiency"],
    conflictFood: "Soy Isolates / Unfermented Soy",
    reason: "Soy is excellent for protein deficiency, but high intake of unfermented soy can act as a phytoestrogen, potentially disrupting hormonal balance in PCOS patients."
  },
  {
    diseases: ["diabetes", "d3"],
    conflictFood: "Spinach (Raw)",
    reason: "Spinach is excellent for diabetes due to low GI and high fiber, but raw spinach contains high oxalates, which can bind calcium and inhibit absorption of D3/calcium pathways. Recommendation: Lightly steam or cook spinach."
  },
  {
    diseases: ["heartProblems", "proteinDeficiency"],
    conflictFood: "Red Meat",
    reason: "Red meat is a fast source of high-quality protein, but its high saturated fat content can elevate LDL cholesterol and exacerbate cardiovascular risk in heart conditions. Recommendation: Substitute with lean fish, poultry, or legumes."
  },
  {
    diseases: ["pcos", "b12"],
    conflictFood: "Dairy Products (Milk/Cheese)",
    reason: "Dairy is a key natural source of B12, but it can trigger insulin spikes and aggravate androgen levels in PCOS. Recommendation: Choose B12-fortified plant milks or lean shellfish instead."
  }
];

// Day-wise variations to generate a rich schedule
export const dayWiseModifiers = {
  veg: {
    Monday: { breakfast: "Special: ", lunch: "With fresh salad", dinner: "Low carb option" },
    Tuesday: { breakfast: "Fortified: ", lunch: "With avocado dressing", dinner: "With high fiber sides" },
    Wednesday: { breakfast: "High-protein: ", lunch: "With lentil soup", dinner: "With steamed greens" },
    Thursday: { breakfast: "Omega-rich: ", lunch: "With toasted pumpkin seeds", dinner: "With garlic broccoli" },
    Friday: { breakfast: "Special: ", lunch: "With high-fiber wraps", dinner: "Baked tofu & asparagus" },
    Saturday: { breakfast: "Weekend brunch: ", lunch: "Herbed quinoa bowl", dinner: "Coconut curry treat" },
    Sunday: { breakfast: "Relaxed: ", lunch: "Spiced chickpea salad", dinner: "Mixed green garden bake" }
  },
  nonVeg: {
    Monday: { breakfast: "Special: ", lunch: "With lean greens", dinner: "High omega option" },
    Tuesday: { breakfast: "High-iron: ", lunch: "With tomato vinaigrette", dinner: "With roasted sweet potato" },
    Wednesday: { breakfast: "Protein boost: ", lunch: "With double egg-white salad", dinner: "With green beans & garlic" },
    Thursday: { breakfast: "Heart-healthy: ", lunch: "With olive oil dressing", dinner: "With grilled asparagus" },
    Friday: { breakfast: "Special: ", lunch: "With cucumber cooling salad", dinner: "Baked salmon and broccoli" },
    Saturday: { breakfast: "Weekend skillet: ", lunch: "Shredded chicken lettuce wrap", dinner: "Sirloin steak or baked cod" },
    Sunday: { breakfast: "Relaxed: ", lunch: "Herb-baked turkey salad", dinner: "Slow-roasted fish with roasted root veg" }
  }
};
