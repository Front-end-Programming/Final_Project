import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private router: Router) { }


  onLogOut(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }
}
