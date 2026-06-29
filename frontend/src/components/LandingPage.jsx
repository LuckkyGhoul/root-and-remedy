import React from 'react';
import { Shield, Users, Award, Heart, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function LandingPage({ onStart }) {
  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] transition-all duration-300">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 glass-light border-b border-slate-200/80 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto rounded-b-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-medical-500 flex items-center justify-center text-white pulse-glow-blue shadow-md">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-medical-600 to-indigo-600 bg-clip-text text-transparent">
            Medify<span className="text-emerald-500">Diet</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-600 text-sm">
          <a href="#" className="hover:text-medical-600 transition-colors">Home</a>
          <a href="#" className="hover:text-medical-600 transition-colors">Diet Science</a>
          <a href="#" className="hover:text-medical-600 transition-colors">ML Engine</a>
          <a href="#" className="hover:text-medical-600 transition-colors">Specialists</a>
        </nav>
        <button 
          onClick={onStart} 
          className="glow-btn px-5 py-2.5 bg-gradient-to-r from-medical-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-medical-500/20 hover:shadow-indigo-500/30 transition-all flex items-center gap-2"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </button>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-medical-50 text-medical-700 rounded-full text-xs font-bold border border-medical-100">
            <Award className="w-3.5 h-3.5" />
            <span>Scientifically Backed Clinical Nutrition</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Trusted Specialist for Every <span className="bg-gradient-to-r from-medical-500 to-indigo-600 bg-clip-text text-transparent">Medical Diet</span> Need
          </h1>

          <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed">
            We provide a comprehensive range of clinical nutrition and meal planning services to manage, reverse, or assist in curing diseases. Fusing medical biomarkers with dynamic dietary adaptation.
          </p>

          {/* Social Proof */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150" alt="Doctor" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150" alt="Doctor" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=150" alt="Doctor" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 font-extrabold text-slate-800 text-sm">4.9/5</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">125k+ Trusted patients cured globally</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onStart}
              className="glow-btn px-8 py-4 bg-gradient-to-r from-medical-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-medical-500/20 hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-3 group text-base"
            >
              Analyze Your Health Profile
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#specialists" 
              className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2 text-base"
            >
              View Specialists
            </a>
          </div>
        </div>

        {/* Right Graphic Column (Medify Reference Layout) */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-medical-100/50 to-indigo-100/30 rounded-full blur-3xl -z-10"></div>
          
          <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
            <img 
              src="/medical_specialists.jpg" 
              alt="Medical Specialists Team" 
              className="w-full h-full object-cover" 
            />
            {/* Overlay Glass Cards */}
            <div className="absolute top-6 left-6 glass-light px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-2.5 animate-bounce">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block animate-pulse"></span>
              <span className="text-xs font-bold text-slate-800">Dietician Consult Online</span>
            </div>
            
            <div className="absolute bottom-6 right-6 left-6 glass-light p-4 rounded-2xl shadow-xl border border-white/50 space-y-2">
              <p className="text-xs text-medical-600 font-extrabold uppercase tracking-wider">Endocrinology & Nutrition</p>
              <h3 className="text-sm font-extrabold text-slate-900">Dr. Alex Misba (RD, CDE)</h3>
              <p className="text-[11px] text-slate-500 leading-tight">We help you plan clinical medical services and cure deficiencies.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Trust Stats Bar */}
      <section className="bg-white border-y border-slate-200 py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-1">
            <h4 className="text-3xl lg:text-4xl font-extrabold text-medical-600">30M+</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Global Users</p>
          </div>
          <div className="text-center space-y-1">
            <h4 className="text-3xl lg:text-4xl font-extrabold text-medical-600">30%</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">TSH / Vitamin Optimization</p>
          </div>
          <div className="text-center space-y-1">
            <h4 className="text-3xl lg:text-4xl font-extrabold text-medical-600">98.4%</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Diet Adherence Rate</p>
          </div>
          <div className="text-center space-y-1">
            <h4 className="text-3xl lg:text-4xl font-extrabold text-medical-600">60+</h4>
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Clinical Partners</p>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section id="specialists" className="max-w-7xl mx-auto px-6 py-16 text-center space-y-12">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900">Our Medical Specialists Cover</h2>
          <p className="text-slate-500 text-sm md:text-base">
            Connecting nutrition sciences with endocrinology, cardiology, and dermatology to formulate custom disease therapies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Endocrinologist", desc: "Expertise in PCOS & Thyroid hormone balance", code: "PCOS" },
            { title: "Cardiologist", desc: "Heart rate, cholesterol & sodium management", code: "HEART" },
            { title: "Clinical Dietician", desc: "Treating B12/D3 deficiencies & protein optimization", code: "NUTRI" },
            { title: "Trichologist", desc: "Reversing hair thinning and scalp mineral deficit", code: "HAIR" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all text-left space-y-4 hover:-translate-y-1 duration-200">
              <div className="w-10 h-10 rounded-lg bg-medical-50 flex items-center justify-center text-medical-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
              <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-700 font-semibold rounded text-[10px] uppercase">
                {item.code}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-medical-500 flex items-center justify-center text-white">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <span className="font-bold text-white text-lg">MedifyDiet</span>
          </div>
          <p className="text-xs">&copy; 2026 MedifyDiet Clinical. All research is compiled from endocrinology & dietetics literature.</p>
        </div>
      </footer>
    </div>
  );
}
