import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PatientModule { 
  id: number;
  nom: string;
  prenom:string;
  date: string;
  heur_debut:string;
  heur_fin:string;
  num_facture:number;
  paye:boolean

  constructor(){}
}
