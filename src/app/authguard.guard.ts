import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth/auth.service';

 
@Injectable({
  providedIn: 'root'
})

export class AuthguardGuard implements CanActivate {
  constructor(private authServise: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // this.router.navigate(['/']); 
    return this.authServise.getUserLoggedIn();
  }
}
