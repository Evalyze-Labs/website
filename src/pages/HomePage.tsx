import React from 'react';
import { ArrowRight, BookOpen, ExternalLink, Terminal } from 'lucide-react';
import { BENCHMARKS } from '../data/benchmarks';
import { PUBLICATIONS } from '../data/publications';
import { RESEARCH_AREAS } from '../data/researchAreas';
import { RESEARCHERS } from '../data/people';
import { DefensiveParadoxCard } from '../components/DefensiveParadoxCard';
import { KeyMismatchGapCard } from '../components/KeyMismatchGapCard';
import { OrcidIcon } from '../components/OrcidIcon';
import { Publication } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onCite: (pub: Publication) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onCite }) => {
  const researcher = RESEARCHERS[0];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge badge-accent">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'inline-block' }}></span>
                INDEPENDENT AI RESEARCH LABORATORY
              </span>
            </div>

            <h1 className="hero-title">
              Evalyze Labs
            </h1>

            <p className="hero-subtitle">
              Researching how intelligent systems behave, fail, and can be made more reliable.
            </p>

            <p className="hero-description">
              Evalyze Labs conducts empirical research focused on understanding, evaluating, and improving intelligent systems. 
              We develop rigorous evaluation methodologies, benchmarks, datasets, experiments, and open research artifacts to study 
              how AI agents behave under adversarial pressure, where their reasoning and memory break down, and how to engineer dependable defenses.
            </p>

            <div className="hero-actions">
              <button 
                onClick={() => onNavigate('/benchmarks')} 
                className="btn btn-primary"
              >
                <Terminal size={15} />
                Explore Benchmarks
                <ArrowRight size={15} />
              </button>
              <button 
                onClick={() => onNavigate('/publications')} 
                className="btn btn-secondary"
              >
                <BookOpen size={15} />
                View Publications
              </button>
              <button 
                onClick={() => onNavigate('/research')} 
                className="btn btn-outline"
              >
                Research Areas
              </button>
            </div>
          </div>

          {/* Metric Strip (Strictly empirical facts from published papers) */}
          <div className="metrics-strip">
            <div className="metric-item">
              <div className="metric-value">
                700<span className="accent">+</span>
              </div>
              <div className="metric-label">Controlled Attack Scenarios</div>
              <div className="metric-sub">Across AgentShield Bench v1, v2 & v3</div>
            </div>

            <div className="metric-item">
              <div className="metric-value">
                8<span className="accent">D</span>
              </div>
              <div className="metric-label">Memory Threat Dimensions</div>
              <div className="metric-sub">From False Memory to Trust Exploits</div>
            </div>

            <div className="metric-item">
              <div className="metric-value">
                5<span className="accent">x</span>
              </div>
              <div className="metric-label">Goal Hijacking Categories</div>
              <div className="metric-sub">Drift, Tool Poisoning, Delegation</div>
            </div>

            <div className="metric-item">
              <div className="metric-value">
                100<span className="accent">%</span>
              </div>
              <div className="metric-label">Open Science & Zenodo DOIs</div>
              <div className="metric-sub">Reproducible Artifacts & Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED RESEARCH FINDINGS (Defensive Overhead Paradox & Key Mismatch Gap) */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">FEATURED RESEARCH FINDING</div>
            <h2>Empirical Phenomena Observed in Autonomous Agents</h2>
            <p>
              Controlled evaluations on frontier models reveal that security in autonomous systems cannot be captured by naive metrics 
              or single-turn benchmarks. Below are two key experimental insights documented in our benchmark series.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Defensive Overhead Paradox */}
            <DefensiveParadoxCard />

            {/* Key Mismatch Gap */}
            <KeyMismatchGapCard />
          </div>
        </div>
      </section>

      {/* 3. BENCHMARK SUITE: AGENTSHIELD BENCH */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">EVALUATION INFRASTRUCTURE</div>
            <h2>AgentShield Bench Series</h2>
            <p>
              A benchmark series for evaluating the security, persistent state resilience, and goal integrity of autonomous LLM agents.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {BENCHMARKS.map((bench) => (
              <div key={bench.id} className={`benchmark-card ${bench.version === 'v3' ? 'featured' : ''}`}>
                <div className="benchmark-meta-strip">
                  <span className="badge badge-accent font-mono">{bench.version.toUpperCase()}</span>
                  <span className="scenario-count-pill">{bench.scenarioCount} Scenarios</span>
                  <span className="badge font-mono">{bench.status}</span>
                </div>

                <h3 className="benchmark-title">{bench.label}</h3>
                <div className="benchmark-focus">{bench.focus}</div>
                <p className="benchmark-overview">{bench.subtitle}</p>

                <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '16px', marginTop: '16px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    KEY METRICS EVALUATED:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {bench.metrics.map(m => (
                      <span key={m.acronym} className="badge" title={m.name}>
                        <strong style={{ color: 'var(--text-primary)' }}>{m.acronym}</strong>: {m.name}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                    <a 
                      href={bench.zenodoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="doi-link"
                    >
                      <ExternalLink size={12} />
                      DOI: {bench.doi}
                    </a>
                    <button 
                      onClick={() => onNavigate('/benchmarks')} 
                      className="btn btn-outline btn-sm"
                    >
                      Inspect Spec
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESEARCH AREAS */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">AREAS OF INQUIRY</div>
            <h2>Active Research Areas</h2>
            <p>
              Evalyze Labs organizes its inquiry around fundamental failure modes and defensive capabilities in autonomous systems. 
              These represent research areas rather than speculative product commitments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            {RESEARCH_AREAS.map((area) => (
              <div key={area.id} className="card card-interactive" onClick={() => onNavigate('/research')} style={{ cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span className="badge badge-cyan font-mono">Pillar</span>
                  <h3 style={{ fontSize: '1.2rem' }}>{area.title}</h3>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                  {area.shortDesc}
                </p>
                <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {area.questions.length} core empirical questions
                  </span>
                  <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LATEST PUBLICATIONS PREVIEW */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="section-kicker">PREPRINTS & TECHNICAL REPORTS</div>
              <h2>Scientific Publications</h2>
              <p>
                All research papers and benchmark specifications are archived with citable Zenodo DOIs and open datasets.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('/publications')} 
              className="btn btn-outline"
            >
              View Full Archive ({PUBLICATIONS.length})
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {PUBLICATIONS.slice(0, 3).map((pub) => (
              <article key={pub.id} className="pub-item">
                <div className="pub-meta">
                  <span className="badge badge-accent font-mono">{pub.type}</span>
                  <span className="pub-date">{pub.date}</span>
                  <span className="badge font-mono">{pub.researchArea}</span>
                </div>
                <h3 className="pub-title">
                  <a href={pub.zenodoUrl} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                </h3>
                <div className="pub-authors">
                  By {pub.authors.join(', ')} &bull; <em>Evalyze Labs</em>
                </div>
                <p className="pub-abstract">
                  {pub.abstract.length > 280 ? `${pub.abstract.slice(0, 280)}...` : pub.abstract}
                </p>
                <div className="pub-actions">
                  <a href={pub.zenodoUrl} target="_blank" rel="noopener noreferrer" className="doi-link">
                    <ExternalLink size={12} />
                    DOI: {pub.doi}
                  </a>
                  <button onClick={() => onCite(pub)} className="btn btn-outline btn-sm">
                    Cite (BibTeX)
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESEARCH PHILOSOPHY */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">LAB PRINCIPLES</div>
            <h2>Empirical Rigor & Open Science</h2>
            <p>
              Evalyze Labs operates on foundational commitments to experimental integrity, reproducible artifact release, and restraint.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div className="card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '8px' }}>
                01 / EMPIRICAL GROUNDING
              </div>
              <h4 style={{ marginBottom: '8px' }}>Reality Over Hypotheticals</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                We test actual agent execution traces in realistic environments. Evaluation must measure multi-step tool calls, state persistence, and goal stability—not speculative hazards.
              </p>
            </div>

            <div className="card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '8px' }}>
                02 / NO ROADMAP COMMITMENTS
              </div>
              <h4 style={{ marginBottom: '8px' }}>Honest Uncertainty</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Research directions pivot as findings emerge. We do not publish speculative project roadmaps or fabricate future milestones; we report what has been verified.
              </p>
            </div>

            <div className="card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '8px' }}>
                03 / REPRODUCIBLE ARTIFACTS
              </div>
              <h4 style={{ marginBottom: '8px' }}>Open Scientific Record</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Every benchmark release includes the raw scenario configs, evaluation harnesses, and Zenodo DOI records necessary for external validation and independent replication.
              </p>
            </div>

            <div className="card">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-primary)', marginBottom: '8px' }}>
                04 / ANTI-HYPE POSTURE
              </div>
              <h4 style={{ marginBottom: '8px' }}>Restrained Analysis</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                We avoid exaggerated claims. Findings such as the Defensive Overhead Paradox and Key Mismatch Gap are published as bounded experimental observations with precise context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESEARCHER HIGHLIGHT & ORCID */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">RESEARCH TEAM</div>
            <h2>People Behind the Research</h2>
            <p>
              Evalyze Labs is driven by researchers focused on empirical measurement, agent security, and evaluation infrastructure.
            </p>
          </div>

          <div className="researcher-card">
            <div className="researcher-header">
              <div>
                <h3 className="researcher-name">{researcher.name}</h3>
                <div className="researcher-role">{researcher.role}</div>
                <div className="researcher-affiliation">{researcher.affiliation}</div>
              </div>

              {/* Verified ORCID Badge with official logo */}
              <a 
                href={researcher.orcidUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="orcid-badge"
                title="Verify ORCID Profile"
              >
                <OrcidIcon size={18} />
                <span>ORCID: {researcher.orcid}</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {researcher.bio}
            </p>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                Research Interests:
              </div>
              <div className="interests-tags">
                {researcher.researchInterests.map((interest) => (
                  <span key={interest} className="interest-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Lead Author & Developer of AgentShield Bench Series (v1, v2, v3)
              </span>
              <button onClick={() => onNavigate('/people')} className="btn btn-outline btn-sm">
                View Profile & Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO COLLABORATE */}
      <section className="section-wrapper">
        <div className="container">
          <div className="card" style={{ padding: 'var(--space-10)', background: 'linear-gradient(180deg, #0F1318 0%, #090B0E 100%)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ maxWidth: '640px' }}>
              <div className="section-kicker">ENGAGEMENT</div>
              <h2 style={{ marginBottom: '12px' }}>Collaborate with Evalyze Labs</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.7 }}>
                We welcome independent researchers, university labs, and ML security teams interested in 
                reproducing benchmark runs, contributing adversarial evaluation scenarios, or examining memory and goal failure modes.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={() => onNavigate('/collaborate')} className="btn btn-primary">
                  Ways to Collaborate
                  <ArrowRight size={14} />
                </button>
                <a href="https://github.com/Evalyze-Labs/website" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Inspect Code on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
