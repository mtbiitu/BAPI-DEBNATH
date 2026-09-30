import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { FooterSection } from '../components/FooterSection';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Software & AI Tools',
    'Hardware & Robotics',
    'Autonomous Robotics',
    'IoT & Cloud Telemetry',
    'Power Electronics',
    'Custom PCB Design',
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      !search.trim() ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col" style={{ backgroundColor: 'var(--bg-gray, #ebf0f7)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '40px 20px 80px 20px' }}>
        {/* Header */}
        <div className="section-header center-text" style={{ textAlign: 'center', marginBottom: 36 }}>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 850, color: '#1d1d1f', letterSpacing: '-0.03em' }}>
            All Projects
          </h1>
          <p style={{ marginTop: 8, color: '#64748b', fontSize: '1rem', maxWidth: 600, margin: '8px auto 0 auto' }}>
            Hardware prototyping, embedded IoT firmware, and software engineering builds by Bapi Debnath.
          </p>

          {/* Search bar & filter pills */}
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
              <i className="fas fa-search" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects (e.g. ESP32, CNC, LoRa)..."
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
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="project-card span-1"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <a
                className="full-link"
                href={`/projects/${project.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/projects/${project.slug}`);
                }}
              >
                <div className="card-img-wrap">
                  <img
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="p-bg"
                    src={project.image}
                  />
                </div>
                <div className="p-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-footer">
                    <span>View Case Study</span>
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
