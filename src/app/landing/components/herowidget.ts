import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'hero-widget',
  imports: [ButtonModule, RippleModule],
  template: `
    <div
      id="hero"
      class="overflow-hidden"
      style="background: linear-gradient(0deg,
       rgba(255, 255, 255, 0.2),
       rgba(255, 255, 255, 0.2)),
       radial-gradient(77.36% 256.97% at 77.36% 57.52%,
       rgba(255, 255, 255, 0.1) 0%,
       rgba(17, 17, 17, 0.75) 100%);
       clip-path: ellipse(150% 87% at 93% 13%)"
    >
      <div class=" fondo mx-6 md:mx-20 mt-0 md:mt-28">
        <h1 class="text-6xl font-bold text-white leading-tight">
          <span class="font-light block">Bienvenidos Metor - DataLaing</span>
        </h1>
        <p
          class="text-white font-normal text-2xl leading-normal md:mt-4 text-gray-700"
        >
          JUNTOS SUMAMOS DIVIDIDOS RESTAMOS
        </p>
      </div>
      <div class="flex justify-center md:justify-end p-24">
        <button
          pButton
          pRipple
          [rounded]="true"
          type="button"
          label="Comenzar"
          class="!text-xl mt-8 !px-4"
        ></button>
      </div>
    </div>
  `,
})
export class HeroWidget {}
