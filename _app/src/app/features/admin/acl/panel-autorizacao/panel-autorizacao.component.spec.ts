import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAutorizacaoComponent } from './panel-autorizacao.component';

describe('PanelAutorizacaoComponent', () => {
  let component: PanelAutorizacaoComponent;
  let fixture: ComponentFixture<PanelAutorizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAutorizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAutorizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
