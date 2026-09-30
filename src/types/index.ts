export interface Project {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  content?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  tags: string[];
  content?: string;
}

export interface IndustrialSolution {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  tags: string[];
  content?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface SkillItem {
  title: string;
  desc: string;
  icon: string;
  color: string;
  category: 'hardware' | 'software' | 'design' | 'manufacturing';
}
