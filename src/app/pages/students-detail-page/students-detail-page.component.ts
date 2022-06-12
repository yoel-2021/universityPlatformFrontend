import { error, stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmDialogModel, DialogDeleteStudentsComponent } from 'src/app/components/dialog-delete-students/dialog-delete-students.component';
import { StudentService } from 'src/app/services/students/student.service';
import { Student } from 'src/app/types/models/Student.type';

@Component({
  selector: 'app-students-detail-page',
  templateUrl: './students-detail-page.component.html',
  styleUrls: ['./students-detail-page.component.css']
})

export class StudentsDetailPageComponent implements OnInit {

  result: string = '';
  students! : Student;
  modifyForm: FormGroup = this._formBuilder.group({});
  constructor(private _router: Router, private _route: ActivatedRoute,public dialog: MatDialog, 
    private _studentsServices : StudentService, private _formBuilder: FormBuilder,) {}

  ngOnInit(): void {

    this.modifyForm = this._formBuilder.group({
    
      name: ['', Validators.required],
      
    });


    let {id, name, lastName, email, birthday, city, street,community, country, zipCode, createBy, updateBy,createdAt,updatedAt } = this._route.snapshot.params;

    this.students = {
      id,
      name,
      lastName,
      email,
      birthday,
      city,
      street,
      community,
      country,
      zipCode,
      createBy,
      updateBy,
      createdAt,
      updatedAt,
      

    }
  }

  modify(){
    let id_student = this.students.id;
    let id = Number(id_student);
    let {name, lastName, email, birthday, city, street,community, country, zipCode, createBy, updateBy,createdAt,updatedAt }= this.modifyForm?.value;
    
    this._studentsServices.modifyStudents(name,email,lastName,birthday,createBy,createdAt,updateBy,updatedAt,id,city,street,community,country,zipCode ).subscribe({
      complete: () => {
        console.info(`Register was succeed`);
        this.modifyForm.reset();
        console.log(this.modifyForm.value);
        alert("Modificado correctamente");
        
    },
    error: (error: any)=>{
      console.error(`[ERROR]: something wrong happend:${error}`);
      }

  })
  }
  confirmDialog(): void {
    const message = `Seguro que quieres borrar este estudiante?`;

    const dialogData = new ConfirmDialogModel("Borrando estudiante", message);

    const dialogRef = this.dialog.open(DialogDeleteStudentsComponent, {
      maxWidth: "600px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }
  
 
  deletedStudents(){
   let id_student = this.students.id;
   let dato = Number(id_student);
   console.log(dato);
   this._studentsServices.deleteStudents(dato).subscribe({
    next: (response: any)=>{
     console.log("Se ha ejecutado")
    },
    error: (error: any)=>{

      console.error(`[ERROR]: something wrong happend:${error}`);
    },
    complete: () => {
      alert("Estudiante Borrado exitosamente")
      this._router.navigate(['/students']);

    }


  });

}
}