import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStoreHoursComponent } from './card-store-hours.component';

describe('CardStoreHoursComponent', () => {
  let component: CardStoreHoursComponent;
  let fixture: ComponentFixture<CardStoreHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStoreHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStoreHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
