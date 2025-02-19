import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { SimpleComponent } from './components/resource/material/simple/simple.component';
import { TableComponent } from './table/table.component';
import { Landing } from './landing/landing.component';
import { LoginComponent } from './login/login.component'; // Importa el componente de login
import { AuthGuard } from './login/authGuard.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', // Redirige al login por defecto
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent, // Ruta del login
  },
  {
    path: 'listado',
    component: SimpleComponent,
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: 'proceso',
    component: TableComponent,
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: 'landing',
    component: Landing,
    canActivate: [AuthGuard], // Protege esta ruta
  },
  {
    path: '**',
    redirectTo: '/login', // Redirige al login si la ruta no existe
  },
];
