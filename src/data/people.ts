import { Researcher } from '../types';

export const RESEARCHERS: Researcher[] = [
  {
    name: 'Ruhulalemeen Mulla',
    role: 'Co-Founder & Research Lead',
    affiliation: 'Evalyze Labs',
    orcid: '0009-0002-2510-2778',
    orcidUrl: 'https://orcid.org/0009-0002-2510-2778',
    bio: 'Ruhulalemeen Mulla is Co-Founder and Research Lead at Evalyze Labs. His research focuses on the empirical evaluation of autonomous LLM agents, adversarial agent workflows, persistent memory security, and goal integrity under adversarial conditions. He is the lead author and developer of the AgentShield benchmark series.',
    researchInterests: [
      'AI Agent Security & Adversarial Workflows',
      'Long-Term Memory Security & Persistent Jailbreaks',
      'Goal Integrity & Autonomous Threat Evaluation',
      'Empirical Evaluation Methodologies & Benchmarking',
      'Adversarial Machine Learning & Robustness'
    ],
    featuredWorks: [
      'AgentShield Bench v3: Evaluating Goal Integrity and Resilience of Autonomous LLM Agents',
      'AgentShield Bench v2: Evaluating Memory Security, Persistent Jailbreaks, and Cross-Session Compromise',
      'AgentShield Bench: Evaluating the Security Resilience of OpenAI and Gemini LLM Agents',
      'Evaluating Prompt Injection Vulnerabilities in AI Agents'
    ]
  }
];
