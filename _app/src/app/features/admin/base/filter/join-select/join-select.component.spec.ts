import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinSelectComponent } from './join-select.component';

describe('JoinSelectComponent', () => {
  let component: JoinSelectComponent;
  let fixture: ComponentFixture<JoinSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
