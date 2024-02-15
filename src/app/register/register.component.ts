import { AuthServiceService } from './../servicios/auth.service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  isSubmitted: boolean=false;
  contactForm!:FormGroup;
  http= inject(HttpClient);
  AuthService= inject(AuthServiceService);
  router=inject(Router);



constructor(private formBuilder:FormBuilder) {
  this.contactForm= this.formBuilder.group({
    username: ['',Validators.required],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(8)]],
  });
}
onSubmit(): void{
  this.isSubmitted=true;
  this.http.post<{ user: User}>('https://api.realworld.io/api/users', {user:this.contactForm.getRawValue(),
}
).subscribe((response)=>{
  console.log('response', response)
  localStorage.setItem('token', response.user.token);
  this.AuthService.currentUserSig.set(response.user);
  this.router.navigateByUrl('/')
})
}
}