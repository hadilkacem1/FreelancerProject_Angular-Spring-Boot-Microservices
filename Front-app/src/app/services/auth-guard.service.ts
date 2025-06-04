import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private service: AuthserviceService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = this.service.isLoggedIn();

    if (isLoggedIn) {
      return true;
    }else{
      this.router.navigate(['/login']);

      return false;
    }
    
  }
}
