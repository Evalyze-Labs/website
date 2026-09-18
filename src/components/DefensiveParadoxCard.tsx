import React, { useState } from 'react';
import { DEFENSIVE_OVERHEAD_PARADOX_DETAILS } from '../data/benchmarks';
import { ShieldCheck, Activity, Info } from 'lucide-react';

export const DefensiveParadoxCard: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [selectedDefense, setSelectedDefense] = useState<number>(0);
  const data = DEFENSIVE_OVERHEAD_PARADOX_DETAILS;
  const current = data.evaluatedDefenses[selectedDefense];

  return (
    <div className="finding-box" id="defensive-overhead-paradox">
      <div className="finding-header">
        <div>
          <span className="badge badge-amber" style={{ marginBottom: '8px' }}>
            <Activity size={12} />
            {data.label} &bull; AgentShield Bench v3
          </span>
          <h3 style={{ fontSize: '1.45rem', marginTop: '4px' }}>
            {data.title}
          </h3>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Source: DOI <a href="https://doi.org/10.5281/zenodo.20834892" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-amber)', textDecoration: 'underline' }}>10.5281/zenodo.20834892</a>
        </div>
      </div>

      <blockquote className="finding-quote">
        &ldquo;{data.quote}&rdquo;
      </blockquote>

      <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
        In AgentShield Bench v3 (250 controlled scenarios evaluated across paired clean and adversarial environments), 
        defensive interventions revealed a measurable tension: mechanism overhead frequently impaired nominal task execution.
      </p>

      {/* Interactive Tension Visualizer */}
      <div className="tradeoff-visualizer">
        <div className="tradeoff-title">
          <span>Observed Trade-Off Tension</span>
          <span style={{ color: 'var(--accent-amber)' }}>Adversarial Resilience vs. Clean Performance</span>
        </div>

        {/* Defense Selector Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {data.evaluatedDefenses.map((defense, idx) => (
            <button
              key={defense.name}
              onClick={() => setSelectedDefense(idx)}
              className={`btn btn-sm ${selectedDefense === idx ? 'btn-primary' : 'btn-outline'}`}
              style={{
                borderColor: selectedDefense === idx ? 'var(--accent-amber)' : undefined,
                backgroundColor: selectedDefense === idx ? 'var(--accent-amber)' : undefined,
                color: selectedDefense === idx ? '#000000' : undefined,
              }}
            >
              <ShieldCheck size={14} />
              {defense.name}
            </button>
          ))}
        </div>

        {/* Selected Defense Metric Details */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          border: '1px solid var(--border-hairline)', 
          borderRadius: '4px', 
          padding: '16px' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              {current.name}
            </h4>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Mechanism: {current.mechanism}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', margin: '12px 0' }}>
            <div style={{ 
              background: 'rgba(0, 229, 163, 0.06)', 
              border: '1px solid rgba(0, 229, 163, 0.2)', 
              padding: '12px', 
              borderRadius: '4px' 
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-primary)', marginBottom: '4px' }}>
                Adversarial Gain
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                {current.adversarialGain}
              </div>
            </div>

            <div style={{ 
              background: 'rgba(251, 113, 133, 0.06)', 
              border: '1px solid rgba(251, 113, 133, 0.2)', 
              padding: '12px', 
              borderRadius: '4px' 
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-rose)', marginBottom: '4px' }}>
                Clean-Condition Overhead
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                {current.cleanOverhead}
              </div>
            </div>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
            <strong>Analysis:</strong> {current.impactSummary}
          </p>
        </div>
      </div>

      {!compact && (
        <div style={{ marginTop: '16px', padding: '12px 16px', background: 'rgba(0, 0, 0, 0.35)', border: '1px solid var(--border-hairline)', borderRadius: '4px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Evaluation Implication: </strong>
            {data.implication}
          </div>
        </div>
      )}

      {/* Restraint & Scientific Framing Note */}
      <div className="finding-disclaimer">
        <Info size={14} style={{ flexShrink: 0, color: 'var(--accent-amber)' }} />
        <span>
          <strong>Scope note:</strong> This is a documented empirical observation from the AgentShield Bench v3 experimental matrix. 
          It is not claimed as a universal law of AI safety or an inherent limitation of all future defensive paradigms.
        </span>
      </div>
    </div>
  );
};
