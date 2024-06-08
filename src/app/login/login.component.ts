import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './../login.service';  // Adjust the path as necessary
import { LoginModel } from './../login-model';  // Adjust the path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials: LoginModel = this.loginForm.value;
      this.loginService.login(credentials).subscribe({
        next(value) {
        // Handle successful login
        console.log('Login successful', value);
      },error(err) {
        // Handle login error
        console.error('Login failed', err);
      }});
    }
  }
}
