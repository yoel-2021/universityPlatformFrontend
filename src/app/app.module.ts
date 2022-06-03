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
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { StepperRegisterStudentComponent } from './components/stepper-register-student/stepper-register-student.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import { UsersRegisterComponent } from './components/users-register/users-register.component';
import { StudentsDataComponent } from './components/students-data/students-data.component';

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
    StudentsTableComponent,
    StepperRegisterStudentComponent,
    CoursesTableComponent,
    CategoriesTableComponent,
    UsersRegisterComponent,
    StudentsDataComponent
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
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
