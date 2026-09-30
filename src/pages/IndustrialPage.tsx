import React, { useState } from 'react';
import { INDUSTRIAL_SOLUTIONS } from '../data/industrial';
import { FooterSection } from '../components/FooterSection';

interface IndustrialPageProps {
  onNavigate: (path: string) => void;
}

export const IndustrialPage: React.FC<IndustrialPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'terminal' | 'specs'>('overview');
  const solution = INDUSTRIAL_SOLUTIONS[0];

  return (
    <div className="flex-1 flex flex-col bg-slate-50/40">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 pt-10 pb-16 w-full">
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 mb-2 block">
            Automation &amp; Edge Hardware
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Industrial Solutions &amp; Engineering Systems
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Enterprise-grade hardware platforms engineered for demanding institutional, laboratory,
            and industrial automation environments.
          </p>

          {/* Navigation view tabs */}
          <div className="flex items-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-2xl transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <i className="fas fa-layer-group mr-2" />
              Solution Overview
            </button>
            <button
              onClick={() => setActiveTab('terminal')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-2xl transition-all cursor-pointer ${
                activeTab === 'terminal'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <i className="fas fa-desktop mr-2" />
              Live Interactive Terminal Showcase
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-2xl transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <i className="fas fa-microchip mr-2" />
              Hardware Specifications
            </button>
          </div>
        </div>

        {/* Tab 1: Solution Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero Banner Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
                    <span>Industrial Biometrics</span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {solution.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-slate-200 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Launch Interactive Terminal Showcase</span>
                    <i className="fas fa-arrow-right text-xs" />
                  </button>
                </div>
                <div className="lg:col-span-5">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full rounded-2xl border border-white/15 shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Core Features */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                <i className="fas fa-shield-halved text-indigo-600" />
                <span>Enterprise Architecture Highlights</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solution.features.map((feat, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-xs">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive Terminal Iframe */}
        {activeTab === 'terminal' && (
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col h-[82vh]">
            <div className="bg-slate-900 text-slate-300 px-6 py-3 flex items-center justify-between text-xs border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 mr-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="font-mono font-bold text-white">Smart Attendance · Dual-Biometric &amp; AI Anti-Proxy Terminal</span>
              </div>
              <a
                href="/industrial-render/smart-attendance.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1.5"
              >
                <span>Open Fullscreen</span>
                <i className="fas fa-external-link-alt text-[10px]" />
              </a>
            </div>
            <iframe
              src="/industrial-render/smart-attendance.html"
              title="Smart Attendance Terminal Interactive Showcase"
              className="w-full flex-1 border-none"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </div>
        )}

        {/* Tab 3: Detailed Specs */}
        {activeTab === 'specs' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
              <i className="fas fa-microchip text-indigo-600" />
              <span>Full Hardware Specifications &amp; Electrical BOM</span>
            </h3>
            <div className="divide-y divide-slate-100">
              {solution.specs.map((spec, i) => (
                <div key={i} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-700 w-48 shrink-0">{spec.label}</span>
                  <span className="text-sm font-mono text-slate-900 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 flex-1">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <FooterSection onNavigate={onNavigate} />
    </div>
  );
};
