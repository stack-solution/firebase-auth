import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from './presentation/guards/guards.guard';
import { AuthenticationPage } from './presentation/pages/authentication/authentication.page';
import { TimerComponent } from './presentation/components/timer/timer.component';
import { PomodoroPage } from './presentation/pages/pomodoro/pomodoro.page';


const routes: Routes = [
  {path: 'login', component: AuthenticationPage},
  {path: 'pomodoro', component: PomodoroPage},
  //{path: 'Stats', component: AuthenticationPage},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }