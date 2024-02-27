import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suivi-tache',
  templateUrl: './suivi-tache.component.html',
  styleUrls: ['./suivi-tache.component.css']
})
export class SuiviTacheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.showModal);
  }

  showModal: boolean = false;
  formData: any = {};

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  submitForm() {
    console.log('Formulaire soumis:', this.formData);
    this.closeModal();
  }

}
