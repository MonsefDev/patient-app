import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private service:PatientService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
    resetForm(form?: NgForm) {
      if (form != null)
        form.resetForm();
        this.service.formData={
        id:null,
        nom:'',
        prenom:'',
        date:'',
        heur_debut:'',
        heur_fin:'',
        num_facture:null,
        paye:false
      }
    }

    onSubmit(form:NgForm){
      let data=Object.assign({},form.value);
      delete data.id;
      if(form.value.id==null)
        this.firestore.collection('patients').add(data);
      else
      this.firestore.doc('patients/'+form.value.id).update(data)
      this.resetForm(form);
      this.toastr.success('Submitted Successfully','Emp Register');
    }
 }
