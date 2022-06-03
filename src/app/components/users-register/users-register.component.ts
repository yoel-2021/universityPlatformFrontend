import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.css']
})
export class UsersRegisterComponent implements OnInit {
  
  selectedValue!:string;

  roles: Role[] = [
    {value: 'Administrator', viewValue: 'Administrador'},
    {value: 'User', viewValue: 'Usuario General'},];

  nameValue:String = "User";
  isdelete: boolean = false;
  idUse:number= 0;
  idType:number= 2;
  fecha:Date = new Date();
  

  registerForm: FormGroup = this._formBuilder.group({});
  constructor(private _formBuilder: FormBuilder,private _authservice: AuthService) { };
  
  ngOnInit(): void {this.registerForm = this._formBuilder.group({
    
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    role: ['', Validators.required]
  });
  
  }

  visibility(){
    if(this.isdelete=== false){
      return false;
    }else{
      return true;
    }
  }
  
  register()
  {
    
    
    let {name,password,email,lastName,createBy="",createdAt=new Date,updateBy,updatedAt=new Date,deleteBy,deletedAt=new Date,isDeleted= false, role, Id}= this.registerForm?.value;
    
    
    
    this._authservice.authRegister(name,password,email,lastName,createBy,createdAt,role,updateBy,updatedAt,deleteBy,deletedAt,isDeleted,Id).subscribe({
      complete: () => {
        console.info(`Register was succeed`);
        this.registerForm.reset();
        console.log(this.registerForm.value);
        alert("Register was suceed");
        
    },
    error: (error: any)=>{
      let {name,password,email,lastName,createBy,createdAt,idUserType,Id,updateBy,updatedAt,deleteBy,deletedAt,isDeleted}= this.registerForm?.value;
      console.log(this.registerForm.value);
      console.error(`[ERROR]: something wrong happend:${error}`);
      }

  })
}
}
