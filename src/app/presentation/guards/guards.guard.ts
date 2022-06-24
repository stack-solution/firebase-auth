import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateSelectors } from '../../state-management/authentication/auth.state.selectors';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor(private readonly store: Store, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.store.selectSnapshot(AuthStateSelectors.USER);
    if(currentUser){
      return true;
    } else {
      this.router.navigate(['/login']);
      alert("Please login first");
      return false;
    }
  }
}