import React from 'react';
import { ExternalLink } from 'lucide-react';
import { OrcidIcon } from './OrcidIcon';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const logoSrc = 'https://github.com/user-attachments/assets/92e368f1-c914-4769-93ec-ddc3294d59d4';

  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Purpose */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <img
                src={logoSrc}
                alt="Evalyze Labs"
                className="footer-logo-image"
              />
            </div>
            <p style={{ color: 'var(--text-muted)' }}>
              Independent AI research lab focused on understanding, evaluating, and improving intelligent systems. 
              Developing empirical methodologies, benchmarks, and open research artifacts.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a 
                href="https://orcid.org/0009-0002-2510-2778" 
                target="_blank" 
                rel="noopener noreferrer"
                className="orcid-badge"
                style={{ display: 'inline-flex' }}
              >
                <OrcidIcon size={14} />
                <span>ORCID: 0009-0002-2510-2778</span>
              </a>
            </div>
          </div>

          {/* Research Pillars */}
          <div className="footer-col">
            <h4>Research Pillars</h4>
            <ul>
              <li><a href="/research" onClick={(e) => handleNav('/research', e)}>AI Agent Security</a></li>
              <li><a href="/research" onClick={(e) => handleNav('/research', e)}>AI Evaluation</a></li>
              <li><a href="/research" onClick={(e) => handleNav('/research', e)}>Memory & Persistence</a></li>
              <li><a href="/research" onClick={(e) => handleNav('/research', e)}>Goal Integrity & Reliability</a></li>
              <li><a href="/research" onClick={(e) => handleNav('/research', e)}>Trustworthy AI</a></li>
            </ul>
          </div>

          {/* Benchmarks & Artifacts */}
          <div className="footer-col">
            <h4>Evaluation Suite</h4>
            <ul>
              <li><a href="/benchmarks" onClick={(e) => handleNav('/benchmarks', e)}>AgentShield Bench v3 (250 Scenarios)</a></li>
              <li><a href="/benchmarks" onClick={(e) => handleNav('/benchmarks', e)}>AgentShield Bench v2 (320 Scenarios)</a></li>
              <li><a href="/benchmarks" onClick={(e) => handleNav('/benchmarks', e)}>AgentShield Bench v1 (130 Scenarios)</a></li>
              <li><a href="/benchmarks" onClick={(e) => handleNav('/benchmarks', e)}>The Defensive Overhead Paradox</a></li>
              <li><a href="/benchmarks" onClick={(e) => handleNav('/benchmarks', e)}>The Key Mismatch Gap</a></li>
            </ul>
          </div>

          {/* Open Science & Archives */}
          <div className="footer-col">
            <h4>Open Science</h4>
            <ul>
              <li><a href="/publications" onClick={(e) => handleNav('/publications', e)}>Publications Archive</a></li>
              <li><a href="https://doi.org/10.5281/zenodo.20834892" target="_blank" rel="noopener noreferrer">Zenodo DOI Records <ExternalLink size={11} style={{ display: 'inline' }} /></a></li>
              <li><a href="https://github.com/Evalyze-Labs/website" target="_blank" rel="noopener noreferrer">GitHub Repository <ExternalLink size={11} style={{ display: 'inline' }} /></a></li>
              <li><a href="/people" onClick={(e) => handleNav('/people', e)}>Researchers & Team</a></li>
              <li><a href="/collaborate" onClick={(e) => handleNav('/collaborate', e)}>Call to Collaborate</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Evalyze Labs. Open research artifacts published under Open Access (CC-BY 4.0 / MIT).
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Empirical AI Safety</span>
            <span>&bull;</span>
            <span>Reproducible Benchmarking</span>
            <span>&bull;</span>
            <span>No Speculative Commitments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
