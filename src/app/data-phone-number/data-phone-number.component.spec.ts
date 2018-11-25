import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPhoneNumberComponent } from './data-phone-number.component';

describe('DataPhoneNumberComponent', () => {
  let component: DataPhoneNumberComponent;
  let fixture: ComponentFixture<DataPhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
