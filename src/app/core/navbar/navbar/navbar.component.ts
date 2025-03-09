import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar1',
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isAuthenticated = true; // Change this dynamically based on authentication state

  signIn() {
    // Simulate sign-in (replace with actual auth logic)
    this.isAuthenticated = true;
  }
}
