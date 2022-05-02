import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './presentation/components/about-page/about-page.component';
import { HomePageComponent } from './presentation/components/home-page/home-page.component';
import { SecretRouteComponent } from './presentation/components/secret-route/secret-route.component';
import { AuthGuard } from './presentation/guards/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'secret', component: SecretRouteComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
