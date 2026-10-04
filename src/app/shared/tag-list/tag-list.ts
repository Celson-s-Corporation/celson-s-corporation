import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  host: { class: 'block w-full' },
  templateUrl: './tag-list.html',
})
export class TagList {
  readonly tags = input.required<readonly string[]>();
}
