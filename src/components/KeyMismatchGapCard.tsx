import React from 'react';
import { Info, Database } from 'lucide-react';

export const KeyMismatchGapCard: React.FC = () => {
  return (
    <div className="gap-box" id="key-mismatch-gap">
      <div className="finding-header">
        <div>
          <span className="badge badge-cyan" style={{ marginBottom: '8px' }}>
            <Database size={12} />
            Research Discovery &bull; AgentShield Bench v2
          </span>
          <h3 style={{ fontSize: '1.45rem', marginTop: '4px' }}>
            The Key Mismatch Gap
          </h3>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Source: DOI <a href="https://doi.org/10.5281/zenodo.20756086" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}>10.5281/zenodo.20756086</a>
        </div>
      </div>

      <blockquote className="finding-quote" style={{ borderLeftColor: 'rgba(56, 189, 248, 0.4)' }}>
        &ldquo;Behavioral compromise can occur despite memory-integrity metrics reporting near-perfect security.&rdquo;
      </blockquote>

      <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
        In AgentShield Bench v2 (320 memory-security attack scenarios on GPT-4o-mini and Llama-3.1-8B-Instant), 
        researchers observed that traditional memory safety evaluations rely heavily on exact-string key/value matching. 
        When adversarial payloads are injected with slight semantic paraphrasing, exact-match scanners score memory integrity as uncompromised, 
        yet the LLM agent actively incorporates the poisoned context during downstream reasoning and tool dispatch.
      </p>

      {/* Comparison Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
        gap: '16px',
        background: 'rgba(9, 11, 14, 0.6)',
        border: '1px solid var(--border-hairline)',
        borderRadius: '4px',
        padding: '16px'
      }}>
        <div style={{ padding: '12px', borderLeft: '2px solid var(--accent-rose)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-rose)', marginBottom: '4px' }}>
            Traditional Exact-Match Testing
          </div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Reports <strong>~98% Memory Integrity</strong> because raw malicious strings are absent from exact key lookups. Creates a false illusion of persistent safety.
          </div>
        </div>

        <div style={{ padding: '12px', borderLeft: '2px solid var(--accent-cyan)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
            Downstream Behavioral Reality
          </div>
          <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Demonstrates up to <strong>31% Behavioral Compromise Rate (BCR)</strong> as the agent semantically retrieves and executes the poisoned memory directives in subsequent sessions.
          </div>
        </div>
      </div>

      <div className="finding-disclaimer" style={{ marginTop: '16px' }}>
        <Info size={14} style={{ flexShrink: 0, color: 'var(--accent-cyan)' }} />
        <span>
          <strong>Methodological consequence:</strong> Motivated the development of the <em>Memory Security Score (MSS)</em> and 
          reinforces that memory evaluations must track end-to-end multi-session actions, not merely static database diffs.
        </span>
      </div>
    </div>
  );
};
