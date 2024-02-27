import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/class/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LesServicesService } from 'src/app/service/les-services.service';
import { Categorie } from 'src/app/class/categorie';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.css']
})
export class GestionServiceComponent implements OnInit {

  categories: Categorie[] = [];
  services: Service[] = [];
  serviceUpdated: Service | undefined;
  serviceInserted: Service | undefined;

  errorMessage: string | null = null;

  public ficheForm!: FormGroup;

  constructor(private categorieService: CategorieService,private lesServicesService: LesServicesService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.categorieService.getCategories().subscribe(categories => {
      this.categories = [...categories];
    });

    this.lesServicesService.getServices().subscribe(services => {
      this.services = [...services];
    });
    this.initForm();
  }

  initForm(): void {
    this.ficheForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      commission: ['', [Validators.required]],
      duree: ['', [Validators.required]],
      idCategorie: ['', [Validators.required]],
    });
  }

  onUpdateService(): void {
    if (this.serviceUpdated && this.serviceUpdated._id) {
      console.log(this.serviceUpdated._id);

      this.lesServicesService.updateService(this.serviceUpdated._id, this.serviceUpdated).subscribe(
        response  => {
          console.log('Service mis à jour avec succès :', response);
        },
        error => {
          console.error('Une erreur s\'est produite lors du changement :', error);
          // Gérer l'erreur ici
        }
      );
    } else {
      console.error('Service is undefined or _id is not set.');
    }
  }

  onInsertService(): void {
    if (this.ficheForm.valid) {
      const newService: any = {
        nom: this.ficheForm.value.nom,
        prix: this.ficheForm.value.prix,
        commission: this.ficheForm.value.commission,
        duree: this.ficheForm.value.duree,
        idCategorie: this.ficheForm.value.idCategorie,
        image: 'salon.jpg'
      };
      this.lesServicesService.insertService(newService).subscribe(
        response => {
          console.log('Service inserted successfully:', response);
          this.serviceInserted = response; // Mettre à jour le service inséré
          // Réinitialiser le formulaire après l'insertion
          this.ficheForm.reset();
        },
        error => {
          console.error('An error occurred while inserting service:', error);
          this.errorMessage = "An error occurred while inserting service. Please try again later.";
        }
      );
    }
  }
}
