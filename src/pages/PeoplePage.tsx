import React from 'react';
import { RESEARCHERS } from '../data/people';
import { PUBLICATIONS } from '../data/publications';
import { OrcidIcon } from '../components/OrcidIcon';
import { ExternalLink } from 'lucide-react';

export const PeoplePage: React.FC = () => {
  return (
    <main className="section-wrapper" style={{ minHeight: '80vh' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-kicker">RESEARCHERS & CONTRIBUTORS</div>
          <h1>People</h1>
          <p>
            The researchers and scientists behind Evalyze Labs’ empirical evaluations, benchmarks, and published methodologies.
          </p>
        </div>

        {/* Researchers Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {RESEARCHERS.map((researcher) => (
            <div key={researcher.name} className="researcher-card" style={{ maxWidth: '960px' }}>
              <div className="researcher-header">
                <div>
                  <h2 className="researcher-name">{researcher.name}</h2>
                  <div className="researcher-role">{researcher.role}</div>
                  <div className="researcher-affiliation">{researcher.affiliation}</div>
                </div>

                {/* Prominent Official ORCID Badge */}
                <a
                  href={researcher.orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orcid-badge"
                  style={{ padding: '8px 16px', fontSize: '0.88rem' }}
                  title="Verify on ORCID Registry"
                >
                  <OrcidIcon size={20} />
                  <span>ORCID: {researcher.orcid}</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                {researcher.bio}
              </div>

              {/* Research Interests */}
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Areas of Investigation:
                </div>
                <div className="interests-tags">
                  {researcher.researchInterests.map((interest) => (
                    <span key={interest} className="interest-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Selected Publications by this Researcher */}
              <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '20px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase' }}>
                  Principal Publications & Benchmarks:
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {PUBLICATIONS.map((pub) => (
                    <li key={pub.id} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        <a href={pub.zenodoUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                          {pub.title}
                        </a>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginLeft: '8px' }}>
                          ({pub.date})
                        </span>
                      </div>
                      <a href={pub.zenodoUrl} target="_blank" rel="noopener noreferrer" className="doi-link" style={{ fontSize: '0.72rem' }}>
                        DOI: {pub.doi}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Extensible Future Collaborator Callout */}
        <div style={{ 
          marginTop: '64px', 
          padding: '24px', 
          background: 'var(--bg-surface)', 
          border: '1px dashed var(--border-subtle)', 
          borderRadius: 'var(--radius-sm)',
          maxWidth: '960px'
        }}>
          <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Academic & Independent Research Affiliations
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Evalyze Labs collaborates with independent researchers and academic groups on specific evaluation artifacts and experimental campaigns. 
            New contributors and co-authors are credited directly on their respective Zenodo publications and datasets.
          </p>
        </div>
      </div>
    </main>
  );
};
