import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';

describe('routes', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    router = TestBed.inject(Router);
  });

  it('redirects the old /celson-s-corporation base path to the root', async () => {
    await router.navigateByUrl('/celson-s-corporation');
    expect(router.url).toBe('/');
  });

  it('keeps the rest of the path when redirecting an old deep link', async () => {
    await router.navigateByUrl('/celson-s-corporation/projects');
    expect(router.url).toBe('/projects');
  });
});
