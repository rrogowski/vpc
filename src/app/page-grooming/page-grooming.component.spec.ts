import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGroomingComponent } from './page-grooming.component';

describe('PageGroomingComponent', () => {
  let component: PageGroomingComponent;
  let fixture: ComponentFixture<PageGroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
