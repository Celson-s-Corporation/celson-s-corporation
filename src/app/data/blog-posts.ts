export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO date, e.g. '2026-01-15'
  excerpt: string;
  content: string[];
  tags: string[];
}

// TODO: replace with your real posts. Add new entries to the top of the array.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'welcome-to-my-blog',
    title: 'Welcome to my blog',
    date: '2026-01-01',
    excerpt: 'A short intro post — replace this with your first real article.',
    content: [
      'This is a placeholder post. Replace it with your own writing — notes on a project, something you learned, or a short opinion piece.',
      'Each paragraph in the `content` array renders as its own paragraph on the post page.',
    ],
    tags: ['meta'],
  },
];
