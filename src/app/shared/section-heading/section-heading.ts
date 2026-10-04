import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  host: { class: 'block w-full' },
  templateUrl: './section-heading.html',
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  /** `id` placed on the heading so the parent `<section>` can reference it via `aria-labelledby`. */
  readonly titleId = input<string>();
}
