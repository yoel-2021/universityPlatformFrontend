import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { Course } from 'src/app/types/models/Course.type';

@Component({
  selector: 'app-courses-detail-page',
  templateUrl: './courses-detail-page.component.html',
  styleUrls: ['./courses-detail-page.component.css']
})
export class CoursesDetailPageComponent implements OnInit {
  result: string = '';
  courses! : Course;
  modifyForm: FormGroup = this._formBuilder.group({});

  constructor(private _router: Router, private _route: ActivatedRoute, 
    private _coursesServices : CoursesService, private _formBuilder: FormBuilder,) {}
  
  
    ngOnInit(): void {
      this.modifyForm = this._formBuilder.group({
    
        name: ['', Validators.required],
        
      });

      let {name,createBy,createdAt,updateBy,updatedAt, id,index} = this._route.snapshot.params;
    this.courses = {
      id,
      name,
      createBy,
      updateBy,
      createdAt,
      updatedAt,
      index,
   
      
      
    }
  }
  modify(){
    let id_course = this.courses.id;
    let id = Number(id_course);
    let {name,createBy,createdAt,updateBy,updatedAt,index}= this.modifyForm?.value;
    
    this._coursesServices.modifyCourses(name,createBy,createdAt,updateBy,updatedAt, id,index).subscribe({
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

  
  deletedCourses(){
    let id_course = this.courses.id;
    let dato = Number(id_course);
    console.log(dato);
    this._coursesServices.deleteCourses(dato).subscribe({
     next: (response: any)=>{
      console.log("Se ha ejecutado")
     },
     error: (error: any)=>{
 
       console.error(`[ERROR]: something wrong happend:${error}`);
     },
     complete: () => {
       alert("Curso Borrado exitosamente")
       this._router.navigate(['/courses']);
 
     }
 
 
   });
 
 }
}
