import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AllPrimeE';

  @ViewChild('navbarNav') navbarNav: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Listen for navigation events and collapse the navbar
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeNavbar(); // Close the navbar after navigation
      }
    });
  }

  toggleNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      navbarCollapse.classList.toggle('show'); // Toggle collapse manually
    }
  }

  closeNavbar() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show'); // Collapse the navbar if it's open
    }
  }
}
