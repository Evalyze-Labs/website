import React, { useState } from 'react';
import { ExternalLink, GitPullRequest, Check, Copy } from 'lucide-react';

export const CollaboratePage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="section-wrapper" style={{ minHeight: '80vh' }}>
      <div className="container-reading">
        {/* Header */}
        <div className="section-header">
          <div className="section-kicker">COMMUNITY & REPRODUCIBILITY</div>
          <h1>Collaborate with Evalyze Labs</h1>
          <p>
            We welcome researchers, graduate students, ML engineers, and safety teams interested in empirical evaluation of intelligent systems.
          </p>
        </div>

        {/* Categories of Collaboration */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
          {/* 1. Benchmark Replication & Model Evaluation */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-accent font-mono">01</span>
              <h3 style={{ fontSize: '1.25rem' }}>Benchmark Replication & Evaluation Runs</h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              If you have access to novel frontier models, specialized defense frameworks, or fine-tuned agent architectures, 
              we encourage you to run the AgentShield Bench suite (v1, v2, v3) and share reproducible evaluation logs. 
              Independent evaluation across diverse execution substrates strengthens our collective understanding of agent failure modes.
            </p>
          </div>

          {/* 2. Adversarial Scenario Contributions */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-cyan font-mono">02</span>
              <h3 style={{ fontSize: '1.25rem' }}>Adversarial Scenario & Dataset Contributions</h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              We continually curate realistic attack workflows, memory poisoning scenarios, and goal drift triggers. 
              If you discover a new agent attack surface or subtle failure pattern, you can contribute structured scenario definitions 
              for inclusion in future peer-reviewed benchmark revisions.
            </p>
          </div>

          {/* 3. Joint Academic Research */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-amber font-mono">03</span>
              <h3 style={{ fontSize: '1.25rem' }}>Academic & Student Research Collaborations</h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              We collaborate with professors, graduate students, and independent research fellows on joint papers, formal verification studies, 
              and threat modeling. We provide open datasets, evaluation harnesses, and co-authorship on shared findings.
            </p>
          </div>

          {/* 4. Open-Source Tooling */}
          <div className="card" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge font-mono">04</span>
              <h3 style={{ fontSize: '1.25rem' }}>Open-Source Code & Tooling</h3>
            </div>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              All code for evaluation harnesses, scoring calculators, and telemetry loggers is hosted openly. 
              Contributions to improve runner efficiency, support additional model APIs, or standardize trace formats are welcomed on GitHub.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a
                href="https://github.com/Evalyze-Labs/website"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <GitPullRequest size={14} />
                Evalyze Labs GitHub
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact & Inquiries Card */}
        <div style={{ 
          background: 'var(--bg-surface)', 
          border: '1px solid var(--border-subtle)', 
          borderRadius: 'var(--radius-sm)', 
          padding: '32px' 
        }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>
            Initiate a Research Dialogue
          </h3>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
            For academic inquiries, benchmark replication coordination, or research discussions, reach out directly to the research team:
          </p>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            background: 'var(--bg-base)', 
            border: '1px solid var(--border-hairline)', 
            padding: '12px 16px', 
            borderRadius: 'var(--radius-xs)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            color: 'var(--accent-primary)',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span>research@evalyze.org</span>
            <button
              onClick={() => handleCopyEmail('research@evalyze.org')}
              className="btn btn-outline btn-sm"
              style={{ padding: '4px 10px', fontSize: '0.75rem' }}
            >
              {copiedEmail ? (
                <>
                  <Check size={12} />
                  Copied Address
                </>
              ) : (
                <>
                  <Copy size={12} />
                  Copy Email
                </>
              )}
            </button>
          </div>

          <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            We review inquiries from researchers, students, and engineers. We do not respond to vendor solicitations or sales pitches.
          </div>
        </div>
      </div>
    </main>
  );
};
