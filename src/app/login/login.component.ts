import { Component,} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormErrorsComponent } from '../form-errors/form-errors.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormErrorsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isSubmitted:boolean=false;
  contactForm!:FormGroup
  constructor(private formBuilder:FormBuilder) {
    this.contactForm= this.formBuilder.group({
      mail:['',[Validators.required]],
      password:['',[Validators.required, Validators.minLength(8)]],
    });
  }
  showPassword(): void {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  }
 
  onSubmit(): void {
    this.isSubmitted = true;
    console.log(this.contactForm);
    console.log(this.contactForm.value); 
  }
}

