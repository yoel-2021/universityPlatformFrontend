import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/students/student.service';

interface idCourses {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-register-students',
  templateUrl: './register-students.component.html',
  styleUrls: ['./register-students.component.css']
})
export class RegisterStudentsComponent implements OnInit {
  selectedValue!:string;

  courses: idCourses[] = [
    {value: 1, viewValue: 'Entorno .NET'},
    {value: 2, viewValue: 'Spring'},];


  registerForm: FormGroup = this._formBuilder.group({});
  constructor(private _formBuilder: FormBuilder,private _servicesStudents: StudentService, private _router: Router) { };
  
  ngOnInit(): void {this.registerForm = this._formBuilder.group({
    
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday:['', Validators.required], 
    email: ['', Validators.required],
    coursesId: [''],
    city: ['', Validators.required],
    street: ['', Validators.required],
    community: ['', Validators.required],
    country: ['', Validators.required],
    zipCode: ['', Validators.required],
  });
  
  }

  
  register()
  {
    
    
    let {name,email,lastName,birthday,createBy="",createdAt=new Date,updateBy,
    updatedAt=new Date, id,city,street,community,country,zipCode, idCourses}= this.registerForm?.value;
    
    
    
    this._servicesStudents.registerStudents(name,email,lastName,birthday,createBy,createdAt,updateBy,updatedAt,id,city,street,community,country,zipCode, idCourses).subscribe({
      complete: () => {
        console.info(`Register was succeed`);
        this.registerForm.reset();
        console.log(this.registerForm.value);
        alert("Register was suceed");
        this._router.navigate(['/categories']);
        
    },
    error: (error: any)=>{
      console.error(`[ERROR]: something wrong happend:${error}`);
      }

  })
}
}
