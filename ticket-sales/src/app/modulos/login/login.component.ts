import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, ReactiveFormsModule, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimeModule } from 'src/app/prime.module';
import { hasEmailError, isRequired } from 'src/app/utils/validators';

interface FormLogin {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, PrimeModule, ReactiveFormsModule],
})
export default class LoginComponent {
  loginForm: FormGroup<FormLogin>;

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.loginForm);

  }

  isEmailRequired() {
    return hasEmailError(this.loginForm);
  }

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group<FormLogin>({
      email: new FormControl('', {
        nonNullable: true, 
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Usuario:', email);
      console.log('Contraseña:', password);
    } else {
      console.log('Formulario inválido');
    }
  }
}
