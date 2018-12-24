import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/shared/patient.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { PatientModule } from 'src/app/shared/patient.module';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  constructor(private service:PatientService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }
  list:PatientModule[];
  ngOnInit() {
    this.service.getpatients().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as unknown as PatientModule;
      })
  });
  }

  onEdit(emp:PatientModule){
    this.service.formData=Object.assign({},emp);
  }
  ondelete(id:string){
    if(confirm("are you sure to delete this record.")){
      this.firestore.doc('patients/'+id).delete();
      this.toastr.success('delete successfully','EMP. patients')
    }

}

}