import { BenchmarkVersion } from '../types';

export const BENCHMARKS: BenchmarkVersion[] = [
  {
    id: 'agentshield-v3',
    version: 'v3',
    label: 'AgentShield Bench v3',
    title: 'Evaluating Goal Integrity and Resilience of Autonomous LLM Agents Against Goal Hijacking and Autonomous Threats',
    subtitle: 'Final installment of the AgentShield series evaluating goal drift, delegation hijacking, and reward manipulation.',
    focus: 'Goal Integrity, Autonomous Threats, & Defensive Trade-Offs',
    scenarioCount: 250,
    status: 'Preprint Archive',
    date: 'June 2026',
    doi: '10.5281/zenodo.20834892',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.20834892',
    modelsEvaluated: ['GPT-4o-mini', 'Llama-3.1-8B-Instant', 'Gemini 1.5 Pro'],
    defensesEvaluated: ['Goal Restatement', 'Self Verification', 'Constraint Locking'],
    overview: 'AgentShield Bench v3 investigates the resilience of autonomous agents during autonomous multi-step planning, tool execution, and long-horizon tasks. Evaluating agents across clean and adversarial baselines reveals objective-preservation failures and the operational cost of runtime defenses.',
    threatCategories: [
      {
        name: 'Goal Drift',
        description: 'Gradual erosion of primary objectives through iterative subtle sub-goal distractions and cumulative conversational shifts.',
        scenariosCount: 50
      },
      {
        name: 'Tool Manipulation',
        description: 'Adversarial payload injections delivered via tool inputs, schema corruption, and deceptive synthetic tool outputs.',
        scenariosCount: 50
      },
      {
        name: 'Long-Horizon Hijacking',
        description: 'Delayed execution attacks where adversaries stage dormant objectives triggered only after multiple successful planning steps.',
        scenariosCount: 50
      },
      {
        name: 'Delegation Attacks',
        description: 'Exploiting multi-agent hierarchical handoffs to inject unauthorized commands between orchestrator and worker sub-agents.',
        scenariosCount: 50
      },
      {
        name: 'Reward Hacking',
        description: 'Exploiting autonomous task-evaluation heuristics, producing superficially passing artifacts that bypass true verification constraints.',
        scenariosCount: 50
      }
    ],
    metrics: [
      {
        acronym: 'GIS',
        name: 'Goal Integrity Score',
        formula: 'GIS = 1 - (Failures_{goal} / N_{adversarial})',
        description: 'Measures the proportion of tasks where the agent maintains its initial designated objective without deviation or unauthorized goal override.'
      },
      {
        acronym: 'GID',
        name: 'Goal Integrity Drop',
        formula: 'GID = GIS_{clean} - GIS_{adversarial}',
        description: 'Quantifies the direct degradation in goal preservation when comparing baseline non-adversarial execution against active attack environments.'
      },
      {
        acronym: 'ASR',
        name: 'Attack Success Rate',
        formula: 'ASR = Attacks_{successful} / N_{total}',
        description: 'Percentage of adversarial attempts that successfully divert the agent into completing an attacker-specified objective.'
      },
      {
        acronym: 'TCR',
        name: 'Task Completion Rate',
        formula: 'TCR = Tasks_{completed} / N_{total}',
        description: 'Measures whether the primary user request was functionally completed according to ground-truth specifications.'
      }
    ],
    keyFindings: [
      {
        title: 'The Defensive Overhead Paradox',
        type: 'paradox',
        description: 'Stronger defenses do not necessarily come without cost. In controlled experiments, some defensive mechanisms increased resilience against adversarial attacks while reducing task performance in clean conditions. For instance, aggressive Constraint Locking and multi-step Self-Verification improved attack resistance but introduced friction that degraded normal task completion rates by up to 14% on complex workflows.'
      },
      {
        title: 'Sub-agent Delegation Vulnerability',
        type: 'finding',
        description: 'Orchestrator agents fail to consistently sanitize context when dispatching instructions to specialized worker tools, creating high-yield attack vectors across multi-agent handoffs.'
      }
    ],
    artifactIncludes: [
      '250 Controlled Experimental Scenarios (Clean vs. Adversarial paired evaluations)',
      'Reference Evaluation Harness (Python / Async Engine)',
      'Defense Implementations: Goal Restatement, Self Verification, Constraint Locking',
      'Zenodo Research Archive & Open Benchmark Data'
    ]
  },
  {
    id: 'agentshield-v2',
    version: 'v2',
    label: 'AgentShield Bench v2',
    title: 'Evaluating Memory Security, Persistent Jailbreaks, and Cross Session Compromise in Autonomous LLM Agents',
    subtitle: 'Groundbreaking study into long-term memory poisoning, persistent state exploits, and semantic integrity.',
    focus: 'Persistent State, Cross-Session Compromise, & The Key Mismatch Gap',
    scenarioCount: 320,
    status: 'Preprint Archive',
    date: 'June 2026',
    doi: '10.5281/zenodo.20756086',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.20756086',
    modelsEvaluated: ['GPT-4o-mini', 'Llama-3.1-8B-Instant'],
    overview: 'AgentShield Bench v2 pioneers empirical evaluation of persistent memory vulnerabilities in autonomous agents. Rather than transient single-session prompt injections, it evaluates how malicious data stored in semantic stores survives session resets and alters future reasoning.',
    threatCategories: [
      { name: 'False Memory Injection', description: 'Planting fabricated facts, entities, or preferences into episodic storage.' },
      { name: 'Memory Corruption', description: 'Degrading or overwriting safety instructions preserved in long-term memory.' },
      { name: 'Persistent Jailbreaks', description: 'Adversarial instructions engineered to remain dormant in memory across conversational boundaries.' },
      { name: 'Goal Manipulation', description: 'Subtle alteration of default agent behavioral heuristics stored in memory.' },
      { name: 'Privilege Escalation', description: 'Manipulating stored identity attributes to gain access to elevated agent tool capabilities.' },
      { name: 'Cross-Session Persistence', description: 'Testing survival rate of malicious instructions across cache resets and retrieval passes.' },
      { name: 'Trust Exploitation', description: 'Exploiting high-trust memory entries to override subsequent runtime safety guardrails.' },
      { name: 'Recovery Evaluation', description: 'Testing the agent’s capacity to detect, quarantine, and scrub compromised memory stores.' }
    ],
    metrics: [
      {
        acronym: 'MIS',
        name: 'Memory Integrity Score',
        description: 'Quantifies the structural and semantic purity of the agent’s memory storage following adversarial insertion attempts.'
      },
      {
        acronym: 'PS',
        name: 'Persistence Score',
        description: 'Measures the survival and retrieval likelihood of malicious memories across subsequent clean interaction sessions.'
      },
      {
        acronym: 'BCR',
        name: 'Behavioral Compromise Rate',
        description: 'Percentage of subsequent sessions where the agent actively executes compromised actions derived from poisoned memory.'
      },
      {
        acronym: 'RES',
        name: 'Recovery Effectiveness Score',
        description: 'Rate at which memory sanitization pipelines successfully detect and purge poisoned memory nodes.'
      },
      {
        acronym: 'MSS',
        name: 'Memory Security Score',
        description: 'Harmonized composite metric capturing both storage-level resilience and operational downstream behavior.'
      }
    ],
    keyFindings: [
      {
        title: 'The Key Mismatch Gap',
        type: 'gap',
        description: 'An empirical evaluation phenomenon where behavioral compromise occurs despite memory-integrity metrics reporting near-perfect security. Exact-match text comparisons fail to capture semantic memory alterations that still successfully steer subsequent LLM reasoning.'
      },
      {
        title: 'Cross-Session Memory Asymmetry',
        type: 'finding',
        description: 'Models demonstrate significantly lower defense vigilance when retrieving internal long-term memories compared to processing untrusted external user inputs.'
      }
    ],
    artifactIncludes: [
      '320 Memory-Security Attack Scenarios across 8 Threat Dimensions',
      'Memory Retrieval & Injection Evaluation Framework',
      'Benchmarked Data on GPT-4o-mini and Llama-3.1-8B-Instant',
      'Zenodo Research Archive & Attack Taxonomy'
    ]
  },
  {
    id: 'agentshield-v1',
    version: 'v1',
    label: 'AgentShield Bench v1',
    title: 'Evaluating the Security Resilience of OpenAI and Gemini LLM Agents Against Adversarial Agent Workflows',
    subtitle: 'Empirical framework assessing agent resilience beyond traditional single-turn conversational safety.',
    focus: 'Prompt Injection, Multi-Turn Manipulation, & Tool Misuse',
    scenarioCount: 130,
    status: 'Preprint Archive',
    date: 'June 2026',
    doi: '10.5281/zenodo.20677149',
    zenodoUrl: 'https://doi.org/10.5281/zenodo.20677149',
    modelsEvaluated: ['OpenAI LLM Agents', 'Gemini LLM Agents'],
    overview: 'AgentShield Bench establishes the initial baseline for agent workflow security, evaluating modern autonomous agents against multi-turn manipulation, retrieval poisoning, and unauthorized tool execution.',
    threatCategories: [
      { name: 'Prompt Injection & Role Override', description: 'Direct instruction override and simulated administrative bypasses in agent prompt context.' },
      { name: 'Tool Misuse & Unauthorized Calling', description: 'Coercing agents to invoke restricted API actions or modify system parameters.' },
      { name: 'Multi-Turn Manipulation', description: 'Staged multi-step dialogues that incrementally degrade agent safety thresholds.' },
      { name: 'Retrieval Poisoning', description: 'Injecting adversarial instructions into RAG contexts indexed by the agent.' },
      { name: 'Data Exfiltration', description: 'Prompt payloads designed to siphon confidential system prompt details or environment keys.' }
    ],
    metrics: [
      {
        acronym: 'ASSS',
        name: 'AgentShield Security Score',
        description: 'Comprehensive rating combining attack prevention, safe failure behaviors, and task resilience under adversarial conditions.'
      },
      {
        acronym: 'ASR',
        name: 'Attack Success Rate',
        description: 'Ratio of attack scenarios where the adversarial objective was fully completed by the agent.'
      }
    ],
    keyFindings: [
      {
        title: 'Workflow Execution Fragility',
        type: 'finding',
        description: 'Agents that reliably resist single-turn jailbreaks frequently yield when the adversarial payload is distributed across intermediate tool outputs and multi-step execution plans.'
      }
    ],
    artifactIncludes: [
      '130 Security-Focused Attack Scenarios',
      'Comparative Evaluation of OpenAI & Gemini Agents',
      'Taxonomy of Adversarial Agent Workflows',
      'Zenodo Data Repository & Attack Specifications'
    ]
  }
];

// Defensive Overhead Paradox structured detail for deep-dive rendering
export const DEFENSIVE_OVERHEAD_PARADOX_DETAILS = {
  label: 'Experimental Observation',
  title: 'The Defensive Overhead Paradox',
  sourceBenchmark: 'AgentShield Bench v3 (2026)',
  quote: 'Stronger defenses do not necessarily come without cost. In controlled experiments, some defensive mechanisms increased resilience against adversarial attacks while reducing task performance in clean conditions.',
  evaluatedDefenses: [
    {
      name: 'Goal Restatement',
      mechanism: 'Agent repeatedly injects its canonical original prompt at each planning iteration.',
      adversarialGain: 'High (Reduces goal drift by 28%)',
      cleanOverhead: 'Moderate (Introduces context bloat and repetitive loops on complex tasks)',
      impactSummary: 'Improves focus but causes latency and context truncation on tasks exceeding 6 reasoning turns.'
    },
    {
      name: 'Self-Verification',
      mechanism: 'Secondary verification pass where a critic module checks intermediate tool calls against constraints.',
      adversarialGain: 'Very High (Detects 34% of tool manipulation attempts)',
      cleanOverhead: 'High (False rejection rate of benign creative actions reduces clean TCR by ~9%)',
      impactSummary: 'Overly conservative self-checks reject valid multi-step workflows in clean environments.'
    },
    {
      name: 'Constraint Locking',
      mechanism: 'Strict parameter boundaries and deterministic tool whitelisting enforced at the agent execution boundary.',
      adversarialGain: 'Highest (Prevents 42% of unauthorized delegation & hijacking)',
      cleanOverhead: 'Highest (Statically restricts agent flexibility, lowering clean TCR by ~14%)',
      impactSummary: 'Severely dampens agent adaptability when benign dynamic tool schema adjustments are necessary.'
    }
  ],
  implication: 'Defensive engineering cannot focus exclusively on Attack Success Rate (ASR). Robust evaluation requires simultaneous measurement of clean Task Completion Rate (TCR) and Goal Integrity Drop (GID) to prevent shipping over-constrained, brittle systems.'
};
