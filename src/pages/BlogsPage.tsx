import React, { useState } from 'react';
import { BLOGS } from '../data/blogs';
import { FooterSection } from '../components/FooterSection';

interface BlogsPageProps {
  onNavigate: (path: string) => void;
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Hardware Engineering',
    'Robotics & AI',
    'Microcontrollers',
    'Tutorials & Guides',
    'Personal & Reflections',
  ];

  const filteredBlogs = BLOGS.filter((b) => {
    const matchesCategory =
      selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch =
      !search.trim() ||
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.summary.toLowerCase().includes(search.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col" style={{ backgroundColor: 'var(--bg-gray, #ebf0f7)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '40px 20px 80px 20px' }}>
        {/* Header */}
        <div className="section-header center-text" style={{ textAlign: 'center', marginBottom: 36 }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 850, color: '#1d1d1f', letterSpacing: '-0.03em' }}>
            Technical Blog
          </h1>
          <p style={{ marginTop: 8, color: '#64748b', fontSize: '1rem', maxWidth: 600, margin: '8px auto 0 auto' }}>
            Hardware engineering handbooks, power electronics guides, and autonomous robotics by Bapi Debnath.
          </p>

          {/* Search bar & filter pills */}
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
              <i className="fas fa-search" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles & engineering guides..."
                className="neomorphic-input"
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: 16,
                  border: '1px solid rgba(0,0,0,0.08)',
                  background: '#ffffff',
                  outline: 'none',
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 20,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    border: '1px solid ' + (selectedCategory === cat ? '#6366f1' : '#e2e8f0'),
                    background: selectedCategory === cat ? '#6366f1' : '#ffffff',
                    color: selectedCategory === cat ? '#ffffff' : '#475569',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="project-card span-1"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <a
                className="full-link"
                href={`/blogs/${blog.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/blogs/${blog.slug}`);
                }}
              >
                <div className="card-img-wrap">
                  <img
                    alt={blog.title}
                    loading="lazy"
                    decoding="async"
                    className="p-bg"
                    src={blog.image}
                  />
                </div>
                <div className="p-content">
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                  <div className="card-footer">
                    <span>Read Article</span>
                    <svg
                      className="action-arrow"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <FooterSection onNavigate={onNavigate} />
    </div>
  );
};
