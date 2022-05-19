import { AuthenticationFeatureModule } from './features/authentication/authentication.features.module';
import { AuthState } from './state-management/authentication/auth.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './presentation/components/home-page/home-page.component';
import { AboutPageComponent } from './presentation/components/about-page/about-page.component';
import { SecretRouteComponent } from './presentation/components/secret-route/secret-route.component';
import { NgxsModule } from '@ngxs/store';
import { FireBaseModule } from './firebase/firebase.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthenticationComponent } from './presentation/pages/authentication/authentication.component';
import { PomodoroComponent } from './presentation/pages/pomodoro/pomodoro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    SecretRouteComponent,
    AuthenticationComponent,
    PomodoroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FireBaseModule,
    NgxsModule.forRoot([AuthState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AuthenticationFeatureModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
