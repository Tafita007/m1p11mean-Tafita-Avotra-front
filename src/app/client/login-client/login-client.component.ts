import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent implements OnInit {

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
          this.router.navigate(['/salon/services']);
        } else {
          Swal.fire({
            title: "Nom d'utilisateur ou mot de passe incorrecte",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
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
