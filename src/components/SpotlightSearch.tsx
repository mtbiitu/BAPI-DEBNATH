import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/projects';
import { BLOGS } from '../data/blogs';
import { INDUSTRIAL_SOLUTIONS } from '../data/industrial';
import { FAQS } from '../data/faqs';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

interface SearchItem {
  id: string;
  title: string;
  category: string;
  type: 'project' | 'blog' | 'industrial' | 'faq' | 'page';
  url: string;
  snippet?: string;
  icon: string;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'project' | 'blog' | 'industrial' | 'faq'>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Prepare searchable items pool
  const allItems: SearchItem[] = [
    // Static main navigation pages
    {
      id: 'page-home',
      title: 'Home · Portfolio & Overview',
      category: 'Navigation',
      type: 'page',
      url: '/',
      snippet: 'Welcome to Bapi Debnath personal portfolio and maker workshop.',
      icon: 'fas fa-home',
    },
    {
      id: 'page-projects',
      title: 'All Projects · Hardware & Software',
      category: 'Navigation',
      type: 'page',
      url: '/projects',
      snippet: 'Browse all embedded systems, IoT architecture, and robotics builds.',
      icon: 'fas fa-layer-group',
    },
    {
      id: 'page-blogs',
      title: 'Technical Blog & Engineering Guides',
      category: 'Navigation',
      type: 'page',
      url: '/blogs',
      snippet: 'In-depth engineering write-ups on power electronics, drones, and AIoT.',
      icon: 'fas fa-pen-nib',
    },
    {
      id: 'page-industrial',
      title: 'Industrial Solutions · Enterprise Automation',
      category: 'Navigation',
      type: 'page',
      url: '/industrial',
      snippet: 'Smart attendance dual-biometric systems and industrial hardware.',
      icon: 'fas fa-industry',
    },
    {
      id: 'page-3d',
      title: '3D Prototyping Lab & Fabrication Service',
      category: 'Navigation',
      type: 'page',
      url: '/3d-printing',
      snippet: 'Rapid 3D printing, CAD modeling, and custom enclosures in Dhaka.',
      icon: 'fas fa-cube',
    },
    {
      id: 'page-contact',
      title: 'Contact Bapi Debnath · Get in Touch',
      category: 'Navigation',
      type: 'page',
      url: '/contact',
      snippet: 'Direct inquiries, collaboration, WhatsApp, and project quotes.',
      icon: 'fas fa-envelope',
    },
    {
      id: 'page-faq',
      title: 'Help & Frequently Asked Questions',
      category: 'Navigation',
      type: 'page',
      url: '/faq',
      snippet: 'Answers to common questions about embedded engineering and maker labs.',
      icon: 'fas fa-circle-question',
    },
    // Projects
    ...PROJECTS.map((p) => ({
      id: `proj-${p.slug}`,
      title: p.title,
      category: p.category,
      type: 'project' as const,
      url: `/projects/${p.slug}`,
      snippet: p.description,
      icon: 'fas fa-microchip',
    })),
    // Blogs
    ...BLOGS.map((b) => ({
      id: `blog-${b.slug}`,
      title: b.title,
      category: b.category,
      type: 'blog' as const,
      url: `/blogs/${b.slug}`,
      snippet: b.summary,
      icon: 'fas fa-book-open',
    })),
    // Industrial Solutions
    ...INDUSTRIAL_SOLUTIONS.map((s) => ({
      id: `ind-${s.slug}`,
      title: s.title,
      category: 'Industrial Systems',
      type: 'industrial' as const,
      url: `/industrial/${s.slug}`,
      snippet: s.description,
      icon: 'fas fa-shield-halved',
    })),
    // FAQs
    ...FAQS.map((f, i) => ({
      id: `faq-${i}`,
      title: f.question,
      category: f.category,
      type: 'faq' as const,
      url: '/faq',
      snippet: f.answer,
      icon: 'fas fa-question',
    })),
  ];

  // Filter items based on activeFilter and query
  const filteredItems = allItems.filter((item) => {
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    if (!matchesFilter) return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.snippet && item.snippet.toLowerCase().includes(q))
    );
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
      setActiveFilter('all');
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1 < filteredItems.length ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          onNavigate(filteredItems[selectedIndex].url);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100000] flex items-start justify-center p-4 sm:p-6 md:p-20 overflow-y-auto"
      style={{
        background: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col transform transition-all"
        style={{
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header & input */}
        <div className="relative flex items-center px-5 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mr-3 shrink-0">
            <i className="fas fa-search text-base"></i>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, engineering articles, solutions & FAQs..."
            className="w-full bg-transparent border-none text-slate-850 font-medium text-base outline-none placeholder:text-slate-400 placeholder:font-normal"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-full transition-colors mr-2 cursor-pointer"
            >
              <i className="fas fa-times-circle text-base"></i>
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 text-xs font-semibold text-slate-500 bg-white border border-slate-200 rounded-lg shadow-xs">
            ESC
          </kbd>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 px-5 py-2.5 bg-white border-b border-slate-100 overflow-x-auto no-scrollbar">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'project', label: 'Projects' },
            { id: 'blog', label: 'Articles' },
            { id: 'industrial', label: 'Industrial' },
            { id: 'faq', label: 'FAQ' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveFilter(tab.id as any);
                setSelectedIndex(0);
              }}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-indigo-600 text-white shadow-xs shadow-indigo-500/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-50">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-400 flex flex-col items-center">
              <i className="fas fa-magnifying-glass text-3xl mb-3 text-slate-300"></i>
              <p className="text-sm font-semibold text-slate-600">No matching results found</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for &quot;ESP32&quot;, &quot;CNC&quot;, &quot;3D Printing&quot; or &quot;Biometrics&quot;</p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.url);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-start gap-3.5 p-3 rounded-2xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-indigo-50/80 text-indigo-950 translate-x-1 shadow-xs'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold truncate text-slate-900">
                        {item.title}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 shrink-0">
                        {item.category}
                      </span>
                    </div>
                    {item.snippet && (
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {item.snippet}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 self-center pl-2 text-slate-300">
                    <i
                      className={`fas fa-arrow-right text-xs transition-transform ${
                        isSelected ? 'translate-x-1 text-indigo-600' : ''
                      }`}
                    ></i>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-semibold text-slate-600 mr-1">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-semibold text-slate-600 mr-1">
                ↓
              </kbd>
              Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-semibold text-slate-600 mr-1">
                ↵
              </kbd>
              Open
            </span>
          </div>
          <span>Bapi Debnath Portfolio Search</span>
        </div>
      </div>
    </div>
  );
};
