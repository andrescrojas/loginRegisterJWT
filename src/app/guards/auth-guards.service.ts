import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if (localStorage.getItem('tokenJWT') !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
