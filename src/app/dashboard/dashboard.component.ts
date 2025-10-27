import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  role = '';
  username = '';
  student = ''; // ✅ Add this line
  notificationCount = 3;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.role = params['role'] || '';
      this.username = params['user'] || '';
      this.student = params['student'] || '';
      this.role = params['role'] || '';
 // ✅ Optional: if passed via query params
    });
  }

  goToNotifications() {
    this.router.navigate(['/student/notifications']);
  }
}

