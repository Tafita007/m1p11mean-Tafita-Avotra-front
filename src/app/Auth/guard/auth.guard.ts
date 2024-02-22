import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    // Si l'utilisateur est déjà connecté
    if (true) {
      // Redirigez-le vers la page d'accueil ou vers la page spécifique en fonction du rôle
      if (role === 'client') {
        this.router.navigate(['/salon/services']);
      } else if (role === 'employe') {
        this.router.navigate(['/employe']);
      } else if (role === 'manager') {
        this.router.navigate(['/manager']);
      }
      return false;
    }

    // Sinon, continuez avec la vérification du rôle comme précédemment
    if (token && role === 'client' && state.url.includes('client')) {
      return true;
    } else if (token && role === 'employe' && state.url.includes('employe')) {
      return true;
    } else if (token && role === 'manager' && state.url.includes('manager')) {
      return true;
    } else {
      // Redirigez l'utilisateur vers la page de connexion si le rôle n'est pas autorisé
      return this.handleUnauthorizedAccess();
    }
  }

  private handleUnauthorizedAccess(): boolean {
    this.router.navigate(['/salon/login']);
    return false;
  }
  
}
