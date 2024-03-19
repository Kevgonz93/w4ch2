import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerDaComponent } from './forms/per-da/per-da.component';
import { LoginComponent } from './forms/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<header>
      <h1>CHALLANGE 02</h1>
    </header>

    <main>
      <app-per-da />
    </main>

    <footer>ISDI Coders - Madrid</footer> `,
  styleUrl: './app.component.css',
  imports: [RouterOutlet, PerDaComponent, LoginComponent],
})
export class AppComponent {
  formPages: string[] = ['per-da', 'login'];
  currentPage: string = 'per-daForm';

  selectPage(page: string) {
    this.currentPage = page;
  }
}
