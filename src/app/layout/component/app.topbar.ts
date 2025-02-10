import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StyleClassModule,
    //AppConfigurator
  ],
  template: ` <style>
      .barra {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.36); /* Sombra inferior suave */
        border-radius: 0 0 50% 50%; /* Valores para las esquinas: arriba-izquierda arriba-derecha abajo-derecha abajo-izquierda */
        /* Otras propiedades que puedas necesitar */
        padding: 20px; /* Ajusta el padding para que el contenido no se pegue al borde */
        height: 100px; /* Ajusta la altura según necesites */
        display: flex; /* Para alinear los elementos horizontalmente */
        align-items: center; /* Para centrar verticalmente los elementos */
        justify-content: space-between; /* Para distribuir los elementos a los lados */
      }

      .layout-topbar-logo-container {
        display: flex; /* Asegura que los logos estén en línea */
        align-items: center; /* Centra verticalmente los logos */
        margin-bottom: 30px;
      }

      .layout-topbar-logo {
        margin: 0 10px; /* Espacio entre los logos */
      }

      .layout-topbar-actions {
        display: flex; /* Asegura que los links estén en línea */
        margin-bottom: 30px;
      }

      .layout-topbar-actions a {
        margin: 0 10px; /* Espacio entre los links */
      }

      .layout-topbar-actions a:hover {
        background-color: rgba(220, 38, 38, 0.73); /* O el color que desees */
        color: white;
        border-radius: 5px; /* Bordes redondeados para los links */
        padding: 5px 15px; /* Ajusta el padding para el hover */
      }

      /* Estilos para el botón de tema oscuro */
      .layout-config-menu {
        display: flex;
        align-items: center;
        margin-right: 20px; /* Espacio a la derecha del botón */
        color: black;
      }

      .layout-topbar {
        margin-bottom: 200px;
      }

      .layout-topbar-action {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        font-size: 1.5rem; /* Ajusta el tamaño del icono */
      }
    </style>
    <img
      src="metor.jpg"
      alt=""
      style="position: fixed;  width: 100%; height: 100%; z-index: -1;"
    />
    <div class="layout-topbar barra">
      <div
        class="layout-topbar-logo-container flex justify-center items-center"
      >
        <a class="layout-topbar-logo" routerLink="/" class="ml-8">
          <img src="Metor.webp" width="50" height="40" />
          <span></span>
        </a>
        <a class="layout-topbar-logo" routerLink="/" class="ml-8">
          <img [src]="logoSrc" width="120" />
          <span></span>
        </a>
      </div>

      <div class="flex justify-center items-left layout-topbar-actions">
        <a
          routerLink="/"
          class="mr-4 ml-4 rounded p-2 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-red-200 hover:border-red-500 hover:border-solid hover:border-2"
          ><i class="pi pi-home"></i><b> Inicio</b></a
        >
        <a
          href="listado"
          class="mr-4 rounded p-2 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-red-200 hover:border-red-500 hover:border-solid hover:border-2"
          ><i class="pi pi-file"></i><b> Listado</b></a
        >
        <a
          href="proceso"
          class="rounded p-2 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-red-200 hover:border-red-500 hover:border-solid hover:border-2"
          ><i class="pi pi-microchip"></i><b> Procesos de Contratación</b></a
        >
        <a
          href="https://datalaing.net/#/login"
          target="_blank"
          class="rounded p-2 transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-red-200 hover:border-red-500 hover:border-solid hover:border-2"
          ><i class="pi pi-link"></i><b> MaPreX Web</b></a
        >
      </div>

      <div class="layout-topbar-actions">
        <div class="layout-config-menu">
          <button
            type="button"
            class="layout-topbar-action"
            (click)="toggleDarkMode()"
          >
            <i
              [ngClass]="{
                'pi ': true,
                'pi-moon': layoutService.isDarkTheme(),
                'pi-sun': !layoutService.isDarkTheme()
              }"
            ></i>
          </button>
          <div class="relative"></div>
        </div>

        <button
          class="layout-topbar-menu-button layout-topbar-action"
          pStyleClass="@next"
          enterFromClass="hidden"
          enterActiveClass="animate-scalein"
          leaveToClass="hidden"
          leaveActiveClass="animate-fadeout"
          [hideOnOutsideClick]="true"
        ></button>

        <div class="layout-topbar-menu hidden lg:block">
          <div class="layout-topbar-menu-content"></div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br />`,
})
export class AppTopbar {
  items!: MenuItem[];

  get logoSrc() {
    return this.layoutService.isDarkTheme() ? 'data.png' : 'DATALAING-1.png';
  }

  constructor(public layoutService: LayoutService) {}

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }
}
