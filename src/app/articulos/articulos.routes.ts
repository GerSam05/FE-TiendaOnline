import { Routes } from '@angular/router';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';
import { ArticulosDetailComponent } from './articulos-detail/articulos-detail.component';
import { ArticulosAddEditComponent } from './articulos-add-edit/articulos-add-edit.component';

export const ARTICULOS_ROUTES: Routes = [
  { path: 'articulos', component: ArticulosListComponent },
  { path: 'detail/:id', component:ArticulosDetailComponent },
  { path: 'add', component:ArticulosAddEditComponent },
  { path: 'edit/:id', component:ArticulosAddEditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];