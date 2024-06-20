import { Route, RouterModule } from '@angular/router';
import { authPaths } from './auth-routes';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NgModule } from '@angular/core';

export const AUTH_ROUTES: Route[] = [
  { path: authPaths.logIn, component: LoginPageComponent },
  {
    path: authPaths.register,
    component: RegisterPageComponent,
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRouterModule {

}