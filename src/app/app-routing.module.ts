import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashbord/dashboard/dashboard.component';
import {StudentComponent} from './components/student/student/student.component';
import {TeacherComponent} from './components/teacher/teacher/teacher.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'students', component: StudentComponent},
  {path: 'teachers', component: TeacherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
