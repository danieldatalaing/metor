import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'topbar-widget',
  imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
  template: `
    <div class="topbar flex items-center justify-between w-full h-20 px-6 ">
      <div class="logo-left">
        <img
          src="https://datalaing.net/assets/img/logo_blanco.png"
          alt="Logo Izquierdo"
          class="h-12"
        />
      </div>

      <div class="nav-buttons flex gap-4">
        <button
          (click)="router.navigate(['/landing'], { fragment: 'home' })"
          pRipple
          class="px-6 py-3 text-white font-medium rounded-lg bg-blue-500 hover:bg-blue-700 transition duration-300 shadow-md"
        >

        </button>
        <button
          (click)="router.navigate(['/listado'], { fragment: 'features' })"
          pRipple
          class="px-6 py-3 text-white font-medium rounded-lg bg-green-500 hover:bg-green-700 transition duration-300 shadow-md"
        >
          <span>Dashboard</span>
        </button>
      </div>


      <div class="logo-right">
        <img
          src="https://energytech.com.ve/img/Metor.webp"
          alt="Logo Derecho"
          class="h-12"
        />
      </div>

      <a
        pButton
        [text]="true"
        severity="secondary"
        [rounded]="true"
        pRipple
        class="lg:!hidden absolute top-4 right-4"
        pStyleClass="@next"
        enterClass="hidden"
        leaveToClass="hidden"
        [hideOnOutsideClick]="true"
      >
        <i class="pi pi-bars !text-2xl"></i>
      </a>
    </div>
  `,
  styles: [
    `
      .topbar {
        /* Estilos generales del contenedor */
        background-color: rgba(
          255,
          255,
          255,
          0.54
        ); /* Fondo semi-transparente */
        border-radius: 20px;
      }

      .logo-left,
      .logo-right {
        /* Estilos para los logos */
        display: flex; /* Para centrar verticalmente el logo */
        align-items: center;
      }
      .nav-buttons a {
        /* Estilos para los botones */
      }
    `,
  ],
})
export class TopbarWidget {
  constructor(public router: Router) {}
}
