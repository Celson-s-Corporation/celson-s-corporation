import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);

  /**
   * Whether to wrap the page in the shared header and footer. Routes that render their own
   * chrome set `data: { standalone: true }`. Stays `false` until the first navigation ends, so
   * the shared chrome never flashes in before a standalone page.
   */
  protected readonly showChrome = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.data['standalone'] !== true;
      }),
    ),
    { initialValue: false },
  );
}
