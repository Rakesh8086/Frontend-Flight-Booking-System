import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-change-password',
  standalone: false,
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  changePasswordForm: any = {
    email: '',
    existingPassword: '',
    newPassword: ''
  };
  errorMessage = '';
  isPasswordNotChanged = true;
  response = '';  
  constructor(private authService: AuthService){

  }
  onSubmit(): void {
    const email = this.changePasswordForm.email;
    const existingPassword = this.changePasswordForm.existingPassword;
    const newPassword = this.changePasswordForm.newPassword;
    this.authService.changePassword(email, existingPassword, newPassword).subscribe({
        next: message => {
          this.response = message;
          this.isPasswordNotChanged = false;
        },
        error: err => {
          this.errorMessage = err.error;
          this.isPasswordNotChanged = true;
        }
      }
    );
  }
}
