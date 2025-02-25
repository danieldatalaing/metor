import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'topbar-widget',
  imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
  template: `
    <div class="flex justify-between items-center">
      <a href="https://datalaing.com/site/contacto/" target="_blank">
        <img
          src="data.png"
          class="w-48 sm:w-60 md:w-78 lg:w-80 h-auto"
          alt=""
        />
      </a>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="flex items-center" href="#">
          <span
            class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal"
          >
            <a
              pButton
              [text]="true"
              severity="secondary"
              [rounded]="true"
              pRipple
              class="lg:!hidden"
              pStyleClass="@next"
              enterClass="hidden"
              leaveToClass="hidden"
              [hideOnOutsideClick]="true"
            >
              <i class="pi pi-bars !text-2xl"></i>
            </a>
            <style>
              .fondoMenu {
                color: black;
                background:rgba(38, 117, 220, 0.92);
                margin-top: -2%;
              }
              .colortexto{
                color: white;
                font-weight: 900;
              }
            </style>
            <div
              class="items-center fondoMenu bg-red-900 sm:bg-red-900  dark:bg-surface-900 grow justify-center lg:justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border"
            >
              <br />
              <ul
                class=" list-none p-0 m-0 flex lg:items-center select-none sm:bg-red flex-col lg:flex-row cursor-pointer gap-8"
              >
                <li>
                  <a
                    routerLink="/landing"
                    pRipple
                    class="colortexto mb-8 px-10 py-2 text-white dark:text-surface-0 font-medium text-xl rounded transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                  >
                    <span><i class="pi pi-home"></i> INICIO</span>
                  </a>
                </li>
                <li>
                  <p class="text-black">|</p>
                </li>
                <li>
                  <a
                    routerLink="/proceso"
                    pRipple
                    class="colortexto mb-8 px-10 py-2 text-white dark:text-surface-0 font-medium text-xl rounded transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                  >
                    <span><i class="pi pi-play-circle"></i> COMENZAR</span>
                  </a>
                </li>
                <li>
                  <a
                    (click)="logout()"
                    pRipple
                    class="colortexto mb-8 px-10 py-2 text-white dark:text-surface-0 font-medium text-xl rounded transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                  >
                    <span
                      >
                      <i class="pi pi-sign-in text-white-900 mr-2"></i> Cerrar
                      sesión</span
                    >
                  </a>
                </li>

              </ul>
              <div
                class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2"
              ></div>
            </div>
          </span>
            </div>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <a href="https://www.metoronline.com/contacto" target="_blank">
        <img
          src="Metor.png"
          class="w-24 sm:w-32 md:w-14 lg:w-40 h-auto"
          alt=""
        />
      </a>
    </div>
  `,
})
export class TopbarWidget {
  constructor(public router: Router, public authService: AuthService) {}

  logout(): void {
    const confirmLogout = confirm('¿Está seguro de que desea cerrar sesión?');
    if (confirmLogout) {
      this.authService.logout();
    }
  }
}
