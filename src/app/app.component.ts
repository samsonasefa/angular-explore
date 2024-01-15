import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomeComponent, RouterModule],
  template: ` <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
      <router-outlet name="secondRouter"></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-explore';
}
