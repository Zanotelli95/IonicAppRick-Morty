import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'userslist',
    pathMatch: 'full'
  },
  {
    path: 'userslist',
    loadChildren: () => import('./userslist/userslist.module').then( m => m.UserslistPageModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
