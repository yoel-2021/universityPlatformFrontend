import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuIcons } from 'src/app/types/MenuIcon';
import { AppRoutes } from 'src/app/routes/AppRoutes';
import { MenuItem } from 'src/app/types/MenuItem.type';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  menuList: MenuItem[] = [
   
    {
      text: "Estudiantes",
      icon: MenuIcons.STUDENTS,
      route: AppRoutes.STUDENTS
    },
    {
      text: "Cursos",
      icon:  MenuIcons.COURSES,
      route: AppRoutes.COURSES
    },
    {
      text: "Categorias de Cursos",
      icon:  MenuIcons.CATEGORIES,
      route: AppRoutes.CATEGORIES
    },
    {
      text: "Registro de Usuarios",
      icon: MenuIcons.REGISTERUSER,
      route: AppRoutes.REGISTERUSER
    },
    {
      text: "Salir",
      icon: MenuIcons.LOGOUT,
      route: AppRoutes.LOGOUT
    }
  ]


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
     
    );
      

  constructor(private breakpointObserver: BreakpointObserver, private _storageService: StorageService,private _router: Router) {

  }
  userName= this._storageService.getStorage('user');
  
  Islogged(){
    if (this._storageService.getStorage('jwtToken')){
      return true;
    
      
    }else{
      return false;
      
        
      }
      
    }
}
    
      

