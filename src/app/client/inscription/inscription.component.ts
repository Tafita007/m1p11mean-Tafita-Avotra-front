import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/service/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  nom: string = '';
  prenom: string = '';
  email: string = '';
  numero: string = '';
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onSignup(): void {
    this.authService.signup(
      { 
        username: this.username, 
        password: this.password,
        infosPerso: {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          numero: this.numero
        }
      }
    ).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/salon/login']);
        } else {
          this.errorMessage = "Une erreur s'est produite";
        }
      },
      error => {
        console.error('Erreur lors de la connexion :', error);
        this.errorMessage = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer plus tard.";
      }
    );
  }

}
