import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/service/auth.service';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/manager/home/gestion-du-personnel']);
        } else {
          this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect";
        }
      },
      error => {
        console.error('Erreur lors de la connexion :', error);
        this.errorMessage = "Une erreur s'est produite lors de la connexion. Veuillez réessayer plus tard.";
      }
    );
  }

}
