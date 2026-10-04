import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RESUME } from '../../data/resume';
import { ActionLink } from '../../shared/action-link/action-link';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { TagList } from '../../shared/tag-list/tag-list';
import { OrbitIllustration } from './orbit-illustration/orbit-illustration';

@Component({
  selector: 'app-resume',
  imports: [RouterLink, ActionLink, OrbitIllustration, SectionHeading, TagList],
  templateUrl: './resume.html',
})
export class Resume {
  protected readonly resume = RESUME;
  protected readonly mailto = `mailto:${RESUME.contact.email}`;
}
