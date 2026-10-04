import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RESUME } from '../../data/resume';
import { Resume } from './resume';

describe('Resume', () => {
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resume],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Resume);
    fixture.detectChanges();
    root = fixture.nativeElement;
  });

  it('renders the hero headline as the single h1', () => {
    const headings = root.querySelectorAll('h1');
    expect(headings.length).toBe(1);
    for (const line of RESUME.hero.titleLines) {
      expect(headings[0].textContent).toContain(line);
    }
  });

  it('renders every nav target as a section on the page', () => {
    for (const item of RESUME.nav) {
      expect(root.querySelector(`#${item.fragment}`)).not.toBeNull();
    }
  });

  it('renders one timeline entry per job and marks only the current role', () => {
    const entries = root.querySelectorAll('#experiencia ol > li');
    expect(entries.length).toBe(RESUME.experience.entries.length);
    expect(root.querySelectorAll('#experiencia img[src$="milestone-current.svg"]').length).toBe(1);
  });

  it('renders the tags for every expertise area', () => {
    const cards = root.querySelectorAll('[aria-labelledby="stack-title"] > ul > li');
    expect(cards.length).toBe(RESUME.expertise.areas.length);
    RESUME.expertise.areas.forEach((area, i) => {
      expect(cards[i].querySelectorAll('app-tag-list li').length).toBe(area.tags.length);
    });
  });

  it('links the contact details to e-mail and phone', () => {
    const contact = root.querySelector('#contato')!;
    expect(contact.querySelector(`a[href="mailto:${RESUME.contact.email}"]`)).not.toBeNull();
    expect(contact.querySelector(`a[href="${RESUME.contact.phoneHref}"]`)).not.toBeNull();
  });

  it('does not invent a LinkedIn URL when none is known', () => {
    const linkedin = RESUME.contact.profiles.find((p) => p.label === 'LINKEDIN')!;
    expect(linkedin.url).toBeUndefined();
    const links = [...root.querySelectorAll('#contato a')].map((a) => a.textContent?.trim());
    expect(links).not.toContain(linkedin.handle);
  });
});
