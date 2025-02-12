import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('slideAnimation', [
      transition('* => *', [
        style({ transform: 'translateX(100%)' }), // Inicia fuera de la pantalla
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })), // Desliza hacia la posición normal
      ]),
    ]),
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }), // Estado inicial
        animate('1.5s ease-in-out', style({ opacity: 1 })), // Estado final
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'documents';
}
