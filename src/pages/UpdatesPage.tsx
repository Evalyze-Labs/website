import React from 'react';
import { RESEARCH_UPDATES } from '../data/updates';
import { ExternalLink } from 'lucide-react';

export const UpdatesPage: React.FC = () => {
  return (
    <main className="section-wrapper" style={{ minHeight: '80vh' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-kicker">ACTIVITY & ARTIFACT LOG</div>
          <h1>Research Updates</h1>
          <p>
            Chronological log of benchmark releases, open dataset archives, methodology preprints, and research milestones from Evalyze Labs.
          </p>
        </div>

        {/* Timeline List */}
        <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '2px solid var(--border-hairline)', maxWidth: '820px' }}>
          {RESEARCH_UPDATES.map((update) => (
            <div key={update.id} style={{ position: 'relative', marginBottom: '48px' }}>
              {/* Timeline marker */}
              <div style={{
                position: 'absolute',
                left: '-31px',
                top: '4px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-base)',
                border: '2px solid var(--accent-primary)',
              }}></div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="badge badge-accent font-mono">{update.type}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {update.date}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {update.title}
              </h3>

              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '12px' }}>
                {update.summary}
              </p>

              {update.doi && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <a
                    href={update.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doi-link"
                  >
                    <ExternalLink size={12} />
                    Zenodo Record (DOI: {update.doi})
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
