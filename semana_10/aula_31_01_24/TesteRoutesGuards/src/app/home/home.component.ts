import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToAboutPage() {
    this.router.navigate(['/about']);
  }

  goToContactPage(){
    this.router.navigate(['/contact'])
  }
}
