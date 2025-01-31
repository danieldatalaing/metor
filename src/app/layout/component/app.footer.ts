import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  template: `<div class="layout-footer">
    Listado Realizado por
    <a
      href="https://datalaing.com/site/"
      target="_blank"
      rel="noopener noreferrer"
      class="text-primary font-bold hover:underline"
      ><img
        width="95"
        src="https://i0.wp.com/datalaingservicios.net/wp-content/uploads/2024/10/DATALAING-1.png?fit=2560%2C582&ssl=1"
        alt=""
    /></a>
  </div>`,
})
export class AppFooter {}
