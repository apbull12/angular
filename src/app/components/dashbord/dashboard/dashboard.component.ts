import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output() status = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.status.emit('Dashboard Started');
    console.log('Dashboard Started');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterContentInit(): void {
    console.log('Dashboard loaded');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    console.log('Dashboard Destroyed');
  }

}
