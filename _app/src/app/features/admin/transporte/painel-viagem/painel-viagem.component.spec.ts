import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelViagemComponent } from './painel-viagem.component';

describe('PainelViagemComponent', () => {
  let component: PainelViagemComponent;
  let fixture: ComponentFixture<PainelViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
