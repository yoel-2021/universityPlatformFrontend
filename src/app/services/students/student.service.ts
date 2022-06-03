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
        'Authorization': `Bearer:${token}`
      }
      )
    });
   }
}
