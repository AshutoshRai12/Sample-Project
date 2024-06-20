import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { heroPaths } from './hero-route';
import { DashboardComponent } from './dashboard/dashboard.component';

export const HERO_ROUTES: Route[] = [
  { path: heroPaths.dashboard, component: DashboardComponent },
//   {
//     path: authPaths.register,
//     component: RegisterPageComponent,
//   },
 
];
@NgModule({
  imports: [RouterModule.forChild(HERO_ROUTES)],
  exports: [RouterModule]
})
export class HeroRouterModule {

}