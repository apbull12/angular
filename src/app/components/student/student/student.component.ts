import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Student Started');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentInit(): void {
    console.log('Student loaded');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    console.log('Student Destroyed');
  }

}
