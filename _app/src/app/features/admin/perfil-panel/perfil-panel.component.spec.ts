import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPanelComponent } from './perfil-panel.component';

describe('PerfilPanelComponent', () => {
  let component: PerfilPanelComponent;
  let fixture: ComponentFixture<PerfilPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
