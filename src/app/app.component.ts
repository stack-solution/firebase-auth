import { SignInAction } from './state-management/authentication/auth.state.actions';
import { AuthState } from './state-management/authentication/auth.state';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Select, Store} from "@ngxs/store";
import { AuthStateSelectors } from './state-management/authentication/auth.state.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private store: Store){}
  title = 'firebase-google-auth';
  signIn(){
    this.store.dispatch(new SignInAction);
  }
}