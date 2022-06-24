import { SignInAction, SignOutAction } from './state-management/authentication/auth.state.actions';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";


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
  signOut(){
    this.store.dispatch(new SignOutAction);
  }
}