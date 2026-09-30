import React from 'react';
import { BLOGS } from '../data/blogs';

interface BlogsSectionProps {
  onNavigate: (path: string) => void;
}

export const BlogsSection: React.FC<BlogsSectionProps> = ({ onNavigate }) => {
  const topBlogs = BLOGS.slice(0, 3);

  return (
    <div id="section-blogs">
      <section id="blogs">
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', padding: '0 20px' }}>
          <div className="section-header center-text text-center max-w-[1200px] mx-auto">
            <h2>Latest Articles</h2>
          </div>
          <div className="bento-grid">
            {topBlogs.map((blog) => (
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

            {/* 4th Card: View More Articles Dial Card */}
            <div className="project-card span-1 view-more-card">
              <a
                className="full-link view-more-link"
                href="/blogs"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/blogs');
                }}
              >
                <div className="view-more-stage">
                  <div className="deck-card-layer deck-card-back" />
                  <div className="deck-card-layer deck-card-mid" />
                  <div className="view-more-dial">
                    <span className="view-more-count">+{BLOGS.length - 3}</span>
                    <span className="view-more-count-label">MORE</span>
                  </div>
                </div>
                <div className="p-content">
                  <h3>More Articles</h3>
                  <p>Explore {BLOGS.length - 3}+ more published writeups, technical breakdowns, and guides.</p>
                  <div className="card-footer">
                    <span>Explore All Articles</span>
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
