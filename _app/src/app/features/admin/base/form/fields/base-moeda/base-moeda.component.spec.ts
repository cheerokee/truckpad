import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMoedaComponent } from './base-moeda.component';

describe('BaseMoedaComponent', () => {
  let component: BaseMoedaComponent;
  let fixture: ComponentFixture<BaseMoedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseMoedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
