export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

export const experienceData: Experience[] = [
  {
    company: 'Vituity',
    role: 'Software Engineer I',
    location: 'Hybrid / New York, NY',
    period: 'October 2024 - Present',
    description: [
      'Lead simultaneous development and end-to-end management of ZenForma, Polaris, and MailFlow projects',
      'Reduced manual processing time from 3 hours to 4 minutes per file using LangGraph ML agents',
      'Head the New College Grad Mentorship Program, designing onboarding experiences',
      'Facilitate weekly stakeholder meetings and manage CI/CD workflows',
    ],
  },
  {
    company: 'Relm.ai',
    role: 'Junior Developer',
    location: 'New York, NY',
    period: 'August 2024 - October 2024',
    description: [
      'Developed and deployed dashboards in Grafana using SQL',
      'Visualized churn, retention, session length, and growth rates',
      'Enabled actionable insights into user engagement and product stickiness',
    ],
  },
  {
    company: 'Goldman Sachs',
    role: 'Investment Banking Summer Analyst',
    location: 'Dallas, TX',
    period: 'June 2023 - August 2023',
    description: [
      'Prepared financial models for M&A valued at over $15 billion',
      'Automated data sourcing using Excel formulas connected through FactSet and CapIQ',
      'Created model templates resulting in faster pitch deck creation across the firm',
    ],
  },
];

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
  honors: string;
  details: string[];
}

export const educationData: Education = {
  school: 'Colgate University',
  degree: 'B.A. in Computer Science, Minor in Economics',
  period: 'May 2024',
  gpa: 'GPA: 3.67, CS GPA: 3.79',
  honors: 'Magna Cum Laude, Graduated with Honors',
  details: [
    'Coursework: Data Structures and Algorithms, Machine Learning, Computer Networks',
    'Discrete Structures of Mathematics, Algorithmic Game Theory, Object-Oriented Programming',
  ],
};
