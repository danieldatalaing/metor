import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { SimpleComponent } from './components/resource/material/simple/simple.component';
import { TableComponent } from './table/table.component';
import { LandingComponent } from './landing/landing.component';




export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'listado',
    component: SimpleComponent,
  },
  {
    path: 'prueba',
    component: TableComponent,
  },
];
