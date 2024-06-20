import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authPaths, authRoutes } from './modules/auth/auth-routes';
import { heroPaths } from './modules/hero/hero-route';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: authRoutes.logIn,
    pathMatch: 'full',
  },
  {path: authPaths.base, loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule)},
  {path: '', loadChildren: () => import('../app/modules/hero/hero.module').then(m => m.HeroModule)},
  {
      path      : '**',
      redirectTo: 'sample'
  }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
