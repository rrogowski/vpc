import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAddressComponent } from './data-address.component';

describe('DataAddressComponent', () => {
  let component: DataAddressComponent;
  let fixture: ComponentFixture<DataAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
