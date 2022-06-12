import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/types/models/Course.type';
import { Student } from 'src/app/types/models/Student.type';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private _htpp: HttpClient, private _storageService: StorageService) { }
  getCourses():Observable<Course[]>{
    let token = this._storageService.getStorage('jwtToken');
    return this._htpp.get<Course[]>('https://localhost:7248/api/Courses',{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   registerCourses(name:string,createBy:string,createdAt:Date,updateBy:string,updatedAt:Date,id:number,index:string,idStudentsEnrolled:string,idcategories:string ):Observable<Course[]>{
    let body= {
      createBy: createBy,
      createdAt:createdAt ,
      updateBy: updateBy,
      updatedAt: updatedAt,
      id: id,
      name: name,
      index: index,
      idStudentsEnrolled: idStudentsEnrolled,
      idcategories: idcategories
    }

    let token = this._storageService.getStorage('jwtToken');
    return this._htpp.post<Course[]>('https://localhost:7248/api/Courses',body,{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   modifyCourses(name:string,createBy:string,createdAt:Date,updateBy:string,updatedAt:Date,id:number,index:string,):Observable<Course[]>{
    let body= {
      createBy: createBy,
      createdAt:createdAt ,
      updateBy: updateBy,
      updatedAt: updatedAt,
      id: id,
      name: name,
      index: index,
      
    }
    
    let token = this._storageService.getStorage('jwtToken');
    let _url = 'https://localhost:7248/api/Courses'
    let _urlEnviar = `${_url}/${id}`
    return this._htpp.put<Course[]>(_urlEnviar,body,{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   deleteCourses(id: number):Observable<{}>{
    let token = this._storageService.getStorage('jwtToken');
    let _url = 'https://localhost:7248/api/Courses'
    let _urlEnviar = `${_url}/${id}`
    return this._htpp.delete<Course[]>(_urlEnviar,{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }



}
