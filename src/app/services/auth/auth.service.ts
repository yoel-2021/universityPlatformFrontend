import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
import { userModel } from 'src/app/types/models/userModel.type';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: userModel;

  constructor(private _http: HttpClient, private _storageService: StorageService) { 
    
  }

  authUser(userName: string, password:string, email:string){
    
    let body= {
      userName: userName,
      password: password,
      email: email,
    
    }
    

    return this._http.post('https://localhost:7248/api/Login', body);
  }

  authRegister(name:string, password:string, lastName:string, email:string, createBy:string, createdAt:Date, role:string, Id:Number,updateBy:string,updatedAt:Date,deleteBy:string,deletedAt:Date,isDeleted:string){
    let body= {
      name: name,
      password: password,
      lastName: lastName,
      email: email,
      createBy: createBy,
      createdAt: createdAt,
      role: role,
      Id: Id, 
      updateBy:updateBy,
      updatedAt:updatedAt,
      deleteBy:deleteBy,
      deletedAt:deletedAt,
      isDeleted:isDeleted

      
    }
    let token = this._storageService.getStorage('jwtToken');
    let type= "Administrator"
    return this._http.post('https://localhost:7248/api/Users', body,{
    headers: new HttpHeaders(
      {
        'Authorization': `Bearer:${token},role:'Administrator'`,
        'Content-Type': 'application/json',
        'role': 'Administrator'
        
        
        
      }
    )
   });  

  }
  getUser(token: string): userModel{
    return JSON.parse(atob(token.split('')[1])) as userModel;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
