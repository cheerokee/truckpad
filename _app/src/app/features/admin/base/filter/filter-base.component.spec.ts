import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBaseComponent } from './filter-base.component';

describe('FilterBaseComponent', () => {
  let component: FilterBaseComponent;
  let fixture: ComponentFixture<FilterBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
