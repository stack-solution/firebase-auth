import { AuthenticationFeatureModule } from './features/authentication/authentication.features.module';
import { AuthState } from './state-management/authentication/auth.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { FireBaseModule } from './firebase/firebase.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AuthenticationPage } from './presentation/pages/authentication/authentication.page';
import { AuthenticationPageModule } from './presentation/pages/authentication/authentication.page.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FireBaseModule,
    AuthenticationPageModule,
    NgxsModule.forRoot([AuthState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AuthenticationFeatureModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
