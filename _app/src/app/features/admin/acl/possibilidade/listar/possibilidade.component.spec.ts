import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilidadeComponent } from './possibilidade.component';

describe('PossibilidadeComponent', () => {
  let component: PossibilidadeComponent;
  let fixture: ComponentFixture<PossibilidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibilidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
