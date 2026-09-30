import React, { useState, useRef } from 'react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div id="section-hero">
      <section id="hero" style={{ overflow: 'clip', position: 'relative' }}>
        {/* Desktop Layout */}
        <div
          className="desktop-hero-layout responsive-flex-column"
          style={{
            paddingTop: 35,
            paddingBottom: 60,
            maxWidth: 1260,
            margin: '0 auto',
            paddingLeft: 24,
            paddingRight: 24,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(20px, 2.6vw, 44px)',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Left Text Column */}
          <div
            className="hero-text"
            style={{
              flex: 1.25,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 'clamp(16px, 2vw, 28px)',
              zIndex: 10,
            }}
          >
            <div className="hero-headline-metrics-row">
              <div className="hero-title-col">
                <h1 className="hero-title-titanium">
                  <div className="hero-title-mask">
                    <span className="hero-title-line" style={{ opacity: 1, transform: 'none' }}>
                      Design.
                    </span>
                  </div>
                  <div className="hero-title-mask">
                    <span className="hero-title-line" style={{ opacity: 1, transform: 'none' }}>
                      Build.
                    </span>
                  </div>
                  <div className="hero-title-mask">
                    <span
                      className="hero-title-line hero-title-learn-animated"
                      style={{ opacity: 1, transform: 'none' }}
                    >
                      Learn.
                    </span>
                  </div>
                </h1>
              </div>

              <div className="hero-vertical-divider" aria-hidden="true" />

              {/* Metrics column */}
              <div className="hero-metrics-column">
                <a
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/projects');
                  }}
                  className="hero-metric-card"
                  style={{ opacity: 1, transform: 'none' }}
                >
                  <div className="hero-metric-icon-well icon-well-projects">
                    <i className="fas fa-microchip" />
                  </div>
                  <div className="hero-metric-content">
                    <span className="hero-metric-num">10+</span>
                    <span className="hero-metric-text">Projects Done</span>
                  </div>
                </a>

                <a
                  href="/blogs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/blogs');
                  }}
                  className="hero-metric-card"
                  style={{ opacity: 1, transform: 'none' }}
                >
                  <div className="hero-metric-icon-well icon-well-blogs">
                    <i className="fas fa-newspaper" />
                  </div>
                  <div className="hero-metric-content">
                    <span className="hero-metric-num">6</span>
                    <span className="hero-metric-text">Articles &amp; Blogs</span>
                  </div>
                </a>

                <a
                  href="/industrial"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/industrial');
                  }}
                  className="hero-metric-card"
                  style={{ opacity: 1, transform: 'none' }}
                >
                  <div className="hero-metric-icon-well icon-well-industrial">
                    <i className="fas fa-industry" />
                  </div>
                  <div className="hero-metric-content">
                    <span className="hero-metric-num">1</span>
                    <span className="hero-metric-text">Industrial Solutions</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="hero-pillars-row" style={{ opacity: 1, transform: 'none' }}>
              <div className="hero-pillar-card">
                <div className="hero-pillar-icon-well icon-pillar-embedded">
                  <i className="fas fa-microchip" aria-hidden="true" />
                </div>
                <span className="hero-pillar-text">Embedded System &amp; IoT</span>
              </div>
              <div className="hero-pillar-card">
                <div className="hero-pillar-icon-well icon-pillar-ai">
                  <i className="fas fa-network-wired" aria-hidden="true" />
                </div>
                <span className="hero-pillar-text">Industrial Edge AI</span>
              </div>
              <div className="hero-pillar-card">
                <div className="hero-pillar-icon-well icon-pillar-cad">
                  <i className="fas fa-cube" aria-hidden="true" />
                </div>
                <span className="hero-pillar-text">CAD Modeling</span>
              </div>
            </div>

            <p className="bio" style={{ opacity: 1 }}>
              I work where hardware and software meet — building practical projects, helping teams, and
              learning along the way.
            </p>

            <div className="hero-btns" style={{ opacity: 1, transform: 'none' }}>
              <a
                className="btn-primary"
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
              >
                <span>View Work</span>
                <span className="btn-icon-circle btn-icon-circle-primary" aria-hidden="true">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 11.5L11.5 4.5M6 4.5h5.5V10" />
                  </svg>
                </span>
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="btn-secondary"
              >
                <span>Contact</span>
                <span className="btn-icon-circle btn-icon-circle-secondary" aria-hidden="true">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 8h9M8.5 4.5L12.5 8l-4 3.5" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Visual 3D Tilt Card */}
          <div
            className="hero-visual"
            style={{
              flex: 1.05,
              display: 'flex',
              justifyContent: 'flex-end',
              perspective: 1200,
            }}
          >
            <div
              className="hero-card-container"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ position: 'relative' }}
            >
              <div
                className="tilt-card"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transition: 'transform 0.15s ease-out',
                }}
              >
                <div
                  className="float-card f-1"
                  style={{ opacity: 1, transform: 'none' }}
                >
                  <div className="icon-box">
                    <i className="fas fa-bolt" />
                  </div>
                  <span>AIOT</span>
                </div>

                <div
                  className="float-card f-2"
                  style={{ opacity: 1, transform: 'none' }}
                >
                  <div className="icon-box">
                    <i className="fas fa-brain" />
                  </div>
                  <span>Embedded &amp; IoT</span>
                </div>

                <div className="hero-photo-frame">
                  <video
                    src="https://pub-b9de077ba7264591a596e55d6ae57d94.r2.dev/kabya-new-optimized.mp4"
                    width="500"
                    height="500"
                    poster="/hero_video_poster.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                    disableRemotePlayback
                    className="profile-photo"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 40%',
                      opacity: 1,
                      position: 'relative',
                      zIndex: 1,
                      transform: 'translateZ(0)',
                      WebkitTransform: 'translateZ(0)',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      willChange: 'transform',
                    }}
                  >
                    <source
                      src="https://pub-b9de077ba7264591a596e55d6ae57d94.r2.dev/kabya-new-optimized.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hero Layout */}
        <div className="mobile-hero-layout">
          <div className="mobile-hero-bg" />
          <div className="mobile-hero-top">
            <div className="mobile-hero-avatar" style={{ position: 'relative' }}>
              <video
                src="https://pub-b9de077ba7264591a596e55d6ae57d94.r2.dev/kabya-new-optimized.mp4"
                width="300"
                height="380"
                poster="/hero_video_poster.webp"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 30%',
                  width: '100%',
                  height: '100%',
                  opacity: 1,
                  position: 'relative',
                  zIndex: 1,
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform',
                }}
              >
                <source
                  src="https://pub-b9de077ba7264591a596e55d6ae57d94.r2.dev/kabya-new-optimized.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="mobile-hero-divider" />
            <div className="mobile-hero-text-side">
              <div className="mobile-hero-title-group">
                <div style={{ overflow: 'visible' }}>
                  <div className="hero-title-line mobile-hero-title-line" style={{ opacity: 1, transform: 'none' }}>
                    Design.
                  </div>
                </div>
                <div style={{ overflow: 'visible' }}>
                  <div className="hero-title-line mobile-hero-title-line" style={{ opacity: 1, transform: 'none' }}>
                    Build.
                  </div>
                </div>
                <div style={{ overflow: 'visible' }}>
                  <div
                    className="hero-title-line mobile-hero-title-line hero-title-learn-animated"
                    style={{ opacity: 1, transform: 'none' }}
                  >
                    Learn.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-hero-bottom">
            <p className="bio">
              I work where hardware and software meet — building practical projects, helping teams, and
              learning along the way.
            </p>
            <div className="hero-btns">
              <a
                className="btn-primary"
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/projects');
                }}
              >
                <span>View Work</span>
                <span className="btn-icon-circle btn-icon-circle-primary" aria-hidden="true">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4.5 11.5L11.5 4.5M6 4.5h5.5V10" />
                  </svg>
                </span>
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="btn-secondary"
              >
                <span>Contact</span>
                <span className="btn-icon-circle btn-icon-circle-secondary" aria-hidden="true">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 8h9M8.5 4.5L12.5 8l-4 3.5" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Mobile Orbital Hub */}
            <div className="mobile-orbital-hub-container mt-6">
              <div className="mobile-orbital-hub grid grid-cols-2 gap-3 w-full">
                <a
                  className="orbital-card flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs"
                  href="/projects"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/projects');
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-microchip text-lg" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-850">Projects</div>
                    <div className="text-[11px] text-slate-500">10+ Builds</div>
                  </div>
                </a>

                <a
                  className="orbital-card flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs"
                  href="/blogs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/blogs');
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-newspaper text-lg" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-850">Blogs</div>
                    <div className="text-[11px] text-slate-500">6 Articles</div>
                  </div>
                </a>

                <a
                  className="orbital-card flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs"
                  href="/industrial"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/industrial');
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-industry text-lg" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-850">Industrial</div>
                    <div className="text-[11px] text-slate-500">Solutions</div>
                  </div>
                </a>

                <a
                  className="orbital-card flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs"
                  href="/3d-printing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/3d-printing');
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-cube text-lg" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-850">3D Lab</div>
                    <div className="text-[11px] text-slate-500">Rapid Prints</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
