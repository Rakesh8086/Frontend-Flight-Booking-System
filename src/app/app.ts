import { Component, signal, OnInit } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterOutlet,
  ],
})
export class App implements OnInit { 
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false; // need this for add flight page
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if(this.isLoggedIn) {
      const user = this.storageService.getUser(); // user obj has roles in it
      this.roles = user.roles;
      this.username = user.username;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    }
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log("Backend signout successful:", res);
        this.storageService.clean();
        window.location.reload(); 
      },
      error: err => {
        console.error("Logout API error:", err);
        // if api fails, still clear local storage
        this.storageService.clean();
        window.location.reload();
      }
    });
  }
}
