import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'topbar-widget',
  imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
  template: `
    <style>
      .angolog1 {
        width: 15%;
      }
      .angolog2 {
        width: 5%;
      }
    </style>
    <div class="flex justify-between items-center angolog1">
      <img src="DATALAING-1.png" alt="" />
    </div>
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <a class="flex items-center" href="#">
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

            <div
              class="items-center bg-surface-0 dark:bg-surface-900 grow justify-center lg:justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border"
            >
              <ul
                class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8"
              >
                <li>
                  <a
                    (click)="router.navigate(['/'], { fragment: 'home' })"
                    pRipple
                    class="px-4 py-2 text-surface-900 dark:text-surface-0 font-medium text-xl rounded transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                  >
                    <span>INICIO</span>
                  </a>
                </li>
                <li>
                  <p class="text-red-500">|</p>
                </li>
                <li>
                  <a
                    routerLink="/listado"
                    pRipple
                    class="px-4 py-2 text-surface-900 dark:text-surface-0 font-medium text-xl rounded transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
                  >
                    <span>LISTADO</span>
                  </a>
                </li>
              </ul>
              <div
                class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2"
              ></div>
            </div>
          </span>
        </a>
      </div>
    </div>

    <div class="flex flex-end items-start  angolog2">
      <img src="Metor.webp" alt="" />
    </div>
  `,
})
export class TopbarWidget {
  constructor(public router: Router) {}
}
