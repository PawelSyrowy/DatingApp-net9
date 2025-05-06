import { Component, inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [LandingPageComponent],
})
export class HomeComponent {
  accountService = inject(AccountService);
  private router = inject(Router);

  goTo(path: string)
  {
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
      this.router.navigateByUrl(path);
  }
}
