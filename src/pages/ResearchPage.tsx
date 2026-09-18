import React, { useState } from 'react';
import { RESEARCH_AREAS } from '../data/researchAreas';
import { ArrowRight, HelpCircle, ShieldAlert, Cpu } from 'lucide-react';
import { ResearchAreaId } from '../types';

interface ResearchPageProps {
  onNavigate: (path: string) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ onNavigate }) => {
  const [activeAreaId, setActiveAreaId] = useState<ResearchAreaId>('agent-security');
  const activeArea = RESEARCH_AREAS.find(a => a.id === activeAreaId) || RESEARCH_AREAS[0];

  return (
    <main className="section-wrapper" style={{ minHeight: '80vh' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <div className="section-kicker">AREAS OF INVESTIGATION</div>
          <h1>Research at Evalyze Labs</h1>
          <p>
            Our work is organized around fundamental problem domains in intelligent systems.
            We do not publish speculative future roadmaps or uncommitted milestones; instead,
            we pursue foundational empirical questions through open benchmark instruments and rigorous experimentation.
          </p>
        </div>

        {/* Interactive Pillar Selector Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border-hairline)',
          marginBottom: '32px'
        }}>
          {RESEARCH_AREAS.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveAreaId(area.id)}
              className={`btn btn-sm ${activeAreaId === area.id ? 'btn-primary' : 'btn-outline'}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              {area.title}
            </button>
          ))}
        </div>

        {/* Active Area Detailed Inspection View */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-hairline)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-8)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="badge badge-accent font-mono">ACTIVE PILLAR</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              ID: {activeArea.id}
            </span>
          </div>

          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
            {activeArea.title}
          </h2>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', lineHeight: 1.7, maxWidth: '820px', marginBottom: '24px' }}>
            {activeArea.fullDesc}
          </p>

          {/* Three-column deep-dive: Questions, Threat Surface, Empirical Methods */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' }}>
            {/* Core Questions */}
            <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-hairline)', padding: '20px', borderRadius: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent-cyan)' }}>
                <HelpCircle size={16} />
                <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Core Empirical Questions
                </h4>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activeArea.questions.map((q, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'flex', gap: '8px' }}>
                    <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>Q{idx + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Threat Surface Vectors */}
            <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-hairline)', padding: '20px', borderRadius: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent-rose)' }}>
                <ShieldAlert size={16} />
                <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Threat Surface Taxonomy
                </h4>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeArea.threatSurface.map((t, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-rose)', borderRadius: '50%' }}></span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Empirical Methods */}
            <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-hairline)', padding: '20px', borderRadius: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent-primary)' }}>
                <Cpu size={16} />
                <h4 style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Empirical Methodology
                </h4>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {activeArea.empiricalMethods.map((m, idx) => (
                  <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%' }}></span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Benchmark Series Link */}
          <div style={{
            marginTop: '32px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-hairline)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Empirical implementations published in the <strong>AgentShield Bench Series</strong>.
            </div>
            <button
              onClick={() => onNavigate('/benchmarks')}
              className="btn btn-secondary btn-sm"
            >
              View Related Benchmarks
              <ArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* All Research Pillars Overview Grid */}
        <div style={{ marginTop: '64px' }}>
          <div className="section-header" style={{ marginBottom: '24px' }}>
            <div className="section-kicker">SUMMARY OF PILLARS</div>
            <h3>The Five Pillars at a Glance</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {RESEARCH_AREAS.map((area) => (
              <div
                key={area.id}
                className={`card ${activeAreaId === area.id ? 'card-interactive' : ''}`}
                style={{ borderColor: activeAreaId === area.id ? 'var(--accent-primary)' : undefined, cursor: 'pointer' }}
                onClick={() => {
                  setActiveAreaId(area.id);
                  window.scrollTo({ top: 220, behavior: 'smooth' });
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-primary)', marginBottom: '6px' }}>
                  {area.id.toUpperCase()}
                </div>
                <h4 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{area.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{area.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
