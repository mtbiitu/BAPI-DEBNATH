import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SplashScreen } from './components/SplashScreen';
import { SpotlightSearch } from './components/SpotlightSearch';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogsPage } from './pages/BlogsPage';
import { IndustrialPage } from './pages/IndustrialPage';
import { PrintingPage } from './pages/PrintingPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { DetailArticlePage } from './pages/DetailArticlePage';
import { PROJECTS } from './data/projects';
import { BLOGS } from './data/blogs';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [searchOpen, setSearchOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync with browser back/forward history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation handler
  const handleNavigate = (path: string) => {
    if (path.startsWith('#')) {
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine current page to render
  const renderCurrentPage = () => {
    // 1. Projects Detail Route: /projects/:slug
    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '').replace(/\/$/, '');
      const project = PROJECTS.find((p) => p.slug === slug);
      if (project) {
        return (
          <DetailArticlePage
            item={project}
            type="project"
            onNavigate={handleNavigate}
          />
        );
      }
    }

    // 2. Blogs Detail Route: /blogs/:slug
    if (currentPath.startsWith('/blogs/')) {
      const slug = currentPath.replace('/blogs/', '').replace(/\/$/, '');
      const blog = BLOGS.find((b) => b.slug === slug);
      if (blog) {
        return (
          <DetailArticlePage
            item={blog}
            type="blog"
            onNavigate={handleNavigate}
          />
        );
      }
    }

    // 3. Main Routes
    switch (currentPath) {
      case '/projects':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case '/blogs':
        return <BlogsPage onNavigate={handleNavigate} />;
      case '/industrial':
      case '/industrial/smart-attendance-brilliantly-secure':
        return <IndustrialPage onNavigate={handleNavigate} />;
      case '/3d-printing':
        return <PrintingPage onNavigate={handleNavigate} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case '/faq':
        return <FaqPage onNavigate={handleNavigate} />;
      case '/':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#1d1d1f] font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Splash Screen */}
      <SplashScreen />

      {/* Main Header & Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Dynamic Page Content */}
      {renderCurrentPage()}

      {/* Spotlight Search Dialog */}
      <SpotlightSearch
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-indigo-600 text-white shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-white/20"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-sm" />
        </button>
      )}
    </div>
  );
}
