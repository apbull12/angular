import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashbord/dashboard/dashboard.component';
import { StudentComponent } from './components/student/student/student.component';
import { TeacherComponent } from './components/teacher/teacher/teacher.component';
import { StatusPrinterComponent } from './components/status-printer/status-printer/status-printer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentComponent,
    TeacherComponent,
    StatusPrinterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
