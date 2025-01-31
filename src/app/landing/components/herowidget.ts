import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'hero-widget',
  imports: [ButtonModule, RippleModule],
  template: `
    <style>
      .overlay:before {
        content: '';
        position: fixed;
        width: 100%;
        height: 100%;
        background-image: url('public/working.jpg');
        background-repeat: no-repeat;
        background-position: 0;
        background-size: cover;
        margin: 0;
        animation-name: animbk;
        animation-duration: 30s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        z-index: -2;
      }
      .fondo {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 2rem;
        width: 60%;
        border-radius: 20px;
      }
    </style>
    <div
      id="hero"
      class="overlay  overflow-hidden"
      style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
    >
      <div class=" fondo mx-6 md:mx-20 mt-0 md:mt-28">
        <h1 class="text-6xl font-bold text-white leading-tight">
          <span class="font-light block">BIENVENIDOS METRO - DataLaing</span>
        </h1>
        <p
          class="text-white font-normal text-2xl leading-normal md:mt-4 text-gray-700"
        >
          JUNTOS SUMAMOS DIVIDIDOS RESTAMOS
        </p>
        <button
          pButton
          pRipple
          [rounded]="true"
          type="button"
          label="Comenzar"
          class="!text-xl mt-8 !px-4"
        ></button>
      </div>
      <div class="flex justify-center md:justify-end">
        <img
          src="https://datalaing.net/assets/img/logo_blanco.png"
          alt="Hero Image"
          width="30%"
        />
      </div>
    </div>
  `,
})
export class HeroWidget {}
