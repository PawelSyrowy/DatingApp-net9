import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { AccountService } from '../_services/account.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [RegisterComponent],
})
export class HomeComponent {
  accountService = inject(AccountService);
  private router = inject(Router);
  registerMode = false;

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  goTo(path: string)
  {
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
      this.router.navigateByUrl(path);
  }
}
