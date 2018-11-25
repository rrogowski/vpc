import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMooresvilleComponent } from './page-mooresville.component';

describe('PageMooresvilleComponent', () => {
  let component: PageMooresvilleComponent;
  let fixture: ComponentFixture<PageMooresvilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMooresvilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMooresvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
