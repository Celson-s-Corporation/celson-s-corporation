import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type Variant = 'primary' | 'secondary';
type Icon = 'arrow-up-right' | 'arrow-down';

// Horizontal padding is 20px from the outer edge in the design, i.e. minus the 1px border.
const BASE =
  'inline-flex h-12 items-center gap-[18px] rounded border px-[19px] text-[13px] leading-[normal] font-semibold whitespace-nowrap transition';

const VARIANTS: Record<Variant, string> = {
  primary: 'border-gold bg-gold text-ink hover:brightness-110',
  secondary: 'border-line bg-ink text-paper hover:border-gold',
};

/**
 * Call-to-action link. Pass `fragment` to scroll to a section of the current page, or `href`
 * for anything else (e.g. `mailto:`).
 */
@Component({
  selector: 'app-action-link',
  imports: [RouterLink],
  templateUrl: './action-link.html',
})
export class ActionLink {
  readonly label = input.required<string>();
  readonly variant = input<Variant>('primary');
  readonly icon = input<Icon>('arrow-up-right');
  readonly fragment = input<string>();
  readonly href = input<string>();

  protected readonly classes = computed(() => `${BASE} ${VARIANTS[this.variant()]}`);
  protected readonly iconSrc = computed(() => `assets/portfolio/${this.icon()}.svg`);
}
