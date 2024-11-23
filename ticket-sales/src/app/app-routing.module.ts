import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadComponent: () => import('./modulos/vista-principal/vista-principal.component')
  },
   { path: 'evento/:id',
    loadComponent: () => import('./modulos/evento/evento.component')
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
