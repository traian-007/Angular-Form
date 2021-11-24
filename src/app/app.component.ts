import { Component } from '@angular/core';
import { FormControl, FormGroup, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Form';
  loginForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
  });
  registerUser() {
    console.warn(this.loginForm);
  }
}
