import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTelefoneComponent } from './base-telefone.component';

describe('BaseTelefoneComponent', () => {
  let component: BaseTelefoneComponent;
  let fixture: ComponentFixture<BaseTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
