import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: false
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  fieldErrors: any = {};

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef){ 

  }
  onSubmit(): void {
    this.fieldErrors = {};
    this.isSignUpFailed = false;
    const { username, email, password } = this.form;
    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.isSignUpFailed = true;
        this.fieldErrors = err.error || {};
        this.cdr.detectChanges();
      }
    });
  }
}