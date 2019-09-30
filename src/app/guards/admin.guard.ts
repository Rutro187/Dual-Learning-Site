import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGenericService } from '../services/auth-generic.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {
  constructor(private authService: AuthGenericService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.authService.getUserInfo().permission);
      if (this.authService.getUserInfo().permission === 'admin') {
      return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
