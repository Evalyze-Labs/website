import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/publications';
import { Publication } from '../types';
import { Search, ExternalLink, BookOpen, Filter, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface PublicationsPageProps {
  onCite: (pub: Publication) => void;
}

export const PublicationsPage: React.FC<PublicationsPageProps> = ({ onCite }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('All');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    'agentshield-bench-v3': true,
    'agentshield-bench-v2': true,
  });

  const areas = ['All', 'Goal Integrity & Reliability', 'Memory & Persistence', 'AI Agent Security'];

  const filteredPubs = PUBLICATIONS.filter((pub) => {
    const matchesArea = selectedArea === 'All' || pub.researchArea === selectedArea;
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.doi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArea && matchesSearch;
  });

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="section-wrapper" style={{ minHeight: '80vh' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-kicker">ARCHIVAL PREPRINTS & TECHNICAL REPORTS</div>
          <h1>Publications Archive</h1>
          <p>
            Citable research papers, benchmark releases, and evaluation reports authored by Evalyze Labs researchers. 
            All entries are assigned persistent Digital Object Identifiers (DOIs) and hosted openly on the Zenodo repository.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '16px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-sm)',
          padding: '16px',
          marginBottom: '32px'
        }}>
          {/* Topic Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={12} /> AREA:
            </span>
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`btn btn-sm ${selectedArea === area ? 'btn-primary' : 'btn-outline'}`}
                style={{ fontSize: '0.78rem' }}
              >
                {area}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div style={{ position: 'relative', minWidth: '260px' }}>
            <Search size={14} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search title, keywords, DOI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: 'var(--bg-base)',
                border: '1px solid var(--border-hairline)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 12px 8px 34px',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
              }}
            />
          </div>
        </div>

        {/* Publications List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredPubs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px', color: 'var(--text-muted)' }}>
              No publications match the selected criteria.
            </div>
          ) : (
            filteredPubs.map((pub) => {
              const isExpanded = expandedAbstracts[pub.id] ?? false;

              return (
                <article key={pub.id} className="pub-item">
                  <div className="pub-meta">
                    <span className="badge badge-accent font-mono">{pub.type}</span>
                    <span className="pub-date">{pub.date}</span>
                    <span className="badge font-mono">{pub.researchArea}</span>
                    {pub.datasetAvailable && (
                      <span className="badge badge-cyan font-mono">
                        <CheckCircle2 size={10} />
                        Dataset Released ({pub.scenarioCount} scenarios)
                      </span>
                    )}
                  </div>

                  <h2 className="pub-title">
                    <a href={pub.zenodoUrl} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </a>
                  </h2>

                  <div className="pub-authors">
                    By <strong>{pub.authors.join(', ')}</strong> &bull; <em>Evalyze Labs</em>
                  </div>

                  {/* Abstract with toggle */}
                  <div className="pub-abstract">
                    {isExpanded ? pub.abstract : `${pub.abstract.slice(0, 320)}...`}
                    <button 
                      onClick={() => toggleAbstract(pub.id)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: 'var(--accent-primary)', 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.78rem', 
                        marginLeft: '8px', 
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px'
                      }}
                    >
                      {isExpanded ? <>Less <ChevronUp size={12} /></> : <>Read Full Abstract <ChevronDown size={12} /></>}
                    </button>
                  </div>

                  {/* Keywords strip */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '4px 0' }}>
                    {pub.keywords.map((kw) => (
                      <span key={kw} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.03)', padding: '2px 6px', borderRadius: '2px' }}>
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Actions & DOI */}
                  <div className="pub-actions">
                    <a 
                      href={pub.zenodoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="doi-link"
                    >
                      <ExternalLink size={12} />
                      DOI: {pub.doi}
                    </a>

                    <button 
                      onClick={() => onCite(pub)} 
                      className="btn btn-outline btn-sm"
                    >
                      <BookOpen size={13} />
                      Cite (BibTeX)
                    </button>

                    <a
                      href={pub.zenodoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Download Record
                    </a>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
};
