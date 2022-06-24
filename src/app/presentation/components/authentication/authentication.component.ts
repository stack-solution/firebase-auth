import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SignInAction } from 'src/app/state-management/authentication/auth.state.actions';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnInit {

  constructor(private store: Store) { }

  signInWithGoogle(){
    this.store.dispatch(new SignInAction());
  }

  ngOnInit(): void {
  }

}