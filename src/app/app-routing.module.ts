import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from './presentation/guards/guards.guard';
import { AuthenticationPage } from './presentation/pages/authentication/authentication.page';
import { AuthenticationPageModule } from './presentation/pages/authentication/authentication.page.module';
import { AuthenticationComponent } from './presentation/components/authentication/authentication.component';

const routes: Routes = [
  {path: 'login', component: AuthenticationPage},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }