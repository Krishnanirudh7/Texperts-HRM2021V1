import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full' },
  {
    path: 'authentication',
    loadChildren: () => import('./Modules/authentication/authentication.module').then(a => a.AuthenticationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Modules/home/home.module').then(h => h.HomeModule)
  },
  { path: '**', redirectTo: 'authentication', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
