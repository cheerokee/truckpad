import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPossibilidadeComponent } from './panel-possibilidade.component';

describe('PanelPossibilidadeComponent', () => {
  let component: PanelPossibilidadeComponent;
  let fixture: ComponentFixture<PanelPossibilidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPossibilidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPossibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
