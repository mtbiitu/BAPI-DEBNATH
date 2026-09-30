import React from 'react';
import { PROJECTS } from '../data/projects';

interface ProjectsSectionProps {
  onNavigate: (path: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onNavigate }) => {
  const topProjects = PROJECTS.slice(0, 3);
  const remainingCount = PROJECTS.length - 3;

  return (
    <div id="section-projects">
      <section id="projects">
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 20px' }}>
          <div className="section-header center-text text-center max-w-[1200px] mx-auto">
            <h2>Recent Projects</h2>
          </div>
          <div className="bento-grid">
            {topProjects.map((project) => (
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

            {/* 4th Card: View More Projects Dial Card */}
            <div className="project-card span-1 view-more-card">
              <a
                className="full-link view-more-link"
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
              >
                <div className="view-more-stage">
                  <div className="deck-card-layer deck-card-back" />
                  <div className="deck-card-layer deck-card-mid" />
                  <div className="view-more-dial">
                    <span className="view-more-count">+{remainingCount}</span>
                    <span className="view-more-count-label">MORE</span>
                  </div>
                </div>
                <div className="p-content">
                  <h3>More Projects</h3>
                  <p>Explore {remainingCount}+ more robotics builds, embedded systems, and software platforms.</p>
                  <div className="card-footer">
                    <span>Explore All Projects</span>
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
