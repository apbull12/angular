import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Teacher Started');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentInit(): void {
    console.log('Teacher loaded');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    console.log('Teacher Destroyed');
  }
}
