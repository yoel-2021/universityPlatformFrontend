import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/types/models/Student.type';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _htpp: HttpClient, private _storageService: StorageService) { }

  getStudents():Observable<Student[]>{
    let token = this._storageService.getStorage('jwtToken');
    return this._htpp.get<Student[]>('https://localhost:7248/api/Students',{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   registerStudents(name:string,email: string,lastName:string,birthday: Date,createBy:string,createdAt:Date,updateBy:string,updatedAt:Date,id:number,city:string,street:string,community:string,country:string,zipCode:number,idCourses:string ):Observable<Student[]>{
    let body= {
      name:name,
      email:email,
      lastName:lastName,
      birthday:birthday,
      createBy:createBy,
      createdAt:createdAt,
      updateBy:updateBy,
      updatedAt:updatedAt,
      id:id,
      city:city,
      street:street,
      community:community,
      country:country,
      zipCode:zipCode,
      idCourses:idCourses
    }

    let token = this._storageService.getStorage('jwtToken');
    return this._htpp.post<Student[]>('https://localhost:7248/api/Students',body,{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   modifyStudents(name:string,email: string,lastName:string,birthday: Date,createBy:string,createdAt:Date,updateBy:string,updatedAt:Date,id:number,city:string,street:string,community:string,country:string,zipCode:number):Observable<Student[]>{

    let body= {
      name:name,
      email:email,
      lastName:lastName,
      birthday:birthday,
      createBy:createBy,
      createdAt:createdAt,
      updateBy:updateBy,
      updatedAt:updatedAt,
      id:id,
      city:city,
      street:street,
      community:community,
      country:country,
      zipCode:zipCode,
      
    }

    let token = this._storageService.getStorage('jwtToken');
    let _url = 'https://localhost:7248/api/Students'
    let _urlEnviar = `${_url}/${id}`
    return this._htpp.put<Student[]>(_urlEnviar,{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }

   deleteStudents(id: number):Observable<{}>{
    let token = this._storageService.getStorage('jwtToken');
    let _url = 'https://localhost:7248/api/Students'
    let _urlEnviar = `${_url}/${id}`
    return this._htpp.delete<Student[]>(_urlEnviar,{
      headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer:${token}`,
        
      }) });
   }



}
