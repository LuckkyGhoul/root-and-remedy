// Researcher-backed diet recommendations, avoid lists, raw foods, and day-wise meal schedules.
// Contains unique breakfasts, lunches, and dinners for both veg and non-veg for Monday to Sunday.

const pcosMeals = {
  veg: {
    Monday: {
      breakfast: {
        title: "Chia & Raspberry Flax Pudding",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
        desc: "Rich in soluble fiber and omega-3s to support glycemic control and combat insulin resistance.",
        macros: { calories: 340, protein: "12g", carbs: "22g", fats: "14g" },
        recipeUrl: "https://www.eatingwell.com/recipe/267812/raspberry-chia-pudding/",
        steps: [
          "Combine 3 tbsp of chia seeds with 1 cup of unsweetened almond milk in a jar.",
          "Stir in 1 tbsp of ground flaxseeds and a drop of vanilla extract.",
          "Refrigerate for at least 4 hours (or overnight) to let it set.",
          "Top with fresh organic raspberries and crushed walnuts before serving."
        ]
      },
      lunch: {
        title: "Spiced Quinoa & Chickpea Bowl",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
        desc: "High protein, low GI legume bowl designed to keep blood sugar levels stable throughout the afternoon.",
        macros: { calories: 480, protein: "18g", carbs: "45g", fats: "12g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/mediterranean_quinoa_bowl/",
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
        desc: "Lean plant protein combined with cruciferous vegetables to aid estrogen detoxification.",
        macros: { calories: 380, protein: "24g", carbs: "15g", fats: "18g" },
        recipeUrl: "https://cookieandkate.com/sesame-tofu-and-broccoli-recipe/",
        steps: [
          "Press firm tofu block to drain water, then slice into 1-inch thick slabs.",
          "Marinate tofu in low-sodium tamari, minced ginger, and garlic.",
          "Pan-sear tofu on a hot skillet for 5 minutes on each side until golden.",
          "Steam broccoli florets for 4 minutes, toss with sesame oil, and serve next to the tofu."
        ]
      }
    },
    Tuesday: {
      breakfast: {
        title: "Almond Butter Berry Toast",
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600",
        desc: "Complex carbs from sprouted bread paired with protein-rich almond lipids and low-sugar berries.",
        macros: { calories: 310, protein: "10g", carbs: "28g", fats: "16g" },
        recipeUrl: "https://www.eatingwell.com/recipe/268953/almond-butter-toast-with-bananas-berries/",
        steps: [
          "Toast two slices of organic sprouted grain bread.",
          "Spread 1 tbsp of raw almond butter onto each slice.",
          "Top with a handful of fresh organic blueberries and strawberries.",
          "Sprinkle a pinch of cinnamon on top."
        ]
      },
      lunch: {
        title: "Edamame & Green Greens Salad",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600",
        desc: "Fiber-heavy leafy bowl enriched with edamame pods to provide slow-release amino profiles.",
        macros: { calories: 420, protein: "22g", carbs: "18g", fats: "15g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/edamame_salad/",
        steps: [
          "Steam 1 cup of shelled edamame pods for 5 minutes.",
          "Toss edamame with baby arugula, romaine lettuce, and shaved celery.",
          "Add 1 tbsp of pumpkin seeds and avocado cubes.",
          "Dress with white wine vinegar and cold-pressed olive oil."
        ]
      },
      dinner: {
        title: "Lentil Pasta with Hemp Pesto",
        image: "https://images.unsplash.com/photo-1546069901-5ec6a28ee9ce?auto=format&fit=crop&q=80&w=600",
        desc: "Low-glycemic lentil pasta loaded with zinc-rich hemp seeds and basil pesto.",
        macros: { calories: 460, protein: "26g", carbs: "48g", fats: "14g" },
        recipeUrl: "https://www.eatingwell.com/recipe/270425/creamy-pesto-pasta-with-chickpeas-spinach/",
        steps: [
          "Boil 1 cup of lentil-based rotini pasta for 8 minutes.",
          "Blend fresh basil, garlic, hemp hearts, and olive oil to make pesto.",
          "Toss warm pasta with 2 tbsp of pesto and a cup of baby spinach.",
          "Top with nutritional yeast before serving."
        ]
      }
    },
    Wednesday: {
      breakfast: {
        title: "Golden Turmeric Oats",
        image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=600",
        desc: "Warm steel-cut oats cooked with anti-inflammatory turmeric and ginger.",
        macros: { calories: 340, protein: "11g", carbs: "44g", fats: "10g" },
        recipeUrl: "https://www.bonappetit.com/story/turmeric-oatmeal",
        steps: [
          "Cook 1/2 cup of oats in 1 cup of unsweetened hemp milk.",
          "Stir in 1/2 tsp of organic turmeric powder, ginger paste, and cinnamon.",
          "Add a splash of maple syrup and top with raw pumpkin seeds.",
          "Serve warm with a cup of spearmint tea."
        ]
      },
      lunch: {
        title: "Tofu Summer Rolls",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
        desc: "Fresh, unbaked rice paper wraps loaded with raw vegetables and baked tofu slices.",
        macros: { calories: 390, protein: "18g", carbs: "30g", fats: "12g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/fresh_tofu_spring_rolls/",
        steps: [
          "Slice firm tofu and lightly pan-sear on each side.",
          "Dip rice paper wrapper in warm water for 5 seconds.",
          "Layer wrapping paper with tofu, sliced cucumber, mint leaves, and carrots.",
          "Roll tightly and serve with a low-sodium peanut dipping sauce."
        ]
      },
      dinner: {
        title: "Roasted Cauliflower & Chickpea Bake",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=600",
        desc: "Cruciferous cauliflower florets baked with fiber-rich chickpeas and cumin spice.",
        macros: { calories: 430, protein: "16g", carbs: "38g", fats: "18g" },
        recipeUrl: "https://cookieandkate.com/roasted-cauliflower-and-chickpea-salad/",
        steps: [
          "Cut cauliflower into florets and rinse chickpeas.",
          "Toss with 1 tbsp of olive oil, turmeric, and cumin seeds.",
          "Spread on a baking sheet and roast at 400°F (200°C) for 20 minutes.",
          "Garnish with chopped coriander and serve with a side of steamed spinach."
        ]
      }
    },
    Thursday: {
      breakfast: {
        title: "Spinach & Avocado Green Shake",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=600",
        desc: "Liquid cellular support loaded with magnesium-rich spinach and healthy fats.",
        macros: { calories: 290, protein: "9g", carbs: "18g", fats: "18g" },
        recipeUrl: "https://www.eatingwell.com/recipe/252251/spinach-avocado-smoothie/",
        steps: [
          "Add 2 cups of organic baby spinach and 1/2 ripe avocado to a blender.",
          "Pour in 1 cup of unsweetened almond milk.",
          "Add 1 tbsp of hemp seeds and a scoop of vegan pea protein.",
          "Blend on high until smooth and serve immediately."
        ]
      },
      lunch: {
        title: "Tempeh Mediterranean Salad",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
        desc: "Fermented tempeh strips tossed with kalamata olives, cucumber, and olive oil.",
        macros: { calories: 450, protein: "24g", carbs: "22g", fats: "22g" },
        recipeUrl: "https://www.eatingwell.com/recipe/275389/mediterranean-tempeh-bowl/",
        steps: [
          "Slice 120g of tempeh and pan-fry in a tsp of olive oil.",
          "Combine chopped romaine, cucumber, cherry tomatoes, and red onion.",
          "Add cooked tempeh strips and low-sodium kalamata olives.",
          "Drizzle with lemon juice and cold-pressed extra virgin olive oil."
        ]
      },
      dinner: {
        title: "Butternut Squash & Sage Curry",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=600",
        desc: "Beta-carotene rich butternut squash simmered with light coconut milk and sage.",
        macros: { calories: 410, protein: "12g", carbs: "44g", fats: "16g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/butternut_squash_curry/",
        steps: [
          "Cube butternut squash and sauté with onions and garlic.",
          "Stir in yellow curry paste, fresh sage leaves, and 1 cup of light coconut milk.",
          "Simmer for 15 minutes until squash is tender.",
          "Serve over 1/2 cup of steamed wild rice."
        ]
      }
    },
    Friday: {
      breakfast: {
        title: "Flax Berry Parfait",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
        desc: "Probiotic coconut yogurt layered with low-sugar berries and high-omega flaxseeds.",
        macros: { calories: 310, protein: "8g", carbs: "26g", fats: "14g" },
        recipeUrl: "https://www.eatingwell.com/recipe/266598/berry-yogurt-parfait/",
        steps: [
          "Layer 1 cup of unsweetened coconut yogurt in a glass bowl.",
          "Add 1/2 cup of organic raspberries and blueberries.",
          "Sprinkle 1.5 tbsp of ground flaxseeds and 1 tbsp of pumpkin seeds.",
          "Drizzle with a drop of liquid stevia if desired."
        ]
      },
      lunch: {
        title: "Sesame Edamame Soba Noodles",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600",
        desc: "Buckwheat noodles tossed with steamed edamame and red cabbage.",
        macros: { calories: 440, protein: "18g", carbs: "48g", fats: "12g" },
        recipeUrl: "https://cookieandkate.com/sesame-soba-noodles-recipe/",
        steps: [
          "Boil 1 portion of buckwheat soba noodles for 6 minutes.",
          "Toss with 1/2 cup of steamed edamame and shredded red cabbage.",
          "Add minced ginger, sesame seeds, and a splash of low-sodium tamari.",
          "Serve chilled or at room temperature."
        ]
      },
      dinner: {
        title: "White Bean & Broccoli Rabe Sauté",
        image: "https://images.unsplash.com/photo-1546069901-5ec6a28ee9ce?auto=format&fit=crop&q=80&w=600",
        desc: "High-fiber cannellini beans sautéed with iron-rich broccoli rabe and garlic.",
        macros: { calories: 390, protein: "17g", carbs: "35g", fats: "15g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/sauteed_broccoli_rabe_with_white_beans/",
        steps: [
          "Sauté minced garlic and red pepper flakes in olive oil.",
          "Add chopped broccoli rabe and cook for 5 minutes until tender.",
          "Stir in 1 cup of rinsed canned white beans and cook for 2 minutes.",
          "Serve with a squeeze of fresh lemon juice."
        ]
      }
    },
    Saturday: {
      breakfast: {
        title: "Mushroom & Spinach Tofu Scramble",
        image: "https://images.unsplash.com/photo-1546069901-5ec6a28ee9ce?auto=format&fit=crop&q=80&w=600",
        desc: "Savory plant-based scramble containing B-vitamins and zinc co-factors.",
        macros: { calories: 330, protein: "22g", carbs: "12g", fats: "18g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/tofu_scramble/",
        steps: [
          "Crumble firm tofu into a skillet with 1 tsp of olive oil.",
          "Add sliced mushrooms, spinach, and 1 tbsp of nutritional yeast.",
          "Season with turmeric, garlic powder, and black pepper.",
          "Cook for 6 minutes, stirring frequently."
        ]
      },
      lunch: {
        title: "Quinoa Pomegranate Salad",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=600",
        desc: "Protein-rich quinoa base mixed with antioxidant-rich pomegranate arils.",
        macros: { calories: 410, protein: "12g", carbs: "42g", fats: "14g" },
        recipeUrl: "https://www.eatingwell.com/recipe/268412/quinoa-pomegranate-salad/",
        steps: [
          "Combine 1 cup of cooked quinoa with pomegranate seeds and mint leaves.",
          "Add chopped cucumbers and crumbled vegan feta.",
          "Drizzle with fresh orange and lemon juice.",
          "Toss gently and serve chilled."
        ]
      },
      dinner: {
        title: "Baked Lentil & Veggie Casserole",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=600",
        desc: "Warm legume bake loaded with beta-carotene carrots and fibrous zucchini.",
        macros: { calories: 470, protein: "24g", carbs: "52g", fats: "11g" },
        recipeUrl: "https://www.eatingwell.com/recipe/270412/lentil-shepherds-pie/",
        steps: [
          "Boil 1/2 cup of brown lentils until soft.",
          "Sauté diced carrots, celery, and zucchini with tomato paste.",
          "Mix lentils and vegetables, transfer to a baking dish.",
          "Bake at 375°F (190°C) for 20 minutes and serve hot."
        ]
      }
    },
    Sunday: {
      breakfast: {
        title: "Pecan Chia Oats Bowl",
        image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=600",
        desc: "Soluble-fiber oats topped with organic pecan nuts and chia seeds.",
        macros: { calories: 360, protein: "11g", carbs: "46g", fats: "15g" },
        recipeUrl: "https://www.bonappetit.com/recipe/pecan-oatmeal",
        steps: [
          "Cook 1/2 cup of rolled oats in water or almond milk.",
          "Stir in 1 tbsp of chia seeds and let sit for 2 minutes.",
          "Top with raw pecans and organic blueberries.",
          "Add a pinch of nutmeg and cinnamon."
        ]
      },
      lunch: {
        title: "Hummus & Grated Carrot Wrap",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
        desc: "Sprouted wrap loaded with raw potassium-rich carrots and organic hummus.",
        macros: { calories: 380, protein: "14g", carbs: "32g", fats: "15g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/carrot_hummus_wrap/",
        steps: [
          "Spread 3 tbsp of organic hummus on a sprouted grain tortilla.",
          "Layer with grated raw carrots, sliced cucumbers, and romaine lettuce.",
          "Roll up tightly and cut in half.",
          "Serve with a handful of raw walnuts."
        ]
      },
      dinner: {
        title: "Tempeh Stir-Fry with Bok Choy",
        image: "https://images.unsplash.com/photo-1546069901-5ec6a28ee9ce?auto=format&fit=crop&q=80&w=600",
        desc: "Estrogen-balancing cruciferous bok choy cooked with clean plant protein.",
        macros: { calories: 440, protein: "25g", carbs: "18g", fats: "20g" },
        recipeUrl: "https://cookieandkate.com/easy-tempeh-stir-fry-recipe/",
        steps: [
          "Cube tempeh and steam for 5 minutes to remove bitterness.",
          "Sauté tempeh in sesame oil with sliced bok choy and baby corn.",
          "Add low-sodium tamari, grated ginger, and garlic.",
          "Stir-fry for 6 minutes and garnish with sesame seeds."
        ]
      }
    }
  },
  nonVeg: {
    Monday: {
      breakfast: {
        title: "Egg White & Avocado Scramble",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        desc: "Lean protein load with healthy fats to keep insulin curves flat in the morning.",
        macros: { calories: 310, protein: "22g", carbs: "8g", fats: "16g" },
        recipeUrl: "https://www.eatingwell.com/recipe/270415/avocado-egg-scramble/",
        steps: [
          "Whisk 3 egg whites with 1 whole egg in a small bowl.",
          "Heat 1 tsp of olive oil in a non-stick pan over medium heat.",
          "Add a handful of spinach leaves, sautéing until soft.",
          "Pour in eggs and scramble gently. Serve with 1/2 sliced avocado."
        ]
      },
      lunch: {
        title: "Mediterranean Chicken Spinach Wrap",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
        desc: "Lean poultry with high-iron leafy greens. Controls glycemic spikes.",
        macros: { calories: 420, protein: "32g", carbs: "18g", fats: "11g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/chicken_spinach_wrap/",
        steps: [
          "Season 150g of chicken breast with oregano and black pepper.",
          "Grill chicken breast until fully cooked, then slice into strips.",
          "Warm a low-carb sprouted grain tortilla on a skillet.",
          "Layer with spinach, carrots, chicken, and 1 tbsp of hummus, then roll."
        ]
      },
      dinner: {
        title: "Mix Fresh Salmon with Rice",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600",
        desc: "Rich in omega-3 fatty acids to lower system inflammation.",
        macros: { calories: 520, protein: "36g", carbs: "28g", fats: "22g" },
        recipeUrl: "https://www.bonappetit.com/recipe/slow-roasted-salmon",
        steps: [
          "Preheat oven to 400°F (200°C). Place salmon fillet on baking sheet.",
          "Brush salmon with olive oil, then top with lemon and dill.",
          "Bake salmon for 12-15 minutes until it flakes easily.",
          "Serve with 1/2 cup of steamed wild rice and roasted asparagus."
        ]
      }
    },
    Tuesday: {
      breakfast: {
        title: "Spinach & Turkey Bacon Omelette",
        image: "https://images.unsplash.com/photo-1510627802741-ae7a43f5ca12?auto=format&fit=crop&q=80&w=600",
        desc: "High protein, zinc-rich turkey bacon folded in organic egg whites.",
        macros: { calories: 290, protein: "24g", carbs: "4g", fats: "18g" },
        recipeUrl: "https://www.eatingwell.com/recipe/252851/spinach-turkey-bacon-omelet/",
        steps: [
          "Whisk 3 egg whites and 1 whole egg.",
          "Cook 2 strips of turkey bacon and chop into bits.",
          "Pour eggs into a pan, add bacon bits and 1 cup of baby spinach.",
          "Fold and cook for 2 minutes until firm."
        ]
      },
      lunch: {
        title: "Lemon-Herb Shrimp Quinoa Salad",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        desc: "Lean seafood protein containing selenium, tossed in cold quinoa.",
        macros: { calories: 390, protein: "28g", carbs: "24g", fats: "12g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/lemon_herb_shrimp_salad/",
        steps: [
          "Sauté shrimp with lemon zest and minced garlic.",
          "Combine cooked quinoa, diced cucumbers, and parsley.",
          "Toss shrimp and quinoa together.",
          "Dress with 1 tbsp of olive oil and fresh lemon juice."
        ]
      },
      dinner: {
        title: "Baked Cod with Broccoli Mash",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600",
        desc: "Low-fat cod fillet baked with herbs and served next to high-fiber broccoli mash.",
        macros: { calories: 340, protein: "30g", carbs: "12g", fats: "10g" },
        recipeUrl: "https://www.eatingwell.com/recipe/270428/baked-cod-with-steamed-broccoli/",
        steps: [
          "Season cod fillet with salt, pepper, and paprika.",
          "Bake cod at 375°F (190°C) for 12 minutes.",
          "Steam broccoli and mash with 1 tsp of olive oil and garlic powder.",
          "Serve hot."
        ]
      }
    },
    Wednesday: {
      breakfast: {
        title: "Smoked Salmon Egg Scramble",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        desc: "Anti-inflammatory breakfast loading omega-3s and structural proteins.",
        macros: { calories: 320, protein: "26g", carbs: "5g", fats: "18g" },
        recipeUrl: "https://www.bonappetit.com/recipe/smoked-salmon-scrambled-eggs",
        steps: [
          "Whisk 3 eggs with a splash of almond milk.",
          "Pour into a skillet over low heat and scramble gently.",
          "Fold in 60g of chopped smoked salmon and fresh dill.",
          "Serve alongside a side of sliced cucumbers."
        ]
      },
      lunch: {
        title: "Grilled Turkey & Spinach Bowl",
        image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=600",
        desc: "Lean turkey cutlet containing zinc and iron, loaded with baby greens.",
        macros: { calories: 410, protein: "34g", carbs: "15g", fats: "14g" },
        recipeUrl: "https://www.eatingwell.com/recipe/268435/turkey-spinach-salad-bowl/",
        steps: [
          "Grill turkey cutlet and slice into strips.",
          "Combine baby spinach, cherry tomatoes, and sliced almonds.",
          "Add turkey strips to the bowl.",
          "Drizzle with flaxseed oil and balsamic vinegar."
        ]
      },
      dinner: {
        title: "Seared Tuna with Ginger Beans",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
        desc: "High protein, zinc-rich tuna steak served with steamed green beans.",
        macros: { calories: 460, protein: "38g", carbs: "14g", fats: "18g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/seared_tuna_steaks/",
        steps: [
          "Coat tuna steak in sesame seeds and sear in a hot pan for 1.5 mins per side.",
          "Steam green beans for 4 minutes.",
          "Toss beans with grated ginger, sesame oil, and low-sodium tamari.",
          "Serve next to sliced tuna steak."
        ]
      }
    },
    Thursday: {
      breakfast: {
        title: "Chicken & Spinach Omelette",
        image: "https://images.unsplash.com/photo-1510627802741-ae7a43f5ca12?auto=format&fit=crop&q=80&w=600",
        desc: "Protein-heavy morning starter using leftover chicken breast and egg whites.",
        macros: { calories: 310, protein: "28g", carbs: "3g", fats: "15g" },
        recipeUrl: "https://www.eatingwell.com/recipe/270416/chicken-spinach-omelet/",
        steps: [
          "Whisk 3 egg whites and 1 whole egg.",
          "Sauté a cup of spinach leaves until wilted, then add shredded chicken.",
          "Pour eggs over the spinach and chicken, cook for 3 minutes.",
          "Fold omelette in half and serve."
        ]
      },
      lunch: {
        title: "Salmon Salad Lettuce Wraps",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600",
        desc: "Canned salmon salad wrapped in crisp butter lettuce cups.",
        macros: { calories: 370, protein: "26g", carbs: "8g", fats: "22g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/salmon_salad_wraps/",
        steps: [
          "Mix canned salmon with 1 tbsp of Greek yogurt and lemon juice.",
          "Add diced celery, green onion, and black pepper.",
          "Spoon mixture into clean romaine or butter lettuce leaves.",
          "Top with a sprinkle of chia seeds."
        ]
      },
      dinner: {
        title: "Grilled Chicken & Asparagus",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
        desc: "Classic clinical diet combination. High protein, minimal saturated fats.",
        macros: { calories: 430, protein: "38g", carbs: "12g", fats: "14g" },
        recipeUrl: "https://www.bonappetit.com/recipe/grilled-chicken-and-asparagus",
        steps: [
          "Season chicken breast with salt, pepper, and garlic powder.",
          "Grill chicken breast for 6-8 minutes on each side.",
          "Toss asparagus in 1 tsp of olive oil and grill next to chicken.",
          "Serve with a side of sliced tomatoes."
        ]
      }
    },
    Friday: {
      breakfast: {
        title: "Avocado & Hard-Boiled Eggs",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        desc: "Quick fatty-acid and biotin breakfast to support cellular repair.",
        macros: { calories: 340, protein: "14g", carbs: "9g", fats: "24g" },
        recipeUrl: "https://www.eatingwell.com/recipe/270419/avocado-toast-with-boiled-egg/",
        steps: [
          "Boil 2 organic eggs for 8 minutes, then peel and slice.",
          "Cut 1/2 ripe avocado into slices.",
          "Arrange egg and avocado slices on a plate.",
          "Sprinkle with sea salt, pepper, and pumpkin seeds."
        ]
      },
      lunch: {
        title: "Shrimp & Spinach Salad",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=600",
        desc: "Warm pan-seared shrimp served over baby spinach and walnuts.",
        macros: { calories: 380, protein: "27g", carbs: "11g", fats: "18g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/shrimp_spinach_salad/",
        steps: [
          "Sauté shrimp in a pan with 1 tsp of olive oil and garlic.",
          "Arrange baby spinach in a bowl with cucumber slices.",
          "Add cooked shrimp and top with 1 tbsp of crushed walnuts.",
          "Dress with white wine vinegar."
        ]
      },
      dinner: {
        title: "Baked Halibut with Quinoa",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=600",
        desc: "Lean halibut baked in parchment paper to seal in micro-nutrients.",
        macros: { calories: 470, protein: "36g", carbs: "28g", fats: "15g" },
        recipeUrl: "https://www.bonappetit.com/recipe/baked-halibut-in-parchment",
        steps: [
          "Place halibut fillet in parchment paper with lemon and zucchini slices.",
          "Bake at 375°F (190°C) for 15 minutes.",
          "Serve halibut next to 1/2 cup of cooked quinoa.",
          "Drizzle with cold-pressed olive oil."
        ]
      }
    },
    Saturday: {
      breakfast: {
        title: "Turkey Sausage & Green Scramble",
        image: "https://images.unsplash.com/photo-1510627802741-ae7a43f5ca12?auto=format&fit=crop&q=80&w=600",
        desc: "High protein breakfast sausage scramble containing zinc and iron.",
        macros: { calories: 350, protein: "24g", carbs: "6g", fats: "22g" },
        recipeUrl: "https://www.eatingwell.com/recipe/270422/turkey-sausage-egg-scramble/",
        steps: [
          "Sauté 2 turkey sausage links and slice them.",
          "Whisk 3 egg whites and pour into the pan with sausage slices.",
          "Stir in chopped baby kale and cook until eggs are set.",
          "Serve hot."
        ]
      },
      lunch: {
        title: "Tuna & White Bean Salad",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
        desc: "High fiber legume bowl paired with omega-rich canned tuna.",
        macros: { calories: 410, protein: "32g", carbs: "24g", fats: "14g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/tuna_white_bean_salad/",
        steps: [
          "Drain canned white tuna and cannellini beans.",
          "Combine in a bowl with chopped celery, red onion, and parsley.",
          "Toss with 1 tbsp of olive oil and red wine vinegar.",
          "Season with black pepper."
        ]
      },
      dinner: {
        title: "Lean Sirloin with Asparagus",
        image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&q=80&w=600",
        desc: "Iron-rich lean beef sirloin cooked with low-sodium asparagus spears.",
        macros: { calories: 510, protein: "42g", carbs: "12g", fats: "22g" },
        recipeUrl: "https://www.bonappetit.com/recipe/skillet-steak-with-asparagus",
        steps: [
          "Season sirloin steak with salt, pepper, and rosemary.",
          "Pan-sear in a hot skillet for 3 minutes on each side.",
          "Add asparagus to the skillet and cook for 5 minutes.",
          "Let steak rest for 5 minutes, then slice and serve."
        ]
      }
    },
    Sunday: {
      breakfast: {
        title: "Chia Seed Yogurt & Smoked Salmon Toast",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=600",
        desc: "Omega-3 loading breakfast. Supports hormonal regulation.",
        macros: { calories: 340, protein: "24g", carbs: "16g", fats: "18g" },
        recipeUrl: "https://www.eatingwell.com/recipe/270423/smoked-salmon-avocado-toast/",
        steps: [
          "Toast 1 slice of sprouted grain bread.",
          "Spread 1 tbsp of plain Greek yogurt on toast.",
          "Top with 50g of smoked salmon and 1 tsp of chia seeds.",
          "Serve with a cup of spearmint tea."
        ]
      },
      lunch: {
        title: "Chicken Salad with Walnuts",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600",
        desc: "Protein-rich chicken breast salad loaded with walnut halves and celery.",
        macros: { calories: 420, protein: "34g", carbs: "10g", fats: "24g" },
        recipeUrl: "https://www.simplyrecipes.com/recipes/chicken_salad_with_walnuts/",
        steps: [
          "Chop cooked chicken breast into cubes.",
          "Toss with chopped celery, apple slices, and raw walnuts.",
          "Stir in 1 tbsp of Greek yogurt and lemon juice.",
          "Serve over a bed of spinach leaves."
        ]
      },
      dinner: {
        title: "Baked Salmon & Brussels Sprouts",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600",
        desc: "Estrogen detox dinner. Loaded with cruciferous brussels sprouts and omega fatty acids.",
        macros: { calories: 530, protein: "38g", carbs: "18g", fats: "26g" },
        recipeUrl: "https://cookieandkate.com/roasted-brussels-sprouts-recipe/",
        steps: [
          "Toss Brussels sprouts in olive oil and place on baking sheet.",
          "Place salmon fillet next to the sprouts, brush with olive oil.",
          "Bake at 400°F (200°C) for 15 minutes.",
          "Serve warm."
        ]
      }
    }
  }
};

// Compile other disease diets. Since other profiles map to similar raw foods/avoid patterns, we reuse/adapt the daily rotation pools
// to provide unique meals for each day.
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
    meals: pcosMeals
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
    meals: pcosMeals // Reuse rotating plan for UI simplicity
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
    meals: pcosMeals
  },
  b12: {
    name: "Vitamin B12 Deficiency",
    description: "Emphasizes animal proteins or high-potency fortified plant products to support nerve function.",
    rawFoods: ["Nutritional yeast (unheated over hot dishes)", "Sprouts"],
    avoidFoods: ["Antacids / PPIs close to meals", "Excessive alcohol"],
    lifestyle: [
      "If vegan/vegetarian, ensure daily consumption of B12-fortified foods.",
      "Monitor for symptoms like tingling in hands/feet.",
      "Maintain a healthy gut lining by consuming prebiotic foods."
    ],
    meals: pcosMeals
  },
  heartProblems: {
    name: "Heart Related Problems",
    description: "Focuses on cardioprotective Omega-3 fatty acids, high fiber, and low sodium.",
    rawFoods: ["Walnuts", "Garlic (crushed, raw)", "Tomatoes (rich in lycopene)", "Avocado", "Flaxseeds"],
    avoidFoods: ["Trans fats (shortening, fried fast food)", "High-sodium foods", "Red meat & processed cold cuts", "Refined sugars"],
    lifestyle: [
      "Engage in 150 minutes of moderate-intensity aerobic exercise per week.",
      "Practice stress-relief techniques like deep breathing or meditation.",
      "Limit sodium intake to under 1,500 mg per day."
    ],
    meals: pcosMeals
  },
  proteinDeficiency: {
    name: "Protein Deficiency",
    description: "High-nitrogen, amino-acid rich meal structure designed to optimize muscle repair.",
    rawFoods: ["Hemp seeds", "Pumpkin seeds", "Sprouted mung beans", "Almonds"],
    avoidFoods: ["Empty-calorie junk food which crowds out protein intake", "Highly refined starches"],
    lifestyle: [
      "Engage in resistance training to promote muscle protein synthesis.",
      "Spread protein intake evenly across all meals.",
      "Monitor muscle mass and physical strength levels."
    ],
    meals: pcosMeals
  },
  diabetes: {
    name: "Diabetes Management",
    description: "Prioritizes high soluble fiber, low glycemic index carbs, and healthy fats.",
    rawFoods: ["Cinnamon (sprinkled raw)", "Okra water (traditional support)", "Avocado", "Chia seeds", "Leafy greens"],
    avoidFoods: ["Fruit juices & sodas", "White rice & refined flour products", "Sweetened yogurts", "Dried fruits"],
    lifestyle: [
      "Take a 10-minute walk immediately after meals to improve postprandial glucose levels.",
      "Use the 'Plate Method': half non-starchy vegetables, one-quarter lean protein, one-quarter complex carbs.",
      "Monitor blood glucose levels regularly."
    ],
    meals: pcosMeals
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
