import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const searchPhrases = [
    'Search projects...',
    'Search articles & blogs...',
    'Search IoT solutions...',
    'Search 3D print lab...',
    'Search hardware specs...',
  ];

  // Typewriter effect in search dock pill
  useEffect(() => {
    const currentPhrase = searchPhrases[typewriterIndex];
    const typingSpeed = isDeleting ? 30 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTypewriterIndex((prev) => (prev + 1) % searchPhrases.length);
      } else {
        const nextText = isDeleting
          ? currentPhrase.substring(0, displayText.length - 1)
          : currentPhrase.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typewriterIndex]);

  // Handle keyboard shortcut ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <>
      <div
        id="mobile-overlay"
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        style={{
          display: mobileMenuOpen ? 'block' : 'none',
          opacity: mobileMenuOpen ? 1 : 0,
        }}
      />

      <header id="main-nav">
        <div className="nav-container">
          {/* Logo with video */}
          <a
            className="logo"
            style={{ display: 'flex', alignItems: 'center', padding: 0, background: '#ffffff', cursor: 'pointer' }}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            href="/"
          >
            <video
              src="https://pub-b9de077ba7264591a596e55d6ae57d94.r2.dev/kg_logo.mp4"
              poster="/kg_logo_poster.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              className="header-logo-video"
              style={{
                height: 52,
                width: 52,
                objectFit: 'contain',
                display: 'block',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                background: '#ffffff',
                transform: 'translateZ(0)',
                WebkitTransform: 'translateZ(0)',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            />
          </a>

          {/* Spotlight Search Dock Pill */}
          <div
            className="header-search-dock-pill"
            role="button"
            tabIndex={0}
            aria-label="Open Spotlight search"
            title="Search projects, blogs & solutions (⌘K)"
            onClick={onOpenSearch}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onOpenSearch();
            }}
          >
            <div className="header-search-icon-box" aria-hidden="true">
              <svg
                className="header-search-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="header-search-text-container">
              <span className="header-search-typewriter-text">{displayText}</span>
            </div>
            <span className="header-search-shortcut-badge" aria-hidden="true">
              <span>⌘</span>K
            </span>
          </div>

          {/* Navigation Drawer & Menu */}
          <nav
            id="nav-menu"
            className={`nav-menu-wrapper ${mobileMenuOpen ? 'active' : ''}`}
          >
            <div
              className="mobile-drawer-swipe-handle hide-on-desktop"
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div className="mobile-sidebar-header hide-on-desktop">
              <img src="/kabya.jpeg" alt="Bapi Debnath" className="mobile-avatar" />
              <div className="mobile-profile-info">
                <h4>Bapi Debnath</h4>
                <p>Embedded System IoT Engineer</p>
              </div>
            </div>

            <div className="mobile-menu-center">
              <ul className="menu">
                <li>
                  <a
                    className={currentPath === '/' ? 'active' : ''}
                    data-cursor="Home"
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/');
                    }}
                  >
                    <i className="mobile-nav-icon hide-on-desktop fas fa-home" />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    className={currentPath.startsWith('/blogs') ? 'active' : ''}
                    data-cursor="Blogs"
                    href="/blogs"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/blogs');
                    }}
                  >
                    <i className="mobile-nav-icon hide-on-desktop fas fa-pen-nib" />
                    <span>Blogs</span>
                  </a>
                </li>
                <li>
                  <a
                    className={currentPath.startsWith('/projects') ? 'active' : ''}
                    data-cursor="Projects"
                    href="/projects"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/projects');
                    }}
                  >
                    <i className="mobile-nav-icon hide-on-desktop fas fa-layer-group" />
                    <span>Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    className={currentPath.startsWith('/industrial') ? 'active' : ''}
                    data-cursor="Industrial"
                    href="/industrial"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/industrial');
                    }}
                  >
                    <i className="mobile-nav-icon hide-on-desktop fas fa-industry" />
                    <span>Industrial</span>
                  </a>
                </li>
                <li>
                  <a
                    className={currentPath.startsWith('/3d-printing') ? 'active' : ''}
                    data-cursor="3D Printing"
                    href="/3d-printing"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/3d-printing');
                    }}
                  >
                    <i className="mobile-nav-icon hide-on-desktop fas fa-cube" />
                    <span>3D Printing</span>
                  </a>
                </li>
                <li>
                  <a
                    className={`btn-nav ${currentPath === '/contact' ? 'active' : ''}`}
                    data-cursor="Contact"
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('/contact');
                    }}
                  >
                    <i className="mobile-nav-icon hide-on-desktop fas fa-envelope" />
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mobile-sidebar-footer hide-on-desktop">
              <a
                className="faq-button"
                href="/faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('/faq');
                }}
              >
                <i className="fas fa-info-circle" />
                <span>Help &amp; Information</span>
              </a>
            </div>
          </nav>

          {/* Hamburger button */}
          <button
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            id="hamburger-menu"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <div className="morph-hamburger">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </header>
    </>
  );
};
