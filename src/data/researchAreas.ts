import { ResearchArea } from '../types';

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'agent-security',
    title: 'AI Agent Security',
    shortDesc: 'Vulnerabilities, attack surfaces, adversarial workflows, and defensive mechanisms affecting autonomous AI agents.',
    fullDesc: 'Autonomous agents operate in open-ended environments, orchestrating complex tools, file systems, APIs, and multi-turn planning cycles. This vastly expands the attack surface beyond static prompt injection into dynamic workflow manipulation, tool parameter poisoning, and multi-agent delegation exploits.',
    questions: [
      'How do adversarial payloads propagate across multi-step execution graphs?',
      'Where do guardrails fail when an agent processes untrusted third-party tool outputs?',
      'What runtime verification mechanisms can thwart unauthorized tool invocation without crippling agent autonomy?'
    ],
    threatSurface: [
      'Indirect Prompt Injection via Environment / Web Content',
      'Unauthorized Tool & System API Invocation',
      'Deceptive Multi-Turn Dialogue Escalation',
      'Multi-Agent Delegation Hijacking'
    ],
    empiricalMethods: [
      'Synthetic Adversarial Workflow Generators',
      'Tool Execution Sandboxing & Trace Logging',
      'Dual-Context Evaluation (Clean vs. Adversarial Execution Pairs)'
    ]
  },
  {
    id: 'ai-evaluation',
    title: 'AI Evaluation',
    shortDesc: 'Methods, benchmarks, and measurement frameworks for systematically evaluating intelligent systems.',
    fullDesc: 'Evaluation must move beyond synthetic multiple-choice QA and static benchmark leaderboards. Evalyze Labs designs high-resolution, reproducible evaluation infrastructure that tests autonomous systems across long execution horizons, dynamic environments, and realistic failure states.',
    questions: [
      'How can we measure behavioral degradation in agents across extended execution horizons?',
      'Why do surface-level evaluation metrics fail to detect latent behavioral compromise?',
      'What statistical frameworks best measure objective consistency and execution reliability?'
    ],
    threatSurface: [
      'Benchmark Leakage & Evaluation Contamination',
      'Static Metric Misalignment (e.g. Exact Match vs. Semantic Compromise)',
      'Uncalibrated Confidence & Stochastic Inconsistency'
    ],
    empiricalMethods: [
      'Paired Counterfactual Testing',
      'Composite Evaluation Formulations (ASSS, MIS, GIS)',
      'Deterministic Replay Environments'
    ]
  },
  {
    id: 'memory-persistence',
    title: 'Memory & Persistence',
    shortDesc: 'Persistent state, memory poisoning, cross-session behavior, and recovery in autonomous agents.',
    fullDesc: 'Modern LLM agents increasingly rely on vector databases, episodic stores, and persistent memory caches to sustain context across sessions. When an adversary poisons memory, the compromise is no longer ephemeral—it persists across conversational boundaries, altering future reasoning and decision-making.',
    questions: [
      'How does malicious state persist across session boundaries in episodic stores?',
      'Why do traditional memory integrity metrics suffer from the Key Mismatch Gap?',
      'How can autonomous agents detect, isolate, and sanitize corrupted memory entries without data loss?'
    ],
    threatSurface: [
      'False Memory Injection & Fact Fabrication',
      'Episodic Cache Poisoning & Retrieval Hijacking',
      'Cross-Session Persistent Jailbreaks',
      'Privilege Escalation through Stored User Identity Manipulation'
    ],
    empiricalMethods: [
      'Cross-Session Retrieval Probing (AgentShield Bench v2)',
      'Semantic vs. Exact Match Integrity Tracking',
      'Automated Memory Sanitization Benchmarking'
    ]
  },
  {
    id: 'goal-integrity',
    title: 'Goal Integrity & Reliability',
    shortDesc: 'Goal hijacking, goal drift, reward hacking, and maintaining intended objectives during autonomous operation.',
    fullDesc: 'As agents plan over hundreds of steps, maintaining fidelity to original user objectives is precarious. Under adversarial pressure or complex reasoning sub-tasks, agents experience goal drift, reward hacking, or outright objective substitution.',
    questions: [
      'Under what conditions do agents abandon designated primary objectives for attacker-supplied tasks?',
      'What is the operational cost of runtime defensive guardrails on clean task completion?',
      'How can hierarchical planners verify sub-goal alignment against root user constraints?'
    ],
    threatSurface: [
      'Gradual Goal Drift via Intermediate Reasoning Steps',
      'Reward Hacking against Automated Evaluators',
      'Sub-Goal Substitution during Tool Execution Failures',
      'Long-Horizon Dormant Objective Hijacking'
    ],
    empiricalMethods: [
      'Controlled Clean vs. Adversarial Scenarios (AgentShield Bench v3)',
      'Goal Integrity Score (GIS) & Goal Integrity Drop (GID) Tracking',
      'Runtime Defense Trade-off Modeling'
    ]
  },
  {
    id: 'trustworthy-ai',
    title: 'Trustworthy AI',
    shortDesc: 'Robustness, reliability, transparency, and dependable behavior of intelligent systems.',
    fullDesc: 'Trustworthy intelligence requires systems that fail safely, provide inspectable audit trails, and behave predictably under edge-case distributions. Our research investigates defensive paradigms that balance security resilience with operational utility.',
    questions: [
      'How can defensive overhead be minimized while maintaining high adversarial resilience?',
      'What verification architectures provide cryptographic or deterministic auditability for LLM agent actions?',
      'How do we ensure reproducible, open-science standards for AI safety benchmarking?'
    ],
    threatSurface: [
      'Over-Constrained Defense Failures (Defensive Overhead Paradox)',
      'Opaque Reasoning Chains & Unverifiable Hallucinations',
      'Unmonitored Side-Effect Cascades'
    ],
    empiricalMethods: [
      'Open-Access Zenodo Artifact Archival',
      'Full Reproducibility Protocols',
      'Empirical Overhead Quantifications'
    ]
  }
];
