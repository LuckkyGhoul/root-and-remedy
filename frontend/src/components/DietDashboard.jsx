import React, { useState } from 'react';
import { diseaseDiets, foodConflicts } from '../data/dietData';
import { 
  AlertTriangle, 
  RotateCcw, 
  Search, 
  Share2, 
  Menu,
  Heart,
  ChevronRight,
  TrendingUp,
  Award,
  CheckSquare,
  LogOut,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function DietDashboard({ assessment, user, onGoToProgress, onReset, onSignOut }) {
  const [isVeg, setIsVeg] = useState(true);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [activeMealTab, setActiveMealTab] = useState("lunch"); // 'breakfast' | 'lunch' | 'dinner'
  const [animateKey, setAnimateKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const activeDiseases = assessment.selectedDiseases;
  const activeDiets = activeDiseases.map(id => diseaseDiets[id]).filter(Boolean);
  const primaryDiet = activeDiets[0] || diseaseDiets.d3;

  // Compile conflicts
  const activeConflicts = foodConflicts.filter(conflict => {
    return conflict.diseases.every(d => activeDiseases.includes(d));
  });

  // Get active meal profile based on category, day, and tab
  const getMealProfile = (mealType) => {
    return primaryDiet.meals[isVeg ? 'veg' : 'nonVeg'][selectedDay][mealType];
  };

  const currentMeal = getMealProfile(activeMealTab);

  const handleMealTabChange = (meal) => {
    setActiveMealTab(meal);
    setAnimateKey(prev => prev + 1);
  };

  const handleCookClick = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.8 }
    });
    alert("Meal Adherence Logged! Let's track your biomarkers in the Progress tab.");
  };

  // Get the other two meals of the day for the bottom thumbnails
  const getAlternativeMeals = () => {
    const mealKeys = ['breakfast', 'lunch', 'dinner'];
    const otherKeys = mealKeys.filter(k => k !== activeMealTab);
    
    return otherKeys.map(k => {
      const profile = getMealProfile(k);
      return {
        key: k,
        title: profile.title,
        image: profile.image,
        calories: profile.macros.calories,
        protein: profile.macros.protein
      };
    });
  };

  const altMeals = getAlternativeMeals();

  return (
    <div className="min-h-screen bg-[#1e232b] text-slate-100 flex flex-col items-center justify-start overflow-x-hidden font-sans">
      
      {/* Search Header Bar */}
      <header className="w-full max-w-7xl px-8 py-5 flex items-center justify-between border-b border-slate-700/40 bg-[#1e232b]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-base">
            D
          </div>
          <span className="font-semibold text-sm tracking-wide text-slate-300">medify diet</span>
        </div>

        {/* Search Input */}
        <div className="hidden md:flex items-center bg-slate-800/40 border border-slate-700/60 rounded-full px-4 py-1.5 w-80 gap-2.5">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search Something Here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-xs text-slate-200 w-full placeholder-slate-500"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-slate-400">
          <button onClick={onReset} className="hover:text-white transition-colors">Home</button>
          <button className="text-white hover:text-white transition-colors border-b-2 border-white pb-1">Recipe</button>
          <button onClick={onGoToProgress} className="hover:text-white transition-colors">Progress Tracker</button>
          <span className="text-slate-600">#Foodforlife</span>
        </nav>

        {/* Profile Dropdown */}
        <div className="flex items-center gap-3 relative">
          <div 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-full py-1 pl-1 pr-3 cursor-pointer hover:bg-slate-700/60 transition-all select-none"
          >
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80" 
              alt="Avatar" 
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-[10px] font-bold text-slate-300 capitalize">{user?.username || "Guest User"}</span>
          </div>
          
          {showDropdown && (
            <div className="absolute right-0 top-9 w-40 bg-[#14171d] border border-slate-700/60 rounded-xl py-2 shadow-2xl z-50 text-left">
              <button 
                onClick={onSignOut}
                className="w-full px-4 py-2 hover:bg-slate-800 text-xs text-rose-400 font-bold flex items-center gap-2"
              >
                <LogOut className="w-3.5 h-3.5" /> Sign Out
              </button>
            </div>
          )}

          <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400">
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Layout Area */}
      <main className="w-full max-w-7xl px-8 pt-8 flex-1 flex flex-col justify-between">
        
        {/* Upper Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative min-h-[460px]">
          
          {/* LEFT COLUMN: Vertical Title, Meal Recipe Info */}
          <div className="lg:col-span-7 flex text-left items-stretch gap-6">
            
            {/* Vertical Recipe indicator on Left border */}
            <div className="hidden sm:flex flex-col items-center justify-center border-r border-slate-700/40 pr-6 select-none shrink-0">
              <span className="transform -rotate-90 tracking-[0.25em] text-[10px] font-black text-slate-500 uppercase whitespace-nowrap">
                RECIPE DETAILS
              </span>
            </div>

            {/* Content Body */}
            <div className="flex-1 flex flex-col justify-between py-2 space-y-6">
              
              {/* Day & Meal Selector Buttons */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex gap-1.5 overflow-x-auto pb-1 max-w-md scrollbar-thin">
                    {DAYS.map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${
                          selectedDay === day 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-800/40 text-slate-400 hover:text-slate-200 border border-slate-700/20'
                        }`}
                      >
                        {day.slice(0, 3)}
                      </button>
                    ))}
                  </div>
                  
                  {/* Meal Tabs */}
                  <div className="bg-slate-900/80 p-0.5 rounded-lg flex items-center border border-slate-700/30">
                    {['breakfast', 'lunch', 'dinner'].map((meal) => (
                      <button
                        key={meal}
                        onClick={() => handleMealTabChange(meal)}
                        className={`px-3 py-1 rounded text-[9px] font-black uppercase tracking-wider transition-all ${
                          activeMealTab === meal 
                            ? 'bg-[#1e232b] text-blue-400 border border-slate-700/40' 
                            : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {meal}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Disease Tag Overrides */}
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[9px] text-slate-500 font-extrabold uppercase mr-1.5 self-center">Targets:</span>
                  {activeDiets.map((diet, idx) => (
                    <span key={idx} className="bg-slate-800/80 text-slate-300 border border-slate-700/30 px-2 py-0.5 rounded-md text-[10px] font-semibold">
                      {diet.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Overlay Boxed Heading */}
              <div className="space-y-3">
                <div className="space-y-1.5 inline-block">
                  <div className="bg-slate-800/80 px-4 py-2 text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-wide text-white uppercase inline-block border-l-4 border-blue-500 shadow-lg">
                    {currentMeal.title.split(' ').slice(0, 2).join(' ')}
                  </div>
                  <br />
                  <div className="bg-slate-800/80 px-4 py-2 text-xl sm:text-2xl md:text-3xl font-serif font-black tracking-wide text-white uppercase inline-block border-l-4 border-blue-500 shadow-lg">
                    {currentMeal.title.split(' ').slice(2).join(' ') || "Diet Selection"}
                  </div>
                </div>

                {/* Follow This Recipe Hyperlink */}
                {currentMeal.recipeUrl && (
                  <a 
                    href={currentMeal.recipeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 font-bold hover:underline text-xs block select-none"
                  >
                    follow this recipe &rarr;
                  </a>
                )}

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="flex items-center text-blue-500 text-xs">
                    {"★".repeat(4)}{"☆".repeat(1)}
                  </div>
                  <span className="font-bold text-slate-300">4.2</span>
                  <span className="text-slate-500 font-medium">(127 Reviews)</span>
                </div>
              </div>

              {/* Meal Ingredient Description */}
              <p className="text-slate-400 text-xs leading-relaxed max-w-lg">
                {currentMeal.desc}
              </p>

              {/* Step-by-Step Recipes Block */}
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-700/25 space-y-3">
                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5" /> Step-by-Step Preparation
                </h4>
                <ol className="space-y-2 text-xs text-slate-300">
                  {currentMeal.steps.map((step, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <span className="bg-slate-800 text-slate-400 text-[10px] px-1.5 py-0.5 rounded font-black mt-0.5 select-none">{idx + 1}</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Cook details & CTA button */}
              <div className="flex items-center gap-6 flex-wrap pt-2">
                {/* Social Avatars */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img className="w-6 h-6 rounded-full border border-[#1e232b] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=80" alt="" />
                    <img className="w-6 h-6 rounded-full border border-[#1e232b] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=80" alt="" />
                    <img className="w-6 h-6 rounded-full border border-[#1e232b] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80" alt="" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    28 patients have tried this menu
                  </span>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={handleCookClick}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[11px] font-black uppercase tracking-wider transition-all shadow-md shadow-blue-600/10"
                >
                  Log Meal Adherence
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: The Large Curved Menu Plate Section */}
          <div className="lg:col-span-5 relative flex items-center justify-end overflow-visible min-h-[350px]">
            {/* The circular masking border outline on the right background */}
            <div className="absolute right-[-150px] w-[500px] h-[500px] rounded-full border-[1.5px] border-slate-600/30 -z-10 pointer-events-none"></div>
            
            {/* Large Plate Image with Dynamic Rotation Animation */}
            <div className="relative w-80 h-80 rounded-full border-4 border-slate-700/30 overflow-hidden shadow-2xl mr-4 bg-slate-900">
              <img 
                src={currentMeal.image} 
                alt={currentMeal.title} 
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out"
                style={{ transform: `rotate(${animateKey * 72}deg)` }}
              />
            </div>

            {/* Menu Identifier Badge overlay on the left of plate */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-5 bg-gradient-to-r from-[#1e232b] to-transparent p-4 rounded-xl">
              <span className="font-serif text-5xl font-extrabold text-slate-500/80 tracking-tighter">
                {activeMealTab === 'breakfast' ? '01' : activeMealTab === 'lunch' ? '02' : '03'}
              </span>
              <div className="w-[1.5px] h-10 bg-slate-600/50"></div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white uppercase tracking-wide">
                  {activeMealTab}
                </h4>
                <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mt-0.5">Biomarker Diet</p>
              </div>
            </div>

            {/* Social Share Floating Vertical Links on the far right */}
            <div className="absolute right-0 flex flex-col gap-4 text-slate-500 text-xs font-bold p-1 bg-slate-900/60 rounded-full border border-slate-800/40">
              <button className="p-2 hover:text-white transition-colors"><Share2 className="w-3.5 h-3.5" /></button>
              <button className="p-2 hover:text-white transition-colors">FB</button>
              <button className="p-2 hover:text-white transition-colors">TW</button>
              <button className="p-2 hover:text-white transition-colors">PT</button>
            </div>
          </div>

        </div>

        {/* Veg/Non-Veg Quick Toggle Switcher */}
        <div className="bg-slate-900/40 border border-slate-800/60 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div className="text-left space-y-1">
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Clinical Override Preference</span>
            <p className="text-xs text-slate-300 font-medium">Switch diet modes in real-time. Fulfills caloric and macro-distribution matrices.</p>
          </div>
          <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button 
              onClick={() => setIsVeg(true)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                isVeg ? 'bg-blue-600 text-white shadow' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              🌱 Vegetarian Diet
            </button>
            <button 
              onClick={() => setIsVeg(false)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                !isVeg ? 'bg-blue-600 text-white shadow' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              🥩 Non-Vegetarian Diet
            </button>
          </div>
        </div>

        {/* DOUBLE COLUMN: Foods to Eat (Raw) & Foods to Avoid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Foods to Eat (Raw) */}
          <div className="bg-[#1b2f27] border border-emerald-900/40 p-5 rounded-2xl text-left space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Foods to Eat (Raw)
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              {primaryDiet.rawFoods.map((food, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold select-none">✓</span>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Foods to Avoid */}
          <div className="bg-[#311f23] border border-rose-900/40 p-5 rounded-2xl text-left space-y-3">
            <h4 className="text-[11px] font-black uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              Foods to Avoid (Raw & Cooked)
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              {primaryDiet.avoidFoods.map((food, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-rose-500 font-bold select-none">✗</span>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: Other Meals & Live Macros Card (Replaces Bakwan White Rice & watch video) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-12 border-t border-slate-700/30 mt-10">
          
          {/* Alternating Card 1 */}
          <div className="bg-slate-900/30 border border-slate-700/25 p-4 rounded-2xl flex items-center gap-4 text-left hover:bg-slate-800/30 transition-all cursor-pointer"
               onClick={() => handleMealTabChange(altMeals[0].key)}>
            <img 
              src={altMeals[0].image} 
              alt={altMeals[0].title} 
              className="w-12 h-12 rounded-full object-cover border border-slate-700/50 shrink-0"
            />
            <div className="space-y-1">
              <span className="bg-slate-800 text-blue-400 text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-wider">{altMeals[0].key}</span>
              <h4 className="text-xs font-bold text-slate-200 truncate w-36">{altMeals[0].title}</h4>
              <span className="text-[10px] text-slate-500 font-semibold">{altMeals[0].calories} kCal | {altMeals[0].protein} protein</span>
            </div>
          </div>

          {/* Alternating Card 2 */}
          <div className="bg-slate-900/30 border border-slate-700/25 p-4 rounded-2xl flex items-center gap-4 text-left hover:bg-slate-800/30 transition-all cursor-pointer"
               onClick={() => handleMealTabChange(altMeals[1].key)}>
            <img 
              src={altMeals[1].image} 
              alt={altMeals[1].title} 
              className="w-12 h-12 rounded-full object-cover border border-slate-700/50 shrink-0"
            />
            <div className="space-y-1">
              <span className="bg-slate-800 text-blue-400 text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-wider">{altMeals[1].key}</span>
              <h4 className="text-xs font-bold text-slate-200 truncate w-36">{altMeals[1].title}</h4>
              <span className="text-[10px] text-slate-500 font-semibold">{altMeals[1].calories} kCal | {altMeals[1].protein} protein</span>
            </div>
          </div>

          {/* Card 3: Clinical Advisories */}
          <div className="bg-slate-900/30 border border-slate-700/25 p-4 rounded-2xl flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center shrink-0 text-amber-500 border border-slate-850">
              ⚡
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-200">Clinical Focus</h4>
              <p className="text-[9px] text-slate-400 leading-tight">Lower insulin response and support cell repair pathways.</p>
            </div>
          </div>

          {/* Card 4: Dynamic Macros Card (Replaces watch video) */}
          <div className="bg-indigo-950/80 border border-indigo-800/50 p-4 rounded-2xl flex flex-col justify-between text-left relative overflow-hidden transition-all shadow-lg group">
            <div className="space-y-1 z-10">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-indigo-300">Macro Targets Split</h4>
              <h3 className="text-lg font-serif font-black text-white">{currentMeal.macros.calories} kCal</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-1.5 text-center mt-2.5 z-10 text-[9px] font-black uppercase">
              <div className="bg-slate-900/80 p-1 rounded border border-slate-800 text-slate-300">
                <span className="block text-blue-400">{currentMeal.macros.carbs}</span> Carbs
              </div>
              <div className="bg-slate-900/80 p-1 rounded border border-slate-800 text-slate-300">
                <span className="block text-emerald-400">{currentMeal.macros.protein}</span> Prot
              </div>
              <div className="bg-slate-900/80 p-1 rounded border border-slate-800 text-slate-300">
                <span className="block text-amber-400">{currentMeal.macros.fats}</span> Fats
              </div>
            </div>

            {/* Decorative background shapes */}
            <div className="absolute right-[-10px] bottom-[-20px] w-24 h-24 bg-indigo-900/30 rounded-full blur-sm -z-0"></div>
          </div>

        </div>

      </main>

      {/* Warnings & Lifestyle references at the bottom page */}
      <footer className="w-full bg-[#171a20] border-t border-slate-800 py-10 px-8">
        <div className="max-w-7xl mx-auto space-y-6 text-left text-slate-400">
          
          {activeConflicts.length > 0 && (
            <div className="bg-rose-950/20 border border-rose-800/40 rounded-xl p-5 space-y-2">
              <h4 className="text-xs font-black text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" /> Biochemical Interference Detected
              </h4>
              {activeConflicts.map((c, i) => (
                <p key={i} className="text-slate-300 text-xs leading-relaxed">
                  <strong>{c.conflictFood}</strong>: {c.reason}
                </p>
              ))}
            </div>
          )}

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs border-t border-slate-800/60 pt-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-slate-300 font-bold">Simulated Medical Expert Portal</span>
            </div>
            <div className="flex gap-4">
              <button onClick={onGoToProgress} className="text-blue-500 font-extrabold hover:underline">
                Navigate to Progress Tracker & ML Module &rarr;
              </button>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
