import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { FooterSection } from '../components/FooterSection';

interface FaqPageProps {
  onNavigate: (path: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default

  const categories = [
    'All',
    'Background & Academics',
    'Hardware & Embedded Systems',
    'Edge AI & IoT Innovations',
    'Software, 3D & Fabrication',
  ];

  const filteredFaqs = FAQS.filter((f) => {
    const matchesCat = selectedCat === 'All' || f.category === selectedCat;
    const matchesSearch =
      !search.trim() ||
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleIndex = (i: number) => {
    setOpenIndices((prev) =>
      prev.includes(i) ? prev.filter((idx) => idx !== i) : [...prev, i]
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50/40">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 pt-10 pb-16 w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-600 mb-2 block">
            Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about embedded systems, IoT engineering, CAD design, and 3D
            prototyping workflows by Bapi Debnath.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search question or topic (e.g. ESP32, PCB, 3D print)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-medium text-slate-800 placeholder:text-slate-400 outline-none focus:border-indigo-600 shadow-xs"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <i className="fas fa-times-circle text-xs" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-1.5 mt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
            <i className="fas fa-question text-3xl text-slate-300 mb-3" />
            <h3 className="text-sm font-bold text-slate-700">No questions found matching your query</h3>
            <p className="text-xs text-slate-400 mt-1">Try searching with a different term.</p>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-850">
                        {faq.question}
                      </span>
                    </div>
                    <i
                      className={`fas fa-chevron-down text-xs text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-indigo-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <FooterSection onNavigate={onNavigate} />
    </div>
  );
};
