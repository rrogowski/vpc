import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroomingComponent } from './card-grooming.component';

describe('CardGroomingComponent', () => {
  let component: CardGroomingComponent;
  let fixture: ComponentFixture<CardGroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
