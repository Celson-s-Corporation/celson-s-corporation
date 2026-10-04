import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  protected readonly profile = PROFILE;
  protected readonly featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 2);
}
