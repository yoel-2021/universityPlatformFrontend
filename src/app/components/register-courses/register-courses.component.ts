import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CoursesService } from 'src/app/services/courses/courses.service';

interface idStudentsEnrolled {
  value: string;
  viewValue: string;
}

interface idcategories {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-register-courses',
  templateUrl: './register-courses.component.html',
  styleUrls: ['./register-courses.component.css']
})
export class RegisterCoursesComponent implements OnInit {
  selectedValue!:string;
  selectedValue2!:string;

  students: idStudentsEnrolled[] = [
    {value: "1,", viewValue: 'Pedro Dominguez'},
    {value: "2,", viewValue: 'Claudia del monte'},];

categories: idcategories[] = [
    {value: "1,", viewValue: 'Desarrollo Frontend'},
    {value: "2,", viewValue: 'Desarrollo Backend'},];

  registerForm: FormGroup = this._formBuilder.group({});
  constructor(private _formBuilder: FormBuilder,private _coursesStudents: CoursesService,private _router: Router) { };
  
  ngOnInit(): void {this.registerForm = this._formBuilder.group({
    
    name: ['', Validators.required],
    index: ['', Validators.required],
    idStudentsEnrolled:  [''],
    idcategories: [''],
    
  });
  
  }  
  register()
  {
    
    
    let {name,createBy="",createdAt=new Date,updateBy,
    updatedAt=new Date, id,index,idStudentsEnrolled,idcategories }= this.registerForm?.value;
    
    
    
    this._coursesStudents.registerCourses(name,createBy,createdAt,updateBy,updatedAt,id,index,idStudentsEnrolled,idcategories).subscribe({
      complete: () => {
        console.info(`Register was succeed`);
        this.registerForm.reset();
        console.log(this.registerForm.value);
        alert("El registro fue exitoso");
        this._router.navigate(['/courses']);
    },
    error: (error: any)=>{
      console.error(`[ERROR]: something wrong happend:${error}`);
      console.log(this.registerForm.value)
      }

  })
}
}
