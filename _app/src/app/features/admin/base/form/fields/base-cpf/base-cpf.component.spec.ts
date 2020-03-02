import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCpfComponent } from './base-cpf.component';

describe('BaseCpfComponent', () => {
  let component: BaseCpfComponent;
  let fixture: ComponentFixture<BaseCpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
