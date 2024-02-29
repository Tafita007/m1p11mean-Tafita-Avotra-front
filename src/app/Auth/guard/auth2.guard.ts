import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {
  constructor(private router: Router) {}

  decodeProfile(token: string): string {
    const [header, payload, signature] = token.split('.');
    const profil = JSON.parse(atob(payload)).profil;
    return profil;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    let role = null;
    if (token === null) {
      return false;
    } else {
      role = parseInt(this.decodeProfile(token), 10); // Convertir role en nombre
    }

    console.log(role);

    if (role === 2) {
      return true;
    }
    else {
      return this.handleUnauthorizedAccess();
    }
  }


  private handleUnauthorizedAccess(): boolean {
    this.router.navigate(['/manager/Login-manager']);
    return false;
  }
  
}
