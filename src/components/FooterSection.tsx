import React from 'react';

interface FooterSectionProps {
  onNavigate: (path: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate }) => {
  return (
    <div id="section-footer">
      <footer id="contact" style={{ display: 'flex', flexDirection: 'column', margin: 0, padding: 0 }}>
        {/* Split CTA Container */}
        <div
          className="footer-split-cta-container"
          style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '80px 24px' }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gap: 0,
              alignItems: 'stretch',
            }}
            className="cta-split-grid"
          >
            {/* Left Card: Contact */}
            <div
              className="cta-card-mobile cta-card-contact"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 40px',
                height: '100%',
              }}
            >
              <div
                className="lottie-mobile"
                style={{
                  width: '100%',
                  maxWidth: 320,
                  height: 240,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  overflow: 'hidden',
                }}
              >
                <div style={{ width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4f46e5',
                      fontSize: '2.5rem',
                      boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.3)',
                    }}
                  >
                    <i className="fas fa-paper-plane" />
                  </div>
                </div>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  fontWeight: 900,
                  color: '#1d1d1f',
                  margin: '0 0 12px',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.1,
                }}
              >
                Get in Touch
              </h2>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: '1rem',
                  maxWidth: 320,
                  lineHeight: 1.6,
                  margin: '0 0 32px',
                }}
              >
                Have a project in mind or just want to say hi? I&apos;d love to hear from you.
              </p>
              <div
                className="cta-btn-wrapper"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  width: '100%',
                  maxWidth: 280,
                  marginTop: 'auto',
                }}
              >
                <div tabIndex={0} style={{ width: '100%' }}>
                  <a
                    className="footer-cta-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      padding: '14px 36px',
                      borderRadius: 50,
                      background: 'linear-gradient(145deg, #6366f1, #4f46e5)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      width: '100%',
                      cursor: 'pointer',
                    }}
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/contact');
                    }}
                  >
                    <i className="fas fa-paper-plane" style={{ fontSize: '0.85rem' }} />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            {/* Center Divider */}
            <div
              className="cta-split-divider"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '0 8px' }}
            >
              <div
                className="cta-split-divider-line"
                style={{ width: 1, height: 80, background: 'linear-gradient(to bottom, transparent, #e5e7eb)' }}
              />
              <div
                className="cta-split-divider-badge"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#9ca3af',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}
              >
                OR
              </div>
              <div
                className="cta-split-divider-line"
                style={{ width: 1, height: 80, background: 'linear-gradient(to top, transparent, #e5e7eb)' }}
              />
            </div>

            {/* Right Card: 3D Printing */}
            <div
              className="cta-card-mobile cta-card-3d"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 40px',
                height: '100%',
              }}
            >
              <div
                className="lottie-mobile"
                style={{
                  width: '100%',
                  maxWidth: 320,
                  height: 240,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  overflow: 'hidden',
                }}
              >
                <div style={{ width: 140, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#d97706',
                      fontSize: '2.5rem',
                      boxShadow: '0 10px 25px -5px rgba(217, 119, 6, 0.3)',
                    }}
                  >
                    <i className="fas fa-cube" />
                  </div>
                </div>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  fontWeight: 900,
                  color: '#1d1d1f',
                  margin: '0 0 12px',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.1,
                }}
              >
                3D Printing
              </h2>
              <p
                style={{
                  color: '#6b7280',
                  fontSize: '1rem',
                  maxWidth: 320,
                  lineHeight: 1.6,
                  margin: '0 0 32px',
                }}
              >
                Fast &amp; affordable 3D prototyping in Dhaka with Bambu Lab A1 precision.
              </p>
              <div
                className="cta-btn-wrapper"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  width: '100%',
                  maxWidth: 280,
                  marginTop: 'auto',
                }}
              >
                <div tabIndex={0} style={{ width: '100%' }}>
                  <a
                    className="footer-cta-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      padding: '14px 36px',
                      borderRadius: 50,
                      background: 'linear-gradient(145deg, #10b981, #059669)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      width: '100%',
                      cursor: 'pointer',
                    }}
                    href="/3d-printing"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/3d-printing');
                    }}
                  >
                    <i className="fas fa-cube" style={{ fontSize: '0.85rem' }} />
                    Explore 3D Services
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Neomorphic Divider & Bottom row */}
          <div style={{ maxWidth: 1100, margin: '40px auto 0 auto' }}>
            <div className="footer-neomorphic-divider" style={{ width: '100%', margin: '0 auto 32px auto' }} />
            <div className="footer-bottom-row">
              <div className="footer-bottom-links">
                <a
                  className="footer-quick-link"
                  style={{ fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/');
                  }}
                >
                  Home
                </a>
                <a
                  className="footer-quick-link"
                  style={{ fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/projects');
                  }}
                >
                  Projects
                </a>
                <a
                  className="footer-quick-link"
                  style={{ fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}
                  href="/blogs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/blogs');
                  }}
                >
                  Blogs
                </a>
                <a
                  className="footer-quick-link"
                  style={{ fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact');
                  }}
                >
                  Contact
                </a>
              </div>

              <div className="footer-bottom-actions">
                <p style={{ color: '#64748b', fontSize: '0.84rem', fontWeight: 500, margin: 0 }}>
                  © 2026 Bapi Debnath. |{' '}
                  <a
                    style={{ color: 'inherit', textDecoration: 'none', borderBottom: '1px dotted #94a3b8' }}
                    href="/faq"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/faq');
                    }}
                  >
                    FAQ
                  </a>
                </p>
                <button
                  className="footer-scroll-top-btn"
                  title="Scroll to top"
                  aria-label="Scroll to top"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <i className="fas fa-arrow-up" />
                </button>
              </div>
            </div>

            <div
              style={{
                marginTop: 36,
                paddingTop: 20,
                borderTop: '1px solid rgba(160, 175, 200, 0.18)',
                textAlign: 'center',
              }}
            >
              <p style={{ color: '#94a3b8', fontSize: '0.72rem', lineHeight: 1.6, maxWidth: 900, margin: '0 auto' }}>
                Bapi Debnath is an embedded systems IoT engineer and maker at Daffodil International
                University, running an open 3D prototyping lab in Dhaka to support student robotics, hardware
                builds, and custom CAD fabrication.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
