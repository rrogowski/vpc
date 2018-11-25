import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStoreInformationComponent } from './card-store-information.component';

describe('CardStoreInformationComponent', () => {
  let component: CardStoreInformationComponent;
  let fixture: ComponentFixture<CardStoreInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStoreInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStoreInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
