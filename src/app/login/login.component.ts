import { Component, OnInit } from '@angular/core';
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
import { Dialog } from 'primeng/dialog';
import { HttpClient } from '@angular/common/http';


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
    Dialog,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ipAddress: string | undefined;
  backgroundImageUrl = environment.apiUrl + '/metor.jpg';
  username = '';
  password = '';
  errorMessage = '';

  visible: boolean = false;
  visible2: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get<{ ip: string }>('https://api.ipify.org?format=json')
      .subscribe(
        (data) => {
          this.ipAddress = data.ip;
        },
        (error) => {
          console.error('Error al obtener la IP:', error);
        }
      );
  }

  login() {
    if (this.username === '' || this.password === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (this.authService.login(this.username, this.password)) {
      this.visible2 = true;
      setTimeout(() => {
        this.router.navigate(['/landing']); // Redirige a la página principal
      }, 2000);
    } else {
      this.visible = true;
    }
  }
}
