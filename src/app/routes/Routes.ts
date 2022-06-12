import { Routes } from "@angular/router";
import { NavComponent } from "../components/nav/nav.component";
import { RegisterCategoriesComponent } from "../components/register-categories/register-categories.component";
import { RegisterCoursesComponent } from "../components/register-courses/register-courses.component";
import { RegisterStudentsComponent } from "../components/register-students/register-students.component";
import { AuthGuard } from "../guard/auth.guard";
import { HasRoleGuard } from "../guard/has-role.guard";
import { CategoriesDetailPageComponent } from "../pages/categories-detail-page/categories-detail-page.component";
import { CategoriesPageComponent } from "../pages/categories-page/categories-page.component";
import { CoursesDetailPageComponent } from "../pages/courses-detail-page/courses-detail-page.component";
import { CoursesPageComponent } from "../pages/courses-page/courses-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { RegisterUserPageComponent } from "../pages/register-user-page/register-user-page.component";
import { StudentsDetailPageComponent } from "../pages/students-detail-page/students-detail-page.component";

import { StudentsPageComponent } from "../pages/students-page/students-page.component";

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginPageComponent
    },
    {
      path: 'registeruser',
      component: RegisterUserPageComponent,
      canActivate: [AuthGuard], 
      data: {
        role: "Administrator",
      }
    },
    {
      path: 'students',
      component: StudentsPageComponent,
      canActivate: [AuthGuard],
    },
    {
       path: 'students/:id',
       component: StudentsDetailPageComponent,
       canActivate: [AuthGuard]
    },
    {
      path: 'studentsRegister',
      component: RegisterStudentsComponent,
      canActivate: [AuthGuard]
   },
    {
      path: 'courses',
      component: CoursesPageComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'courses/:id',
      component: CoursesDetailPageComponent,
      canActivate: [AuthGuard]
   },
    {
      path: 'coursesRegister',
      component: RegisterCoursesComponent,
      canActivate: [AuthGuard]
   },
    {
      path: 'categories',
      component: CategoriesPageComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'categories/:id',
      component: CategoriesDetailPageComponent,
      canActivate: [AuthGuard]
   },
    {
      path: 'categoriesRegister',
      component: RegisterCategoriesComponent,
      canActivate: [AuthGuard]
   },
    {
      path: 'nav',
      component: NavComponent, 
      canActivate: [AuthGuard]
    },


  ];