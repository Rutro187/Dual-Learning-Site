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
  constructor(private authService: AuthGenericService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.authService.getUserInfo().pipe(map( user => {
          console.log(user);
          return true;
      }
       
      ))


      // if (this.authService.getUserInfo().permission === 'owner' || 'admin' || 'user') {
      // return true;
      // }
      // this.router.navigate(['/login']);
      // return false;
    }
}
