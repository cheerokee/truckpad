import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBaseComponent } from './crud-base.component';

describe('CrudBaseComponent', () => {
  let component: CrudBaseComponent;
  let fixture: ComponentFixture<CrudBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
