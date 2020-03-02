import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTextAreaComponent } from './base-text-area.component';

describe('BaseTextAreaComponent', () => {
  let component: BaseTextAreaComponent;
  let fixture: ComponentFixture<BaseTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
