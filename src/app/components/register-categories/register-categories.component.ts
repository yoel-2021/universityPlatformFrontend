import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';

interface courses {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register-categories',
  templateUrl: './register-categories.component.html',
  styleUrls: ['./register-categories.component.css']
})
export class RegisterCategoriesComponent implements OnInit {
  selectedValue!:string;
 

  courses: courses[] = [
    {value: "1,", viewValue: 'SQL'},
    {value: "2,", viewValue: 'JavaScript'},];


  registerForm: FormGroup = this._formBuilder.group({});
  constructor(private _formBuilder: FormBuilder,private _categoriesStudents: CategoriesService, private _router: Router) { };
  
  ngOnInit(): void {this.registerForm = this._formBuilder.group({
    
    categoryName: ['', Validators.required],
    courses:  [''],
    
  });
  
  }  
  register()
  {
    
    let {name,createBy="",createdAt=new Date,updateBy,
    updatedAt=new Date, id,categoryName,courses }= this.registerForm?.value;
    
    
    
    this._categoriesStudents.registerCategories(id,categoryName,createBy,createdAt,updateBy,updatedAt,courses).subscribe({
      complete: () => {
        console.info(`Register was succeed`);
        this.registerForm.reset();
        console.log(this.registerForm.value);
        alert("El registro fue exitoso");
        this._router.navigate(['/categories']);
        
    },
    error: (error: any)=>{
      console.error(`[ERROR]: something wrong happend:${error}`);
      console.log(this.registerForm.value)
      }

  })
}
}