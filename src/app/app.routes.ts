import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./articulos/articulos.routes').then(m => m.ARTICULOS_ROUTES)
  }
];
