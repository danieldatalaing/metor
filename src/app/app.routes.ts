import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { SimpleComponent } from './components/resource/material/simple/simple.component';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            {
                path: 'listado',
                component: SimpleComponent
            }
        ]
    }
];
