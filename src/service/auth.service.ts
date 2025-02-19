import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fixedPassword = 'ext.Metor/Datalaing'; // Clave fija
  private readonly AUTH_KEY = 'isAuthenticated'; // Clave para localStorage

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (password === this.fixedPassword) {
      localStorage.setItem(this.AUTH_KEY, 'true'); // Guarda el estado de autenticación
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_KEY); // Elimina el estado de autenticación
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.AUTH_KEY) === 'true'; // Verifica el estado de autenticación
  }
}
