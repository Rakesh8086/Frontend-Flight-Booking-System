import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
  standalone: false
})
export class ChangePasswordComponent {

  form: any = {
    email: null,
    existingPassword: null,
    newPassword: null
  };

  isSuccessful = false;
  isChangeFailed = false;
  fieldErrors: any = {};
  serviceError = '';

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {

  }
  onSubmit(): void {
    this.fieldErrors = {};
    this.serviceError = '';
    this.isChangeFailed = false;
    const { email, existingPassword, newPassword } = this.form;

    this.authService.changePassword(email, existingPassword, newPassword).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isChangeFailed = false;
      },
      error: err => {
        this.isChangeFailed = true;
        this.fieldErrors = {};
        this.serviceError = '';
        if(typeof err.error === 'string'){
          try {
            const parsed = JSON.parse(err.error);
            if(typeof parsed === 'object'){
              this.fieldErrors = parsed;
            } 
            else {
              this.serviceError = err.error;
            }
          } 
          catch {
            this.serviceError = err.error;
          }
        }
        else if(typeof err.error === 'object'){
          this.fieldErrors = err.error;
        }
        this.cdr.detectChanges(); 
      }
    });
  }
}
