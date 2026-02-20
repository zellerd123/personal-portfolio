export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C/C++/C#', 'SQL', 'Bash'],
  },
  {
    category: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML/CSS', 'Tailwind CSS', 'Material-UI'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'Node.js', 'REST APIs', 'PostgreSQL', 'Azure'],
  },
  {
    category: 'Tools & Frameworks',
    skills: ['Git', 'LangGraph', 'NumPy', 'Pandas', 'Unity Engine', 'Docker'],
  },
  {
    category: 'Specializations',
    skills: ['Full-stack Development', 'NLP & Gen AI', 'Data Engineering', 'Agile Management'],
  },
];
