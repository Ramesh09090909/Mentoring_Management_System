import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  role = '';
  loginSuccess = false;

  constructor(private router: Router) {} // ✅ Inject Router here

  onLogin() {
    if (this.username === 'admin') {
      this.role = 'admin';
    } else if (this.username.startsWith('mentor')) {
      this.role = 'mentor';
    } else {
      this.role = 'student';
    }

    this.loginSuccess = true;

    this.router.navigate(['/dashboard'], {
      queryParams: {
        role: this.role,
        user: this.username
      }
    });
  }
}
