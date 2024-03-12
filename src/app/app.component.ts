import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isAdminPanel = false; // I
  title = 'healthplus';

  constructor(private router: Router) { } // Inject Router if using route-based logic

  ngOnInit() {
    // Set isAdminPanel based on route or logic here (optional with Router)
    this.isAdminPanel = this.router.url.startsWith('/admin'); // Example for admin routes starting with '/admin'
  }
}

