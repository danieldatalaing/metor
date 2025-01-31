import { Component } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  imports: [],
  template: `
    <style>
      .custom-height {
        height: 900px; /* Cambia 500px a la altura que desees */
      }
    </style>

    <div class="flex items-center justify-center">
      <img
        src="https://datalaing.com/site/wp-content/uploads/2025/01/FONDO-MAPREX-2025-1024x760.jpg"
        class="rounded-md  object-cover custom-height"
      />
    </div>
  `,
})
export class Dashboard {}
