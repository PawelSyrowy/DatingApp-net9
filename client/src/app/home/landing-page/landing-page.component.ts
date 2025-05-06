import { Component } from '@angular/core';
import { NewRegisterComponent } from '../../register/new-register/new-register.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  imports: [NewRegisterComponent],
})
export class LandingPageComponent {
  registerMode = false;

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
}
