import { SignOutAction } from './../../../state-management/authentication/auth.state.actions';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { UserEntity } from 'src/app/entities/user.entity';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/state-management/authentication/auth.state';
import { AuthStateSelectors } from 'src/app/state-management/authentication/auth.state.selectors';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private store: Store){};
  @Select(AuthStateSelectors.USER_SIGNED_OUT) signedOut$?: Observable<UserEntity>;

  signOut(){
    this.store.dispatch(new SignOutAction())
  }
}