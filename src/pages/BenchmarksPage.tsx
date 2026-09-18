import React, { useState } from 'react';
import { BENCHMARKS } from '../data/benchmarks';
import { PUBLICATIONS } from '../data/publications';
import { DefensiveParadoxCard } from '../components/DefensiveParadoxCard';
import { KeyMismatchGapCard } from '../components/KeyMismatchGapCard';
import { ExternalLink, Terminal, Shield, BookOpen, CheckCircle2 } from 'lucide-react';
import { Publication } from '../types';

interface BenchmarksPageProps {
  onCite: (pub: Publication) => void;
}

export const BenchmarksPage: React.FC<BenchmarksPageProps> = ({ onCite }) => {
  const [activeVersion, setActiveVersion] = useState<'v3' | 'v2' | 'v1'>('v3');
  const currentBench = BENCHMARKS.find(b => b.version === activeVersion) || BENCHMARKS[0];
  const relatedPub = PUBLICATIONS.find(p => p.id === `agentshield-bench-${activeVersion}`);

  return (
    <main className="section-wrapper" style={{ minHeight: '80vh' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-kicker">EVALUATION INFRASTRUCTURE</div>
          <h1>AgentShield Bench Series</h1>
          <p>
            An open benchmark suite designed to evaluate the empirical security, persistent state resilience, 
            and goal integrity of autonomous LLM agents in multi-step execution environments.
          </p>
        </div>

        {/* Benchmark Series Metric Summary Bar */}
        <div className="metrics-strip" style={{ marginTop: 0, marginBottom: '40px' }}>
          <div className="metric-item">
            <div className="metric-value">700</div>
            <div className="metric-label">Total Curated Scenarios</div>
            <div className="metric-sub">Across 3 releases (v1: 130, v2: 320, v3: 250)</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">3 <span className="accent">Releases</span></div>
            <div className="metric-label">Benchmark Installments</div>
            <div className="metric-sub">Prompt-level &bull; Memory-level &bull; Goal-level</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">11 <span className="accent">Metrics</span></div>
            <div className="metric-label">Formal Quantitative Scores</div>
            <div className="metric-sub">GIS, GID, ASR, TCR, MIS, MSS, ASSS</div>
          </div>
          <div className="metric-item">
            <div className="metric-value">100<span className="accent">%</span></div>
            <div className="metric-label">Zenodo Open Archives</div>
            <div className="metric-sub">Reproducible datasets & evaluation harnesses</div>
          </div>
        </div>

        {/* Version Switcher Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '16px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            {BENCHMARKS.map((bench) => (
              <button
                key={bench.id}
                onClick={() => setActiveVersion(bench.version)}
                className={`btn btn-sm ${activeVersion === bench.version ? 'btn-primary' : 'btn-outline'}`}
              >
                <Terminal size={14} />
                {bench.label}
                <span style={{ opacity: 0.75, fontSize: '0.72rem' }}>({bench.scenarioCount} scenarios)</span>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Selected: <strong style={{ color: 'var(--text-primary)' }}>{currentBench.label}</strong>
            </span>
          </div>
        </div>

        {/* Active Benchmark Deep Inspection Artifact */}
        <div className="benchmark-card featured" style={{ marginBottom: '48px' }}>
          <div className="benchmark-meta-strip">
            <span className="badge badge-accent font-mono">{currentBench.version.toUpperCase()} SPECIFICATION</span>
            <span className="scenario-count-pill">{currentBench.scenarioCount} Controlled Scenarios</span>
            <span className="badge font-mono">{currentBench.status}</span>
            <span className="badge font-mono">{currentBench.date}</span>
          </div>

          <h2 style={{ fontSize: '1.9rem', marginBottom: '8px' }}>
            {currentBench.title}
          </h2>

          <div className="benchmark-focus" style={{ fontSize: '0.95rem' }}>
            {currentBench.focus}
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
            {currentBench.overview}
          </p>

          {/* Evaluated Models & Defense Mechanisms */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', background: 'rgba(0, 0, 0, 0.4)', padding: '16px', borderRadius: '4px', border: '1px solid var(--border-hairline)', marginBottom: '24px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Evaluated Models / Architectures:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {currentBench.modelsEvaluated.map((m) => (
                  <span key={m} className="badge badge-cyan font-mono">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {currentBench.defensesEvaluated && (
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  Tested Defensive Interventions:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {currentBench.defensesEvaluated.map((d) => (
                    <span key={d} className="badge badge-amber font-mono">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Threat Taxonomy Explorer */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Shield size={16} color="var(--accent-primary)" />
              <h3 style={{ fontSize: '1.15rem' }}>
                Threat Taxonomy Breakdown ({currentBench.threatCategories.length} Categories)
              </h3>
            </div>

            <div className="taxonomy-grid">
              {currentBench.threatCategories.map((cat) => (
                <div key={cat.name} className="taxonomy-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                    <h4>{cat.name}</h4>
                    {cat.scenariosCount && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-primary)' }}>
                        {cat.scenariosCount} scenarios
                      </span>
                    )}
                  </div>
                  <p>{cat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Metric Formulations */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Terminal size={16} color="var(--accent-cyan)" />
              <h3 style={{ fontSize: '1.15rem' }}>
                Quantitative Evaluation Metrics
              </h3>
            </div>

            <div className="metrics-def-grid">
              {currentBench.metrics.map((metric) => (
                <div key={metric.acronym} className="metric-def-item">
                  <div className="metric-def-acronym">{metric.acronym}</div>
                  <div className="metric-def-name">{metric.name}</div>
                  {metric.formula && (
                    <div className="metric-def-formula">{metric.formula}</div>
                  )}
                  <div className="metric-def-desc">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Release Artifact Contents */}
          <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '20px', marginBottom: '24px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
              Zenodo Release Artifact Bundle Includes:
            </div>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px' }}>
              {currentBench.artifactIncludes.map((item, idx) => (
                <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={13} color="var(--accent-primary)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions: Direct Zenodo DOI Link & Cite BibTeX */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid var(--border-hairline)', paddingTop: '20px' }}>
            <a 
              href={currentBench.zenodoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="doi-link"
              style={{ padding: '8px 14px' }}
            >
              <ExternalLink size={14} />
              Open Zenodo Record & Dataset (DOI: {currentBench.doi})
            </a>

            {relatedPub && (
              <button 
                onClick={() => onCite(relatedPub)} 
                className="btn btn-outline btn-sm"
              >
                <BookOpen size={14} />
                Cite This Benchmark (BibTeX)
              </button>
            )}
          </div>
        </div>

        {/* Highlight the Specific Empirical Finding for the Active Benchmark */}
        <div style={{ marginBottom: '64px' }}>
          {activeVersion === 'v3' && (
            <div>
              <div className="section-header" style={{ marginBottom: '16px' }}>
                <div className="section-kicker">FEATURED FINDING &bull; BENCHMARK v3</div>
                <h2>Documented Research Observation</h2>
              </div>
              <DefensiveParadoxCard />
            </div>
          )}

          {activeVersion === 'v2' && (
            <div>
              <div className="section-header" style={{ marginBottom: '16px' }}>
                <div className="section-kicker">FEATURED FINDING &bull; BENCHMARK v2</div>
                <h2>Documented Research Discovery</h2>
              </div>
              <KeyMismatchGapCard />
            </div>
          )}

          {activeVersion === 'v1' && (
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-cyan font-mono">OBSERVED FINDING &bull; BENCHMARK v1</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Workflow Execution Fragility</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                In AgentShield Bench v1 (130 scenarios evaluating OpenAI and Gemini LLM agents), models that reliably resisted single-turn direct prompt injection frequently yielded when adversarial instructions were distributed across multi-turn tool calling plans, intermediate API payload returns, or RAG retrieved documents.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
