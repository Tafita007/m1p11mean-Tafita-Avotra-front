import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;
  email : string = '';
  numero : string = '';
  nom : string = '';
  prenom : string = '';


  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onSignup(): void {
    this.authService.signup(
        { 
          username: this.username,
          password: this.password,
          infosPerso : {
            nom : this.nom,
            prenom : this.prenom,
            email : this.email,
            numero : this.numero,
          }
        }
        ).subscribe(
      success => {        
        if (success) {
          // Cette partie ne renvoit pas du tout
          this.router.navigate(['/salon/login']);
        } else {
          this.errorMessage = "Une erreur s'est produite";
        }
      },
      response => {    
        // si le statut == 201 => celà veut dire que l'utilsateur a été créé
        if(response.status == 201){

          Swal.fire({
            title: 'Inscription réussie',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/salon/login']);
            }
          })

        }
        else {
          console.error('Erreur lors de la connexion :', response);
          this.errorMessage = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer plus tard.";
        }

      }
    );
  }

}
