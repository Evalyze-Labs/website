export type ResearchAreaId = 
  | 'agent-security'
  | 'ai-evaluation'
  | 'memory-persistence'
  | 'goal-integrity'
  | 'trustworthy-ai';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  date: string;
  year: number;
  type: 'Preprint' | 'Benchmark Report' | 'Technical Report';
  doi: string;
  zenodoUrl: string;
  abstract: string;
  researchArea: string;
  keywords: string[];
  citationKey: string;
  bibtex: string;
  datasetAvailable?: boolean;
  scenarioCount?: number;
  featured?: boolean;
}

export interface ThreatCategory {
  name: string;
  description: string;
  scenariosCount?: number;
}

export interface MetricDefinition {
  acronym: string;
  name: string;
  formula?: string;
  description: string;
}

export interface BenchmarkVersion {
  id: string;
  version: 'v1' | 'v2' | 'v3';
  label: string;
  title: string;
  subtitle: string;
  focus: string;
  scenarioCount: number;
  status: 'Published' | 'Preprint Archive';
  date: string;
  doi: string;
  zenodoUrl: string;
  threatCategories: ThreatCategory[];
  metrics: MetricDefinition[];
  modelsEvaluated: string[];
  defensesEvaluated?: string[];
  keyFindings: {
    title: string;
    description: string;
    type: 'finding' | 'paradox' | 'gap';
  }[];
  overview: string;
  artifactIncludes: string[];
}

export interface ResearchArea {
  id: ResearchAreaId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  questions: string[];
  threatSurface: string[];
  empiricalMethods: string[];
}

export interface Researcher {
  name: string;
  role: string;
  affiliation: string;
  orcid: string;
  orcidUrl: string;
  bio: string;
  researchInterests: string[];
  featuredWorks: string[];
}

export interface ResearchUpdate {
  id: string;
  date: string;
  type: 'Benchmark Release' | 'Preprint' | 'Dataset Archive' | 'Methodology';
  title: string;
  summary: string;
  doi?: string;
  url?: string;
  badge: string;
}
