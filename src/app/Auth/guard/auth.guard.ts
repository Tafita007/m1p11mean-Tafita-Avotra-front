import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  decodeProfile(token: string): Number {
    const [header, payload, signature] = token.split('.');
    const profil = JSON.parse(atob(payload)).profil;
    return profil;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    const role = token !== null ? this.decodeProfile(token) : null;

    // Si l'utilisateur est déjà connecté
    if (role !== null) {
      // Redirigez-le vers la page d'accueil ou vers la page spécifique en fonction du rôle
      if (role === 0) {
        this.router.navigate(['/salon/services']);
      } else if (role === 1) {
        this.router.navigate(['/employe/home/les-rendez-vous']);
      } else if (role === 2) {
        this.router.navigate(['/manager/home/gestion-du-personnel']);
      }
      return false;
    }

    // Sinon, continuez avec la vérification du rôle comme précédemment
    if (token !== null && role === 0 && state.url.includes('salon')) {
      return true;
    } else if (token !== null && role === 0 && state.url.includes('employe')) {
      return true;
    } else if (token !== null && role === 0 && state.url.includes('manager')) {
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
