import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'hero-widget',
  imports: [ButtonModule, RippleModule],
  template: `
    <style>
      #hero {
        position: relative; /* Necesario para posicionar el ::before */
        display: flex;
        flex-direction: column;
        padding-top: 1.5rem; /* pt-6 en Tailwind */
        padding-left: 1.5rem; /* px-6 en Tailwind */
        padding-right: 1.5rem; /* px-6 en Tailwind */
        padding-left: 5rem; /* lg:px-20 en Tailwind */
        padding-right: 5rem; /* lg:px-20 en Tailwind */
        overflow: hidden;
      }

      #hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('http://localhost:4200/imgs/working.jpg');
        background-size: cover;
        background-position: center;
        clip-path: ellipse(150% 87% at 93% 13%); /* El mismo clip-path */
        z-index: -1; /* Asegura que esté detrás del contenido */
      }

      #hero {
        /* Estilos para el degradado (se aplican al elemento principal) */
        background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.2),
            rgba(255, 255, 255, 0.2)
          ),
          radial-gradient(
            77.36% 256.97% at 77.36% 57.52%,
            rgb(238, 239, 175) 0%,
            rgb(195, 227, 250) 100%
          );
      }

      .fondoescrito {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        padding: 2%;
        border-radius: 20px;
      }
    </style>
    <div
      id="hero"
      class="animate-zoom flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
      style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2),
             rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%,
              rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%);
              clip-path: ellipse(150% 87% at 93% 13%);


}"
    >
      <div class="fondoescrito mx-6 md:mx-20 mt-0 md:mt-6">
        <h1 class="text-6xl font-bold text-white leading-tight">
          <span class="font-light block">BIENVENIDOS</span>PARTIDAS CON SUS
          ANÁLISIS DE PRECIOS UNITARIOS (APU) E INSUMOS
        </h1>
        <p class="font-normal text-2xl leading-normal md:mt-4 text-white">
          JUNTOS SUMAMOS DIVIDIDOS RESTAMOS
        </p>
        <button
          pButton
          pRipple
          [rounded]="true"
          type="button"
          label="COMENZAR"
          class="!text-xl mt-8 !px-4"
        ></button>
      </div>
      <div class="flex justify-center md:justify-end">
        <img src="Metor.webp" alt="Hero Image" class="p-8 mb-4" />
      </div>
    </div>
  `,
})
export class HeroWidget {}
