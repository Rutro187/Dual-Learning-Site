import { UserStoreService } from './../user-store.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,  } from 'rxjs';
import { AuthGenericService } from '../services/auth-generic.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
  Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.userStore.user$.pipe(map( user => {
      if (user && (user.permission === 'owner' || user.permission === 'admin' || user.permission === 'user')) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }));
  }
}
