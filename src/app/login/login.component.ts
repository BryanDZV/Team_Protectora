import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorsComponent } from '../form-errors/form-errors.component';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../servicios/auth.service.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormErrorsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isSubmitted: boolean = false;
  fb = inject(FormBuilder);
  contactForm!: FormGroup;
  http = inject(HttpClient);
  authService = inject(AuthServiceService);
  router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  showPassword(): void {
    const passwordInput = document.getElementById(
      'passwordInput'
    ) as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.http
      .post<{ user: User }>('https://api.realworld.io/api/users/login', {
        user: this.contactForm.getRawValue(),
      })
      .subscribe((response) => {
        console.log('response', response);
        localStorage.setItem('token', response.user.token);
        this.authService.currentUserSig.set(response.user);
        this.router.navigateByUrl('/perfil');
      });
  }
}
