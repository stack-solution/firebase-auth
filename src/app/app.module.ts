import { AuthState } from './state-management/authentication/auth.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './presentation/components/home-page/home-page.component';
import { AboutPageComponent } from './presentation/components/about-page/about-page.component';
import { SecretRouteComponent } from './presentation/components/secret-route/secret-route.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { NgxsModule } from '@ngxs/store';
import { AbstractAuthenticationRepository } from './features/authentication/repositories/abstract.authentication.data.repository';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    SecretRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxsModule.forRoot([AuthState])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
