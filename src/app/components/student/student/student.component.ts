import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentStatus: string;
  buttonStatus: boolean;
  constructor() { }

  ngOnInit(): void {
    this.studentStatus = 'StudentComponent is UP!';
    this.buttonStatus = true;
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

  toggle() {
    this.buttonStatus = !this.buttonStatus;
    this.studentStatus = 'Button Clicked and disable value - ' + this.buttonStatus;
  }
}
