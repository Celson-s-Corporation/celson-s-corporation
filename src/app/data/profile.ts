export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  bio: string[];
  resumeUrl: string;
  socials: { label: string; url: string }[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: SkillGroup[];
}

// TODO: replace every placeholder value below with your real information.
export const PROFILE: Profile = {
  name: 'Celson Fernando',
  title: 'Software Developer & Digital Creator',
  tagline: 'I build clean, functional products — and the occasional visual to go with them.',
  location: 'Add your city, country',
  email: 'celson338540@gmail.com',
  bio: [
    "I'm a software developer who enjoys turning ideas into working products, from backend logic to the pixels on screen.",
    'This is placeholder bio copy — replace it with a couple of short paragraphs about your background, what you work on now, and what you care about professionally.',
  ],
  resumeUrl: 'assets/resume.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/your-handle' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/your-handle' },
    { label: 'Email', url: 'mailto:celson338540@gmail.com' },
  ],
  experience: [
    {
      role: 'Job Title',
      org: 'Company Name',
      period: '2024 — Present',
      summary: 'One-line summary of what you do in this role.',
      highlights: [
        'Replace with a concrete achievement or responsibility.',
        'Replace with another concrete achievement, ideally with a number.',
      ],
    },
    {
      role: 'Previous Job Title',
      org: 'Previous Company',
      period: '2022 — 2024',
      summary: 'One-line summary of what you did in this role.',
      highlights: ['Replace with a concrete achievement.', 'Replace with another concrete achievement.'],
    },
  ],
  education: [
    {
      degree: 'Degree / Certification',
      school: 'Institution Name',
      period: '20XX — 20XX',
    },
  ],
  skills: [
    { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Add more'] },
    { label: 'Frameworks', items: ['Angular', 'Node.js', 'Add more'] },
    { label: 'Tools', items: ['Git', 'Docker', 'Add more'] },
  ],
};
