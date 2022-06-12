import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterUserPageComponent } from './pages/register-user-page/register-user-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CategoriesPageComponent } from './pages/categories-page/categories-page.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { StudentsDetailPageComponent } from './pages/students-detail-page/students-detail-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule} from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { UsersRegisterComponent } from './components/users-register/users-register.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StudentsDataTableComponent } from './components/students-data-table/students-data-table.component';
import { DialogDeleteStudentsComponent } from './components/dialog-delete-students/dialog-delete-students.component';
import { RegisterStudentsComponent } from './components/register-students/register-students.component';
import { CoursesDataTableComponent } from './components/courses-data-table/courses-data-table.component';
import { RegisterCoursesComponent } from './components/register-courses/register-courses.component';
import { CoursesDetailPageComponent } from './pages/courses-detail-page/courses-detail-page.component';
import { RegisterCategoriesComponent } from './components/register-categories/register-categories.component';
import { CategoriesDetailPageComponent } from './pages/categories-detail-page/categories-detail-page.component';
import { CategoriesDataTableComponent } from './components/categories-data-table/categories-data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    RegisterUserPageComponent,
    CoursesPageComponent,
    CategoriesPageComponent,
    StudentsPageComponent,
    StudentsDetailPageComponent,
    NavComponent,
    MenuItemComponent,
    UsersRegisterComponent,
    StudentsDataTableComponent,
    DialogDeleteStudentsComponent,
    RegisterStudentsComponent,
    CoursesDataTableComponent,
    RegisterCoursesComponent,
    CoursesDetailPageComponent,
    RegisterCategoriesComponent,
    CategoriesDetailPageComponent,
    CategoriesDataTableComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
