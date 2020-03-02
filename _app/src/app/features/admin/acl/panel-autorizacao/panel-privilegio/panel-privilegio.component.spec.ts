import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPrivilegioComponent } from './panel-privilegio.component';

describe('PanelPrivilegioComponent', () => {
  let component: PanelPrivilegioComponent;
  let fixture: ComponentFixture<PanelPrivilegioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPrivilegioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPrivilegioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
