import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPrinterComponent } from './status-printer.component';

describe('StatusPrinterComponent', () => {
  let component: StatusPrinterComponent;
  let fixture: ComponentFixture<StatusPrinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPrinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
