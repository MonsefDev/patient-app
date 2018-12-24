import { Injectable } from '@angular/core';
import { PatientModule } from './patient.module';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  formData: PatientModule;
  constructor(private firestore:AngularFirestore) {}
    getpatients()
    {
      return this.firestore.collection('patients').snapshotChanges();
    }
   
}
