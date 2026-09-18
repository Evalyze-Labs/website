import { ResearchUpdate } from '../types';

export const RESEARCH_UPDATES: ResearchUpdate[] = [
  {
    id: 'update-v3-release',
    date: 'June 24, 2026',
    type: 'Benchmark Release',
    title: 'AgentShield Bench v3 Released on Zenodo Archive',
    summary: 'The final installment of the AgentShield series is now public, evaluating 250 controlled scenarios across Goal Drift, Tool Manipulation, Long-Horizon Hijacking, Delegation, and Reward Hacking. Includes experimental observation of the Defensive Overhead Paradox.',
    doi: '10.5281/zenodo.20834892',
    url: 'https://doi.org/10.5281/zenodo.20834892',
    badge: 'Benchmark v3'
  },
  {
    id: 'update-v2-release',
    date: 'June 22, 2026',
    type: 'Benchmark Release',
    title: 'AgentShield Bench v2 Published: Memory Security & Cross-Session Compromise',
    summary: 'Release of 320 memory-security attack scenarios examining persistent state exploits in GPT-4o-mini and Llama-3.1-8B-Instant. Identifies the Key Mismatch Gap in memory evaluation.',
    doi: '10.5281/zenodo.20756086',
    url: 'https://doi.org/10.5281/zenodo.20756086',
    badge: 'Benchmark v2'
  },
  {
    id: 'update-v1-release',
    date: 'June 22, 2026',
    type: 'Benchmark Release',
    title: 'AgentShield Bench v1 Released: Security Resilience in Agent Workflows',
    summary: 'Introduces a 130-scenario benchmark suite and the AgentShield Security Score (ASSS) evaluating OpenAI and Gemini LLM agents against complex multi-turn adversarial workflows.',
    doi: '10.5281/zenodo.20677149',
    url: 'https://doi.org/10.5281/zenodo.20677149',
    badge: 'Benchmark v1'
  },
  {
    id: 'update-prompt-injection-paper',
    date: 'June 10, 2026',
    type: 'Preprint',
    title: 'Methodology Paper: Evaluating Prompt Injection Vulnerabilities in AI Agents',
    summary: 'Formal taxonomy of prompt injection vulnerabilities spanning direct instructions, role override, hidden text, and tool misuse, proposing structured evaluation metrics.',
    doi: '10.5281/zenodo.20631345',
    url: 'https://doi.org/10.5281/zenodo.20631345',
    badge: 'Methodology'
  }
];
