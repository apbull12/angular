import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as _ from 'lodash';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Output() studentName = new EventEmitter<string>();
  @Input() studentList;

  studentForm: FormGroup;
  studentStatus: string;
  buttonStatus: boolean;
  name: string;
  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      studName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: '',
    });
  }

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

  sendToParent() {
    if (this.studentList.includes(this.name)) {
      alert('Student Name ' + this.name + ' is already taken!!!');
    } else {
      this.studentName.emit(this.name);
      alert('Added Successfully :)');
    }
  }

  submit() {
    console.log(this.studentForm.value);
  }
}
