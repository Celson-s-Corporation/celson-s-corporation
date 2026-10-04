export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

// TODO: replace with your real projects.
export const PROJECTS: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    description:
      'Short description of what this project does, the problem it solves, and your role in building it.',
    tags: ['Angular', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/your-handle/project-one',
    demoUrl: '',
    featured: true,
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    description:
      'Short description of what this project does, the problem it solves, and your role in building it.',
    tags: ['React', 'PostgreSQL'],
    githubUrl: 'https://github.com/your-handle/project-two',
    demoUrl: '',
    featured: true,
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    description:
      'Short description of what this project does, the problem it solves, and your role in building it.',
    tags: ['Rust', 'CLI'],
    githubUrl: 'https://github.com/your-handle/project-three',
    demoUrl: '',
  },
];
