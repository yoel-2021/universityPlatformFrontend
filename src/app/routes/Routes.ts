import { Routes } from "@angular/router";
import { AuthGuard } from "../guard/auth.guard";
import { CategoriesPageComponent } from "../pages/categories-page/categories-page.component";
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
      component: RegisterUserPageComponent
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
      path: 'courses',
      component: CoursesPageComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'categories',
      component: CategoriesPageComponent,
      canActivate: [AuthGuard]
    }
  ];