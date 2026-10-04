import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/resume/resume').then((m) => m.Resume),
    title: 'Celson Fernando — Portfólio de Engenharia de Software',
    // The résumé page draws its own header and footer.
    data: { standalone: true },
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Celson Fernando — Portfolio',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'About — Celson Fernando',
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
    title: 'Projects — Celson Fernando',
  },
  {
    path: 'design',
    loadComponent: () => import('./pages/design/design').then((m) => m.Design),
    title: 'Design — Celson Fernando',
  },
  {
    path: 'blog',
    loadComponent: () => import('./pages/blog/blog').then((m) => m.Blog),
    title: 'Blog — Celson Fernando',
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./pages/blog-post/blog-post').then((m) => m.BlogPost),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact — Celson Fernando',
  },
  {
    // The site used to live at /celson-s-corporation/; GitHub Pages does not redirect old URLs
    // after the repo rename, so old links land on 404.html and are sent to the same page here.
    path: 'celson-s-corporation',
    redirectTo: '',
  },
  {
    path: '**',
    loadComponent: () => import('./shared/not-found/not-found').then((m) => m.NotFound),
    title: 'Page not found',
  },
];
