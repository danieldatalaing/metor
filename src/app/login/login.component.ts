import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[FormsModule]
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  login() {
    if (this.username === '' || this.password === '') {
      this.errorMessage = 'Por favor, complete todos los campos.';
      return;
    }

    this.http.get<any>('claves.json').subscribe(
      (data) => {
        const usuarios = data.usuarios;
        let usuarioEncontrado = false;

        for (let i = 0; i < usuarios.length; i++) {
          if (
            usuarios[i].nombre === this.username &&
            usuarios[i].clave === this.password
          ) {
            usuarioEncontrado = true;
            break;
          }
        }

        if (usuarioEncontrado) {
          alert('Inicio de sesión simulado. Bienvenido ' + this.username + '!');
          // Redirige a otra página o muestra contenido exclusivo
        } else {
          this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
        }
      },
      (error) => {
        console.error('Error al cargar el archivo JSON:', error);
        this.errorMessage =
          'Error al iniciar sesión. Inténtelo de nuevo más tarde.';
      }
    );
  }
}
