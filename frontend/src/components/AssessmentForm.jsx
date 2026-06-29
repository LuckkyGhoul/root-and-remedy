import React, { useState } from 'react';
import { Shield, Sparkles, Activity, ArrowRight, ArrowLeft } from 'lucide-react';
import confetti from 'canvas-confetti';

const DISEASES = [
  { id: 'pcos', label: 'PCOS (Hormonal)', desc: 'Polycystic Ovary Syndrome' },
  { id: 'hairThinning', label: 'Hair Thinning', desc: 'Follicular nutrition deficit' },
  { id: 'd3', label: 'D3 Deficiency', desc: 'Vitamin D3 levels below 30 ng/mL' },
  { id: 'b12', label: 'B12 Deficiency', desc: 'Cobalamin deficiency' },
  { id: 'heartProblems', label: 'Heart Problems', desc: 'Cardiovascular risk, blood pressure' },
  { id: 'proteinDeficiency', label: 'Protein Deficiency', desc: 'Lack of protein intake / recovery' },
  { id: 'diabetes', label: 'Diabetes', desc: 'Insulin resistance or high HbA1c' }
];

export default function AssessmentForm({ onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    gender: 'female',
    age: 26,
    weight: 65,
    height: 165,
    selectedDiseases: [],
    cholesterol: 190,
    d3: 24,
    b12: 210,
    thyroid: 2.1,
  });

  const handleDiseaseToggle = (id) => {
    setFormData(prev => {
      const selected = prev.selectedDiseases.includes(id)
        ? prev.selectedDiseases.filter(d => d !== id)
        : [...prev.selectedDiseases, id];
      return { ...prev, selectedDiseases: selected };
    });
  };

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const triggerConfettiSubmit = (e) => {
    e.preventDefault();
    if (formData.selectedDiseases.length === 0) {
      alert("Please select at least one clinical condition or disease.");
      return;
    }
    // Celebrate
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    onSubmit(formData);
  };

  // Determine if thyroid is clinically required (e.g. if hair thinning, PCOS, or D3/B12 deficiency is selected, since thyroid affects these strongly)
  const isThyroidRequired = formData.selectedDiseases.includes('pcos') || formData.selectedDiseases.includes('hairThinning');

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Header bar */}
        <div className="bg-gradient-to-r from-medical-600 to-indigo-600 p-8 text-white text-left relative">
          <button 
            onClick={onBack}
            className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3 h-3" /> Back
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-medical-100">Step 2 of 3</span>
              <h2 className="text-2xl font-extrabold">Physiological Assessment</h2>
            </div>
          </div>
          <p className="text-medical-50 text-sm mt-3 leading-relaxed max-w-xl">
            Input your biomarkers. Our algorithms cross-examine clinical rules to establish nutrient loading protocols and flags dietary conflicts.
          </p>
        </div>

        <form onSubmit={triggerConfettiSubmit} className="p-8 space-y-8 text-left">
          {/* Step 1: Basic Demographics */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">1. Demographics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Gender</label>
                <select 
                  value={formData.gender} 
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Age (Years)</label>
                <input 
                  type="number" 
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', parseInt(e.target.value) || '')}
                  min="5" max="110"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Weight (kg)</label>
                <input 
                  type="number" 
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', parseFloat(e.target.value) || '')}
                  min="20" max="250"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-700 mb-1.5">Height (cm)</label>
                <input 
                  type="number" 
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', parseFloat(e.target.value) || '')}
                  min="50" max="250"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-medical-500 focus:ring-1 focus:ring-medical-500"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Diseases Select */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">2. Select Diseases / Deficiencies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {DISEASES.map((disease) => {
                const selected = formData.selectedDiseases.includes(disease.id);
                return (
                  <button
                    type="button"
                    key={disease.id}
                    onClick={() => handleDiseaseToggle(disease.id)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selected 
                        ? 'border-medical-500 bg-medical-50/50 ring-2 ring-medical-500/10' 
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-sm font-bold ${selected ? 'text-medical-700' : 'text-slate-800'}`}>
                        {disease.label}
                      </span>
                      <input 
                        type="checkbox" 
                        checked={selected}
                        onChange={() => {}} // toggled by button click
                        className="rounded text-medical-500 focus:ring-medical-500 w-4 h-4 pointer-events-none"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 leading-tight block">
                      {disease.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Clinical Biomarkers */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">3. Biomarker Lab Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              
              {/* Cholesterol */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-700">Total Cholesterol (mg/dL)</span>
                  <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-extrabold">{formData.cholesterol}</span>
                </div>
                <input 
                  type="range" min="100" max="350"
                  value={formData.cholesterol}
                  onChange={(e) => handleInputChange('cholesterol', parseInt(e.target.value))}
                  className="w-full accent-medical-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                  <span>Normal (&lt;200)</span>
                  <span>High Risk (&gt;240)</span>
                </div>
              </div>

              {/* Vitamin D3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-700">Vitamin D3 (ng/mL)</span>
                  <span className={`px-2 py-0.5 rounded font-extrabold ${formData.d3 < 30 ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-800'}`}>
                    {formData.d3} {formData.d3 < 30 ? '(Deficient)' : ''}
                  </span>
                </div>
                <input 
                  type="range" min="5" max="100"
                  value={formData.d3}
                  onChange={(e) => handleInputChange('d3', parseInt(e.target.value))}
                  className="w-full accent-medical-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                  <span>Severe Deficit (&lt;10)</span>
                  <span>Normal (30-100)</span>
                </div>
              </div>

              {/* Vitamin B12 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-700">Vitamin B12 (pg/mL)</span>
                  <span className={`px-2 py-0.5 rounded font-extrabold ${formData.b12 < 200 ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-800'}`}>
                    {formData.b12} {formData.b12 < 200 ? '(Deficient)' : ''}
                  </span>
                </div>
                <input 
                  type="range" min="80" max="1200"
                  value={formData.b12}
                  onChange={(e) => handleInputChange('b12', parseInt(e.target.value))}
                  className="w-full accent-medical-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                  <span>Deficit (&lt;200)</span>
                  <span>Normal (200-900)</span>
                </div>
              </div>

              {/* Thyroid Level (TSH) - Highlighted if required */}
              <div className={`space-y-2 p-3 rounded-xl transition-all duration-300 ${
                isThyroidRequired ? 'bg-medical-50/50 border border-medical-200' : ''
              }`}>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-slate-700 flex items-center gap-1.5">
                    TSH Thyroid Level (uIU/mL)
                    {isThyroidRequired && (
                      <span className="bg-medical-100 text-medical-800 text-[9px] px-1.5 py-0.5 rounded uppercase font-black">
                        Recommended
                      </span>
                    )}
                  </span>
                  <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-extrabold">{formData.thyroid}</span>
                </div>
                <input 
                  type="range" min="0.1" max="15.0" step="0.1"
                  value={formData.thyroid}
                  onChange={(e) => handleInputChange('thyroid', parseFloat(e.target.value))}
                  className="w-full accent-medical-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                  <span>Hyper (&lt;0.4)</span>
                  <span>Normal (0.4-4.0)</span>
                  <span>Hypo (&gt;4.0)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>HIPAA Compliant Simulated Assessment</span>
            </div>
            <button
              type="submit"
              className="glow-btn px-8 py-3.5 bg-gradient-to-r from-medical-600 to-indigo-600 text-white rounded-2xl text-sm font-bold shadow-xl shadow-medical-500/20 hover:shadow-indigo-500/30 transition-all flex items-center gap-2"
            >
              Analyze & Curate Diet
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
