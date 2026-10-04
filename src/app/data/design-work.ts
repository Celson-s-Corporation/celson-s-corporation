export interface DesignWork {
  slug: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link?: string;
}

// TODO: replace with your real design/creative work. imageUrl can point to
// files you add under public/ (e.g. 'images/work/piece-one.jpg').
export const DESIGN_WORK: DesignWork[] = [
  {
    slug: 'piece-one',
    title: 'Piece One',
    category: 'Branding',
    description: 'Short description of this piece of creative work and the tools used to make it.',
    imageUrl: '',
  },
  {
    slug: 'piece-two',
    title: 'Piece Two',
    category: 'UI Design',
    description: 'Short description of this piece of creative work and the tools used to make it.',
    imageUrl: '',
  },
  {
    slug: 'piece-three',
    title: 'Piece Three',
    category: 'Illustration',
    description: 'Short description of this piece of creative work and the tools used to make it.',
    imageUrl: '',
  },
];
