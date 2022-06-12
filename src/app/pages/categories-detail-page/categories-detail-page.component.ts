import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Category } from 'src/app/types/models/Category.type';

@Component({
  selector: 'app-categories-detail-page',
  templateUrl: './categories-detail-page.component.html',
  styleUrls: ['./categories-detail-page.component.css']
})
export class CategoriesDetailPageComponent implements OnInit {
  result: string = '';
  categories! : Category;
  modifyForm: FormGroup = this._formBuilder.group({});
  constructor(private _router: Router, private _route: ActivatedRoute, 
    private _categoriesServices : CategoriesService,private _formBuilder: FormBuilder,) {}

  ngOnInit(): void {

    this.modifyForm = this._formBuilder.group({
    
      categoryName: ['', Validators.required],
      
    });

    let {categoryName,createBy,createdAt,updateBy,updatedAt, id } = this._route.snapshot.params;

    this.categories = {
      id,
      categoryName,
      createBy,
      updateBy,
      createdAt,
      updatedAt,
  
      
    }
  }

  modify(){
    let id_category = this.categories.id;
    let id = Number(id_category);
    let {categoryName,createBy,createdAt,updateBy,updatedAt,t }= this.modifyForm?.value;
    
    this._categoriesServices.modifyCategories(id,categoryName,createBy,createdAt,updateBy,updatedAt, ).subscribe({
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
  
  deletedCategories(){
    let id_course = this.categories.id;
    let dato = Number(id_course);
    console.log(dato);
    this._categoriesServices.deleteCategories(dato).subscribe({
     next: (response: any)=>{
      console.log("Se ha ejecutado")
     },
     error: (error: any)=>{
 
       console.error(`[ERROR]: something wrong happend:${error}`);
     },
     complete: () => {
       alert("Categoria Borrado exitosamente")
       this._router.navigate(['/categories']);
 
     }
 
 
   });
 
 }
}
