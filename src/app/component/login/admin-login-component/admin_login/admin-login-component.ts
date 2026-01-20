import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Admin } from '../../../services/admin'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-login-component',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './admin-login-component.html',
  styleUrls: ['./admin-login-component.css']
})
export class AdminLoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private adminService: Admin, private router: Router,private authService: AuthService   ) {} 

  login() {
    if (!this.email || !this.password) {
      this.message = 'Please enter email and password';
      return;
    }

    this.adminService.login(this.email, this.password).subscribe({
      next: (response: string) => { 
        this.message = response;
        if (response === 'Login successful') {
          this.router.navigate(['/admin/dashboard']);
        }
      },
      error: (error: any) => {
        this.message = 'Invalid email or password';
      }
    });
    this.authService.setUserType('admin');
    this.router.navigate(['/admin/dashboard']);
  }
  goBackToLanding() {
    this.router.navigate(['/']);
  }
}