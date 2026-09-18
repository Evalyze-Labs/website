import React, { useState } from 'react';
import { Menu, X, ExternalLink, Shield } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Research', path: '/research' },
    { label: 'Benchmarks', path: '/benchmarks' },
    { label: 'Publications', path: '/publications' },
    { label: 'People', path: '/people' },
    { label: 'About', path: '/about' },
    { label: 'Updates', path: '/updates' },
    { label: 'Collaborate', path: '/collaborate' },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        {/* Brand Logo & Tag */}
        <a 
          href="/" 
          onClick={(e) => { e.preventDefault(); handleNav('/'); }} 
          className="nav-brand"
          aria-label="Evalyze Labs Home"
        >
          <div className="brand-symbol">
            <Shield size={16} color="#00E5A3" />
          </div>
          <div className="brand-text">
            <span className="brand-title">Evalyze Labs</span>
            <span className="brand-sub">Independent AI Research</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); handleNav(item.path); }}
                  className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: GitHub and Collaborate */}
        <div className="nav-actions">
          <a
            href="https://github.com/Evalyze-Labs/website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm nav-github"
            style={{ display: 'inline-flex' }}
            title="Evalyze Labs on GitHub"
          >
            GitHub
            <ExternalLink size={12} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-primary)', marginBottom: '8px' }}>
            &bull; EVALYZE LABS DIRECTORY
          </div>
        </div>
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            onClick={(e) => { e.preventDefault(); handleNav(item.path); }}
            className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
          >
            {item.label}
          </a>
        ))}
        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a
            href="https://github.com/Evalyze-Labs/website"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ justifyContent: 'center' }}
          >
            GitHub Repository
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </header>
  );
};
