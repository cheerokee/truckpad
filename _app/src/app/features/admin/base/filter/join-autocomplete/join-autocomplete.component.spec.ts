import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAutocompleteComponent } from './join-autocomplete.component';

describe('JoinAutocompleteComponent', () => {
  let component: JoinAutocompleteComponent;
  let fixture: ComponentFixture<JoinAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
