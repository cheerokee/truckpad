import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseJoinSelectComponent } from './base-join-select.component';

describe('BaseJoinSelectComponent', () => {
  let component: BaseJoinSelectComponent;
  let fixture: ComponentFixture<BaseJoinSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseJoinSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseJoinSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
