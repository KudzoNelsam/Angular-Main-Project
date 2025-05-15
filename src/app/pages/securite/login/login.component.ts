import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  previousStep() {
    if (this.step > 1) {
      this.step--;
    }
  }
  step = 1;

  nextStep() {
    if (this.step < 4) {
      this.step++;
    }

  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });
}
