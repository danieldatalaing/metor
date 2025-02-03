import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { SimpleComponent } from './components/resource/material/simple/simple.component';
import { TableComponent } from './table/table.component';
import { Landing } from './landing/landing.component';
import { FileListComponent } from './file-list/file-list.component';





export const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'listado',
    component: SimpleComponent,
  },
  {
    path: 'proceso',
    component: TableComponent,
  },
  {
    path: 'fileList',
    component: FileListComponent,
  }
];
