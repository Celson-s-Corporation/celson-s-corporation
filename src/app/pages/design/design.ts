import { Component } from '@angular/core';
import { DESIGN_WORK } from '../../data/design-work';

@Component({
  selector: 'app-design',
  imports: [],
  templateUrl: './design.html',
})
export class Design {
  protected readonly work = DESIGN_WORK;
}
