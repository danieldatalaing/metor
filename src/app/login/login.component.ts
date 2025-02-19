import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { environment } from '../../environment/environment';


@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RouterModule,
    RippleModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  backgroundImageUrl = environment.apiUrl + '/metor.jpg';
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username === '' || this.password === '') {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    if (this.authService.login(this.username, this.password)) {
      alert('Inicio de sesión exitoso. Bienvenido ' + this.username + '!');
      this.router.navigate(['/landing']); // Redirige a la página principal
    } else {
      this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
    }
  }
}
