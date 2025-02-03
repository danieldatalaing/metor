import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TopbarWidget } from './components/topbarwidget.component';
import { HeroWidget } from './components/herowidget';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    RouterModule,
    TopbarWidget,
    HeroWidget,

    RippleModule,
    StyleClassModule,
    ButtonModule,
    DividerModule,
  ],

  template: `
    <style>
      /* Estilos para la imagen de fondo (pseudo-elemento ::before) */
      .hero {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/fondo3.jpg');
        /* Ruta a la imagen */
        background-size: cover;
        /* o contain si prefieres */
        background-position: center;
        /* Posición inicial */
        z-index: 1;
        /* Asegura que esté detrás del contenido */
        animation: expandir 10s linear infinite;
        /* Animación de expansión */

        /* Animación */
      }
    </style>
    <div class="hero bg-surface-0 dark:bg-surface-900">
      <div id="home" class="landing-wrapper overflow-hidden">
        <topbar-widget
          class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static"
        />
        <hero-widget />
      </div>
    </div>
  `,
  styleUrls: ['./landing.component.scss'],
})
export class Landing {}
