import React from 'react';
import { INDUSTRIAL_SOLUTIONS } from '../data/industrial';

interface IndustrialSectionProps {
  onNavigate: (path: string) => void;
}

export const IndustrialSection: React.FC<IndustrialSectionProps> = ({ onNavigate }) => {
  const item = INDUSTRIAL_SOLUTIONS[0];

  return (
    <div id="section-industrial" style={{ paddingBottom: 20 }}>
      <section id="industrial">
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 20px' }}>
          <div className="section-header center-text text-center max-w-[1200px] mx-auto">
            <h2>Industrial Solutions</h2>
          </div>
          <div className="bento-grid">
            <div
              className="project-card span-1"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <a
                className="full-link"
                href={`/industrial/${item.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`/industrial/${item.slug}`);
                }}
              >
                <div className="card-img-wrap">
                  <img
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="p-bg"
                    src={item.image}
                  />
                </div>
                <div className="p-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="card-footer">
                    <span>View Solution</span>
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
          </div>
        </div>
      </section>
    </div>
  );
};
