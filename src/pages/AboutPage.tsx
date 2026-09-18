import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <main className="section-wrapper" style={{ minHeight: '80vh' }}>
      <div className="container-reading">
        {/* Header */}
        <div className="section-header">
          <div className="section-kicker">ABOUT EVALYZE LABS</div>
          <h1>Understanding Systems Through Empirical Measurement</h1>
          <p className="text-editorial" style={{ marginTop: '16px' }}>
            Independent, reproducible research into how autonomous intelligent systems behave, fail, and maintain integrity.
          </p>
        </div>

        {/* Narrative Body */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <p>
            <strong style={{ color: 'var(--text-primary)' }}>Evalyze Labs</strong> is an independent AI research laboratory dedicated to empirical evaluation methodologies, benchmark engineering, and security analysis for autonomous intelligent systems.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '16px' }}>
            Why the Lab Exists
          </h2>
          <p>
            As Large Language Models transition from conversational assistants into autonomous agents equipped with multi-step planning, tool-calling APIs, external code interpreters, and persistent memory stores, traditional safety benchmarks become insufficient. 
            Static multiple-choice tests and single-turn prompt checks fail to capture the cascading failure modes that emerge during multi-turn workflows, sub-agent delegations, and cross-session state persistence.
          </p>
          <p>
            Evalyze Labs was founded to develop the rigorous evaluation infrastructure necessary to inspect these systems under adversarial pressure. We design controlled experimental environments, formulate quantitative metrics, and release open-source benchmark suites to understand where intelligent systems fail and how they can be made dependable.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '16px' }}>
            Core Methodological Commitments
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '8px 0' }}>
            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-accent font-mono">01</span>
                <strong style={{ color: 'var(--text-primary)' }}>Empirical Grounding Over Speculation</strong>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                We prioritize concrete, reproducible observations over hypothetical claims. Our benchmarks measure actual agent execution traces, tool arguments, memory states, and goal retention curves in controlled environments.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-accent font-mono">02</span>
                <strong style={{ color: 'var(--text-primary)' }}>Adversarial Realism</strong>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                Attacks in the real world do not conform to single prompts. We construct evaluation scenarios spanning multi-step dialogue degradation, malicious tool outputs, cross-session memory poisoning, and delegation hijacking.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-accent font-mono">03</span>
                <strong style={{ color: 'var(--text-primary)' }}>Open Scientific Artifacts</strong>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                Every benchmark released by Evalyze Labs is archived on Zenodo with a persistent DOI, citable technical report, and open scenario datasets, enabling external researchers and institutions to independently verify and replicate all findings.
              </p>
            </div>

            <div className="card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="badge badge-accent font-mono">04</span>
                <strong style={{ color: 'var(--text-primary)' }}>No Speculative Roadmaps</strong>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', margin: 0 }}>
                In research, honest uncertainty is a virtue. We do not publish speculative project roadmaps or premature commitments. We report discoveries when they are verified by empirical evidence.
              </p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '16px' }}>
            Scope & Boundaries
          </h2>
          <p>
            Evalyze Labs does not provide commercial consulting, sell proprietary software licenses, or hype theoretical artificial intelligence milestones. Our work is oriented toward open scientific progress, transparent security evaluation, and empirical measurement.
          </p>
        </div>
      </div>
    </main>
  );
};
