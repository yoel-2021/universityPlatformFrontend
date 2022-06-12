import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/types/models/Category.type';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private _htpp: HttpClient, private _storageService: StorageService) { }
  
  getCategories():Observable<Category[]>{
    let token = this._storageService.getStorage('jwtToken');
    return this._htpp.get<Category[]>('https://localhost:7248/api/Categories',{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   registerCategories(id:number,categoryName:string,createBy:string,createdAt:Date,updateBy:string,updatedAt:Date,courses:string ):Observable<Category[]>{
    let body= {
      createBy: createBy,
      createdAt:createdAt ,
      updateBy: updateBy,
      updatedAt: updatedAt,
      id: id,
      courses: courses,
      categoryName: categoryName,
    }

    let token = this._storageService.getStorage('jwtToken');
    return this._htpp.post<Category[]>('https://localhost:7248/api/Categories',body,{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   modifyCategories(id:number,categoryName:string,createBy:string,createdAt:Date,updateBy:string,updatedAt:Date,):Observable<Category[]>{
    let body= {
      createBy: createBy,
      createdAt:createdAt ,
      updateBy: updateBy,
      updatedAt: updatedAt,
      id: id,
      categoryName: categoryName,
    }
    
    let token = this._storageService.getStorage('jwtToken');
    let _url = 'https://localhost:7248/api/Categories'
    let _urlEnviar = `${_url}/${id}`
    return this._htpp.put<Category[]>('https://localhost:7248/api/Categories/{id}',{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   deleteCategories(id: number):Observable<{}>{
    let token = this._storageService.getStorage('jwtToken');
    let _url = 'https://localhost:7248/api/Categories'
    let _urlEnviar = `${_url}/${id}`
    return this._htpp.delete<Category[]>(_urlEnviar,{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }



}
